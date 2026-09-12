# Publishing projects to the live site

The admin panel at `/admin.html` saves edits to the browser's `localStorage`.
That copy is **private to one browser on one device** — it is not what visitors
see. The live site reads `data/projects.json` from the repo.

The **PUBLISH TO LIVE SITE** button closes that gap. It sends the project list
to `/api/publish-projects`, which commits `data/projects.json` to GitHub. Vercel
redeploys automatically, and every visitor sees the change in about a minute.

This needs three environment variables set once in Vercel. Until then the button
returns "Publishing is not set up yet".

---

## One-time setup

### 1. Create a GitHub token

1. Go to <https://github.com/settings/personal-access-tokens/new> (Fine-grained tokens).
2. **Token name:** `rao-portfolio-admin`
3. **Expiration:** 1 year (set a calendar reminder to rotate it).
4. **Repository access:** *Only select repositories* → `NOOBBoy35/Rao_Portfolio`
5. **Permissions** → *Repository permissions* → **Contents: Read and write**.
   Nothing else is needed. Leave every other permission on *No access*.
6. Generate the token and copy it. GitHub shows it once.

A fine-grained token scoped to this one repo with only Contents access can edit
files in this repository and nothing else. If it ever leaks, revoke it on that
same settings page and issue a new one.

### 2. Add the variables in Vercel

Vercel dashboard → the `rao-portfolio` project → **Settings** → **Environment
Variables**. Add three, each for *Production*, *Preview* and *Development*:

| Name             | Value                                              |
| ---------------- | -------------------------------------------------- |
| `GITHUB_TOKEN`   | the token from step 1                               |
| `GITHUB_REPO`    | `NOOBBoy35/Rao_Portfolio`                           |
| `ADMIN_PASSCODE` | a strong passcode of your choosing                  |

`ADMIN_PASSCODE` is what the server checks before it will commit anything. Make
it long and not guessable. It is never sent to the browser.

### 3. Redeploy

Vercel → **Deployments** → the latest one → **⋯** → **Redeploy**. Environment
variables are only picked up on a new deployment.

### 4. Keep the login gate in step

The passcode typed into `/admin.html` is forwarded to the server, so the login
passcode and `ADMIN_PASSCODE` must match. The login check currently lives in
`admin.html` (search for `rao2026`) — change it there to whatever you set in
Vercel.

---

## Day-to-day use

1. Open `/admin.html`, enter the passcode.
2. **+ NEW**, fill in the fields, **Save Project**.
3. Click **PUBLISH TO LIVE SITE** and confirm.
4. Wait about a minute for Vercel to rebuild, then hard-refresh the live site.

Saving alone only updates that browser. Publishing is what makes it public.

**RESET TO DEFAULTS** clears the local copy and reloads whatever is currently in
`data/projects.json`. Use it to discard local edits, or after publishing from a
different machine.

**EXPORT PROJECTS.JSON** still works as a manual fallback: it downloads the file
so you can replace `data/projects.json` in the repo by hand.

---

## What the server refuses to publish

`api/publish-projects.js` validates before committing, so a mistake in the panel
cannot break the live site:

- wrong or missing passcode → `401`
- an empty project list (guards against wiping the section)
- more than 100 projects, or a payload over 512 KB
- a project with no title, a malformed `id`, or a duplicate `id`
- a `linkedinUrl` that is not `https://`
- `metrics` / `tags` / `specifications` / `sections` that are not lists

It also sends the file's current SHA with the commit, so if the file changed
elsewhere the commit is rejected rather than silently overwriting. Reload the
panel and publish again.

---

## Security notes

- `/admin.html` is publicly reachable. The login gate only hides the editor UI —
  anyone can bypass it in devtools and edit their **own** browser's copy. They
  cannot change the live site without `ADMIN_PASSCODE`, which lives only on the
  server.
- The GitHub token is never sent to the browser. It exists only in Vercel's
  environment and is used server-side.
- To take the panel off the public site entirely, delete `admin.html` from the
  deployment and run it locally instead.

## Rotating the token

1. Revoke the old token at <https://github.com/settings/personal-access-tokens>.
2. Create a replacement with the same scope.
3. Update `GITHUB_TOKEN` in Vercel and redeploy.
