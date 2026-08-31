document.addEventListener('DOMContentLoaded', () => {
   
    const cursor = document.querySelector('.cursor');
    const hoverLinks = document.querySelectorAll('.hover-link, .news-card, a, button');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    hoverLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });

   
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            themeToggle.textContent = 'Dark mode';
        } else {
            body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = 'Light mode';
        }
    });

    const nammaLogo = document.querySelector('.footer-logo');
    const footer = document.querySelector('.footer');
    if (nammaLogo && footer) {
        let currentScaleY = 0.3;
        let targetScaleY = 0.3;

        window.addEventListener('scroll', () => {
            const rect = footer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
          
            if (rect.top < viewportHeight) {
                // Progress is how much of the footer is visible
                let progress = (viewportHeight - rect.top) / rect.height;
                progress = Math.min(Math.max(progress, 0), 1);
                
                // Set target scale from 0.3 up to 1.8
                targetScaleY = 0.3 + (progress * 1.5);
            } else {
                targetScaleY = 0.3;
            }
        });
        function animateLogo() {
      
            currentScaleY += (targetScaleY - currentScaleY) * 0.1;
            
            
            nammaLogo.style.transform = `scaleY(${currentScaleY})`;
            
            requestAnimationFrame(animateLogo);
        }
        
       
        window.dispatchEvent(new Event('scroll'));
        animateLogo();
    }
});
