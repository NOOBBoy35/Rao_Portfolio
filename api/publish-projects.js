/*
 * Publishes the project dataset to data/projects.json in the GitHub repo.
 *
 * The admin panel saves to localStorage, which is per-browser. This endpoint is
 * what makes an edit visible to everyone: it commits the new dataset, which
 * triggers a Vercel redeploy of the static site.
 *
 * Requires three environment variables set in the Vercel project:
 *   ADMIN_PASSCODE  - the passcode the admin types (never shipped to the client)
 *   GITHUB_TOKEN    - fine-grained PAT with Contents: Read and write on the repo
 *   GITHUB_REPO     - "owner/repo", e.g. NOOBBoy35/Rao_Portfolio
 */

const crypto = require('crypto');

const TARGET_PATH = 'data/projects.json';
const MAX_BYTES = 512 * 1024;   // a project list far larger than this is a mistake
const MAX_PROJECTS = 100;

/* Compare without leaking length or position through timing. */
function safeEqual(a, b) {
  const ab = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

const isStr = v => typeof v === 'string';

/* The dataset is attacker-controlled input, so validate its shape before it is
   committed and served back to every visitor. */
function validate(projects) {
  if (!Array.isArray(projects)) return 'payload must be an array';
  if (projects.length === 0) return 'refusing to publish an empty project list';
  if (projects.length > MAX_PROJECTS) return `too many projects (max ${MAX_PROJECTS})`;

  const ids = new Set();
  for (const [i, p] of projects.entries()) {
    const at = `project ${i + 1}`;
    if (!p || typeof p !== 'object' || Array.isArray(p)) return `${at}: not an object`;
    if (!isStr(p.id) || !/^[A-Za-z0-9_-]{1,64}$/.test(p.id)) return `${at}: invalid id`;
    if (ids.has(p.id)) return `${at}: duplicate id "${p.id}"`;
    ids.add(p.id);
    if (!isStr(p.title) || !p.title.trim()) return `${at}: title is required`;

    for (const key of ['title', 'category', 'badge', 'timeline', 'role', 'overview', 'linkedinUrl']) {
      if (key in p && !isStr(p[key])) return `${at}: ${key} must be text`;
    }
    if (isStr(p.linkedinUrl) && p.linkedinUrl.trim() &&
        !/^https:\/\//i.test(p.linkedinUrl.trim())) {
      return `${at}: linkedinUrl must start with https://`;
    }
    for (const key of ['metrics', 'specifications', 'sections', 'tags']) {
      if (key in p && !Array.isArray(p[key])) return `${at}: ${key} must be a list`;
    }
  }
  return null;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { ADMIN_PASSCODE, GITHUB_TOKEN, GITHUB_REPO } = process.env;
  if (!ADMIN_PASSCODE || !GITHUB_TOKEN || !GITHUB_REPO) {
    // Names only - never echo the values.
    return res.status(500).json({
      ok: false,
      error: 'Server is not configured. Set ADMIN_PASSCODE, GITHUB_TOKEN and GITHUB_REPO in Vercel.'
    });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { return res.status(400).json({ ok: false, error: 'Malformed JSON' }); }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ ok: false, error: 'Missing request body' });
  }

  if (!safeEqual(body.passcode || '', ADMIN_PASSCODE)) {
    return res.status(401).json({ ok: false, error: 'Incorrect passcode' });
  }

  const problem = validate(body.projects);
  if (problem) return res.status(400).json({ ok: false, error: problem });

  const contents = JSON.stringify(body.projects, null, 2) + '\n';
  if (Buffer.byteLength(contents, 'utf8') > MAX_BYTES) {
    return res.status(413).json({ ok: false, error: 'Project data is too large to publish' });
  }

  const api = `https://api.github.com/repos/${GITHUB_REPO}/contents/${TARGET_PATH}`;
  const ghHeaders = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'rao-portfolio-admin'
  };

  try {
    // The current blob sha is required so GitHub can reject a stale overwrite.
    let sha;
    const head = await fetch(`${api}?ref=main`, { headers: ghHeaders });
    if (head.ok) {
      sha = (await head.json()).sha;
    } else if (head.status !== 404) {
      return res.status(502).json({ ok: false, error: `Could not read current file (${head.status})` });
    }

    const put = await fetch(api, {
      method: 'PUT',
      headers: { ...ghHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: `Update projects via admin panel (${body.projects.length} projects)`,
        content: Buffer.from(contents, 'utf8').toString('base64'),
        branch: 'main',
        ...(sha ? { sha } : {})
      })
    });

    if (!put.ok) {
      const detail = put.status === 409
        ? 'The file changed since you loaded it. Reload the admin panel and publish again.'
        : `GitHub rejected the commit (${put.status})`;
      return res.status(502).json({ ok: false, error: detail });
    }

    const result = await put.json();
    return res.status(200).json({
      ok: true,
      commit: result.commit && result.commit.sha ? result.commit.sha.slice(0, 7) : null,
      count: body.projects.length
    });
  } catch (err) {
    // Log the class of failure, never the token or the request body.
    console.error('publish-projects failed:', err && err.name);
    return res.status(502).json({ ok: false, error: 'Could not reach GitHub. Try again.' });
  }
};
