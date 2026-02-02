import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Section from '../components/Section';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="container hero-content">
                    <h1 className="hero-title">
                        We Build, Host, and Maintain <br />
                        <span className="text-accent">Critical Systems.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Caledonia Heights is a technology powerhouse delivering digital platforms,
                        enterprise systems, smart utility solutions, and long-term managed hosting services
                        for government and large enterprises.
                    </p>
                    <div className="hero-actions">
                        <Button to="/contact" variant="primary">Request Proposal</Button>
                        <Button to="/solutions" variant="secondary" className="btn-outline-light">Explore Solutions</Button>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* TRUST INDICATORS */}
            <div className="trust-bar">
                <div className="container">
                    <p>Trusted technology partner for mission-critical projects</p>
                    {/* Logos could go here later */}
                </div>
            </div>

            {/* SERVICES SUMMARY */}
            <Section background="light" id="services">
                <div className="section-header text-center" style={{ margin: "0 auto" }}>
                    <h2 className="section-title">End-to-End Technology Services</h2>
                    <p className="section-subtitle">
                        From design and development to secure hosting and SLA-based maintenance.
                    </p>
                </div>

                <div className="grid grid-3-cols">
                    <Card>
                        <h3 className="card-title">Enterprise Systems & ERP</h3>
                        <p className="card-content">
                            Custom software solutions for complex business processes, including property management, school management, and automated settlements.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="card-title">Smart Utilities & IoT</h3>
                        <p className="card-content">
                            NB-IoT water metering, smart irrigation, and remote monitoring platforms that drive efficiency and revenue protection.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="card-title">Managed Hosting & Support</h3>
                        <p className="card-content">
                            Secure, high-availability hosting with 24/7 monitoring and long-term maintenance contracts for government and private sectors.
                        </p>
                    </Card>
                </div>

                <div className="text-center" style={{ marginTop: "3rem" }}>
                    <Button to="/solutions" variant="secondary">View All Services</Button>
                </div>
            </Section>

            {/* FEATURED PROJECTS */}
            <Section background="white">
                <div className="section-header">
                    <h2 className="section-title">Proven Project Experience</h2>
                    <p className="section-subtitle">
                        Delivering robust platforms for real estate, utilities, and civil works.
                    </p>
                </div>

                <div className="grid grid-2-cols">
                    <div className="project-preview">
                        <div className="project-info">
                            <h3>STS Prepaid Water Management</h3>
                            <p>
                                A production-ready payment and token management platform with M-Pesa integration
                                and automated SMS delivery.
                            </p>
                            <ul className="project-tags">
                                <li>FinTech</li>
                                <li>Utility</li>
                                <li>Cloud System</li>
                            </ul>
                            <Link to="/platforms" className="project-link">View Platform &rarr;</Link>
                        </div>
                    </div>

                    <div className="project-preview">
                        <div className="project-info">
                            <h3>NB-IoT Smart Metering</h3>
                            <p>
                                End-to-end IoT solution for utilities featuring remote reading, leak detection,
                                and automated billing for large-scale water networks.
                            </p>
                            <ul className="project-tags">
                                <li>IoT</li>
                                <li>Hardware + Software</li>
                                <li>Big Data</li>
                            </ul>
                            <Link to="/platforms" className="project-link">View Platform &rarr;</Link>
                        </div>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: "3rem" }}>
                    <Button to="/projects">View All Projects</Button>
                </div>
            </Section>

            {/* CTA SECTION */}
            <Section background="dark" className="cta-section">
                <div className="cta-content text-center">
                    <h2 className="section-title">Ready for a Long-Term Technology Partner?</h2>
                    <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
                        We are ready to qualify for upcoming government framework contracts and enterprise tenders.
                        Let's discuss how Caledonia Heights can support your mission-critical infrastructure.
                    </p>
                    <Button to="/contact" className="btn-white">Contact Our Team</Button>
                </div>
            </Section>
        </div>
    );
};

export default Home;
