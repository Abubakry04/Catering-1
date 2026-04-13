/* ============================================
   GLOBAL JAVASCRIPT — All Pages
   ============================================ */

// ---------- PAGE LOADER ----------
(function () {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = `
    <div class="loader-logo"><span>✦</span> LuxeCater</div>
    <div class="loader-bar"><div class="loader-fill"></div></div>
  `;
  document.body.prepend(loader);

  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 800);
  });
})();

// ---------- NAVBAR SCROLL ----------
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ---------- HAMBURGER ----------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ---------- REVEAL ON SCROLL ----------
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length) {
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, i * 80);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObs.observe(el));
}

// ---------- TOAST NOTIFICATION ----------
window.showToast = function (message, icon = '✦') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 3500);
};

// ---------- SMOOTH ANCHOR ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---------- WHATSAPP FLOAT TOOLTIP ----------
const waFloat = document.querySelector('.whatsapp-float');
if (waFloat) {
  // Already visible; just add tooltip on hover via CSS
  waFloat.setAttribute('title', 'Chat with us on WhatsApp');
}

// ---------- ACTIVE NAV LINK ----------
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();
