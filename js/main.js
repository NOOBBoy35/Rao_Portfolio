/* ==========================================================================
   MAIN INTERACTIVITY, NAVIGATION, MODAL & VIDEO PING-PONG CONTROLLER
   ========================================================================== */

// Project Detail Database with Exact LinkedIn Post URLs
const projectDetailsDB = {
    cpr: {
        title: "Automated CPR Machine (Final Year Project)",
        category: "MEDICAL AUTOMATION & MECHATRONICS",
        timeline: "September 2025 – May 2026",
        role: "Lead Controls & Systems Engineer",
        linkedinUrl: "https://www.linkedin.com/posts/shaheer-tahir-rao-b22246266_electricalengineering-biomedicalengineering-activity-7467236652172677120-UZhm",
        overview: "Benchmarked to Stryker LUCAS 3, this system delivers continuous, high-precision chest compressions with dual-actuation force & height control, integrated real-time vitals monitoring, and telemetry logging.",
        specifications: [
            { key: "Compression Rate", val: "102 / 111 / 120 ±2 cpm" },
            { key: "Compression Depth", val: "45–53 ±2 mm" },
            { key: "Duty Cycle", val: "50 ±5%" },
            { key: "Primary Compression Motor", val: "High-Torque DC Geared Motor" },
            { key: "Positioning Motor", val: "NEMA Stepper Motor" },
            { key: "Vitals Sensors", val: "Heart Rate & Blood Pressure Telemetry" }
        ],
        sections: [
            "Dual-Actuation Mechanics: DC geared motor for precise torque/depth control + stepper motor for automatic chest height adjustment.",
            "Closed-Loop Control: PID loop ensuring stroke stability regardless of chest impedance variations.",
            "Real-Time Telemetry: Onboard sensor integration displaying live vitals on OLED panel and logging operational data.",
            "Safety & Interlocks: Emergency stop, current limiters, and over-depth mechanical stops."
        ]
    },
    lvdt: {
        title: "Linear Variable Differential Transformer (LVDT)",
        category: "SENSORS & ELECTROMAGNETICS",
        timeline: "September 2024 – January 2025",
        role: "Electromagnetic Designer",
        linkedinUrl: "https://www.linkedin.com/posts/shaheer-tahir-rao-b22246266_instrumentation-electricalengineering-lvdt-share-7355494609902301186-zd2j",
        overview: "Designed, wound, and calibrated a high-precision mini LVDT position transducer with 1 primary coil and 2 matched secondary coils connected in series-differential mode.",
        specifications: [
            { key: "Winding Material", val: "28-AWG Enameled Copper Wire" },
            { key: "Turns count", val: "~120 turns per coil" },
            { key: "Null Output Current", val: "±45.9 mA symmetric" },
            { key: "Core Material", val: "Moving Ferromagnetic Solenoid Core" },
            { key: "Configuration", val: "Series-Differential Connection" }
        ],
        sections: [
            "Coil Architecture: Wound matching secondary coils to ensure exact zero-phase shift at null position.",
            "Differential Calibration: Confirmed linear differential voltage/current response across ±20mm displacement.",
            "Simulation Verification: Modeled electromagnetic field distribution in COMSOL Multiphysics and LTspice."
        ]
    },
    welder: {
        title: "DIY Resistance Spot Welder",
        category: "POWER ELECTRONICS & HIGH CURRENT",
        timeline: "January 2024 – May 2024",
        role: "Power Electronics Designer",
        linkedinUrl: "https://www.linkedin.com/posts/shaheer-tahir-rao-b22246266_throwback-electricalengineering-spotwelder-activity-7354035149132443648-BOVC",
        overview: "Constructed a high-current resistance spot welder with precise digital pulse timing and foot-switch actuation using the NY-D01 controller.",
        specifications: [
            { key: "Controller Unit", val: "NY-D01 Digital Pulse Controller" },
            { key: "Weld Pulse Range", val: "01–50 cycles (20 ms / cycle)" },
            { key: "Current Intensity Range", val: "30–99% power tuning" },
            { key: "Thyristor Capacity", val: "40A SCR Phase Control" },
            { key: "Actuation", val: "Foot-switch trigger with safety interlock" }
        ],
        sections: [
            "Pulse Timing Control: Configured 20ms AC zero-crossing pulse cycles for repeatable nickel-strip welds.",
            "Enclosure & Safety Integration: Integrated high-current busbars, thermal heatsinks, and fused mains protection.",
            "Deliverables: Produced AutoCAD wiring schematics and enclosure layout drawings."
        ]
    },
    regen: {
        title: "Regenerative Braking Controller",
        category: "AUTOMOTIVE POWER ELECTRONICS",
        timeline: "1 Semester Academic Project",
        role: "Controls Engineer",
        linkedinUrl: "https://www.linkedin.com/in/shaheer-tahir-rao-b22246266/recent-activity/all/",
        overview: "Developed a closed-loop power electronics control strategy for kinetic energy recovery during vehicle deceleration, channeling power back to battery storage while stabilizing DC bus voltage.",
        specifications: [
            { key: "Control Software", val: "MATLAB / Simulink" },
            { key: "Programming", val: "C Language Embedded Control" },
            { key: "Communication Bus", val: "CAN Bus Protocol" },
            { key: "Topology", val: "Bi-directional DC-DC Converter" }
        ],
        sections: [
            "Bi-Directional Converter: Modeled buck-boost power stage for seamless transition between motoring and braking.",
            "CAN Bus Integration: Streamed real-time wheel speed, battery state of charge (SOC), and torque demand.",
            "PID Tuning: Optimized current loop response time to eliminate braking jerk and back-EMF spikes."
        ]
    },
    amplifier: {
        title: "2-Stage BJT Microphone Amplifier",
        category: "ANALOG ELECTRONICS",
        timeline: "January 2024 – May 2024",
        role: "Analog Circuit Designer",
        linkedinUrl: "https://www.linkedin.com/in/shaheer-tahir-rao-b22246266/recent-activity/all/",
        overview: "Designed and built a 2-stage BJT audio amplifier featuring RC coupling between amplification stages and a high-efficiency push-pull driver stage.",
        specifications: [
            { key: "Output Driver", val: "Class-AB Push-Pull BJT Pair" },
            { key: "Speaker Load", val: "4 W, 40 Ω Loudspeaker" },
            { key: "Peak Output Voltage", val: "≈ 12.65 Vrms" },
            { key: "Peak Output Current", val: "0.316 Arms at full power" },
            { key: "Stage Coupling", val: "Capacitive RC Coupling" }
        ],
        sections: [
            "Biasing & Stability: Calculated DC operating points (Q-points) for low total harmonic distortion (THD).",
            "Push-Pull Stage: Thermal stability diodes added to prevent crossover distortion and thermal runaway.",
            "Breadboard & PCB Testing: Verified frequency response across 20Hz - 20kHz audio spectrum."
        ]
    },
    plc: {
        title: "Industrial PLC & HMI Automation System",
        category: "SCADA & INDUSTRIAL CONTROLS",
        timeline: "2024 – 2026 Projects",
        role: "Automation Specialist",
        linkedinUrl: "https://www.linkedin.com/in/shaheer-tahir-rao-b22246266/recent-activity/all/",
        overview: "Developed complete PLC ladder logic programs and HMI visualization layouts using Siemens TIA Portal for industrial automated lines and motor protection panels.",
        specifications: [
            { key: "Software Environment", val: "Siemens TIA Portal" },
            { key: "Programming Standard", val: "IEC 61131-3 (Ladder / FBD)" },
            { key: "Interlock Logic", val: "Safety & Emergency Stop Sequences" },
            { key: "HMI Interface", val: "Touch Panel Graphics & Alarm Banners" }
        ],
        sections: [
            "Star-Delta Control: Designed automated timer transitions and current-limiting interlocks for high-power motors.",
            "HMI Screen Design: Built real-time trend charts, fault indicators, and manual control overrides.",
            "Hardware Testing: Validated input/output modules, relay cards, and sensor wiring."
        ]
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    // Wire the intro first so SKIP responds immediately, before any fetch.
    initIntroVideoLoader();
    initMobileMenu();
    initCookieBanner();
    initHeroVideoPingPong();
    initHeroEntrance();
    initCounterAnimations();
    initScrollProgress();
    initModalDismissal();

    // Observers run after the cards exist, so they can watch the real markup.
    await initDynamicProjects();
    initSkillMeters();
    initScrollReveal();
    initScrollSpy();
});

