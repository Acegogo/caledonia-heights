import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import './SmartWater.css';

const tabs = [
  { id: 'sts', label: 'STS Prepaid' },
  { id: 'nbiot', label: 'NB-IoT Real-Time' },
];

const SmartWater = () => {
  const [active, setActive] = useState('sts');

  const content = useMemo(() => {
    if (active === 'sts') {
      return {
        title: 'STS Prepaid Water Metering (M-Pesa-native)',
        subtitle: 'A prepaid vending flow built for landlords, property managers, and gated communities.',
        bullets: [
          'M-Pesa PayBill → platform matches meter → calculates units → Caldora token → SMS to customer',
          'Multi-tenant landlord/tenant/admin portals',
          'Configurable pricing and configurable revenue sharing',
          'Automated settlements and reconciliation',
        ],
        gallery: [
          { src: images.dashboardSts, alt: 'STS prepaid water management dashboard' },
          { src: images.dashboardLandlord, alt: 'Landlord portal for prepaid water management' },
          { src: images.stsMeter, alt: 'STS prepaid water meter hardware' },
        ],
      };
    }
    return {
      title: 'NB-IoT Smart Metering (Real-time)',
      subtitle: 'Remote reading, alarms, analytics, and enforcement via remote valve control.',
      bullets: [
        'Smart meters → cellular network → ingestion server → database → dashboards',
        'Meter specs: 6–10 year battery, ultrasonic measurement, remote valve control, built-in alarms',
        'Alarm types: leak, burst pipe, reverse flow, tamper, low battery, communication lost',
        'Dashboards: charts, SMS/email alerts, valve control, multi-landlord portals',
      ],
      gallery: [
        { src: images.dashboardNbiot, alt: 'NB-IoT smart metering dashboard' },
        { src: images.nbiotMeter, alt: 'NB-IoT ultrasonic smart water meter' },
        { src: images.nbiotInstallation, alt: 'NB-IoT meter installation in the field' },
      ],
    };
  }, [active]);

  return (
    <div>
      <SEO
        title="Smart Water Metering — Prepaid & Real-Time Solutions"
        description="Caldora smart water metering: M-Pesa prepaid water vending with STS token delivery, and real-time monitoring with remote valve control for property managers and utilities."
        keywords="prepaid water meter, M-Pesa water meter, smart water metering, remote valve control water"
        canonical="https://caledoniaheights.co.ke/smart-water"
      />
      <PageHero
        title="Smart Water Metering Solutions"
        subtitle="Real-time monitoring, automated billing, and remote control for water utilities and property managers."
        badge="Smart Water"
        bgVariant="surface"
        backgroundImage={images.smartWaterHero}
        ctaText="Request a demo"
        ctaLink="/contact"
        secondaryCtaText="See projects"
        secondaryCtaLink="/projects"
      />

      <Section variant="dark">
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {tabs.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                type="button"
                className="btn"
                onClick={() => setActive(t.id)}
                style={{
                  borderColor: isActive ? 'rgba(0, 200, 255, 0.45)' : 'var(--color-border)',
                  background: isActive ? 'rgba(0, 200, 255, 0.10)' : 'rgba(255,255,255,0.02)',
                  boxShadow: isActive ? 'var(--glow-cyan)' : 'none',
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="smartWater-gallery">
          {content.gallery.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} className="smartWater-gallery__img" loading="lazy" decoding="async" />
          ))}
        </div>

        <div className="grid grid-2" style={{ alignItems: 'start', marginTop: '1.5rem' }}>
          <Card className="features-card card-pad" hover={false}>
            <h2 style={{ marginBottom: '0.6rem' }}>{content.title}</h2>
            <p style={{ lineHeight: 1.7, marginBottom: '1rem', color: 'var(--text-bright)' }}>
              {content.subtitle}
            </p>
            <ul style={{ display: 'grid', gap: '0.65rem', lineHeight: 1.7 }}>
              {content.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>

          <Card className="card-pad card-hover">
            <div style={{ color: 'var(--color-text-muted)', marginBottom: '0.75rem', fontWeight: 600 }}>
              Why choose our platform
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Built for automation, accuracy, and scale</h3>
            <p className="text-muted" style={{ lineHeight: 1.7 }}>
              Compared to manual reading and fragmented tooling, we deliver end-to-end visibility, enforcement controls, and an architecture designed for
              uptime. The result is better revenue protection and faster operational response.
            </p>
            <div className="divider" style={{ margin: '1.25rem 0' }} />
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <Button className="btn-primary" to="/contact">Request a demo</Button>
              <Button className="btn-secondary" href="https://wa.me/254708001000" target="_blank" rel="noreferrer">
                WhatsApp →
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default SmartWater;
