import { useState } from 'react';
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
  phone: '0116 593 201',
  phoneHref: 'tel:+254116593201',
  whatsapp: 'https://wa.me/254116593201',
  email: 'info@caledoniaheights.co.ke',
  emailAlt: 'caledoniaheightsltd1@gmail.com',
  address: 'Woodvale Grove, Westlands, Nairobi, Kenya',
  hours: 'Monday – Friday, 8:00 AM – 6:00 PM EAT',
};

const WEB3FORMS_ACCESS_KEY = 'ab954266-9b2f-4a2d-9907-966cdc7463d5';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact Us — Get in Touch with Our Team"
        description="Contact Caledonia Heights Limited in Westlands, Nairobi. Call or WhatsApp 0116 593 201. Email info@caledoniaheights.co.ke. We respond within 24 hours."
        keywords="contact Caledonia Heights, smart water meter Kenya, prepaid water meter M-Pesa"
        canonical="https://caledoniaheights.co.ke/contact"
      />
      <PageHero
        title="Partner With Us"
        subtitle="Ready to discuss smart water metering or a MajiGrid deployment? We respond within 24 hours."
        badge="Contact"
        bgVariant="surface"
        backgroundImage={images.contactHero}
        ctaText="WhatsApp us"
        ctaLink={CONTACT.whatsapp}
        secondaryCtaText="Call 0116 593 201"
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

            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New enquiry from caledoniaheights.co.ke" />
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

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
                  <option>STS Prepaid Water Meters</option>
                  <option>NB-IoT Smart Meters</option>
                  <option>Multi-Jet / Woltmann Meters</option>
                  <option>MajiGrid</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea className="form-textarea" id="message" name="message" required placeholder="Describe your project requirements..." />
              </div>

              <Button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </Button>

              {status === 'success' && (
                <p className="text-muted" style={{ marginTop: '1rem', color: 'var(--green)' }}>
                  Thank you — your message has been sent. We&apos;ll get back to you within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="text-muted" style={{ marginTop: '1rem', color: 'var(--coral)' }}>
                  Something went wrong sending your message. Please try again or WhatsApp us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