/* Initial Loading Screen Video Intro Dismissal & Static Viewport Lock */
function initIntroVideoLoader() {
    const introLoader = document.getElementById('introLoader');
    const introVideo = document.getElementById('introSplashVideo');
    const skipBtn = document.getElementById('skipIntroBtn');
    
    if (!introLoader || !introVideo) return;

    let isDismissed = false;

    // Lock page scroll position at top during splash screen
    window.scrollTo(0, 0);

    // Prevent wheel, touch, or keyboard scrolling while intro is active
    function preventScroll(e) {
        if (!isDismissed) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }

    introLoader.addEventListener('wheel', preventScroll, { passive: false });
    introLoader.addEventListener('touchmove', preventScroll, { passive: false });

    function dismissIntro() {
        if (isDismissed) return;
        isDismissed = true;
        
        // Remove scroll lock from body
        document.body.classList.remove('intro-active');
        window.scrollTo(0, 0);
        
        introLoader.classList.add('fade-out');
        document.dispatchEvent(new CustomEvent('portfolio:ready'));

        setTimeout(() => {
            introLoader.style.display = 'none';
        }, 850);
    }

    // Play video automatically on page load
    introVideo.play().catch(e => console.log('Intro video autoplay prevented:', e));

    // When the intro video finishes playing naturally, fade away smoothly to reveal main site
    introVideo.addEventListener('ended', dismissIntro);

    // Allow user to skip or click to dismiss immediately
    if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dismissIntro();
        });
    }

    // Clicking anywhere on the intro overlay also dismisses it
    introLoader.addEventListener('click', dismissIntro);

    // Safety fallback timeout to ensure site is always accessible
    setTimeout(() => {
        if (!isDismissed) {
            dismissIntro();
        }
    }, 12000);
}

