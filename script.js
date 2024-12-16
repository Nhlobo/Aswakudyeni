// Toggle mobile menu
const menuButton = document.querySelector('.menu-button');
const menuNav = document.querySelector('header nav');

menuButton.addEventListener('click', () => {
    menuNav.classList.toggle('open');
});

// Smooth scroll for menu links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
