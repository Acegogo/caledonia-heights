import Section from '../components/Section';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <Section background="light" className="contact-hero">
                <h1 className="page-title">Partner With Us</h1>
                <p className="page-subtitle">
                    Ready to discuss your enterprise system or tender requirements?
                </p>
            </Section>

            <Section>
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p className="mb-lg">
                            Reach out for detailed capability statements or consultation on new projects.
                        </p>

                        <div className="contact-detail">
                            <strong>Email</strong>
                            <p>info@caledoniaheights.co.ke</p>
                        </div>

                        <div className="contact-detail">
                            <strong>Location</strong>
                            <p>Nairobi, Kenya</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name" />
                        </div>

                        <div className="form-group">
                            <label>Organization / Company</label>
                            <input type="text" placeholder="Company name" />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="official@company.com" />
                        </div>

                        <div className="form-group">
                            <label>Project Type</label>
                            <select>
                                <option>Select Type</option>
                                <option>Enterprise Web Application</option>
                                <option>IoT / Smart Metering</option>
                                <option>Hosting & Maintenance Contract</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Describe your project requirements..."></textarea>
                        </div>

                        <Button variant="primary" href="mailto:info@caledoniaheights.co.ke" style={{ width: '100%' }}>Send Message</Button>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
