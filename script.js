document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Smooth Scroll and Close Navbar on Link Click
    document.querySelectorAll('header nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the navbar after clicking a link
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
});

// Scroll Section Active Line and Sticky Navbar
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);
});

// Scroll Animations using Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section);
});

/////////////// Scroll Reveal /////////////
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});

ScrollReveal().reveal('.home-content h1, .about-img ', {origin: 'left'});

ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

////////////////////// typed js ////////////////////
const typed=new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Python Developer', 'Data Analyst', 'Machine Learning Model Developer', 'Enterpreneur Enthusiast','Database Management Developer'],
    typeSpeed: 80,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});