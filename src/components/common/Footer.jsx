import React from 'react';
import { Link } from 'react-router-dom';
import { Camera as Instagram, Share2 as Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <span className="logo-icon">✦</span>
              <span className="logo-text">Adusab Catering</span>
            </Link>
            <p>Premium catering services across Lagos and beyond. Creating unforgettable culinary experiences since 2013.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/2348012345678" aria-label="WhatsApp" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/booking">Book an Event</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Wedding Catering</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="#">Private Parties</a></li>
              <li><a href="#">Fine Dining Popups</a></li>
              <li><a href="#">Buffet Service</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <Phone size={16} />
              <span>+234 801 234 5678</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>hello@adusabcatering.ng</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>3 Bourdillon Rd, Ikoyi, Lagos</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Adusab Catering. All rights reserved. Crafted with ❤️ in Lagos, Nigeria.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
