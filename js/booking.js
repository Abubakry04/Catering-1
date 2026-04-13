/* ============================================
   BOOKING PAGE JAVASCRIPT
   ============================================ */

// ---------- STATE ----------
const state = {
  step: 1,
  totalSteps: 4,
  formData: {
    name: '', email: '', phone: '', eventType: '',
    date: '', time: '', location: '', guests: '',
    budget: 500000,
    menuPrefs: [],
    addons: [],
    notes: ''
  }
};

const PRICE_MAP = {
  perHead: {
    wedding: 12000, corporate: 9000, birthday: 8500,
    graduation: 7500, religious: 6500, other: 7000
  },
  addons: {
    decoration: 150000, staffing: 200000, equipment: 100000,
    photography: 250000, cleanup: 80000
  }
};

// ---------- STEP NAVIGATION ----------
function goToStep(step) {
  if (step < 1 || step > state.totalSteps) return;

  // Validate current step before proceeding
  if (step > state.step && !validateStep(state.step)) return;

  state.step = step;

  // Update step indicators
  document.querySelectorAll('.form-step').forEach((s, i) => {
    const n = i + 1;
    s.classList.remove('active', 'completed');
    if (n === step) s.classList.add('active');
    else if (n < step) s.classList.add('completed');
  });

  // Show correct panel
  document.querySelectorAll('.form-panel').forEach((panel, i) => {
    panel.classList.toggle('active', i + 1 === step);
  });

  updateSummary();
  updateEstimate();

  // Scroll to top of form
  document.querySelector('.booking-form-wrap')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function validateStep(step) {
  if (step === 1) {
    const name = document.getElementById('guestName')?.value.trim();
    const email = document.getElementById('guestEmail')?.value.trim();
    const phone = document.getElementById('guestPhone')?.value.trim();
    const type = document.getElementById('eventType')?.value;

    if (!name) { highlightError('guestName', 'Please enter your full name'); return false; }
    if (!email || !email.includes('@')) { highlightError('guestEmail', 'Please enter a valid email'); return false; }
    if (!phone || phone.length < 10) { highlightError('guestPhone', 'Please enter a valid phone number'); return false; }
    if (!type) { highlightError('eventType', 'Please select an event type'); return false; }

    state.formData.name = name;
    state.formData.email = email;
    state.formData.phone = phone;
    state.formData.eventType = type;
  }

  if (step === 2) {
    const date = document.getElementById('eventDate')?.value;
    const location = document.getElementById('eventLocation')?.value.trim();
    const guests = document.getElementById('guestCount')?.value;

    if (!date) { highlightError('eventDate', 'Please select an event date'); return false; }
    if (new Date(date) < new Date()) { highlightError('eventDate', 'Please choose a future date'); return false; }
    if (!location) { highlightError('eventLocation', 'Please enter the event location'); return false; }
    if (!guests || guests < 1) { highlightError('guestCount', 'Please enter guest count'); return false; }

    state.formData.date = date;
    state.formData.location = location;
    state.formData.guests = parseInt(guests);
    state.formData.time = document.getElementById('eventTime')?.value;
  }

  return true;
}

function highlightError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = '#ef4444';
  el.focus();
  el.addEventListener('input', () => { el.style.borderColor = ''; }, { once: true });
  showToast(msg, '⚠️');
}

// ---------- NAVIGATION BUTTONS ----------
document.querySelectorAll('.btn-next').forEach(btn => {
  btn.addEventListener('click', () => goToStep(state.step + 1));
});

document.querySelectorAll('.btn-back').forEach(btn => {
  btn.addEventListener('click', () => goToStep(state.step - 1));
});

// ---------- PREFERENCE CARDS ----------
document.querySelectorAll('.pref-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
    const pref = card.dataset.pref;
    if (card.classList.contains('selected')) {
      if (!state.formData.menuPrefs.includes(pref)) state.formData.menuPrefs.push(pref);
    } else {
      state.formData.menuPrefs = state.formData.menuPrefs.filter(p => p !== pref);
    }
  });
});

