import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GALLERY_DATA, GALLERY_CATS } from '../utils/galleryData';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    return GALLERY_DATA.filter(item => activeFilter === 'all' || item.cat === activeFilter);
  }, [activeFilter]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const navLightbox = (dir) => {
    setLightboxIndex(prev => (prev + dir + filteredItems.length) % filteredItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navLightbox(-1);
      if (e.key === 'ArrowRight') navLightbox(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, filteredItems]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="page-hero-bg gallery-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="sep">›</span>
              <span>Gallery</span>
            </div>
            <div className="section-tag">Visual Journey</div>
            <h1>Capturing the <em>Essence</em><br />of Celebration</h1>
            <p>Explore our portfolio of unforgettable moments.</p>
          </div>
        </div>
      </section>

      <div className="gallery-filters container">
        {Object.entries(GALLERY_CATS).map(([key, label]) => (
          <button
            key={key}
            className={`gallery-btn ${activeFilter === key ? 'active' : ''}`}
            onClick={() => setActiveFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="container">
        <div className="gallery-masonry">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.src}
                className={`gallery-item ${item.height || 'short'}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(idx)}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <Maximize2 size={24} className="overlay-icon" />
                    <h4>{item.title}</h4>
                    <span>{GALLERY_CATS[item.cat]}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {currentItem && (
          <motion.div 
            className="lightbox open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target.classList.contains('lightbox') && closeLightbox()}
          >
            <button className="lightbox-close" onClick={closeLightbox}><X size={32} /></button>
            <button className="lightbox-nav prev" onClick={() => navLightbox(-1)}><ChevronLeft size={48} /></button>
            <button className="lightbox-nav next" onClick={() => navLightbox(1)}><ChevronRight size={48} /></button>
            
            <div className="lightbox-content">
              <motion.div 
                key={lightboxIndex}
                className="lightbox-img-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <img src={currentItem.src} alt={currentItem.title} />
                <div className="lightbox-info">
                  <h3>{currentItem.title}</h3>
                  <p>{GALLERY_CATS[currentItem.cat]}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
