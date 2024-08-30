document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    function changeNavActive() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeNavActive();
    window.addEventListener('scroll', changeNavActive);
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    document.querySelectorAll('.navbar a').forEach((link) => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});





