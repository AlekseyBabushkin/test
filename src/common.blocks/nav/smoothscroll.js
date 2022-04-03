const smoothScroll = document.querySelectorAll('.nav__link');

smoothScroll.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); const ID = event.target.getAttribute('href').substr(1);
    document.getElementById(ID).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
