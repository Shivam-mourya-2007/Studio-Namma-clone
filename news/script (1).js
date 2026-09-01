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


});
