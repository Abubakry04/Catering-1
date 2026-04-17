import React, { useState, useEffect } from 'react';
import { 
  Users, Calendar, DollarSign, Clock, 
  TrendingUp, ArrowUpRight, ArrowDownRight, MoreHorizontal 
} from 'lucide-react';

const DashboardView = () => {
  const [stats, setStats] = useState({
    totalBookings: 148,
    pendingBookings: 3,
    revenue: "₦42.5M",
    growth: "+12.5%"
  });

  const recentBookings = [
    { ref:'LC-A001', client:'Adaeze & Femi Okafor', event:'Wedding', date:'2026-05-18', guests:400, value:'₦4,800,000', status:'confirmed' },
    { ref:'LC-A002', client:'TechBridge Nigeria',   event:'Corporate', date:'2026-05-22', guests:150, value:'₦1,350,000', status:'confirmed' },
    { ref:'LC-A003', client:'Chidinma Nwosu',       event:'Birthday',  date:'2026-06-01', guests:80,  value:'₦680,000',  status:'pending' },
    { ref:'LC-A004', client:'Babatunde Martins',    event:'Corporate', date:'2026-06-10', guests:200, value:'₦1,800,000', status:'confirmed' },
    { ref:'LC-A005', client:'Amara Osei',            event:'Graduation',date:'2026-06-20', guests:120, value:'₦1,020,000', status:'pending' },
  ];

  const REVENUE_DATA = [65, 48, 80, 55, 92, 70, 110, 88, 75, 95, 130, 145];
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="dashboard-grid">
      {/* Stats Row */}
      <div className="stats-grid">
        <div className="admin-stat-card">
          <div className="stat-icon-wrap" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
            <Calendar size={20} />
          </div>
          <div className="stat-data">
            <span className="label">Total Bookings</span>
            <div className="value-row">
              <h3>{stats.totalBookings}</h3>
              <span className="trend positive"><ArrowUpRight size={14} /> 8%</span>
            </div>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-icon-wrap" style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>
            <Clock size={20} />
          </div>
          <div className="stat-data">
            <span className="label">Pending Requests</span>
            <div className="value-row">
              <h3>{stats.pendingBookings}</h3>
              <span className="badge-new">New</span>
            </div>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-icon-wrap" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
            <DollarSign size={20} />
          </div>
          <div className="stat-data">
            <span className="label">Total Revenue</span>
            <div className="value-row">
              <h3>{stats.revenue}</h3>
              <span className="trend positive"><ArrowUpRight size={14} /> 12%</span>
            </div>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-icon-wrap" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>
            <Users size={20} />
          </div>
          <div className="stat-data">
            <span className="label">Customers</span>
            <div className="value-row">
              <h3>2.4K</h3>
              <span className="trend negative"><ArrowDownRight size={14} /> 2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts & Activity */}
      <div className="admin-row-2">
        <div className="admin-card revenue-chart-card">
          <div className="card-header">
            <h4>Revenue Overview</h4>
            <div className="chart-legend">
              <span className="dot"></span>
              <span>2026 Earnings (Millions ₦)</span>
            </div>
          </div>
          <div className="chart-container" id="revenueChart">
            {REVENUE_DATA.map((val, idx) => (
              <div key={idx} className="mini-bar-wrap">
                <div 
                  className="mini-bar" 
                  style={{ height: `${(val / 150) * 100}%` }}
                ></div>
                <div className="mini-bar-label">{MONTHS[idx]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card activity-card">
          <div className="card-header">
            <h4>Quick Actions</h4>
          </div>
          <div className="quick-actions-grid">
            <button className="q-action">New Booking</button>
            <button className="q-action">Update Menu</button>
            <button className="q-action">Staff Roster</button>
            <button className="q-action">Export PDF Report</button>
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="admin-card table-card">
        <div className="card-header">
          <h4>Recent Bookings</h4>
          <button className="btn btn-ghost btn-sm">View All</button>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Event</th>
                <th>Date</th>
                <th>Guests</th>
                <th>Value</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((b, i) => (
                <tr key={i}>
                  <td><strong>{b.client}</strong></td>
                  <td>{b.event}</td>
                  <td>{b.date}</td>
                  <td>{b.guests}</td>
                  <td className="admin-val">{b.value}</td>
                  <td><span className={`status status-${b.status}`}>{b.status}</span></td>
                  <td>
                    <button className="icon-btn-sm"><MoreHorizontal size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
