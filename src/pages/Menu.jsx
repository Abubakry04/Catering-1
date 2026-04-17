import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MENU_DATA, SECTION_META, TAG_LABELS } from '../utils/menuData';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDietFilter, setActiveDietFilter] = useState(null);

  const filteredMenu = useMemo(() => {
    const result = {};
    Object.entries(MENU_DATA).forEach(([cat, items]) => {
      if (activeCategory !== 'all' && activeCategory !== cat) return;
      
      const filteredItems = items.filter(item => 
        !activeDietFilter || item.tags.includes(activeDietFilter)
      );

      if (filteredItems.length > 0) {
        result[cat] = filteredItems;
      }
    });
    return result;
  }, [activeCategory, activeDietFilter]);

  const toggleDietFilter = (diet) => {
    setActiveDietFilter(prev => prev === diet ? null : diet);
  };

  return (
    <div className="menu-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="sep">›</span>
              <span>Menu</span>
            </div>
            <div className="section-tag">Our Offerings</div>
            <h1>A Menu Built for<br /><em>Every Occasion</em></h1>
            <p>From traditional Nigerian classics to contemporary fusion cuisine — curated to delight every palate.</p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="container">
          <div className="filter-controls">
            <span className="filter-label">Category:</span>
            <div className="filter-tags">
              <button 
                className={`filter-tag ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              {Object.entries(SECTION_META).map(([key, meta]) => (
                <button 
                  key={key}
                  className={`filter-tag ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key)}
                >
                  {meta.label.replace(' & ', ' & \n').split('\n')[0]} 
                </button>
              ))}
            </div>
            <div className="filter-separator"></div>
            <span className="filter-label">Diet:</span>
            <div className="diet-filters">
              {Object.entries(TAG_LABELS).map(([key, tag]) => (
                <button 
                  key={key}
                  className={`diet-filter ${activeDietFilter === key ? `active-${key}` : ''}`}
                  onClick={() => toggleDietFilter(key)}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Container */}
      <div className="container">
        <AnimatePresence mode="popLayout">
          {Object.entries(filteredMenu).map(([catKey, items]) => (
            <motion.div 
              key={catKey} 
              className="menu-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <div className="menu-section-header">
                <h2>{SECTION_META[catKey].icon} {SECTION_META[catKey].label}</h2>
                <div className="menu-section-line"></div>
              </div>
              <div className="menu-items-grid">
                {items.map((item, idx) => (
                  <div key={idx} className="menu-item">
                    <div className="menu-item-img">
                      <img src={item.img} alt={item.name} loading="lazy" />
                    </div>
                    <div className="menu-item-info">
                      <div className="menu-item-name">{item.name}</div>
                      <div className="menu-item-desc">{item.desc}</div>
                      <div className="menu-item-footer">
                        <div className="menu-item-tags">
                          {item.tags.map(t => (
                            <span key={t} className={`tag ${TAG_LABELS[t].cls}`}>{TAG_LABELS[t].label}</span>
                          ))}
                        </div>
                        <div className="menu-item-price">{item.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {Object.keys(filteredMenu).length === 0 && (
          <div className="no-results">
            <Filter size={48} />
            <p>No items match your selected filters.</p>
            <button className="btn btn-ghost" onClick={() => {setActiveCategory('all'); setActiveDietFilter(null);}}>Reset Filters</button>
          </div>
        )}

        {/* Download Banner */}
        <div className="download-banner">
          <h3>Want the Full Menu as a PDF?</h3>
          <p>Download our complete menu with pricing to share with your team or planning committee.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg">
              <Download size={18} />
              Download PDF Menu
            </button>
            <Link to="/booking" className="btn btn-outline btn-lg">Request Custom Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