/* Smooth Hardware-Accelerated Hero Circuit Video Controller */
function initHeroVideoPingPong() {
    const video = document.getElementById('heroCircuitVideo');
    if (!video) return;

    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    // Ensure fluid uninterrupted GPU playback
    const startVideo = () => {
        video.play().catch(e => {
            console.log('Video autoplay deferred:', e);
        });
    };

    startVideo();

    // Secondary listener in case browser defers playback until first interaction
    document.addEventListener('click', startVideo, { once: true });
    document.addEventListener('touchstart', startVideo, { once: true });
}

/* Mobile Menu Drawer Toggle */
function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (!btn || !drawer) return;

    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        drawer.classList.toggle('open');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('open');
            drawer.classList.remove('open');
        });
    });
}

/* Cookie / Analytics Toast Banner Dismissal */
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookieBtn');
    const rejectBtn = document.getElementById('rejectCookieBtn');

    if (!banner) return;

    if (localStorage.getItem('rao_cookie_consent')) {
        banner.style.display = 'none';
    }

    const dismiss = choice => {
        localStorage.setItem('rao_cookie_consent', choice);
        banner.classList.add('dismissed');
        setTimeout(() => { banner.style.display = 'none'; }, 320);
    };

    if (acceptBtn) acceptBtn.addEventListener('click', () => dismiss('accepted'));
    if (rejectBtn) rejectBtn.addEventListener('click', () => dismiss('rejected'));
}

/* Animated Counters for the Hero Telemetry Strip.
   Deferred until the intro overlay clears, otherwise the count finishes behind
   the splash video and the user never sees it. */
function initCounterAnimations() {
    const loader = document.getElementById('introLoader');
    const introStillUp = loader && loader.style.display !== 'none'
                         && !loader.classList.contains('fade-out');

    if (introStillUp) {
        document.addEventListener('portfolio:ready', runCounters, { once: true });
    } else {
        runCounters();
    }
}

/* Stagger the hero in as the intro overlay fades. The class is only ever added
   here, so the hero renders normally if scripting never runs. */
function initHeroEntrance() {
    const play = () => document.body.classList.add('hero-in');
    const loader = document.getElementById('introLoader');
    const introStillUp = loader && loader.style.display !== 'none'
                         && !loader.classList.contains('fade-out');

    if (introStillUp) {
        document.addEventListener('portfolio:ready', play, { once: true });
    } else {
        play();
    }
}

