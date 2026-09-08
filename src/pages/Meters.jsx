import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import './Meters.css';

const tabs = [
  { id: 'sts', label: 'STS Prepaid' },
  { id: 'nbiot', label: 'NB-IoT Real-Time' },
];

const secondaryMeters = [
  {
    name: 'Mechanical Multi-Jet Meters',
    desc: 'Simple, reliable sub-metering with no remote reading needed.',
    spec: 'DN15–DN25',
    image: images.meterMultijet,
  },
  {
    name: 'Bulk Woltmann Meters',
    desc: 'For mains, zones, boreholes, and high-flow industrial supply.',
    spec: 'DN50–DN200',
    image: images.meterWoltmann,
  },
];

const Meters = () => {
  const [active, setActive] = useState('sts');
  const [imgFailed, setImgFailed] = useState({});

  const content = useMemo(() => {
    if (active === 'sts') {
      return {
        title: 'Caldora STS Prepaid Water Meters',
        subtitle: 'Water paid for before it flows.',
        bullets: [
          'M-Pesa token by SMS, keyed into an indoor unit',
          'Automatic valve shut-off when credit runs out',
          'Suitable for apartments, student accommodation, rentals, gated communities',
          'DN15–DN25',
        ],
        gallery: [
          { src: images.meterSts, alt: 'Caldora STS prepaid water meter' },
          { src: images.installStsRooftop, alt: 'STS prepaid meters installed on site' },
        ],
      };
    }
    return {
      title: 'Caldora NB-IoT Ultrasonic Smart Meters',
      subtitle: 'Postpaid smart metering with ultrasonic measurement — no moving parts.',
      bullets: [
        'Reports live over the cellular network — no site Wi-Fi or gateway needed',
        'Remote valve control, leak/burst/tamper alerts',
        'Field-replaceable battery (6–10 years)',
        'Suitable for upmarket residential, commercial buildings, institutions',
        'DN15–DN50',
      ],
      gallery: [{ src: images.meterNbiot, alt: 'Caldora NB-IoT ultrasonic smart water meter' }],
    };
  }, [active]);

  return (
    <div>
      <SEO
        title="Water Meters — Prepaid & NB-IoT Smart Metering"
        description="The Caledonia Heights meter range: Caldora STS prepaid water meters with M-Pesa tokens, Caldora NB-IoT ultrasonic smart meters, plus multi-jet and Woltmann bulk meters."
        keywords="smart water meter Kenya, prepaid water meter M-Pesa, NB-IoT water meter, STS prepaid meter, water metering Kenya"
        canonical="https://caledoniaheights.co.ke/meters"
      />
      <PageHero
        title="The Meter Range"
        subtitle="From prepaid vending to real-time monitoring — the right meter for every property, at every scale."
        badge="Meters"
        bgVariant="surface"
        backgroundImage={images.meterHero}
        ctaText="Request a demo"
        ctaLink="/contact"
        secondaryCtaText="See installations"
        secondaryCtaLink="/projects"
      />

      <Section variant="dark">
        <div className="section-header">
          <h2>A meter is the point where water becomes information</h2>
          <p className="text-muted">
            We supply, install, and support smart water metering systems for landlords, property developers,
            institutions, and utilities — turning a dial on a wall into something billed, controlled, and
            visible from anywhere.
          </p>
        </div>

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
          {content.gallery.map((img) =>
            imgFailed[img.src] ? null : (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="smartWater-gallery__img"
                loading="lazy"
                decoding="async"
                onError={() => setImgFailed((prev) => ({ ...prev, [img.src]: true }))}
              />
            ),
          )}
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
              Why choose our meters
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Surveyed, installed, and supported</h3>
            <p className="text-muted" style={{ lineHeight: 1.7 }}>
              Every meter we supply is backed by a survey, professional installation, and long-term support —
              so landlords and utilities get accurate billing, fewer disputes, and revenue they can rely on.
            </p>
            <div className="divider" style={{ margin: '1.25rem 0' }} />
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <Button className="btn-primary" to="/contact">Request a demo</Button>
              <Button className="btn-secondary" href="https://wa.me/254116593201" target="_blank" rel="noreferrer">
                WhatsApp →
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section variant="surface2">
        <div className="section-header">
          <span className="section-label">Also in the range</span>
          <h2>Mechanical & bulk meters</h2>
          <p>For simple sub-metering and high-flow supply points that don&apos;t need remote reading.</p>
        </div>
        <div className="grid grid-2">
          {secondaryMeters.map((m) => (
            <Card key={m.name} className="card-pad card-hover">
              {m.image && (
                <img src={m.image} alt={m.name} className="meters-secondary-img" loading="lazy" decoding="async" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              )}
              <h3 style={{ marginBottom: '0.5rem' }}>{m.name}</h3>
              <p className="text-muted" style={{ lineHeight: 1.65 }}>{m.desc}</p>
              <div className="pill-row" style={{ marginTop: '0.9rem' }}>
                <span className="pill">{m.spec}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Meters;
