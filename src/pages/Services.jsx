import { Link } from 'react-router-dom';
import {
  IconDroplet,
  IconPlant2,
  IconCode,
  IconRobot,
  IconCloud,
  IconBuildingCommunity,
} from '@tabler/icons-react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import { services } from '../data/services';

const serviceIcons = {
  'smart-water': IconDroplet,
  majismart: IconPlant2,
  'ai-solutions': IconRobot,
  'custom-software': IconCode,
  erp: IconBuildingCommunity,
  hosting: IconCloud,
};

const Services = () => {
  return (
    <div>
      <SEO
        title="Technology Services — Smart Water, AI, Software & ERP"
        description="End-to-end technology services: smart water metering, MajiSmart irrigation, AI business agents, custom web and mobile apps, enterprise ERP systems, and managed cloud hosting."
        keywords="smart water solutions, AI business agents, ERP development, web development, IoT platforms, irrigation intelligence"
        canonical="https://caledoniaheights.co.ke/services"
      />
      <PageHero
        title="Services Built for Mission-Critical Delivery"
        subtitle="From smart water infrastructure to AI business automation — we build, host, and maintain systems that must stay up."
        badge="Services"
        bgVariant="surface"
        backgroundImage={images.servicesHero}
        ctaText="Talk to our team"
        ctaLink="/contact"
      />

      <Section variant="dark">
        <div className="grid grid-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.id] || IconCode;
            return (
              <Link
                key={s.id}
                to={s.link}
                className="service-card"
                style={{ '--card-accent': s.accent, '--card-accent-glow': s.accentGlow }}
              >
                <span className="service-badge">{s.badge}</span>
                <div className="service-icon-wrap">
                  <Icon size={26} style={{ color: s.accent }} />
                </div>
                <h3>{s.title}</h3>
                <p className="text-muted" style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>{s.description}</p>
                <span style={{ color: 'var(--cyan)', fontWeight: 700, marginTop: 'auto' }}>Learn more →</span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section variant="surface">
        <div className="card card-pad card--gradient">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label section-label--purple">Custom work</span>
              <h2 style={{ marginBottom: '0.75rem' }}>Need a custom solution?</h2>
              <p className="text-muted" style={{ maxWidth: 720, lineHeight: 1.7 }}>
                We design bespoke platforms for government and enterprises — integrations, dashboards, automation, and long-term maintenance.
                If you have a tender requirement, we&apos;ll align scope, documentation, and delivery approach.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <Button className="btn-primary" to="/contact">Request a capability brief</Button>
              <Button className="btn-outline" to="/projects">View our work</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
