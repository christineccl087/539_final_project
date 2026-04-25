/* nav.js — Hamburger menu toggle */

(function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  navMenu.querySelectorAll('.nav-link, .dropdown-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('focusin', function (e) {
    const header = document.querySelector('.site-header');
    if (header && !header.contains(e.target)) {
      navMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });
})();
