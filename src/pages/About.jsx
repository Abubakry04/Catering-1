import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Leaf, Users } from 'lucide-react';

const AboutPage = () => {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
  };

  const team = [
    {
      name: 'Chef Emeka Okonkwo',
      role: 'Founder & Executive Chef',
      bio: 'With 20+ years of culinary experience and training at Cordon Bleu Paris, Chef Emeka leads our kitchen with passion and precision.',
      img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80'
    },
    {
      name: 'Chef Amaka Nwachukwu',
      role: 'Head of Nigerian Cuisine',
      bio: 'Amaka is our guardian of authentic Nigerian flavours, ensuring every traditional dish carries the depth and soul of true home cooking.',
      img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80'
    },
    {
      name: 'Kemi Adeyemi',
      role: 'Events & Operations Director',
      bio: 'Kemi orchestrates every logistical detail with military precision, ensuring seamless execution from setup to teardown.',
      img: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&q=80'
    },
    {
      name: 'Chef Ibrahim Musa',
      role: 'Pastry & Dessert Chef',
      bio: "Ibrahim's dessert creations are works of art — from towering croquembouche to delicate Nigerian chin chin towers.",
      img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg about-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="sep">›</span>
              <span>About Us</span>
            </div>
            <div className="section-tag">Our Story</div>
            <h1>Passion Cooked Into<br /><em>Every Dish</em></h1>
            <p>Founded in 2013 with a simple belief: every meal deserves to be extraordinary.</p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section">
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <div className="section-tag">Who We Are</div>
              <h2 className="section-title">Built on Lagos Roots,<br /><em>World-Class Standards</em></h2>
              <p className="section-text">Adusab Catering began in a modest kitchen in Surulere, Lagos, with our founder Chef Emeka Okonkwo and a single wedding booking. Twelve years later, we've served over 5000 events across Nigeria and earned a reputation as the most trusted premium caterer.</p>
              <p className="section-text">Our philosophy is simple: use the freshest ingredients, respect traditional recipes, and execute with the precision of a Michelin-starred kitchen. We blend authentic Nigerian flavours with modern technique — creating menus that feel both familiar and extraordinary.</p>
              
              <div className="certs-grid" style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div className="cert-badge">
                  <div className="cert-icon">🏆</div>
                  <div><strong>Award Winner</strong><span>W.A. Culinary Excellence 2024</span></div>
                </div>
                <div className="cert-badge">
                  <div className="cert-icon">✅</div>
                  <div><strong>NAFDAC Certified</strong><span>Reg. No. 01-2345678</span></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="about-visuals"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              style={{ position: 'relative', height: '500px' }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '72%', height: '72%', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=700&q=80" alt="Chef at work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '55%', height: '50%', borderRadius: '1.5rem', overflow: 'hidden', border: '4px solid var(--dark)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80" alt="Event setup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', top: '50%', right: '-1rem', transform: 'translateY(-50%)', background: 'var(--gold)', color: 'var(--dark)', padding: '1rem 1.25rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 8px 32px rgba(201,168,76,0.4)', zIndex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>5000+</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Events Served</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Values</div>
            <h2 className="section-title">What Drives <em>Everything</em> We Do</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '🌟', title: 'Excellence Without Compromise', text: 'We never cut corners. Every dish that leaves our kitchen meets our highest standard.' },
              { icon: '🤝', title: 'Genuine Partnership', text: "We don't just cater your event — we become invested partners in making it the best day." },
              { icon: '🌿', title: 'Fresh & Responsible', text: 'We source locally whenever possible and use only NAFDAC-approved ingredients.' },
              { icon: '💡', title: 'Constant Innovation', text: 'We invest in culinary education and evolve our menus to reflect modern tastes.' }
            ].map((v, i) => (
              <motion.div 
                key={i} 
                className="value-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
              >
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">The People</div>
            <h2 className="section-title">Meet Our <em>Culinary Team</em></h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                className="team-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
              >
                <div className="team-img"><img src={member.img} alt={member.name} /></div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-bg"></div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work<br /><em>With Us?</em></h2>
            <div className="cta-actions">
              <Link to="/booking" className="btn btn-primary btn-lg">Book an Event</Link>
              <Link to="/contact" className="btn btn-white btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
