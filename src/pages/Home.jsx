import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  const [stats, setStats] = React.useState({ events: 0, years: 0, satisfaction: 0, support: 0 });

  React.useEffect(() => {
    const duration = 2000;
    const targets = { events: 5000, years: 12, satisfaction: 98, support: 24 };
    const start = Date.now();
    const timer = setInterval(() => {
      const timePassed = Date.now() - start;
      const progress = Math.min(timePassed / duration, 1);
      setStats({
        events: Math.floor(progress * targets.events),
        years: Math.floor(progress * targets.years),
        satisfaction: Math.floor(progress * targets.satisfaction),
        support: Math.floor(progress * targets.support),
      });
      if (progress === 1) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <div className="home-page">
      {/* ========== HERO ========== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
          <div className="hero-particles" id="heroParticles"></div>
        </div>
        <div className="hero-content">
          <motion.h1 className="hero-title" initial="hidden" animate="visible" variants={revealVariants}>
            Elevate Every<br /><em>Moment</em> With<br />Exceptional Cuisine
          </motion.h1>
          <motion.p className="hero-subtitle" initial="hidden" animate="visible" variants={{...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0.2 } }}}>
            Premium catering for weddings, corporate events, and private celebrations across Lagos. We turn every gathering into an unforgettable experience.
          </motion.p>
          <motion.div className="hero-ctas" initial="hidden" animate="visible" variants={{...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0.4 } }}}>
            <Link to="/booking" className="btn btn-primary btn-lg"><span>Book Your Event</span><ArrowRight size={20} /></Link>
            <Link to="/menu" className="btn btn-ghost btn-lg">Explore Menu</Link>
          </motion.div>
          <motion.div className="hero-stats" initial="hidden" animate="visible" variants={{...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0.6 } }}}>
            <div className="stat-item"><span className="stat-number">{stats.events}</span><span className="stat-plus">+</span><span className="stat-label">Events Served</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><span className="stat-number">{stats.years}</span><span className="stat-plus">+</span><span className="stat-label">Years Experience</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><span className="stat-number">{stats.satisfaction}</span><span className="stat-plus">%</span><span className="stat-label">Client Satisfaction</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><span className="stat-number">{stats.support}</span><span className="stat-plus">/7</span><span className="stat-label">Support</span></div>
          </motion.div>
        </div>
        <div className="hero-scroll"><span>Scroll Down</span><div className="scroll-line"></div></div>
      </section>

      {/* ========== SERVICES STRIP ========== */}
      <section className="services-strip">
        <div className="container">
          <div className="services-grid">
            {['💍 Wedding Catering', '🏢 Corporate Events', '🎂 Private Parties', '🍽️ Fine Dining Popup', '🎓 Graduation Events', '🙏 Religious Gatherings'].map((s, i) => (
              <div key={i} className="service-chip"><span className="chip-icon">{s.split(' ')[0]}</span><span>{s.split(' ').slice(1).join(' ')}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT TEASER ========== */}
      <section className="about-teaser section">
        <div className="container">
          <div className="about-grid">
            <motion.div className="about-images" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}>
              <div className="img-main"><img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80" alt="Chef" /><div className="img-badge">Est. 2013</div></div>
              <div className="img-secondary"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80" alt="Table" /></div>
              <div className="img-accent"><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80" alt="Food" /></div>
            </motion.div>
            <motion.div className="about-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}>
              <div className="section-tag">Our Story</div>
              <h2 className="section-title">Passion for Food,<br /><em>Perfection in Service</em></h2>
              <p className="section-text">Adusab Catering services was founded with one simple belief: every meal deserves to be extraordinary. From intimate dinners to grand weddings, we bring uncompromising commitment to quality.</p>
              <Link to="/about" className="btn btn-outline">Meet Our Team</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED MENU ========== */}
      <section className="featured-menu section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Culinary Highlights</div>
            <h2 className="section-title">A Taste of <em>Excellence</em></h2>
            <p className="section-subtitle">Signature dishes crafted for unforgettable occasions</p>
          </div>
          <div className="menu-showcase">
            {[
              { title: 'Grand Jollof Experience', cat: 'Rice & Grains', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80', badge: 'Wedding Special' },
              { title: 'Heritage Grilled Platter', cat: 'Protein Selection', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80', badge: 'Most Popular' },
              { title: 'Garden Fresh Medley', cat: 'Healthy Options', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80', badge: 'Vegetarian' }
            ].map((m, i) => (
              <motion.div key={i} className="menu-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}>
                <div className="menu-card-img"><img src={m.img} alt={m.title} /><div className="menu-card-badge">{m.badge}</div></div>
                <div className="menu-card-body">
                  <div className="menu-category">{m.cat}</div><h3>{m.title}</h3>
                  <div className="menu-card-footer"><Link to="/menu" className="btn btn-sm btn-ghost">View Menu</Link></div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/menu" className="btn btn-primary btn-lg">View Full Menu</Link>
            <button className="btn btn-ghost btn-lg"><Download size={18} /> Download PDF Menu</button>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="how-it-works section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Simple Process</div>
            <h2 className="section-title">From Inquiry to <em>Celebration</em></h2>
          </div>
          <div className="steps-grid">
            {[
              { num: '01', icon: '📋', title: 'Submit Request', text: 'Fill out our detailed form with event info.' },
              { num: '02', icon: '💬', title: 'Consultation', text: 'We contact you to discuss your vision.' },
              { num: '03', icon: '✍️', title: 'Confirm & Plan', text: 'Sign the agreement and we begin prep.' },
              { num: '04', icon: '🎉', title: 'Enjoy!', text: 'We handle setup, service, and cleanup.' }
            ].map((step, i) => (
              <motion.div key={i} className="step-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}>
                <div className="step-number">{step.num}</div><div className="step-icon">{step.icon}</div><h3>{step.title}</h3><p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ========== CTA BANNER ========== */}
      <section className="cta-banner">
        <div className="cta-bg"></div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create<br /><em>Something Extraordinary?</em></h2>
            <p>Let's talk about your event. We're ready to make it unforgettable.</p>
            <div className="cta-actions">
              <Link to="/booking" className="btn btn-primary btn-lg">Get a Free Quote</Link>
              <a href="tel:+2348012345678" className="btn btn-white btn-lg"><Phone size={18} /> Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
