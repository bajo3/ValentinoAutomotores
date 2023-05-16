// Mostrar el loader al cargar la página
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
});

let prevScrollPos = window.pageYOffset;
const nav = document.querySelector("nav");
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
  prevScrollPos = currentScrollPos;
}, { passive: true });

const navSlide = () => {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    burger.classList.toggle('toggle');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};

navSlide();


