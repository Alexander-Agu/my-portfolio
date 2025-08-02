import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Home from './pages/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
