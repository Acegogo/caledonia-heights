import { Link } from 'react-router-dom';
import { IconBrandWhatsapp, IconMail } from '@tabler/icons-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerNew">
      <div className="container footerNew__top">
        <div className="footerNew__brand">
          <div className="footer-logo-wrap">
            <img src="/assets/images/logo.png" alt="Caledonia Heights" className="footer-logo" loading="lazy" decoding="async" />
          </div>
          <p className="footerNew__tagline">
            Powering the Future of Digital Infrastructure
          </p>
          <p className="footerNew__desc footer-desc text-muted">
            From smart farms and water networks to growing businesses and urban properties —
            we build, host, and maintain the technology that moves businesses forward.
          </p>

          <div className="footerNew__social">
            <a className="footerNew__socialBtn" href="https://wa.me/254708001000" target="_blank" rel="noreferrer">
              <IconBrandWhatsapp size={18} /> WhatsApp
            </a>
            <a className="footerNew__socialBtn" href="mailto:info@caledoniaheights.co.ke">
              <IconMail size={18} /> Email
            </a>
          </div>
        </div>

        <div className="footerNew__cols">
          <div className="footerNew__col">
            <div className="footerNew__title footer-heading">Company</div>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>

          <div className="footerNew__col">
            <div className="footerNew__title footer-heading">Services</div>
            <Link to="/smart-water" className="footer-link">Smart Water</Link>
            <Link to="/majismart" className="footer-link">MajiSmart</Link>
            <Link to="/ai-solutions" className="footer-link">AI Solutions</Link>
            <Link to="/services" className="footer-link">All Services</Link>
          </div>

          <div className="footerNew__col">
            <div className="footerNew__title footer-heading">Platforms</div>
            <Link to="/majismart" className="footer-link">MajiSmart</Link>
            <Link to="/smart-water" className="footer-link">NB-IoT Metering</Link>
            <Link to="/smart-water" className="footer-link">STS Prepaid</Link>
            <Link to="/platforms" className="footer-link">Platforms Overview</Link>
          </div>

          <div className="footerNew__col">
            <div className="footerNew__title footer-heading">Contact</div>
            <a href="tel:+254708001000" className="footer-link">0708 001 000</a>
            <a href="mailto:info@caledoniaheights.co.ke" className="footer-link">info@caledoniaheights.co.ke</a>
            <span className="footer-link footer-link--text footerNew__address text-muted">
              Woodvale Grove, Westlands, Nairobi, Kenya
            </span>
          </div>
        </div>
      </div>

      <div className="container footerNew__bottom">
        <div className="divider" />
        <div className="footerNew__bottomRow">
          <p>© {currentYear} Caledonia Heights Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
