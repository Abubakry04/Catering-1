import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      stars: '★★★★★',
      text: "Adusab Catering Services transformed our wedding reception into something out of a dream. Every dish was perfection — our 400 guests are still talking about the jollof rice. We cannot recommend them highly enough!",
      author: 'Adaeze & Femi Okafor',
      info: 'Wedding Reception, Victoria Island — March 2026',
      avatar: 'AF'
    },
    {
      stars: '★★★★★',
      text: "We've used Adusab Catering Services for three consecutive annual corporate dinners. The consistency, professionalism, and sheer quality of food never fails to impress our international executives.",
      author: 'Babatunde Martins',
      info: 'Head of Operations, TechBridge Nigeria',
      avatar: 'BM'
    },
    {
      stars: '★★★★★',
      text: "From the tasting session to the actual event, every interaction with Adusab Catering Services was exceptional. They truly listen and deliver beyond expectations. My daughter's graduation party was magical.",
      author: 'Chidinma Nwosu',
      info: 'Private Graduation Party, Lekki — January 2026',
      avatar: 'CN'
    },
    {
      stars: '★★★★★',
      text: "Outstanding service from start to finish. The vegan options were incredibly creative and delicious — even the non-vegans at our event preferred them! Truly a class act.",
      author: 'Tunde & Remi Adeyemi',
      info: '50th Birthday Celebration, Ikoyi — February 2026',
      avatar: 'TR'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials section section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Client Love</div>
          <h2 className="section-title">What Our Clients <em>Say</em></h2>
        </div>
        
        <div className="testimonials-slider">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="testimonial-stars">{testimonials[currentIndex].stars}</div>
              <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonials[currentIndex].avatar}</div>
                <div>
                  <strong>{testimonials[currentIndex].author}</strong>
                  <span>{testimonials[currentIndex].info}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="slider-controls">
          <button className="slider-btn" onClick={prev} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <div className="slider-dots">
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
          <button className="slider-btn" onClick={next} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
