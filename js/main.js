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

document.addEventListener('DOMContentLoaded', () => {
    initDynamicProjects();
    initIntroVideoLoader();
    initMobileMenu();
    initCookieBanner();
    initCounterAnimations();
    initHeroVideoPingPong();
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

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('rao_cookie_consent', 'accepted');
            banner.style.opacity = '0';
            setTimeout(() => banner.style.display = 'none', 300);
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            localStorage.setItem('rao_cookie_consent', 'rejected');
            banner.style.opacity = '0';
            setTimeout(() => banner.style.display = 'none', 300);
        });
    }
}

/* Animated Counters for Hero Metrics */
function initCounterAnimations() {
    animateVal('cntProjects', 0, 5, 1200);
    animateVal('cntSkills', 0, 14, 1500);
    animateVal('cntExperience', 0, 2, 1000);
}

function animateVal(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;

    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        obj.innerHTML = current < 10 ? '0' + current : current;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/* Modal Open / Close Functions */
function openProjectModal(key) {
    const data = projectDetailsDB[key];
    if (!data) return;

    const modal = document.getElementById('projectModal');
    const modalTag = document.getElementById('modalTag');
    const modalBody = document.getElementById('modalBody');

    modalTag.innerText = `PROJECT // ${data.category}`;

    let specsHtml = data.specifications.map(s => `
        <div style="background: #0f1624; padding: 0.8rem; border-radius: 4px; border: 1px solid #1e2c45;">
            <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--accent-cyan); display: block;">${s.key}</span>
            <span style="font-family: var(--font-body); font-size: 0.85rem; color: #f1f5f9; font-weight: 500;">${s.val}</span>
        </div>
    `).join('');

    let sectionsHtml = data.sections.map(sec => `
        <li style="margin-bottom: 0.8rem; color: #94a3b8; font-size: 0.92rem; line-height: 1.6;">${sec}</li>
    `).join('');

    modalBody.innerHTML = `
        <h2 style="font-family: var(--font-heading); font-size: 2.1rem; color: #f1f5f9; margin-bottom: 0.4rem; font-weight: 700; text-transform: uppercase;">${data.title}</h2>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan); margin-bottom: 1.2rem;">${data.role} • ${data.timeline}</div>
        
        <p style="color: #94a3b8; font-size: 1rem; line-height: 1.7; margin-bottom: 1.8rem;">${data.overview}</p>
        
        <h4 style="font-family: var(--font-mono); font-size: 0.8rem; color: #f1f5f9; letter-spacing: 0.1em; margin-bottom: 0.8rem;">TECHNICAL SPECIFICATIONS</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem; margin-bottom: 1.8rem;">
            ${specsHtml}
        </div>

        <h4 style="font-family: var(--font-mono); font-size: 0.8rem; color: #f1f5f9; letter-spacing: 0.1em; margin-bottom: 0.8rem;">ENGINEERING HIGHLIGHTS</h4>
        <ul style="list-style-type: square; padding-left: 1.2rem; margin-bottom: 1.8rem;">
            ${sectionsHtml}
        </ul>

        <div style="margin-top: 1.5rem; padding-top: 1.2rem; border-top: 1px solid #1e2c45; display: flex; justify-content: flex-end;">
            <a href="${data.linkedinUrl}" target="_blank" rel="noopener" class="btn-linkedin-link" style="padding: 0.8rem 1.4rem; font-size: 0.82rem;">
                <span>VIEW THIS POST ON LINKEDIN</span>
                <i class="ri-linkedin-box-fill" style="font-size: 1rem;"></i>
            </a>
        </div>
    `;

    modal.classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
    }
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
            const res = await fetch('data/projects.json');
            projects = await res.json();
        } catch (err) {
            console.warn("Using inline fallback projects", err);
        }
    }

    if (!projects || projects.length === 0) return;

    // Register all project objects into projectDetailsDB for modal rendering
    projects.forEach(p => {
        projectDetailsDB[p.id] = p;
    });

    // Render cards into #projectsGrid
    grid.innerHTML = projects.map(p => {
        const metricsHtml = (p.metrics || []).map(m => `
            <div class="metric-item">
                <span class="metric-val" style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--text-primary); display: block;">${m.val}</span>
                <span class="metric-label" style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase;">${m.label}</span>
            </div>
        `).join('');

        const tagsHtml = (p.tags || []).map(t => `<span class="prj-tag" style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-cyan); background: rgba(0,240,255,0.08); border: 1px solid rgba(0,240,255,0.2); padding: 0.2rem 0.5rem; border-radius: 3px;">${t}</span>`).join('');

        return `
            <div class="project-card" data-project="${p.id}" onclick="openProjectModal('${p.id}')">
                <div class="prj-top-diagram">
                    <svg class="mini-diagram-svg" viewBox="0 0 300 40">
                        <path d="M10,20 L80,20 L95,5 L110,35 L125,10 L140,30 L155,20 L290,20" stroke="#00f0ff" stroke-width="1.5" fill="none"/>
                        <circle cx="95" cy="5" r="3" fill="#00f0ff" />
                        <circle cx="125" cy="10" r="3" fill="#00f0ff" />
                    </svg>
                </div>
                <div class="prj-content">
                    <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--accent-cyan); letter-spacing: 0.1em; margin-bottom: 0.5rem; text-transform: uppercase; font-weight: 600;">${p.badge || p.category}</div>
                    <h3 class="prj-title" style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.6rem;">${p.title}</h3>
                    <p class="prj-desc" style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${p.overview}</p>
                    
                    ${metricsHtml ? `<div class="prj-metrics" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin: 1rem 0; padding: 0.75rem; background: rgba(0,0,0,0.3); border-radius: 4px; border: 1px solid rgba(0,240,255,0.15); text-align: center;">${metricsHtml}</div>` : ''}

                    <div class="prj-tags" style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.2rem;">
                        ${tagsHtml}
                    </div>

                    <div class="prj-card-actions" style="margin-top: auto;">
                        <button class="btn-prj-details" onclick="event.stopPropagation(); openProjectModal('${p.id}')">
                            <span>VIEW DETAILS & SPECS</span>
                            <i class="ri-arrow-right-up-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}
