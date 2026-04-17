import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, ChevronRight, Check, Calendar, Users, 
  MapPin, Clock, Star, Info, ClipboardCheck 
} from 'lucide-react';

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

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '',
    date: '', time: '', location: '', guests: 100,
    budget: 500000,
    menuPrefs: [],
    addons: [],
    notes: ''
  });

  const [errors, setErrors] = useState({});

  const validateStep = (s) => {
    let newErrors = {};
    if (s === 1) {
      if (!formData.name) newErrors.name = 'Full name is required';
      if (!formData.email || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
      if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid phone is required';
      if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    } else if (s === 2) {
      if (!formData.date) newErrors.date = 'Event date is required';
      if (!formData.location) newErrors.location = 'Event location is required';
      if (!formData.guests || formData.guests < 1) newErrors.guests = 'Min 1 guest required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) setStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const updateField = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const toggleList = (field, item) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(item) 
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const calculateEstimate = () => {
    const perHead = PRICE_MAP.perHead[formData.eventType] || 7000;
    let base = (parseInt(formData.guests) || 0) * perHead;
    formData.addons.forEach(a => {
      base += PRICE_MAP.addons[a] || 0;
    });
    const low = Math.round(base * 0.9);
    const high = Math.round(base * 1.15);
    return { low, high };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    const ref = 'AD-' + Math.random().toString(36).substring(7).toUpperCase();
    setBookingRef(ref);
    
    // Save to local storage for Admin simulation
    const bookings = JSON.parse(localStorage.getItem('adusab_bookings') || '[]');
    bookings.push({ ...formData, ref, submittedAt: new Date().toISOString(), status: 'pending' });
    localStorage.setItem('adusab_bookings', JSON.stringify(bookings));
    
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="booking-page success-view">
        <div className="container">
          <motion.div 
            className="booking-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="success-icon">
              <Check size={48} />
            </div>
            <h1>Booking Request Received!</h1>
            <p>Thank you, <strong>{formData.name}</strong>. We've received your request and our team will contact you within 24 hours to discuss your menu proposal.</p>
            <div className="ref-box">
              <span>Your Reference Number:</span>
              <strong id="bookingRef">{bookingRef}</strong>
            </div>
            <div className="success-ctas">
              <Link to="/" className="btn btn-primary">Return Home</Link>
              <Link to="/gallery" className="btn btn-ghost">Browse Gallery</Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <section className="page-hero">
        <div className="page-hero-bg booking-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1>Plan Your <em>Occasion</em></h1>
            <p>Tell us about your event vision, and let our culinary experts handle the rest.</p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="booking-grid">
          <div className="booking-form-wrap">
            {/* Step Indicators */}
            <div className="form-steps">
              {[1, 2, 3, 4].map(s => (
                <div key={s} className={`form-step ${s === step ? 'active' : ''} ${s < step ? 'completed' : ''}`}>
                  <div className="step-point">{s < step ? <Check size={14} /> : s}</div>
                  <span className="step-label">
                    {s === 1 && 'Basic Info'}
                    {s === 2 && 'Event Details'}
                    {s === 3 && 'Curate Menu'}
                    {s === 4 && 'Add-ons'}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1" 
                    className="form-panel"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="panel-header">
                      <h3>Step 1: The Basics</h3>
                      <p>Tell us who you are and what you're celebrating.</p>
                    </div>
                    <div className="form-group-row">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input 
                          type="text" name="name" placeholder="eg. Babatunde Okafor" 
                          value={formData.name} onChange={updateField}
                          className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <span className="error-msg">{errors.name}</span>}
                      </div>
                    </div>
                    <div className="form-group-row">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input 
                          type="email" name="email" placeholder="example@gmail.com"
                          value={formData.email} onChange={updateField}
                          className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input 
                          type="tel" name="phone" placeholder="080 000 000 00"
                          value={formData.phone} onChange={updateField}
                          className={errors.phone ? 'error' : ''}
                        />
                        {errors.phone && <span className="error-msg">{errors.phone}</span>}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Event Type</label>
                      <select name="eventType" value={formData.eventType} onChange={updateField} className={errors.eventType ? 'error' : ''}>
                        <option value="">Select an option</option>
                        <option value="wedding">Wedding Reception</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Celebration</option>
                        <option value="graduation">Graduation Party</option>
                        <option value="religious">Religious Gathering</option>
                        <option value="other">Other Celebration</option>
                      </select>
                      {errors.eventType && <span className="error-msg">{errors.eventType}</span>}
                    </div>
                    <div className="panel-actions">
                      <button type="button" className="btn btn-primary" onClick={nextStep}>
                        Next Step <ChevronRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" className="form-panel">
                    <div className="panel-header">
                      <h3>Step 2: Logistics</h3>
                      <p>When and where is the celebration taking place?</p>
                    </div>
                    <div className="form-group-row">
                      <div className="form-group">
                        <label>Event Date</label>
                        <input type="date" name="date" value={formData.date} onChange={updateField} className={errors.date ? 'error' : ''} />
                      </div>
                      <div className="form-group">
                        <label>Start Time</label>
                        <input type="time" name="time" value={formData.time} onChange={updateField} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Event Location / Venue</label>
                      <input type="text" name="location" placeholder="eg. Landmark Events Centre, VI" value={formData.location} onChange={updateField} className={errors.location ? 'error' : ''} />
                    </div>
                    <div className="form-group">
                      <label>Guest Count</label>
                      <input type="number" name="guests" min="1" value={formData.guests} onChange={updateField} className={errors.guests ? 'error' : ''} />
                    </div>
                    <div className="panel-actions">
                      <button type="button" className="btn btn-ghost" onClick={prevStep}><ChevronLeft size={18} /> Back</button>
                      <button type="button" className="btn btn-primary" onClick={nextStep}>Next: Menu Choice <ChevronRight size={18} /></button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" className="form-panel">
                    <div className="panel-header">
                      <h3>Step 3: Initial Menu Prefs</h3>
                      <p>Select categories you're interested in for your custom proposal.</p>
                    </div>
                    <div className="prefs-selector">
                      {[
                        { id: 'rice', label: 'Rice & Grains', icon: '🍚' },
                        { id: 'swallow', label: 'Soups & Swallow', icon: '🍲' },
                        { id: 'protein', label: 'Protein Selection', icon: '🥩' },
                        { id: 'chops', label: 'Small Chops', icon: '🧆' },
                        { id: 'dessert', label: 'Desserts', icon: '🍰' },
                        { id: 'drinks', label: 'Custom Drinks', icon: '🥤' }
                      ].map(item => (
                        <div 
                          key={item.id} 
                          className={`pref-card ${formData.menuPrefs.includes(item.id) ? 'selected' : ''}`}
                          onClick={() => toggleList('menuPrefs', item.id)}
                        >
                          <div className="pref-icon">{item.icon}</div>
                          <span>{item.label}</span>
                          <div className="pref-check"><Check size={12} /></div>
                        </div>
                      ))}
                    </div>
                    <div className="panel-actions">
                      <button type="button" className="btn btn-ghost" onClick={prevStep}><ChevronLeft size={18} /> Back</button>
                      <button type="button" className="btn btn-primary" onClick={nextStep}>Nearly Done <ChevronRight size={18} /></button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="step4" className="form-panel">
                    <div className="panel-header">
                      <h3>Final Step: Add-ons & Review</h3>
                      <p>Optional services to complete your experience.</p>
                    </div>
                    <div className="addons-list">
                      {[
                        { id: 'decoration', label: 'Event Decoration', price: '₦150,000+' },
                        { id: 'staffing', label: 'Waiter Service Staff', price: '₦200,000+' },
                        { id: 'equipment', label: 'Cutlery & Plate Rentals', price: '₦100,000+' },
                        { id: 'cleanup', label: 'Professional Setup & Cleanup', price: '₦80,000+' }
                      ].map(addon => (
                        <div 
                          key={addon.id} 
                          className={`addon-item ${formData.addons.includes(addon.id) ? 'checked' : ''}`}
                          onClick={() => toggleList('addons', addon.id)}
                        >
                          <div className="addon-check">{formData.addons.includes(addon.id) && <Check size={14} />}</div>
                          <div className="addon-text">
                            <strong>{addon.label}</strong>
                            <span>Starting from {addon.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="form-group" style={{ marginTop: '1.5rem' }}>
                      <label>Special Requests / Notes</label>
                      <textarea name="notes" placeholder="Any allergies, specific requests or questions?" rows="3" value={formData.notes} onChange={updateField} />
                    </div>
                    <div className="panel-actions">
                      <button type="button" className="btn btn-ghost" onClick={prevStep}><ChevronLeft size={18} /> Back</button>
                      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit Booking Request</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          <div className="booking-summary-wrap">
            <div className="booking-summary">
              <h3>Event Summary</h3>
              <div className="summary-section">
                <div className="summary-item">
                  <span className="label">Client</span>
                  <span className="value">{formData.name || '—'}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Event Type</span>
                  <span className="value">{formData.eventType || '—'}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Guests</span>
                  <span className="value">{formData.guests} Guests</span>
                </div>
                <div className="summary-item">
                  <span className="label">Date</span>
                  <span className="value">{formData.date || '—'}</span>
                </div>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="estimate-box">
                <div className="estimate-header">
                  <Info size={16} />
                  <span>Estimated Investment</span>
                </div>
                <div className="estimate-range">
                  ₦{estimate.low.toLocaleString()} — ₦{estimate.high.toLocaleString()}
                </div>
                <p>This is a preliminary estimate for catering and selected add-ons. A detailed quote will follow.</p>
              </div>

              <div className="summary-cta">
                <div className="cta-icon">📞</div>
                <div>
                  <strong>Need immediate help?</strong>
                  <a href="tel:+2348012345678">Call +234 801 234 5678</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
