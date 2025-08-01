import React, { useEffect, useState } from 'react';
import './header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY <= 50 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Smooth scroll to section
  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-container">
          <div className="logo">Alexander Agu</div>

          <div className="nav-links">
            <a onClick={() => scrollToSection('#home')}>Home</a>
            <a onClick={() => scrollToSection('#about')}>About</a>
            <a onClick={() => scrollToSection('#experience')}>Experience</a>
            <a onClick={() => scrollToSection('#projects')}>Projects</a>
            <a onClick={() => scrollToSection('#contact')}>Contact</a>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span id="menu-icon">{isMobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} id="mobile-menu">
          <a onClick={() => scrollToSection('#home')}>Home</a>
          <a onClick={() => scrollToSection('#about')}>About</a>
          <a onClick={() => scrollToSection('#experience')}>Experience</a>
          <a onClick={() => scrollToSection('#projects')}>Projects</a>
          <a onClick={() => scrollToSection('#contact')}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
