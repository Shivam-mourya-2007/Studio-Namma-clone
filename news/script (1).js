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
});
