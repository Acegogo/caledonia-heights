import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandWhatsapp,
} from '@tabler/icons-react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import './Contact.css';

const CONTACT = {
  phone: '0708 001 000',
  phoneHref: 'tel:+254708001000',
  whatsapp: 'https://wa.me/254708001000',
  email: 'info@caledoniaheights.co.ke',
  emailAlt: 'caledoniaheightsltd1@gmail.com',
  address: 'Woodvale Grove, Westlands, Nairobi, Kenya',
  hours: 'Monday – Friday, 8:00 AM – 6:00 PM EAT',
};

// TODO: Replace PLACEHOLDER_ID with your Formspree form ID
const FORMSPREE_ACTION = 'https://formspree.io/f/PLACEHOLDER_ID';

const Contact = () => {
  return (
    <div className="contact-page">
      <SEO
        title="Contact Us — Get in Touch with Our Team"
        description="Contact Caledonia Heights Limited in Westlands, Nairobi. Call or WhatsApp 0708 001 000. Email info@caledoniaheights.co.ke. We respond within 24 hours."
        keywords="contact Caledonia Heights, technology company Nairobi contact, smart water solutions"
        canonical="https://caledoniaheights.co.ke/contact"
      />
      <PageHero
        title="Partner With Us"
        subtitle="Ready to discuss smart water, MajiGrid, AI automation, or enterprise systems? We respond within 24 hours."
        badge="Contact"
        bgVariant="surface"
        backgroundImage={images.contactHero}
        ctaText="WhatsApp us"
        ctaLink={CONTACT.whatsapp}
        secondaryCtaText="Call 0708 001 000"
        secondaryCtaLink={CONTACT.phoneHref}
      />

      <Section variant="dark">
        <div className="contact-grid">
          <div className="contact-details">
            <span className="section-label">Get in touch</span>
            <h2 style={{ marginBottom: '0.75rem' }}>We&apos;re here to help</h2>
            <p className="text-muted" style={{ lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Reach out for capability statements, demos, or tender requirements. For urgent matters, WhatsApp us directly.
            </p>

            <a href={CONTACT.phoneHref} className="contact-detail-item">
              <div className="contact-icon-wrap"><IconPhone size={20} color="var(--cyan)" /></div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">{CONTACT.phone}</div>
              </div>
            </a>

            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="contact-detail-item">
              <div className="contact-icon-wrap" style={{ background: 'rgba(0, 240, 144, 0.12)' }}>
                <IconBrandWhatsapp size={20} color="var(--green)" />
              </div>
              <div>
                <div className="contact-label">WhatsApp</div>
                <div className="contact-value">{CONTACT.phone}</div>
              </div>
            </a>

            <a href={`mailto:${CONTACT.email}`} className="contact-detail-item">
              <div className="contact-icon-wrap"><IconMail size={20} color="var(--cyan)" /></div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">{CONTACT.email}</div>
              </div>
            </a>

            <div className="contact-detail-item" style={{ cursor: 'default' }}>
              <div className="contact-icon-wrap"><IconMapPin size={20} color="var(--cyan)" /></div>
              <div>
                <div className="contact-label">Address</div>
                <div className="contact-value" style={{ fontSize: '0.95rem' }}>{CONTACT.address}</div>
              </div>
            </div>

            <div className="contact-detail-item" style={{ cursor: 'default' }}>
              <div className="contact-icon-wrap"><IconClock size={20} color="var(--cyan)" /></div>
              <div>
                <div className="contact-label">Office Hours</div>
                <div className="contact-value" style={{ fontSize: '0.95rem' }}>{CONTACT.hours}</div>
              </div>
            </div>

            <div className="contact-map card">
              <div className="contact-map__inner">
                <IconMapPin size={28} color="var(--cyan)" />
                <p className="text-muted" style={{ marginTop: '0.75rem', lineHeight: 1.6 }}>
                  Woodvale Grove, Westlands<br />Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="contact-wa-banner">
              <IconBrandWhatsapp size={20} />
              Prefer a quick reply? Chat with us on WhatsApp →
            </a>

            <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: 1.65, fontSize: '0.95rem' }}>
              We respond to all inquiries within 24 hours. For urgent matters, WhatsApp us directly.
            </p>

            <form className="contact-form" action={FORMSPREE_ACTION} method="POST">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input className="form-input" type="text" id="name" name="name" required placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input className="form-input" type="email" id="email" name="email" required placeholder="you@company.com" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input className="form-input" type="tel" id="phone" name="phone" placeholder="0708 000 000" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="service">Service of Interest</label>
                <select className="form-select" id="service" name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Smart Water Metering</option>
                  <option>MajiGrid Irrigation</option>
                  <option>AI Business Agents</option>
                  <option>Custom Software Development</option>
                  <option>ERP System</option>
                  <option>Cloud Hosting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea className="form-textarea" id="message" name="message" required placeholder="Describe your project requirements..." />
              </div>

              <Button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Send Message →
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
