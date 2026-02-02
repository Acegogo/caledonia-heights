import Section from '../components/Section';
import Card from '../components/Card';
import './Projects.css';

const projects = [
    {
        name: "bnsmeters.com",
        category: "Smart Water Utility",
        desc: "E-commerce platform for prepaid, postpaid, and NB-IoT meters. Integrated product catalog and inquiry workflows.",
        tech: ["Web Development", "Hosting", "System Maintenance"],
        image: "/assets/images/project-bnsmeters.jpg"
    },
    {
        name: "bnsalgotech.co.ke",
        category: "Corporate Technology",
        desc: "Corporate website for a technology solutions provider. Full deployment, hosting, and ongoing maintenance.",
        tech: ["Design", "Deployment", "Managed Hosting"],
        image: "/assets/images/project-bnsalgotech.jpg"
    },
    {
        name: "legendpetro.co.ke",
        category: "Real Estate & Construction",
        desc: "Corporate digital presence for a civil works and real estate company.",
        tech: ["Web Development", "Hosting", "Maintenance"],
        image: "/assets/images/project-legend.jpg"
    },
    {
        name: "dellcreek.co.ke",
        category: "Real Estate",
        desc: "Land sales and property management website with verified listing capabilities.",
        tech: ["Web Development", "Hosting", "Maintenance"],
        image: null // Image not provided yet
    }
];

const Projects = () => {
    return (
        <div className="projects-page">
            <Section background="light" className="projects-hero">
                <h1 className="page-title">Featured Projects</h1>
                <p className="page-subtitle">
                    Delivering enterprise-grade websites and systems for Kenyan businesses.
                </p>
            </Section>

            <Section>
                <div className="grid grid-2-cols">
                    {projects.map((p, idx) => (
                        <Card key={idx} className="project-card">
                            {p.image && (
                                <div className="project-img-wrapper">
                                    <img src={p.image} alt={p.name} />
                                </div>
                            )}
                            <span className="project-category">{p.category}</span>
                            <h3>{p.name}</h3>
                            <p>{p.desc}</p>
                            <div className="project-tech-list">
                                {p.tech.map((t, i) => (
                                    <span key={i} className="tech-badge">{t}</span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Projects;
