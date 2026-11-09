// This script checks which section is currently on screen and highlights the taskbar link
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Checks if the user has scrolled near the top boundary of the section
            if (window.scrollY >= sectionTop - 100) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.style.color = '#ffffff'; // Highlights active link
            } else {
                link.style.color = '#aaaaaa'; // Dims inactive links
            }
        });
    });
});
