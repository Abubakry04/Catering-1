import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Global and Layout Styles
import './styles/global.css'
import './styles/pages.css'

// Page Specific Styles
import './styles/home.css'
import './styles/menu.css'
import './styles/booking.css'
import './styles/admin.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
