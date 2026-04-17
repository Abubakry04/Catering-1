/* ============================================
   CONTACT PAGE JAVASCRIPT
   ============================================ */

// ---------- CONTACT FORM ----------
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>Sending…</span>';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      contactForm.reset();
      showToast('Message sent! We\'ll reply within 24 hours.', '✅');

      // Show inline success
      const success = document.getElementById('formSuccess');
      if (success) {
        success.style.display = 'flex';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => { success.style.display = 'none'; }, 6000);
      }
    }, 1500);
  });
}

// ---------- FAQ ACCORDION ----------
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  question?.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // Open clicked if it was closed
    if (!isOpen) item.classList.add('open');
  });
});

// ---------- COPY CONTACT ----------
document.querySelectorAll('[data-copy]').forEach(el => {
  el.addEventListener('click', () => {
    const text = el.dataset.copy;
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied: ${text}`, '📋');
    }).catch(() => {
      showToast('Copy failed. Please copy manually.', '⚠️');
    });
  });
});
