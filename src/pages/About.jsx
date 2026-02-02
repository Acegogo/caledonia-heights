import Section from '../components/Section';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Section background="light" className="about-hero">
                <h1 className="page-title">About Caledonia Heights</h1>
                <p className="page-subtitle">
                    Established in 2018, we are a technology powerhouse dedicated to building
                    the digital infrastructure that powers enterprise and government operations.
                </p>
            </Section>

            <Section>
                <div className="grid grid-2-cols items-center">
                    <div className="about-text">
                        <h2>Our Mission</h2>
                        <p>
                            To deliver resilient, scalable, and secure technology solutions that empower
                            enterprises and governments to serve their stakeholders efficiently.
                            We don't just build software; we engineer longevity and trust.
                        </p>
                    </div>
                    <div className="about-visual">
                        <img src="/assets/images/about-mission.jpg" alt="Caledonia Heights Team" className="about-img" />
                        <div className="about-overlay-stat">
                            <h3>Since 2018</h3>
                            <p>Delivering Mission Critical Systems</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section background="white">
                <div className="section-header text-center">
                    <h2>Our Core Values</h2>
                </div>
                <div className="grid grid-3-cols">
                    <div className="value-card">
                        <h3>Reliability</h3>
                        <p>We build systems that stay up, ensuring business continuity.</p>
                    </div>
                    <div className="value-card">
                        <h3>Innovation</h3>
                        <p>Leveraging IoT and Cloud to solve real-world infrastructure problems.</p>
                    </div>
                    <div className="value-card">
                        <h3>Partnership</h3>
                        <p>We are not just vendors; we are long-term technology partners.</p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;
