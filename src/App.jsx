import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

// Admin Imports
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';

// Helper to scroll to top on navigation
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Website Routes */}
        <Route path="/" element={
          <div className="app-container">
            <Navbar />
            <main>
              <Home />
            </main>
            <Footer />
          </div>
        } />
        
        <Route path="/about" element={
          <div className="app-container">
            <Navbar />
            <main><About /></main>
            <Footer />
          </div>
        } />
        
        <Route path="/menu" element={
          <div className="app-container">
            <Navbar />
            <main><Menu /></main>
            <Footer />
          </div>
        } />
        
        <Route path="/gallery" element={
          <div className="app-container">
            <Navbar />
            <main><Gallery /></main>
            <Footer />
          </div>
        } />
        
        <Route path="/contact" element={
          <div className="app-container">
            <Navbar />
            <main><Contact /></main>
            <Footer />
          </div>
        } />
        
        <Route path="/booking" element={
          <div className="app-container">
            <Navbar />
            <main><Booking /></main>
            <Footer />
          </div>
        } />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="bookings" element={<Dashboard />} /> {/* Using same for now for demo */}
          <Route path="customers" element={<Dashboard />} />
          <Route path="menu" element={<Dashboard />} />
          <Route path="payments" element={<Dashboard />} />
          <Route path="staff" element={<Dashboard />} />
          <Route path="settings" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
