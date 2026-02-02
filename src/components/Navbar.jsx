import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-logo">
          <img src="/assets/images/logo.png" alt="Caledonia Heights" className="logo-img" />
        </Link>

        <nav className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/platforms">Platforms</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/why-us">Why Us</Link>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
