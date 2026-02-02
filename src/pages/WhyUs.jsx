import Section from '../components/Section';
import Card from '../components/Card';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <div className="why-us-page">
            <Section background="dark" className="why-us-hero">
                <h1 className="page-title">Why Caledonia Heights?</h1>
                <p className="page-subtitle">
                    We are not just developers; we are custodians of your digital infrastructure.
                </p>
            </Section>

            <Section>
                <div className="grid grid-2-cols">
                    <div className="reason-block">
                        <h2>End-to-End Capability</h2>
                        <p>
                            We handle everything from the initial strategy and design to final deployment, hosting, and long-term maintenance.
                            You don't need multiple vendors; you need one partner.
                        </p>
                    </div>
                    <div className="reason-block">
                        <h2>Hosting & Maintenance Strength</h2>
                        <img src="/assets/images/hosting-datacenter.jpg" alt="Secure Data Center" className="reason-img" />
                        <p>
                            Our infrastructure is built for uptime. We offer SLA-based maintenance contracts
                            that ensure your systems are patched, secure, and monitored 24/7.
                        </p>
                    </div>
                    <div className="reason-block">
                        <h2>Tender & Compliance Ready</h2>
                        <p>
                            Our processes effectively align with government framework contracts.
                            We understand the documentation, security, and proven experience required for public sector projects.
                        </p>
                    </div>
                    <div className="reason-block">
                        <h2>Proven Experience</h2>
                        <p>
                            With successful deployments in utility, real estate, and finance sectors,
                            our portfolio speaks to our ability to deliver complex systems.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default WhyUs;
