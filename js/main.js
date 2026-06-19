// Header scroll effect
const header = document.getElementById('site-header');

function updateHeader() {
  if (window.scrollY > 24) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// Mobile drawer
const drawer = document.getElementById('mobile-drawer');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const overlay = document.getElementById('drawer-overlay');

function openDrawer() {
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

menuOpen.addEventListener('click', openDrawer);
menuClose.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);

drawer.querySelectorAll('.drawer-nav-item, .drawer-tel').forEach(function(el) {
  el.addEventListener('click', closeDrawer);
});
