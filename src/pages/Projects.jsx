import Section from '../components/Section';
import Card from '../components/Card';
import './Projects.css';

const projects = [
    {
        name: "bnsmeters.com",
        category: "Smart Water Utility",
        desc: "E-commerce platform for prepaid, postpaid, and NB-IoT meters. Integrated product catalog and inquiry workflows.",
        tech: ["Web Development", "Hosting", "System Maintenance"],
        image: "/assets/images/project-bnsmeters.jpg",
        link: "https://bnsmeters.com"
    },
    {
        name: "bnsalgotech.co.ke",
        category: "Corporate Technology",
        desc: "Corporate website for a technology solutions provider. Full deployment, hosting, and ongoing maintenance.",
        tech: ["Design", "Deployment", "Managed Hosting"],
        image: "/assets/images/project-bnsalgotech.jpg",
        link: "https://bnsalgotech.co.ke"
    },
    {
        name: "legendpetro.co.ke",
        category: "Real Estate & Construction",
        desc: "Corporate digital presence for a civil works and real estate company.",
        tech: ["Web Development", "Hosting", "Maintenance"],
        image: "/assets/images/project-legend.jpg",
        link: "https://legendpetro.co.ke"
    },
    {
        name: "veritymetric.com",
        category: "Consultancy & Analytics",
        desc: "Research, analytics, and MEAL consultancy firm driving sustainable development through evidence-based solutions.",
        tech: ["Web Design", "Content Strategy", "Hosting"],
        image: "/assets/images/veritymetric.com.png",
        link: "https://veritymetric.com"
    },
    {
        name: "ducieladventures.com",
        category: "Travel & Tourism",
        desc: "Premium tour operator website showcasing bespoke safari packages and travel experiences.",
        tech: ["Web Development", "Booking workflows", "SEO"],
        image: "/assets/images/ducieladventures.com.png",
        link: "https://ducieladventures.com"
    },
    {
        name: "pearlsonlanguages.com",
        category: "Education & EdTech",
        desc: "Interactive platform for a language institute offering courses in French, German, and Spanish.",
        tech: ["E-Learning", "Student Portals", "Hosting"],
        image: "/assets/images/pearlsonlanguages.com.png",
        link: "https://pearlsonlanguages.com"
    },
    {
        name: "dellcreek.co.ke",
        category: "Real Estate",
        desc: "Land sales and property management website with verified listing capabilities.",
        tech: ["Web Development", "Hosting", "Maintenance"],
        image: "/assets/images/dellcreek-developers.vercel.app.png",
        link: "https://dellcreek-developers.vercel.app/"
    },
    {
        name: "Prepaid Meters Platform",
        category: "Smart Water Utility",
        desc: "STS prepaid water metering management portal for token generation and revenue collection.",
        tech: ["Laravel", "STS Logic", "M-Pesa"],
        image: "/assets/images/prepaidmeters.bnsalgotech.co.ke.png",
        link: "https://prepaidmeters.bnsalgotech.co.ke"
    },
    {
        name: "NB-IoT Management",
        category: "IoT & Smart Metering",
        desc: "NB-IoT smart meter management dashboard for real-time monitoring and leak detection.",
        tech: ["React", "IoT", "Data Analytics"],
        image: "/assets/images/bns-nbiot.vercel.app.png",
        link: "https://bns-nbiot.vercel.app"
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
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-img-wrapper" style={{ display: 'block' }}>
                                    <img src={p.image} alt={p.name} />
                                </a>
                            )}
                            <span className="project-category">{p.category}</span>
                            <h3>
                                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    {p.name}
                                </a>
                            </h3>
                            <p>{p.desc}</p>
                            <div className="project-tech-list">
                                {p.tech.map((t, i) => (
                                    <span key={i} className="tech-badge">{t}</span>
                                ))}
                            </div>
                            <div style={{ marginTop: '1rem' }}>
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                                    Visit Website &rarr;
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Projects;