function runCounters() {
    document.querySelectorAll('[data-count-to]').forEach(el => {
        const end = parseInt(el.dataset.countTo, 10);
        const pad = parseInt(el.dataset.pad || '0', 10);
        if (Number.isNaN(end)) return;

        if (prefersReducedMotion()) {
            el.textContent = String(end).padStart(pad, '0');
            return;
        }
        animateVal(el, 0, end, 1400, pad);
    });
}

function animateVal(el, start, end, duration, pad) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const t = Math.min((timestamp - startTimestamp) / duration, 1);
        // Ease-out so the count decelerates into its final value.
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(eased * (end - start) + start);
        el.textContent = String(current).padStart(pad, '0');
        if (t < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* Skill meters fill from 0 to their data-level once scrolled into view. */
function initSkillMeters() {
    const bars = document.querySelectorAll('.level-bar i[data-level]');
    if (!bars.length) return;

    const fill = bar => { bar.style.width = bar.dataset.level + '%'; };

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
        bars.forEach(fill);
        return;
    }

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            fill(entry.target);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.25 });

    bars.forEach(bar => io.observe(bar));
}

/* Fade-and-rise sections in as they enter the viewport. */
function initScrollReveal() {
    const targets = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!targets.length) return;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    targets.forEach(el => io.observe(el));
}

/* Highlight the nav link for whichever section is currently in view. */
function initScrollSpy() {
    const links = Array.from(document.querySelectorAll('.nav-link'));
    const sections = links
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);
    if (!sections.length) return;

    const setActive = id => {
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
    };

    if (!('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(entries => {
        // Pick the entry nearest the top of the viewport among those visible.
        const visible = entries.filter(e => e.isIntersecting);
        if (!visible.length) return;
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActive(visible[0].target.id);
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(sec => io.observe(sec));
}

/* Thin progress rail across the top of the page. */
function initScrollProgress() {
    const rail = document.getElementById('scrollProgress');
    if (!rail) return;

    let ticking = false;
    const update = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
        rail.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
    }, { passive: true });

    update();
}

