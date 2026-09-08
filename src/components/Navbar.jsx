import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {
  IconX,
  IconMenu2,
  IconBrandWhatsapp,
} from '@tabler/icons-react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the mobile menu when the route changes (e.g. browser back/forward)
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional reset on navigation
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = () => setMenuOpen(false);

  const mobileMenu = createPortal(
    <div className={`mobile-overlay ${menuOpen ? 'mobile-overlay--open' : ''}`} aria-hidden={!menuOpen}>
      <div className="mobile-overlay__header">
        <Link to="/" onClick={closeAll}>
          <img src="/assets/images/logo.png" alt="Caledonia Heights" className="mobile-overlay__logo" />
        </Link>
        <button type="button" className="mobile-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <IconX size={24} />
        </button>
      </div>

      <nav className="mobile-overlay__nav" aria-label="Mobile navigation">
        <NavLink to="/" className="mobile-nav-link" onClick={closeAll} end>Home</NavLink>
        <NavLink to="/about" className="mobile-nav-link" onClick={closeAll}>About</NavLink>
        <NavLink to="/meters" className="mobile-nav-link" onClick={closeAll}>Meters</NavLink>
        <NavLink to="/majigrid" className="mobile-nav-link" onClick={closeAll}>MajiGrid</NavLink>
        <NavLink to="/projects" className="mobile-nav-link" onClick={closeAll}>Projects</NavLink>
        <NavLink to="/contact" className="mobile-nav-link" onClick={closeAll}>Contact</NavLink>
      </nav>

      <div className="mobile-overlay__cta">
        <Link to="/contact" className="mobile-cta-btn mobile-cta-btn--primary" onClick={closeAll}>
          Get in Touch →
        </Link>
        <a
          href="https://wa.me/254116593201"
          className="mobile-cta-btn mobile-cta-btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeAll}
        >
          <IconBrandWhatsapp size={18} /> WhatsApp
        </a>
      </div>
    </div>,
    document.body,
  );

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo-link" aria-label="Caledonia Heights home">
            <div className="nav-logo-wrap">
              <img src="/assets/images/logo.png" alt="Caledonia Heights" className="nav-logo" />
            </div>
          </Link>

          <nav className="navbar__desktop" aria-label="Primary navigation">
            <NavLink to="/" className="nav-link" end>Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/meters" className="nav-link">Meters</NavLink>
            <NavLink to="/majigrid" className="nav-link">MajiGrid</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </nav>

          <Link to="/contact" className="navbar__cta btn-primary btn--sm">Get in Touch</Link>

          <button
            type="button"
            className="navbar__hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <IconMenu2 size={26} />
          </button>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
