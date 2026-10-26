// Mobile navigation toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
});

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

const typedTarget = document.querySelector('.multiple-text');
if (window.Typed && typedTarget) {
  new Typed('.multiple-text', {
    strings: ['BS Computer Science Student', 'Creative Thinker', 'Future Programmer'],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1200,
    loop: true
  });
}

if (window.ScrollReveal) {
  ScrollReveal({ distance: '50px', duration: 1500, delay: 150, reset: false });
  ScrollReveal().reveal('.home-content, .heading, .image-place', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .pc-content, .card-group, .skills-container, .experience-content, .cr-content, .contact form, .image-placeholder', { origin: 'bottom' });
  ScrollReveal().reveal('.about-content', { origin: 'right' });
}

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#form-note').textContent =
    'wait kalang jan.';
});
