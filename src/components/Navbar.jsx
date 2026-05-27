import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IconChevronDown, IconMenu2, IconX } from '@tabler/icons-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeDropdown = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close menus when the route changes (e.g. browser back/forward)
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional reset on navigation
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeDropdown();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!activeDropdown) return;
    const onClickOutside = (e) => {
      if (!e.target.closest('.nav__dropdown')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [activeDropdown]);

  const navLinkClass = ({ isActive }) => `navlink ${isActive ? 'navlink--active' : ''}`;

  const servicesActive = ['/services', '/smart-water', '/majismart', '/ai-solutions'].some(
    (path) => location.pathname === path || location.pathname.startsWith(`${path}/`),
  );
  const platformsActive = ['/platforms', '/smart-water', '/majismart'].some(
    (path) => location.pathname === path || location.pathname.startsWith(`${path}/`),
  );

  return (
    <header className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Caledonia Heights home" onClick={closeDropdown}>
          <img src="/assets/images/logo.png" alt="Caledonia Heights" className="nav__logo" />
        </Link>

        <nav className="nav__links" aria-label="Primary navigation">
          <NavLink to="/" className={navLinkClass} end onClick={closeDropdown}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeDropdown}>About</NavLink>

          <div className={`nav__dropdown nav-item--dropdown${activeDropdown === 'services' ? ' is-open' : ''}`}>
            <NavLink
              to="/services"
              className={({ isActive }) => `navlink ${isActive || servicesActive ? 'navlink--active' : ''}`}
              onClick={() => setActiveDropdown(null)}
            >
              Services
            </NavLink>
            <button
              type="button"
              className="nav-chevron"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveDropdown(activeDropdown === 'services' ? null : 'services');
              }}
              aria-label="Toggle services menu"
              aria-expanded={activeDropdown === 'services'}
            >
              <IconChevronDown size={14} />
            </button>
            {activeDropdown === 'services' && (
              <div className="nav__dropdownMenu nav__dropdownMenu--open dropdown-panel" role="menu">
                <Link to="/smart-water" className="dropdown-item" role="menuitem" onClick={closeDropdown}>Smart Water Metering</Link>
                <Link to="/majismart" className="dropdown-item" role="menuitem" onClick={closeDropdown}>MajiSmart Irrigation</Link>
                <Link to="/ai-solutions" className="dropdown-item" role="menuitem" onClick={closeDropdown}>AI Business Agents</Link>
                <Link to="/services" className="dropdown-item" role="menuitem" onClick={closeDropdown}>Custom Software</Link>
                <Link to="/services" className="dropdown-item" role="menuitem" onClick={closeDropdown}>Enterprise ERP</Link>
                <Link to="/services" className="dropdown-item" role="menuitem" onClick={closeDropdown}>Cloud Hosting</Link>
              </div>
            )}
          </div>

          <div className={`nav__dropdown nav-item--dropdown${activeDropdown === 'platforms' ? ' is-open' : ''}`}>
            <NavLink
              to="/platforms"
              className={({ isActive }) => `navlink ${isActive || platformsActive ? 'navlink--active' : ''}`}
              onClick={() => setActiveDropdown(null)}
            >
              Platforms
            </NavLink>
            <button
              type="button"
              className="nav-chevron"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveDropdown(activeDropdown === 'platforms' ? null : 'platforms');
              }}
              aria-label="Toggle platforms menu"
              aria-expanded={activeDropdown === 'platforms'}
            >
              <IconChevronDown size={14} />
            </button>
            {activeDropdown === 'platforms' && (
              <div className="nav__dropdownMenu nav__dropdownMenu--open dropdown-panel" role="menu">
                <Link to="/majismart" className="dropdown-item" role="menuitem" onClick={closeDropdown}>MajiSmart</Link>
                <Link to="/smart-water" className="dropdown-item" role="menuitem" onClick={closeDropdown}>NB-IoT Metering</Link>
                <Link to="/smart-water" className="dropdown-item" role="menuitem" onClick={closeDropdown}>STS Prepaid Water</Link>
                <Link to="/platforms" className="dropdown-item" role="menuitem" onClick={closeDropdown}>All Platforms</Link>
              </div>
            )}
          </div>

          <NavLink to="/ai-solutions" className={navLinkClass} onClick={closeDropdown}>AI Solutions</NavLink>
          <NavLink to="/projects" className={navLinkClass} onClick={closeDropdown}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeDropdown}>Contact</NavLink>
        </nav>

        <div className="nav__actions">
          <Link to="/contact" className="btn btn-primary" onClick={closeDropdown}>Get in Touch</Link>
          <button className="nav__burger" type="button" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <IconMenu2 size={24} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="nav__mobileOverlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="nav__mobileTop">
            <Link to="/" className="nav__brand" onClick={closeDropdown}>
              <img src="/assets/images/logo.png" alt="Caledonia Heights" className="nav__logo" />
            </Link>
            <button className="nav__close" type="button" onClick={closeDropdown} aria-label="Close menu">
              <IconX size={24} />
            </button>
          </div>

          <div className="nav__mobileLinks">
            <Link to="/" onClick={closeDropdown}>Home</Link>
            <Link to="/about" onClick={closeDropdown}>About</Link>
            <Link to="/services" onClick={closeDropdown}>Services</Link>
            <Link to="/smart-water" onClick={closeDropdown}>Smart Water</Link>
            <Link to="/majismart" onClick={closeDropdown}>MajiSmart</Link>
            <Link to="/ai-solutions" onClick={closeDropdown}>AI Solutions</Link>
            <Link to="/platforms" onClick={closeDropdown}>Platforms</Link>
            <Link to="/projects" onClick={closeDropdown}>Projects</Link>
            <Link to="/contact" onClick={closeDropdown}>Contact</Link>
          </div>

          <div className="nav__mobileCtas">
            <Link className="btn btn-primary" to="/contact" onClick={closeDropdown}>Get in Touch →</Link>
            <a className="btn btn-green" href="https://wa.me/254708001000" target="_blank" rel="noreferrer">
              WhatsApp →
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
