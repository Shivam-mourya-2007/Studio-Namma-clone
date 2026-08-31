/* =========================================
   PROJECT MEDIA
========================================= */

const projectMedia = {

    malibou: {
        type: "video",
        src: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c349e844f77d523b18b8d9_MALIBOU-video-cover-work-transcode.mp4",
        link: "https://www.studionamma.com/work/malibou"
    },

    zefir: {
        type: "video",
        src: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34afef65d7aef8cdf1b51_zefir-video-cover-work-transcode.mp4",
        link: "https://www.studionamma.com/work/zefir"
    },

    osol: {
        type: "video",
        src: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34c799a0fdd8c0ab752cf_OSOL-COVER-work-transcode.mp4",
        link: "https://www.studionamma.com/work/osol"
    },

    supercomics: {
        type: "video",
        src: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34d6268b8fea92f3507a7_supercomics-cover-work-transcode.mp4",
        link: "https://www.studionamma.com/work/supercomics"
    },

    silvr: {
        type: "video",
        src: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34dcde68d97df2b61f466_SILVR-Reel-03-video-2-version-ciel-work-transcode.mp4",
        link: "https://www.studionamma.com/work/silvr"
    },

    matera: {
        type: "video",
        src: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34e6731bcfb58b939fdae_matera-cover-work-transcode.mp4",
        link: "https://www.studionamma.com/work/matera"
    },

    orus: {
        type: "video",
        src: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34ef2f8b849c927427c6e_Orus-Energy-cover-work-transcode.mp4",
        link: "https://www.studionamma.com/work/orus-energy"
    },

    heysimon: {
        type: "video",
        src: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34c1b6d0149efa3e3ee74_hey-simon-cover-work-transcode.mp4",
        link: "https://www.studionamma.com/work/heysimon"
    },

    intramuros: {
        type: "video",
        src: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34fa408140526badcb49a_intra-cover-work-transcode.mp4",
        link: "https://www.studionamma.com/work/intramuros"
    },

    chance: {
        type: "video",
        src: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b985%2F68d14f4d581e91da74de2f9f_chance-cover-transcode.mp4",
        link: "https://www.studionamma.com/work/chance"
    }

};

/* =========================================
   ELEMENTS
========================================= */

const projects = document.querySelectorAll(".project");
const openProject = document.querySelector(".open-project");
const video = document.getElementById("project-video");
const projectsSection = document.querySelector(".projects");

// Initialize first project video
if (video && projectMedia["malibou"]) {
    video.src = projectMedia["malibou"].src;
    video.load();
    video.play().catch(() => {});
}

/* =========================================
   PROJECT HOVER
========================================= */

projects.forEach(project => {

    project.addEventListener("mouseenter", () => {

        const name = project.dataset.project;
        const data = projectMedia[name];

        if (video.src !== data.src) {
            video.style.opacity = "0.7";
            video.style.transform = "scale(0.97)";
            setTimeout(() => {
                video.src = data.src;
                video.load();
                video.play().catch(() => {});
                video.style.opacity = "1";
                video.style.transform = "scale(1)";
            }, 50);
        }

        /* =========================
           POSITION OPEN PROJECT
        ========================== */

        const projectRect = project.getBoundingClientRect();
        const sectionRect = projectsSection.getBoundingClientRect();

        openProject.style.display = "block";
        openProject.style.left = `${projectRect.left - sectionRect.left + projectRect.width - 20}px`;
        openProject.style.top = `${projectRect.top - sectionRect.top + 20}px`;

        /* =========================
           PROJECT URL
        ========================== */

        openProject.href = data.link;

    });

});

/* =========================================
   HIDE BUTTON WHEN LEAVING PROJECT AREA
========================================= */

projects.forEach(project => {

    project.addEventListener("mouseleave", () => {

        setTimeout(() => {
            if (!openProject.matches(":hover")) {
                openProject.style.display = "none";
            }
        }, 100);

    });

});

openProject.addEventListener("mouseleave", () => {
    openProject.style.display = "none";
});

/* =========================================
   VIDEO PLAY/PAUSE OBSERVER
========================================= */

const allVideos = document.querySelectorAll("video");

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play().catch(() => {});
        } else if (entry.target.id !== "project-video") {
            entry.target.pause();
        }
    });
}, { threshold: 0.1 });

allVideos.forEach(v => videoObserver.observe(v));


/* =========================================
   SCROLL REVEAL OBSERVER
========================================= */

const revealElements = document.querySelectorAll(".slideImage > div, .archive-row, .section_cta");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
        }
    });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

revealElements.forEach(el => revealObserver.observe(el));

/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.body.setAttribute("data-theme", newTheme);
        themeToggle.textContent = newTheme === "dark" ? "LIGHT MODE" : "DARK MODE";
    });
}

/* =========================================
   CUSTOM BLUE CURSOR (LERP & INTERACTION)
========================================= */

const cursor = document.querySelector(".cursor");

if (cursor) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function renderCursor() {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        
        cursor.style.left = `${cursorX.toFixed(2)}px`;
        cursor.style.top = `${cursorY.toFixed(2)}px`;
        
        requestAnimationFrame(renderCursor);
    }
    
    requestAnimationFrame(renderCursor);

    // Interactive expansion on hoverable elements
    const hoverables = document.querySelectorAll("a, button, .project, .archive-card, .cta_thumb_video, .slide-card");
    hoverables.forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("cursor--hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("cursor--hover"));
    });
}

/* =========================================
   LIVE CLOCK
========================================= */

function updateClock() {
    const clockEl = document.getElementById("live-time");
    if (clockEl) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        clockEl.textContent = timeStr;
    }
}

setInterval(updateClock, 1000);
updateClock();

/* =========================================
   SCROLL GROWING NAMMA LOGO (SMOOTH LERP)
========================================= */

const nammaLogo = document.getElementById("namma-logo");
const footerSection = document.querySelector(".footer-section");

if (nammaLogo && footerSection) {
    let currentScaleY = 0.18;
    let targetScaleY = 0.18;
    let isTicking = false;

    function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }

    function calculateTarget() {
        const rect = footerSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Progress starts when the top of the footer enters viewport and finishes near the bottom
        const startPoint = windowHeight;
        const totalDistance = rect.height + windowHeight * 0.2;
        const currentDistance = windowHeight - rect.top;
        
        const rawProgress = Math.min(Math.max(currentDistance / totalDistance, 0), 1);
        const eased = easeOutCubic(rawProgress);
        
        // Target vertical scale grows from 0.18 to 1.0
        targetScaleY = 0.18 + (eased * 0.82);
        
        if (!isTicking) {
            requestAnimationFrame(updateLogoTransform);
            isTicking = true;
        }
    }

    function updateLogoTransform() {
        currentScaleY += (targetScaleY - currentScaleY) * 0.12;
        
        nammaLogo.style.transform = `scaleY(${currentScaleY.toFixed(4)})`;
        
        if (Math.abs(targetScaleY - currentScaleY) > 0.001) {
            requestAnimationFrame(updateLogoTransform);
        } else {
            currentScaleY = targetScaleY;
            nammaLogo.style.transform = `scaleY(${currentScaleY.toFixed(4)})`;
            isTicking = false;
        }
    }

    window.addEventListener("scroll", calculateTarget, { passive: true });
    window.addEventListener("resize", calculateTarget, { passive: true });
    calculateTarget();
}