// ---------- ADD-ONS ----------
document.querySelectorAll('.addon-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
    const addon = item.dataset.addon;
    if (item.classList.contains('checked')) {
      if (!state.formData.addons.includes(addon)) state.formData.addons.push(addon);
    } else {
      state.formData.addons = state.formData.addons.filter(a => a !== addon);
    }
    updateEstimate();
  });
});

// ---------- BUDGET RANGE ----------
const budgetRange = document.getElementById('budgetRange');
const budgetDisplay = document.getElementById('budgetDisplay');

if (budgetRange) {
  budgetRange.addEventListener('input', () => {
    const val = parseInt(budgetRange.value);
    state.formData.budget = val;
    if (budgetDisplay) budgetDisplay.textContent = `₦${val.toLocaleString()}`;
  });
}

// ---------- ESTIMATE CALCULATOR ----------
function updateEstimate() {
  const guests = parseInt(state.formData.guests) || 100;
  const type = state.formData.eventType || 'other';
  const perHead = PRICE_MAP.perHead[type] || 7000;

  let base = guests * perHead;
  state.formData.addons.forEach(a => {
    base += PRICE_MAP.addons[a] || 0;
  });

  const low = Math.round(base * 0.9);
  const high = Math.round(base * 1.15);

  const estEl = document.getElementById('estimateRange');
  if (estEl) {
    estEl.textContent = `₦${low.toLocaleString()} — ₦${high.toLocaleString()}`;
  }
}

// ---------- SUMMARY UPDATE ----------
function updateSummary() {
  const fields = {
    'sum-name':    state.formData.name    || '—',
    'sum-email':   state.formData.email   || '—',
    'sum-type':    state.formData.eventType ? capitalise(state.formData.eventType) : '—',
    'sum-date':    state.formData.date    ? formatDate(state.formData.date) : '—',
    'sum-guests':  state.formData.guests  ? `${state.formData.guests} guests` : '—',
    'sum-location':state.formData.location|| '—',
  };

  Object.entries(fields).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  updateEstimate();
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-NG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function capitalise(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

// ---------- FINAL SUBMIT ----------
const submitBtn = document.getElementById('submitBooking');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    // Gather notes
    state.formData.notes = document.getElementById('specialRequests')?.value || '';

    // Simulate submission
    submitBtn.textContent = 'Submitting…';
    submitBtn.disabled = true;

    setTimeout(() => {
      // Generate reference
      const ref = 'LC-' + Date.now().toString(36).toUpperCase().slice(-6);
      document.getElementById('bookingRef').textContent = ref;

      // Hide form, show success
      document.querySelector('.booking-form-wrap').style.display = 'none';
      document.querySelector('.booking-success').classList.add('show');

      // Save to localStorage (simulated database)
      const bookings = JSON.parse(localStorage.getItem('luxecater_bookings') || '[]');
      bookings.push({ ...state.formData, ref, submitted: new Date().toISOString() });
      localStorage.setItem('luxecater_bookings', JSON.stringify(bookings));

      showToast('Booking submitted! We\'ll contact you within 24 hours.', '🎉');
    }, 1800);
  });
}

// ---------- GUEST COUNT LIVE ESTIMATE ----------
const guestInput = document.getElementById('guestCount');
if (guestInput) {
  guestInput.addEventListener('input', () => {
    state.formData.guests = parseInt(guestInput.value) || 0;
    updateEstimate();
    updateSummary();
  });
}

const eventTypeInput = document.getElementById('eventType');
if (eventTypeInput) {
  eventTypeInput.addEventListener('change', () => {
    state.formData.eventType = eventTypeInput.value;
    updateEstimate();
    updateSummary();
  });
}

// Init
goToStep(1);
