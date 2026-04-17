/* ============================================
   GALLERY PAGE JAVASCRIPT
   ============================================ */

const GALLERY_DATA = [
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', title: 'Grand Wedding Reception', cat: 'weddings', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', title: 'Elegant Table Setting', cat: 'corporate', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80', title: 'Chef at Work', cat: 'behind-scenes', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80', title: 'Fine Dining Setup', cat: 'corporate', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', title: 'Grilled Protein Platter', cat: 'food', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', title: 'Jollof Rice Service', cat: 'food', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80', title: 'Wedding Banquet Hall', cat: 'weddings', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', title: '50th Birthday Celebration', cat: 'parties', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', title: 'Fresh Salad Preparation', cat: 'food', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&q=80', title: 'Luxury Corporate Dinner', cat: 'corporate', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80', title: 'Street Food Station', cat: 'food', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1523635721-b55f53b2a493?w=600&q=80', title: 'Catering Team', cat: 'behind-scenes', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700&q=80', title: 'Graduation Party Spread', cat: 'parties', height: 'medium' },
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80', title: 'Fresh Ingredients', cat: 'behind-scenes', height: 'medium' },
  { src: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=700&q=80', title: 'Wedding Dessert Table', cat: 'weddings', height: 'medium' },
  { src: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=700&q=80', title: 'Birthday Brunch', cat: 'parties', height: 'medium' },
];

let activeFilter = 'all';
let currentLightboxIndex = 0;
let visibleItems = [];

function buildGallery() {
  const container = document.getElementById('galleryMasonry');
  if (!container) return;
  container.innerHTML = '';

  visibleItems = GALLERY_DATA.filter(item =>
    activeFilter === 'all' || item.cat === activeFilter
  );

  visibleItems.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.style.animation = `fadeIn 0.5s ease ${(index % 6) * 0.08}s both`;
    div.dataset.index = index;
    div.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy" />
      <div class="gallery-overlay">
        <div class="gallery-overlay-content">
          <h4>${item.title}</h4>
          <span>${getCatLabel(item.cat)}</span>
        </div>
      </div>
    `;
    div.addEventListener('click', () => openLightbox(index));
    container.appendChild(div);
  });
}

function getCatLabel(cat) {
  const map = {
    weddings: 'Wedding', corporate: 'Corporate', parties: 'Private Party',
    food: 'Food & Cuisine', 'behind-scenes': 'Behind the Scenes'
  };
  return map[cat] || cat;
}

// Filter buttons
document.querySelectorAll('.gallery-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gallery-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    buildGallery();
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCat = document.getElementById('lightboxCat');

function openLightbox(index) {
  currentLightboxIndex = index;
  const item = visibleItems[index];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxCat.textContent = getCatLabel(item.cat);
  lightbox?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + visibleItems.length) % visibleItems.length;
  openLightbox(currentLightboxIndex);
}

document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev')?.addEventListener('click', () => lightboxNav(-1));
document.getElementById('lightboxNext')?.addEventListener('click', () => lightboxNav(1));
lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox?.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  if (e.key === 'ArrowRight') lightboxNav(1);
});

buildGallery();
