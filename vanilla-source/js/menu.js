/* ============================================
   MENU PAGE JAVASCRIPT
   ============================================ */

const MENU_DATA = {
  rice: [
    { name: 'Grand Jollof Rice', desc: 'Classic party jollof slow-cooked with tomatoes, peppers, and assorted proteins. Served with fried plantain and coleslaw.', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&q=80', tags: ['halal', 'spicy'], price: '₦4,500/head', cat: 'rice' },
    { name: 'Basmati Fried Rice', desc: 'Fragrant basmati with mixed vegetables, soy sauce, and your choice of protein. A corporate favorite.', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200&q=80', tags: ['halal', 'df'], price: '₦3,800/head', cat: 'rice' },
    { name: 'Coconut Rice', desc: 'Creamy Nigerian coconut rice with shrimp, herbs, and toasted coconut flakes.', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=200&q=80', tags: ['gf'], price: '₦4,200/head', cat: 'rice' },
    { name: 'White Rice & Stew', desc: 'Long grain white rice with rich beef and tomato stew. A timeless classic.', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=200&q=80', tags: ['halal'], price: '₦3,000/head', cat: 'rice' },
  ],
  protein: [
    { name: 'Heritage Grilled Platter', desc: 'Marinated chicken, suya beef skewers, and peppered mackerel with signature dipping sauces.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80', tags: ['halal', 'df'], price: '₦6,500/head', cat: 'protein' },
    { name: 'Peppered Goat Meat', desc: 'Slow-braised goat meat with scotch bonnets, onions, and aromatic spices.', img: 'https://images.unsplash.com/photo-1544025162-d76538671a33?w=200&q=80', tags: ['halal', 'spicy', 'gf'], price: '₦5,800/head', cat: 'protein' },
    { name: 'Whole Roasted Chicken', desc: 'Herb-crusted whole chicken with garlic butter and pan drippings. Perfect for formal settings.', img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200&q=80', tags: ['halal', 'gf'], price: '₦7,200/head', cat: 'protein' },
    { name: 'Catfish Pepper Soup', desc: 'Fresh catfish in aromatic broth with uziza leaves, utazi, and local spices.', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200&q=80', tags: ['spicy', 'gf', 'df'], price: '₦4,900/head', cat: 'protein' },
  ],
  soups: [
    { name: 'Egusi Soup', desc: 'Rich melon seed soup with ugu leaves, stockfish, and assorted meats. Served with swallow.', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&q=80', tags: ['halal', 'gf'], price: '₦3,500/head', cat: 'soups' },
    { name: 'Banga Soup', desc: 'Delta-style palm nut soup with fresh fish, crayfish, and traditional spices.', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=200&q=80', tags: ['gf', 'df'], price: '₦4,000/head', cat: 'soups' },
    { name: 'Oha Soup', desc: 'Traditional Igbo oha leaf soup with cocoyam paste and assorted proteins.', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&q=80', tags: ['halal', 'gf'], price: '₦3,800/head', cat: 'soups' },
    { name: 'Ogbono Soup', desc: 'Wild mango seed draw soup with spinach, palm oil, and smoked fish.', img: 'https://images.unsplash.com/photo-1576300099988-1c3d3c23cf5e?w=200&q=80', tags: ['gf', 'df'], price: '₦3,200/head', cat: 'soups' },
  ],
  small_chops: [
    { name: 'Premium Small Chops Platter', desc: 'Puff puff, samosa, spring rolls, chicken skewers, and fried plantain. Perfect for cocktail hours.', img: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=200&q=80', tags: ['halal'], price: '₦2,500/head', cat: 'small_chops' },
    { name: 'Asun Skewers', desc: 'Smoky peppered goat meat on skewers with fresh onion rings. A crowd pleaser.', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=200&q=80', tags: ['halal', 'spicy', 'gf'], price: '₦3,000/head', cat: 'small_chops' },
    { name: 'Garden Crudités', desc: 'Fresh seasonal vegetables with hummus, tzatziki, and baba ganoush dips.', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&q=80', tags: ['vegan', 'gf', 'df'], price: '₦1,800/head', cat: 'small_chops' },
  ],
  desserts: [
    { name: 'Chin Chin Tower', desc: 'Crunchy, golden chin chin in decorative towers — classic Nigerian sweetness.', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&q=80', tags: ['vegan'], price: '₦1,200/head', cat: 'desserts' },
    { name: 'Puff Puff Delight', desc: 'Warm, doughy puff puff dusted with powdered sugar. Served with chocolate dipping sauce.', img: 'https://images.unsplash.com/photo-1625195341045-dbc69bdc7a1f?w=200&q=80', tags: ['vegan', 'df'], price: '₦1,500/head', cat: 'desserts' },
    { name: 'Fresh Fruit Platter', desc: 'Seasonal exotic and local fruits artistically arranged for maximum visual impact.', img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=200&q=80', tags: ['vegan', 'gf', 'df'], price: '₦2,000/head', cat: 'desserts' },
  ],
  drinks: [
    { name: 'Zobo Royale', desc: 'House-made hibiscus drink with ginger, pineapple, and citrus. Chilled and refreshing.', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&q=80', tags: ['vegan', 'gf', 'df'], price: '₦800/head', cat: 'drinks' },
    { name: 'Chapman Punch', desc: 'Classic Nigerian Chapman with Ribena, grenadine, Angostura bitters, and tropical fruits.', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=200&q=80', tags: ['vegan', 'df'], price: '₦900/head', cat: 'drinks' },
    { name: 'Premium Drinks Package', desc: 'Full bar service including soft drinks, juices, water, and specialty mocktails.', img: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=200&q=80', tags: ['vegan'], price: '₦1,500/head', cat: 'drinks' },
  ],
};

const SECTION_META = {
  rice:        { label: 'Rice & Grains', icon: '🍚' },
  protein:     { label: 'Protein Selection', icon: '🥩' },
  soups:       { label: 'Nigerian Soups & Swallows', icon: '🍲' },
  small_chops: { label: 'Small Chops & Appetisers', icon: '🧆' },
  desserts:    { label: 'Desserts & Sweets', icon: '🍰' },
  drinks:      { label: 'Drinks & Beverages', icon: '🥤' },
};

const TAG_LABELS = {
  halal:  { label: 'Halal',        cls: 'tag-halal' },
  vegan:  { label: 'Vegan',        cls: 'tag-vegan' },
  gf:     { label: 'Gluten-Free',  cls: 'tag-gf' },
  spicy:  { label: 'Spicy',        cls: 'tag-spicy' },
  df:     { label: 'Dairy-Free',   cls: 'tag-df' },
};

let activeCategory = 'all';
let activeDietFilter = null;

function buildMenu() {
  const container = document.getElementById('menuContainer');
  if (!container) return;
  container.innerHTML = '';

  Object.entries(MENU_DATA).forEach(([catKey, items]) => {
    const meta = SECTION_META[catKey];
    const section = document.createElement('div');
    section.className = 'menu-section';
    section.dataset.cat = catKey;

    section.innerHTML = `
      <div class="menu-section-header">
        <h2>${meta.icon} ${meta.label}</h2>
        <div class="menu-section-line"></div>
      </div>
      <div class="menu-items-grid" id="grid-${catKey}"></div>
    `;
    container.appendChild(section);

    const grid = section.querySelector(`#grid-${catKey}`);
    items.forEach(item => {
      const tagHTML = item.tags.map(t =>
        `<span class="tag ${TAG_LABELS[t].cls}">${TAG_LABELS[t].label}</span>`
      ).join('');

      const card = document.createElement('div');
      card.className = 'menu-item';
      card.dataset.cat = catKey;
      card.dataset.tags = item.tags.join(',');
      card.innerHTML = `
        <div class="menu-item-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="menu-item-info">
          <div class="menu-item-name">${item.name}</div>
          <div class="menu-item-desc">${item.desc}</div>
          <div class="menu-item-footer">
            <div class="menu-item-tags">${tagHTML}</div>
            <div class="menu-item-price">${item.price}</div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  });

  applyFilters();
}

function applyFilters() {
  const sections = document.querySelectorAll('.menu-section');
  sections.forEach(section => {
    const cat = section.dataset.cat;
    const catMatch = activeCategory === 'all' || activeCategory === cat;
    let visibleItems = 0;

    section.querySelectorAll('.menu-item').forEach(item => {
      const tags = item.dataset.tags.split(',');
      const dietMatch = !activeDietFilter || tags.includes(activeDietFilter);
      const show = catMatch && dietMatch;
      item.classList.toggle('hidden', !show);
      if (show) visibleItems++;
    });

    section.style.display = catMatch && visibleItems > 0 ? '' : 'none';
  });
}

// Category filters
document.querySelectorAll('.filter-tag').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    applyFilters();
  });
});

// Diet filters
document.querySelectorAll('.diet-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    const diet = btn.dataset.diet;
    const activeClass = `active-${diet}`;
    const isActive = btn.classList.contains(activeClass);

    document.querySelectorAll('.diet-filter').forEach(b => {
      b.classList.remove('active-halal', 'active-vegan', 'active-gf');
    });

    if (!isActive) {
      btn.classList.add(activeClass);
      activeDietFilter = diet;
    } else {
      activeDietFilter = null;
    }
    applyFilters();
  });
});

buildMenu();
