// Hamburger menu + smooth scroll + AOS attribute assignment (safe)
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationBar = document.querySelector('header ul');

if (hamburgerMenu && navigationBar) {
    hamburgerMenu.addEventListener('click', function () {
        navigationBar.classList.toggle('ul-active');
    });

    // close menu when clicking a nav item
    document.querySelectorAll('header ul li').forEach(function (menu) {
        menu.addEventListener('click', function () {
            navigationBar.classList.remove('ul-active');
        });
    });
}

// smooth scroll for all internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ANIMATION SECTION SKILL (safe version)
const fieldSkill = document.querySelectorAll('.field-image-skill');
for (let i = 0; i < fieldSkill.length; i++) {
    if (i % 2 === 0) {
        fieldSkill[i].setAttribute('data-aos', 'flip-right');
    } else {
        fieldSkill[i].setAttribute('data-aos', 'flip-left');
    }
    if (window.innerWidth > 768) {
        if (i == 0) {
            fieldSkill[i].setAttribute('data-aos-duration', '300');
        } else {
            fieldSkill[i].setAttribute('data-aos-delay', `${i * 300}`);
        }
    }
}
