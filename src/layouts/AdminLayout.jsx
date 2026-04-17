import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  BarChart3, Calendar, Users, Utensils, 
  CreditCard, UserCheck, Settings, Bell, Search, 
  LogOut, ExternalLink 
} from 'lucide-react';

const AdminLayout = () => {
  return (
    <div className="admin-container">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <span className="logo-icon">✦</span>
          <span className="logo-text">Adusab Admin</span>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-group">
            <span className="group-label">General</span>
            <NavLink to="/admin" end className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <BarChart3 size={18} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/admin/bookings" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <Calendar size={18} />
              <span>Bookings</span>
              <span className="nav-badge">3</span>
            </NavLink>
            <NavLink to="/admin/customers" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <Users size={18} />
              <span>Customers</span>
            </NavLink>
          </div>

          <div className="nav-group">
            <span className="group-label">Management</span>
            <NavLink to="/admin/menu" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <Utensils size={18} />
              <span>Menu Manager</span>
            </NavLink>
            <NavLink to="/admin/payments" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <CreditCard size={18} />
              <span>Payments</span>
            </NavLink>
            <NavLink to="/admin/staff" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <UserCheck size={18} />
              <span>Staff Management</span>
            </NavLink>
          </div>

          <div className="nav-group" style={{ marginTop: 'auto' }}>
            <NavLink to="/admin/settings" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <Settings size={18} />
              <span>Settings</span>
            </NavLink>
            <NavLink to="/" className="sidebar-link exit-link">
              <LogOut size={18} />
              <span>Exit Admin</span>
            </NavLink>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <div className="topbar-left">
            <h2 id="pageTitle">Admin Workspace</h2>
          </div>
          <div className="topbar-right">
            <div className="topbar-search">
              <Search size={18} />
              <input type="text" placeholder="Search anything..." />
            </div>
            <button className="icon-btn" id="notifBtn">
              <Bell size={20} />
              <span className="notif-dot"></span>
            </button>
            <div className="topbar-divider"></div>
            <div className="admin-profile">
              <div className="profile-img">EO</div>
              <div className="profile-info">
                <strong>Emeka Okonkwo</strong>
                <span>Executive Chef</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Panel Content */}
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
