import {
  IconEye,
  IconDroplets,
  IconAdjustments,
  IconBell,
  IconMap,
  IconCoin,
} from '@tabler/icons-react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import './MajiGrid.css';

const features = [
  {
    icon: <IconEye size={28} color="var(--cyan)" />,
    title: 'Real-Time Visibility',
    desc: 'See what is happening across your farm or scheme, wherever you are.',
  },
  {
    icon: <IconDroplets size={28} color="var(--green)" />,
    title: 'Smart Scheduling',
    desc: 'Water where and when it is needed, without walking the fields.',
  },
  {
    icon: <IconAdjustments size={28} color="var(--orange)" />,
    title: 'Automated Control',
    desc: 'Turn water on or off remotely, cutting waste and labour costs.',
  },
  {
    icon: <IconBell size={28} color="var(--coral)" />,
    title: 'Instant Alerts',
    desc: 'Get notified the moment something needs your attention.',
  },
  {
    icon: <IconCoin size={28} color="var(--purple)" />,
    title: 'M-Pesa Billing',
    desc: 'Automated, cashless billing built into the platform.',
  },
  {
    icon: <IconMap size={28} color="var(--gold)" />,
    title: 'Multi-Scheme Oversight',
    desc: 'Centralised oversight for schemes, counties, and national programs.',
  },
];

const audiences = [
  'Large-scale commercial farms',
  'County irrigation schemes',
  'National water management programs',
  'Agricultural cooperatives',
];

const MajiGrid = () => {
  return (
    <div>
      <SEO
        title="MajiGrid — Intelligent Water Management for Agriculture"
        description="MajiGrid gives farms, irrigation schemes, and agricultural programs real-time visibility, automated control, and M-Pesa billing for their water — from a phone or a dashboard, wherever you are."
        keywords="smart irrigation Kenya, farm water management, irrigation billing M-Pesa, agricultural water management"
        canonical="https://caledoniaheights.co.ke/majigrid"
      />
      <PageHero
        title="MajiGrid"
        subtitle="Intelligent Water Management for Modern Agriculture."
        badge="Product"
        bgVariant="surface2"
        backgroundImage={images.majigridHero}
        ctaText="Request a demo"
        ctaLink="/contact"
        secondaryCtaText="Talk to our team"
        secondaryCtaLink="/contact"
        accent="green"
        tagline="From water source to farm — one system you can see and control."
      />

      <Section variant="dark">
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="section-label section-label--green">What it is</span>
            <h2 style={{ marginBottom: '0.8rem' }}>A management system, not a gadget</h2>
            <p className="text-muted" style={{ lineHeight: 1.75, maxWidth: 720 }}>
              MajiGrid gives farms, irrigation schemes, counties, and national programs real-time visibility
              and control over their water — from a phone or a dashboard, wherever you are.
            </p>
            <div className="pill-row" style={{ marginTop: '1.2rem' }}>
              <span className="pill">Real-time visibility</span>
              <span className="pill">Automated control</span>
              <span className="pill">M-Pesa billing</span>
            </div>
          </div>
          <div className="majigrid-visual">
            <img
              src={images.majigridFarm}
              alt="Solar-powered irrigation control unit in a farm field"
              className="majigrid-visual__farm"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <h2>Key features</h2>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="surface2">
        <div className="grid grid-2" style={{ alignItems: 'center', marginBottom: '2.5rem' }}>
          <div className="majigrid-case">
            <img src={images.farmIrrigation} alt="10-acre smart irrigation deployment" loading="lazy" decoding="async" />
            <div className="majigrid-case__overlay card-pad">
              <div className="mono" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>Flagship case study</div>
              <h3 style={{ marginBottom: '0.5rem' }}>10-acre commercial strawberry farm</h3>
              <p className="text-muted" style={{ lineHeight: 1.7 }}>
                Real-time visibility • Automated control • M-Pesa billing
              </p>
            </div>
          </div>
          <div className="grid grid-2">
            {[
              { label: 'Area', value: '10 acres' },
              { label: 'Control', value: 'Automated' },
              { label: 'Visibility', value: 'Real-time' },
              { label: 'Billing', value: 'M-Pesa' },
            ].map((s) => (
              <Card key={s.label} className="card-pad stat-card" hover={false}>
                <div className="mono text-dim" style={{ fontSize: '0.8rem' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', marginTop: '0.35rem' }}>{s.value}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ marginBottom: '0.7rem' }}>Who it&apos;s for</h2>
            <ul className="text-muted" style={{ display: 'grid', gap: '0.6rem', lineHeight: 1.7 }}>
              {audiences.map((a) => (
                <li key={a} style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--green)' }}>●</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <Button className="btn-primary" to="/contact">Request a demo</Button>
            <Button className="btn-green" href="https://wa.me/254116593201" target="_blank" rel="noreferrer">
              WhatsApp us →
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MajiGrid;
