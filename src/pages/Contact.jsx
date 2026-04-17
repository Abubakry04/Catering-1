import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Camera as Instagram, Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h4>{question}</h4>
        <div className="faq-icon">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const faqs = [
    { q: "How far in advance should I book?", a: "We recommend booking at least 4–6 weeks in advance for large events (200+ guests) and 2–3 weeks for smaller gatherings." },
    { q: "Do you offer tasting sessions?", a: "Yes! We offer complimentary tasting sessions for bookings of 100+ guests. For smaller events, we offer a tasting package for ₦15,000." },
    { q: "Can you accommodate dietary restrictions?", a: "Absolutely. We cater to halal, vegan, vegetarian, gluten-free, dairy-free, and nut-free requirements." },
    { q: "What's your minimum guest count?", a: "Our minimum is 20 guests for standard packages. For fine dining, our minimum is 6 guests." },
    { q: "Do you serve outside Lagos?", a: "Yes! We regularly serve events in Abuja, Port Harcourt, Ibadan, and Enugu. Logistics surcharges apply." }
  ];

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-bg contact-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb"><Link to="/">Home</Link><span className="sep">›</span><span>Contact</span></div>
            <div className="section-tag">Get In Touch</div>
            <h1>We'd Love to Hear<br /><em>From You</em></h1>
            <p>Have a question or ready to book? Reach out and our team will respond within 24 hours.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <motion.div 
              className="contact-form-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Send Us a Message</h2>
              <p className="subtitle">Fill out the form and we'll get back to you promptly.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="form-group" style={{ marginTop: '1.25rem' }}>
                  <label>Subject</label>
                  <select>
                    <option value="">— What's this about? —</option>
                    <option value="booking">Event Booking Enquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="menu">Menu Customisation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginTop: '1.25rem' }}>
                  <label>Message *</label>
                  <textarea placeholder="Tell us about your event or enquiry…" style={{ height: '160px' }} required></textarea>
                </div>
                
                <AnimatePresence>
                  {submitted && (
                    <motion.div 
                      className="form-success-banner"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <span>✅</span>
                      <span>Message sent successfully! We'll reply within 24 hours.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1rem' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>

            <motion.div 
              className="contact-sidebar"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-info-card">
                <div className="contact-info-body">
                  <h3>Contact Information</h3>
                  <div className="info-items">
                    <div className="info-item">
                      <div className="info-icon"><Phone size={18} /></div>
                      <div className="info-content">
                        <strong>Phone</strong>
                        <a href="tel:+2348012345678">+234 801 234 5678</a>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-icon"><Mail size={18} /></div>
                      <div className="info-content">
                        <strong>Email</strong>
                        <a href="mailto:hello@adusabcatering.ng">hello@adusabcatering.ng</a>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-icon"><MapPin size={18} /></div>
                      <div className="info-content">
                        <strong>Office Address</strong>
                        <span>3 Bourdillon Road, Ikoyi, Lagos</span>
                      </div>
                    </div>
                  </div>
                  <div className="office-hours">
                    <h4>Office Hours</h4>
                    <div className="hours-grid">
                      <span>Mon — Fri</span><span>8am — 6pm</span>
                      <span>Saturday</span><span>9am — 4pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div style={{ marginTop: '5rem' }}>
            <div className="section-header">
              <div className="section-tag">Frequently Asked</div>
              <h2 className="section-title">Common <em>Questions</em></h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
