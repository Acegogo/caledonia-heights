import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import './Solutions.css';

const services = [
    {
        title: "1. Website Design & Development",
        desc: "Corporate, high-performance websites built for speed, SEO, and authority."
    },
    {
        title: "2. Web & Mobile App Development",
        desc: "Custom applications for iOS, Android, and Web to streamline business operations."
    },
    {
        title: "3. Enterprise Systems & ERP",
        desc: "Scalable resource planning systems for schools, real estate, and government."
    },
    {
        title: "4. Smart Utility Management",
        desc: "Prepaid water systems, smart metering, and automated revenue collection."
    },
    {
        title: "5. IoT & NB-IoT Solutions",
        desc: "Remote monitoring hardware and software for infrastructure management."
    },
    {
        title: "6. Cloud Hosting & Infrastructure",
        desc: "Secure cloud environments optimized for high-traffic and critical data."
    },
    {
        title: "7. Website Hosting & Maintenance",
        desc: "Routine updates, security patches, and off-site backups."
    },
    {
        title: "8. System Monitoring & Support",
        desc: "24/7 proactive monitoring with SLA-based response times."
    }
];

const Solutions = () => {
    return (
        <div className="solutions-page">
            <Section background="dark" className="solutions-hero">
                <h1 className="page-title">Comprehensive Technology Services</h1>
                <p className="page-subtitle">
                    From concept to long-term maintenance, we handle the entire lifecycle of your digital assets.
                </p>
            </Section>

            <Section>
                <div className="grid grid-2-cols">
                    {services.map((s, idx) => (
                        <Card key={idx} className="service-card">
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section background="light" className="text-center">
                <h2>Need a Custom Solution?</h2>
                <p style={{ margin: '1rem auto', maxWidth: '600px', color: 'var(--color-text-muted)' }}>
                    We specialize in bespoke development for unique government and enterprise challenges.
                </p>
                <Button to="/contact">Request Consultation</Button>
            </Section>
        </div>
    );
};

export default Solutions;