/* Modal Open / Close Functions */
function openProjectModal(key) {
    const data = projectDetailsDB[key];
    if (!data) return;

    const modal = document.getElementById('projectModal');
    const modalTag = document.getElementById('modalTag');
    const modalBody = document.getElementById('modalBody');

    modalTag.textContent = `PROJECT // ${data.category}`;

    const specsHtml = (data.specifications || []).map(sp => `
            <div class="modal-spec">
                <span class="modal-spec-key">${esc(sp.key)}</span>
                <span class="modal-spec-val">${esc(sp.val)}</span>
            </div>`).join('');

    const sectionsHtml = (data.sections || [])
        .map(sec => `<li>${esc(sec)}</li>`).join('');

    // Projects added through admin.html may have no LinkedIn post. An empty
    // href would just reload the page, so omit the button entirely.
    const link = (data.linkedinUrl || '').trim();
    const footerHtml = link ? `
        <div class="modal-footer">
            <a href="${esc(link)}" target="_blank" rel="noopener" class="btn-linkedin-link">
                <span>VIEW THIS POST ON LINKEDIN</span>
                <i class="ri-linkedin-box-fill" aria-hidden="true"></i>
            </a>
        </div>` : '';

    modalBody.innerHTML = `
        <h2 class="modal-title">${esc(data.title)}</h2>
        <div class="modal-sub">${esc(data.role)} &bull; ${esc(data.timeline)}</div>
        <p class="modal-overview">${esc(data.overview)}</p>

        <h4 class="modal-heading">TECHNICAL SPECIFICATIONS</h4>
        <div class="modal-specs-grid">${specsHtml}</div>

        <h4 class="modal-heading">ENGINEERING HIGHLIGHTS</h4>
        <ul class="modal-highlights">${sectionsHtml}</ul>
        ${footerHtml}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* Escape untrusted values before they reach innerHTML. Project records can come
   from localStorage (written by admin.html), so they are not treated as markup. */
function esc(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/* Distinct signal trace per card, so six projects do not share one waveform. */
const TRACE_PATHS = [
    'M10,20 L80,20 L95,5 L110,35 L125,10 L140,30 L155,20 L290,20',
    'M10,20 L100,20 L120,5 L140,20 L160,35 L180,20 L290,20',
    'M10,30 L60,30 L75,10 L105,10 L120,30 L290,30',
    'M10,25 L90,25 L105,5 L135,35 L150,25 L290,25',
    'M10,20 L110,20 L130,10 L150,30 L170,20 L290,20',
    'M10,20 L70,20 L70,8 L130,8 L130,32 L190,32 L190,20 L290,20'
];

/* Domain icon per project. Anything not listed falls back to the generic
   circuit glyph, so projects added through admin.html still render. */
const PROJECT_ICONS = {
    cpr:       'ri-heart-pulse-line',
    lvdt:      'ri-pulse-line',
    welder:    'ri-flashlight-line',
    regen:     'ri-charging-pile-line',
    amplifier: 'ri-volume-up-line',
    plc:       'ri-settings-5-line'
};

function traceSvg(index) {
    const d = TRACE_PATHS[index % TRACE_PATHS.length];
    return `<svg class="mini-diagram-svg" viewBox="0 0 300 40" aria-hidden="true">
                <path d="${d}" stroke="#00f0ff" stroke-width="1.5" fill="none"/>
            </svg>`;
}

/* Dynamic Projects Rendering from LocalStorage / JSON Dataset */
async function initDynamicProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    let projects = [];
    const localData = localStorage.getItem('rao_portfolio_projects');
    if (localData) {
        try { projects = JSON.parse(localData); } catch (e) {}
    }

    if (!projects || projects.length === 0) {
        try {
            const res = await fetch('data/projects.json', { cache: 'no-cache' });
            projects = await res.json();
        } catch (err) {
            console.warn('Could not load projects dataset', err);
        }
    }

    if (!projects || projects.length === 0) return;

    // Register all project objects into projectDetailsDB for modal rendering
    projects.forEach(p => {
        projectDetailsDB[p.id] = p;
    });

    grid.innerHTML = projects.map((p, i) => {
        const metricsHtml = (p.metrics || []).map(m => `
                        <div class="metric-item">
                            <span class="metric-val">${esc(m.val)}</span>
                            <span class="metric-label">${esc(m.label)}</span>
                        </div>`).join('');

        const tagsHtml = (p.tags || [])
            .map(t => `<span class="prj-tag">${esc(t)}</span>`).join('');

        const icon = PROJECT_ICONS[p.id] || 'ri-cpu-line';
        const ref  = String(i + 1).padStart(2, '0');

        return `
            <article class="project-card" data-project="${esc(p.id)}" tabindex="0" role="button"
                     aria-label="View details for ${esc(p.title)}">
                <span class="prj-hud tl"></span><span class="prj-hud tr"></span>
                <span class="prj-hud bl"></span><span class="prj-hud br"></span>

                <div class="prj-top-diagram">
                    <span class="prj-ref">REF // PRJ-${ref}</span>
                    ${traceSvg(i)}
                </div>

                <div class="prj-content">
                    <div class="prj-ident">
                        <div class="prj-icon-badge"><i class="${icon}" aria-hidden="true"></i></div>
                        <span class="prj-badge">
                            <span class="status-pulse"></span>${esc(p.badge || p.category)}
                        </span>
                    </div>

                    <h3 class="prj-title">${esc(p.title)}</h3>
                    <div class="prj-rule"></div>
                    <p class="prj-desc">${esc(p.overview)}</p>

                    ${metricsHtml ? `<div class="prj-metrics">${metricsHtml}</div>` : ''}
                    <div class="prj-tags">${tagsHtml}</div>

                    <div class="prj-card-actions">
                        <button class="btn-prj-details" type="button" tabindex="-1">
                            <span>ACCESS FULL DOSSIER</span>
                            <i class="ri-arrow-right-up-line" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </article>`;
    }).join('');

    // One delegated handler covers click and keyboard activation for every card.
    grid.addEventListener('click', e => {
        const card = e.target.closest('.project-card');
        if (card) openProjectModal(card.dataset.project);
    });

    grid.addEventListener('keydown', e => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const card = e.target.closest('.project-card');
        if (!card) return;
        e.preventDefault();
        openProjectModal(card.dataset.project);
    });
}

/* Close the project modal on Escape or backdrop click. */
function initModalDismissal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    modal.addEventListener('click', e => {
        if (e.target === modal) closeProjectModal();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeProjectModal();
    });
}
