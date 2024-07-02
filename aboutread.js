ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.about-container h2', {origin: 'top'});
ScrollReveal().reveal('.about-img', {origin: 'bottom'});
ScrollReveal().reveal('.para1, .para3, .para5', {origin: 'left'});
ScrollReveal().reveal('.para2, .para4', {origin: 'right'});