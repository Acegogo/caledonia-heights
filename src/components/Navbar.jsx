import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {
  IconChevronDown,
  IconX,
  IconMenu2,
  IconBrandWhatsapp,
} from '@tabler/icons-react';
import './Navbar.css';

const NAV_SERVICES = [
  { label: 'Smart Water Metering', to: '/smart-water' },
  { label: 'MajiGrid Irrigation', to: '/majigrid' },
  { label: 'AI Business Agents', to: '/ai-solutions' },
  { label: 'Custom Software', to: '/services' },
  { label: 'Enterprise ERP', to: '/services' },
  { label: 'Cloud Hosting', to: '/services' },
];

const NAV_PLATFORMS = [
  { label: 'MajiGrid', to: '/majigrid' },
  { label: 'NB-IoT Metering', to: '/smart-water' },
  { label: 'STS Prepaid Water', to: '/smart-water' },
  { label: 'All Platforms', to: '/platforms' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeTimer = useRef(null);

  const openDropdown = (name) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    // Close menus when the route changes (e.g. browser back/forward)
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional reset on navigation
    setMenuOpen(false);
    setActiveDropdown(null);
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

  const closeDropdown = () => setActiveDropdown(null);
  const closeAll = () => { setMenuOpen(false); setActiveDropdown(null); };

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
        <NavLink to="/" className="mobile-nav-link" onClick={closeAll}>Home</NavLink>
        <NavLink to="/about" className="mobile-nav-link" onClick={closeAll}>About</NavLink>

        <div className="mobile-accordion">
          <button
            type="button"
            className="mobile-accordion__trigger"
            onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
          >
            <span>Services</span>
            <IconChevronDown
              size={18}
              className={`mobile-accordion__chevron ${activeDropdown === 'services' ? 'is-open' : ''}`}
            />
          </button>
          {activeDropdown === 'services' && (
            <div className="mobile-accordion__panel">
              {NAV_SERVICES.map((item) => (
                <NavLink key={item.label} to={item.to} className="mobile-sub-link" onClick={closeAll}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <div className="mobile-accordion">
          <button
            type="button"
            className="mobile-accordion__trigger"
            onClick={() => setActiveDropdown(activeDropdown === 'platforms' ? null : 'platforms')}
          >
            <span>Platforms</span>
            <IconChevronDown
              size={18}
              className={`mobile-accordion__chevron ${activeDropdown === 'platforms' ? 'is-open' : ''}`}
            />
          </button>
          {activeDropdown === 'platforms' && (
            <div className="mobile-accordion__panel">
              {NAV_PLATFORMS.map((item) => (
                <NavLink key={item.label} to={item.to} className="mobile-sub-link" onClick={closeAll}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/ai-solutions" className="mobile-nav-link" onClick={closeAll}>AI Solutions</NavLink>
        <NavLink to="/projects" className="mobile-nav-link" onClick={closeAll}>Projects</NavLink>
        <NavLink to="/contact" className="mobile-nav-link" onClick={closeAll}>Contact</NavLink>
      </nav>

      <div className="mobile-overlay__cta">
        <Link to="/contact" className="mobile-cta-btn mobile-cta-btn--primary" onClick={closeAll}>
          Get in Touch →
        </Link>
        <a
          href="https://wa.me/254708001000"
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

            <div className="nav-item--dropdown" onMouseLeave={closeDropdown}>
              <Link to="/services" className="nav-link" onClick={closeDropdown}>Services</Link>
              <button
                type="button"
                className="nav-chevron"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveDropdown(activeDropdown === 'services' ? null : 'services'); }}
                aria-label="Toggle services menu"
              >
                <IconChevronDown size={14} />
              </button>
              {activeDropdown === 'services' && (
                <div className="dropdown-panel">
                  {NAV_SERVICES.map((item) => (
                    <Link key={item.label} to={item.to} className="dropdown-item" onClick={closeDropdown}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <div className="nav-item--dropdown" onMouseLeave={closeDropdown}>
              <Link to="/platforms" className="nav-link" onClick={closeDropdown}>Platforms</Link>
              <button
                type="button"
                className="nav-chevron"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveDropdown(activeDropdown === 'platforms' ? null : 'platforms'); }}
                aria-label="Toggle platforms menu"
              >
                <IconChevronDown size={14} />
              </button>
              {activeDropdown === 'platforms' && (
                <div className="dropdown-panel">
                  {NAV_PLATFORMS.map((item) => (
                    <Link key={item.label} to={item.to} className="dropdown-item" onClick={closeDropdown}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/ai-solutions" className="nav-link">AI Solutions</NavLink>
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
