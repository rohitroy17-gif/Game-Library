import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
        <App></App>
    </HelmetProvider>
  </React.StrictMode>,
)
