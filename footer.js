// Live clock
function updateClock() {
    const clockEl = document.getElementById("live-time");
    if (!clockEl) return;
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// CTA section reveal on scroll
const ctaSection = document.querySelector('.section_cta');
if (ctaSection) {
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                ctaObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    ctaObserver.observe(ctaSection);
}

// Scroll growing namma logo (smooth lerp)
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
