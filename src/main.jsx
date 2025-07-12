import { createRoot } from 'react-dom/client'
import React from 'react'
import './styles.css'
import App from './App'
import Overlay from './Overlay'
import About from './About'

createRoot(document.querySelector('#root')).render(
  <>
    <div style={{ position: 'relative' }}>
      <App />
      <Overlay />
    </div>
    <About />
  </>
)
