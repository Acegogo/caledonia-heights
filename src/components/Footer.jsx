import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col">
                    <h3 className="footer-logo">Caledonia Heights</h3>
                    <p className="footer-text">
                        A technology powerhouse delivering digital platforms, enterprise systems, and mission-critical infrastructure.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/solutions">Enterprise Systems</a></li>
                        <li><a href="/solutions">IoT & NB-IoT</a></li>
                        <li><a href="/solutions">Web & Mobile App Dev</a></li>
                        <li><a href="/solutions">Hosting & Maintenance</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/projects">Case Studies</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Construct</h4>
                    <p className="footer-text">
                        Nairobi, Kenya<br />
                        info@caledoniaheights.co.ke
                    </p>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; {currentYear} Caledonia Heights. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
