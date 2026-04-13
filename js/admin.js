/* ============================================
   ADMIN DASHBOARD JAVASCRIPT
   ============================================ */

// ---------- MOCK DATA ----------
const BOOKINGS = [
  { ref:'LC-A001', client:'Adaeze & Femi Okafor', event:'Wedding', date:'2026-05-18', location:'Eko Hotel, V/I', guests:400, value:'₦4,800,000', status:'confirmed' },
  { ref:'LC-A002', client:'TechBridge Nigeria',   event:'Corporate', date:'2026-05-22', location:'Sheraton Lagos',    guests:150, value:'₦1,350,000', status:'confirmed' },
  { ref:'LC-A003', client:'Chidinma Nwosu',       event:'Birthday',  date:'2026-06-01', location:'Private Residence, Lekki', guests:80,  value:'₦680,000',  status:'pending' },
  { ref:'LC-A004', client:'Babatunde Martins',    event:'Corporate', date:'2026-06-10', location:'Transcorp Hilton, Abuja',  guests:200, value:'₦1,800,000', status:'confirmed' },
  { ref:'LC-A005', client:'Amara Osei',            event:'Graduation',date:'2026-06-20', location:'Radisson Blu, Lagos',      guests:120, value:'₦1,020,000', status:'pending' },
  { ref:'LC-A006', client:'James & Ngozi Eze',   event:'Wedding',   date:'2026-07-05', location:'Southern Sun, V/I',         guests:600, value:'₦7,200,000', status:'processing' },
  { ref:'LC-A007', client:'First Bank Plc',       event:'Corporate', date:'2026-07-12', location:'HQ, Marina',                guests:300, value:'₦2,700,000', status:'pending' },
];

const CUSTOMERS = [
  { name:'Adaeze Okafor',    email:'adaeze@gmail.com',    phone:'+234 812 000 0001', events:3, spend:'₦6.2M', last:'2026-03-15' },
  { name:'TechBridge Nigeria',email:'events@techbridge.ng',phone:'+234 812 000 0002', events:5, spend:'₦9.4M', last:'2026-04-02' },
  { name:'Chidinma Nwosu',   email:'chidinma@yahoo.com',  phone:'+234 812 000 0003', events:2, spend:'₦1.3M', last:'2026-01-20' },
  { name:'Babatunde Martins',email:'babatunde@company.ng',phone:'+234 812 000 0004', events:4, spend:'₦7.8M', last:'2026-03-30' },
  { name:'Amara Osei',       email:'amara@gmail.com',     phone:'+234 812 000 0005', events:1, spend:'₦1.0M', last:'2026-04-10' },
];

