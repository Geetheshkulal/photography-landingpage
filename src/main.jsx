import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// in your main JavaScript file (e.g., index.js or App.js)

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
