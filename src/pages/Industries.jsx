import Section from '../components/Section';
import Card from '../components/Card';
import './Industries.css';

const industries = [
    {
        name: "Utilities & Energy",
        items: ["Smart Water Metering", "Leak Detection", "Revenue Collection"]
    },
    {
        name: "Real Estate & Construction",
        items: ["Property Management Systems", "Project Websites", "Tenant Portals"]
    },
    {
        name: "Government & Public Sector",
        items: ["Digital Infrastructure", "Secure Hosting", "Compliance Systems"]
    },
    {
        name: "Education",
        items: ["School Management ERP", "E-Learning Platforms", "Record Digitization"]
    },
    {
        name: "Corporate & Enterprise",
        items: ["Business Process Automation", "Secure Email & Hosting", "Intranets"]
    }
];

const Industries = () => {
    return (
        <div className="industries-page">
            <Section background="dark" className="industries-hero">
                <h1 className="page-title">Industries Served</h1>
                <p className="page-subtitle">
                    Specialized expertise for sectors requiring high availability and security.
                </p>
            </Section>

            <Section>
                <div className="grid grid-3-cols">
                    {industries.map((ind, idx) => (
                        <Card key={idx}>
                            <h3 className="industry-title">{ind.name}</h3>
                            <ul className="industry-list">
                                {ind.items.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Industries;