const MENU_ADMIN = [
  { name:'Grand Jollof Rice', cat:'Rice & Grains', price:'₦4,500', img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&q=70' },
  { name:'Heritage Grilled Platter', cat:'Proteins', price:'₦6,500', img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=70' },
  { name:'Egusi Soup', cat:'Soups', price:'₦3,500', img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&q=70' },
  { name:'Premium Small Chops', cat:'Small Chops', price:'₦2,500', img:'https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=300&q=70' },
  { name:'Zobo Royale', cat:'Drinks', price:'₦800', img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&q=70' },
  { name:'Fresh Fruit Platter', cat:'Desserts', price:'₦2,000', img:'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=300&q=70' },
];

const PAYMENTS = [
  { client:'Adaeze Okafor',    event:'Wedding',  amount:'₦4,800K', paid:'₦4,800K', balance:'₦0',      method:'Bank Transfer', status:'completed' },
  { client:'TechBridge Nigeria',event:'Corporate',amount:'₦1,350K', paid:'₦700K',  balance:'₦650K',   method:'Paystack',      status:'pending' },
  { client:'Chidinma Nwosu',   event:'Birthday', amount:'₦680K',   paid:'₦272K',  balance:'₦408K',   method:'Cash',          status:'pending' },
  { client:'Babatunde Martins',event:'Corporate',amount:'₦1,800K', paid:'₦1,800K',balance:'₦0',      method:'Bank Transfer', status:'completed' },
  { client:'James & Ngozi Eze',event:'Wedding',  amount:'₦7,200K', paid:'₦2,880K',balance:'₦4,320K', method:'Paystack',      status:'processing' },
];

const STAFF = [
  { name:'Emeka Okonkwo',   role:'Executive Chef',     phone:'+234 801 000 001', available:'Yes', events:120, status:'active' },
  { name:'Amaka Nwachukwu', role:'Head Chef (Nigerian)',phone:'+234 801 000 002', available:'Yes', events:98,  status:'active' },
  { name:'Kemi Adeyemi',    role:'Events Director',    phone:'+234 801 000 003', available:'No',  events:115, status:'on-event' },
  { name:'Ibrahim Musa',    role:'Pastry Chef',        phone:'+234 801 000 004', available:'Yes', events:87,  status:'active' },
  { name:'Tunde Alabi',     role:'Waiter (Senior)',    phone:'+234 801 000 005', available:'No',  events:203, status:'on-event' },
  { name:'Bisi Olawale',    role:'Kitchen Assistant',  phone:'+234 801 000 006', available:'Yes', events:45,  status:'active' },
];

const REVENUE_DATA = [
  { month:'Jan', val:65 }, { month:'Feb', val:48 }, { month:'Mar', val:80 },
  { month:'Apr', val:55 }, { month:'May', val:92 }, { month:'Jun', val:70 },
  { month:'Jul', val:110 }, { month:'Aug', val:88 }, { month:'Sep', val:75 },
  { month:'Oct', val:95 }, { month:'Nov', val:130 }, { month:'Dec', val:145 },
];

// ---------- SIDEBAR NAV ----------
document.querySelectorAll('.sidebar-link[data-panel]').forEach(link => {
  link.addEventListener('click', () => {
    switchPanel(link.dataset.panel);
  });
});

function switchPanel(panelId) {
  // Deactivate all links
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  document.querySelector(`[data-panel="${panelId}"]`)?.classList.add('active');

  // Hide all panels
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`panel-${panelId}`)?.classList.add('active');

  // Update title
  const titles = {
    dashboard: 'Dashboard', bookings: 'Bookings', customers: 'Customers',
    'menu-manager': 'Menu Manager', payments: 'Payments', staff: 'Staff', settings: 'Settings'
  };
  document.getElementById('pageTitle').textContent = titles[panelId] || panelId;
}

// ---------- RENDER REVENUE CHART ----------
function renderRevenueChart() {
  const container = document.getElementById('revenueChart');
  if (!container) return;
  const max = Math.max(...REVENUE_DATA.map(d => d.val));
  container.innerHTML = REVENUE_DATA.map(d => `
    <div class="mini-bar-wrap">
      <div class="mini-bar" style="height:${(d.val/max)*100}px;" title="₦${d.val * 100}K"></div>
      <div class="mini-bar-label">${d.month}</div>
    </div>
  `).join('');
}

// ---------- RENDER TABLES ----------
function renderRecentBookings() {
  const tbody = document.getElementById('recentBookingsTable');
  if (!tbody) return;
  tbody.innerHTML = BOOKINGS.slice(0, 5).map(b => `
    <tr>
      <td><strong>${b.client}</strong></td>
      <td>${b.event}</td>
      <td>${formatDateDisplay(b.date)}</td>
      <td>${b.guests}</td>
      <td style="color:var(--gold-light);font-weight:700;">${b.value}</td>
      <td><span class="status status-${b.status}">${b.status}</span></td>
      <td><div class="row-actions">
        <button class="row-btn row-btn-view" onclick="showToastAdmin('Viewing ${b.client}…','👁️')">View</button>
        <button class="row-btn row-btn-edit" onclick="showToastAdmin('Editing booking…','✏️')">Edit</button>
      </div></td>
    </tr>
  `).join('');
}

function renderAllBookings() {
  const tbody = document.getElementById('allBookingsTable');
  if (!tbody) return;
  tbody.innerHTML = BOOKINGS.map(b => `
    <tr>
      <td><code style="font-size:0.75rem;color:var(--gold);">${b.ref}</code></td>
      <td><strong>${b.client}</strong></td>
      <td>${b.event}</td>
      <td>${formatDateDisplay(b.date)}</td>
      <td>${b.location}</td>
      <td>${b.guests}</td>
      <td style="color:var(--gold-light);font-weight:700;">${b.value}</td>
      <td><span class="status status-${b.status}">${b.status}</span></td>
      <td><div class="row-actions">
        <button class="row-btn row-btn-view" onclick="showToastAdmin('Viewing booking ${b.ref}…','👁️')">View</button>
        <button class="row-btn row-btn-edit" onclick="showToastAdmin('Editing…','✏️')">Edit</button>
        <button class="row-btn row-btn-delete" onclick="confirmDelete()">Del</button>
      </div></td>
    </tr>
  `).join('');
}

function renderCustomers() {
  const tbody = document.getElementById('customersTable');
  if (!tbody) return;
  tbody.innerHTML = CUSTOMERS.map(c => `
    <tr>
      <td><strong>${c.name}</strong></td>
      <td>${c.email}</td>
      <td>${c.phone}</td>
      <td>${c.events}</td>
      <td style="color:var(--gold-light);font-weight:700;">${c.spend}</td>
      <td>${c.last}</td>
      <td><div class="row-actions">
        <button class="row-btn row-btn-view" onclick="showToastAdmin('Viewing client…','👁️')">View</button>
        <button class="row-btn row-btn-edit" onclick="showToastAdmin('Editing…','✏️')">Edit</button>
      </div></td>
    </tr>
  `).join('');
}

function renderMenuManager() {
  const grid = document.getElementById('menuManagerGrid');
  if (!grid) return;
  grid.innerHTML = MENU_ADMIN.map(item => `
    <div class="menu-admin-card">
      <div class="mac-img"><img src="${item.img}" alt="${item.name}" loading="lazy" /></div>
      <div class="mac-body">
        <div class="mac-top"><h4>${item.name}</h4><div class="mac-price">${item.price}/head</div></div>
        <div class="mac-cat">${item.cat}</div>
        <div class="mac-actions">
          <button class="row-btn row-btn-edit" onclick="showToastAdmin('Editing item…','✏️')">Edit</button>
          <button class="row-btn row-btn-delete" onclick="confirmDelete()">Delete</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderPayments() {
  const tbody = document.getElementById('paymentsTable');
  if (!tbody) return;
  tbody.innerHTML = PAYMENTS.map(p => `
    <tr>
      <td><strong>${p.client}</strong></td>
      <td>${p.event}</td>
      <td style="color:var(--text-p);font-weight:700;">${p.amount}</td>
      <td style="color:#4ade80;font-weight:700;">${p.paid}</td>
      <td style="color:${p.balance === '₦0' ? 'var(--text-m)' : '#f87171'};font-weight:700;">${p.balance}</td>
      <td>${p.method}</td>
      <td><span class="status status-${p.status}">${p.status}</span></td>
    </tr>
  `).join('');
}

function renderStaff() {
  const tbody = document.getElementById('staffTable');
  if (!tbody) return;
  tbody.innerHTML = STAFF.map(s => `
    <tr>
      <td><strong>${s.name}</strong></td>
      <td>${s.role}</td>
      <td>${s.phone}</td>
      <td>${s.available}</td>
      <td>${s.events}</td>
      <td><span class="status status-${s.status === 'active' ? 'confirmed' : 'processing'}">${s.status}</span></td>
    </tr>
  `).join('');
}

// ---------- MODALS ----------
function openModal(id) {
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// ---------- ACTIONS ----------
function submitAdminBooking() {
  closeModal('newBookingModal');
  showToastAdmin('New booking created successfully!', '✅');
}

function saveMenuItem() {
  closeModal('addMenuModal');
  showToastAdmin('Menu item saved!', '✅');
}

function confirmDelete() {
  if (confirm('Are you sure you want to delete this record?')) {
    showToastAdmin('Record deleted.', '🗑️');
  }
}

// ---------- TOAST ----------
function showToastAdmin(msg, icon = '✦') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.cssText = `
      position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(100px);
      background:#1e1e1e;border:1px solid var(--gold);color:#e8e0d0;
      padding:1rem 1.5rem;border-radius:1rem;font-size:0.95rem;font-weight:500;
      z-index:9999;transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
      display:flex;align-items:center;gap:0.75rem;max-width:400px;
      box-shadow:0 8px 32px rgba(201,168,76,0.2);
    `;
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="font-size:1.25rem;">${icon}</span><span>${msg}</span>`;
  setTimeout(() => { toast.style.transform = 'translateX(-50%) translateY(0)'; }, 10);
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.transform = 'translateX(-50%) translateY(100px)'; }, 3500);
}

// ---------- NOTIFICATION BUTTON ----------
document.getElementById('notifBtn')?.addEventListener('click', () => {
  showToastAdmin('3 pending bookings need your attention', '🔔');
});

// ---------- BOOKING SEARCH ----------
document.getElementById('bookingSearch')?.addEventListener('input', function() {
  const q = this.value.toLowerCase();
  document.querySelectorAll('#allBookingsTable tr').forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
});

// ---------- READ BOOKINGS FROM LOCALSTORAGE ----------
function loadLocalStorageBookings() {
  try {
    const stored = JSON.parse(localStorage.getItem('luxecater_bookings') || '[]');
    stored.forEach(b => {
      BOOKINGS.unshift({
        ref: b.ref || 'LC-NEW',
        client: b.name || 'Unknown',
        event: b.eventType || 'Event',
        date: b.date || '—',
        location: b.location || '—',
        guests: b.guests || '—',
        value: '₦ Quote Pending',
        status: 'pending'
      });
    });
    document.getElementById('pendingCount').textContent =
      BOOKINGS.filter(b => b.status === 'pending').length;
  } catch(e) {}
}

// ---------- UTILS ----------
function formatDateDisplay(d) {
  if (!d || d === '—') return '—';
  return new Date(d).toLocaleDateString('en-NG', { day:'2-digit', month:'short', year:'numeric' });
}

// ---------- INIT ----------
loadLocalStorageBookings();
renderRevenueChart();
renderRecentBookings();
renderAllBookings();
renderCustomers();
renderMenuManager();
renderPayments();
renderStaff();
