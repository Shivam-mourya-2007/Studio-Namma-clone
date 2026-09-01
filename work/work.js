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
   SCROLL REVEAL OBSERVER (SLIDE IMAGES)
========================================= */

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

const images = document.querySelectorAll(".slideImage > div");

images.forEach((img) => {
    observer2.observe(img);
});

const otherRevealElements = document.querySelectorAll(".archive-row");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
        }
    });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

otherRevealElements.forEach(el => revealObserver.observe(el));

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

    document.addEventListener("mousedown", () => cursor.classList.add("cursor--click"));
    document.addEventListener("mouseup", () => cursor.classList.remove("cursor--click"));

    // Interactive expansion on hoverable elements
    const hoverables = document.querySelectorAll("a, button, .project, .archive-card, .cta_thumb_video, .slide-card, .open-project");
    hoverables.forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("cursor--hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("cursor--hover"));
    });
}





/* =========================================
   ARCHIVE ROWS HORIZONTAL SCROLL PARALLAX
========================================= */

const archiveRows = document.querySelectorAll(".archive-row");

if (archiveRows.length > 0) {
    let currentXOffsets = new Array(archiveRows.length).fill(0);
    let targetXOffsets = new Array(archiveRows.length).fill(0);
    let isArchiveTicking = false;

    function updateArchiveParallaxTargets() {
        const windowHeight = window.innerHeight;

        archiveRows.forEach((row, index) => {
            const rect = row.getBoundingClientRect();
            if (rect.top < windowHeight + 100 && rect.bottom > -100) {
                // Normalized progress: -1 when entering viewport, 0 at center, +1 exiting
                const rowCenter = rect.top + rect.height / 2;
                const progress = (windowHeight / 2 - rowCenter) / (windowHeight / 2);

                // Alternating directions: odd rows drift right, even (reverse) rows drift left
                const isReverse = row.classList.contains("reverse");
                const direction = isReverse ? -1 : 1;

                // Smooth horizontal drift amount
                targetXOffsets[index] = progress * 90 * direction;
            }
        });

        if (!isArchiveTicking) {
            requestAnimationFrame(renderArchiveParallax);
            isArchiveTicking = true;
        }
    }

    function renderArchiveParallax() {
        let hasActiveDiff = false;

        archiveRows.forEach((row, index) => {
            currentXOffsets[index] += (targetXOffsets[index] - currentXOffsets[index]) * 0.12;
            row.style.transform = `translate3d(${currentXOffsets[index].toFixed(2)}px, 0, 0)`;

            if (Math.abs(targetXOffsets[index] - currentXOffsets[index]) > 0.05) {
                hasActiveDiff = true;
            }
        });

        if (hasActiveDiff) {
            requestAnimationFrame(renderArchiveParallax);
        } else {
            isArchiveTicking = false;
        }
    }

    window.addEventListener("scroll", updateArchiveParallaxTargets, { passive: true });
    window.addEventListener("resize", updateArchiveParallaxTargets, { passive: true });
    updateArchiveParallaxTargets();
}





