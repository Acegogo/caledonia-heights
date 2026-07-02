import {
  IconGauge,
  IconWifi,
  IconBrain,
  IconDashboard,
  IconReportAnalytics,
  IconEye,
  IconDroplets,
  IconAdjustments,
  IconAlertTriangle,
  IconBell,
  IconMap,
} from '@tabler/icons-react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import './MajiGrid.css';

const steps = [
  {
    icon: <IconGauge size={32} color="var(--cyan)" />,
    number: '01',
    title: 'NB-IoT Meters',
    desc: 'Measure flow, pressure, and water movement across farms, blocks, and pumps.',
    color: 'var(--cyan)',
  },
  {
    icon: <IconWifi size={32} color="var(--green)" />,
    number: '02',
    title: 'Connectivity',
    desc: 'Transmit readings reliably from remote fields via NB-IoT/4G cellular network.',
    color: 'var(--green)',
  },
  {
    icon: <IconBrain size={32} color="var(--purple)" />,
    number: '03',
    title: 'AI Analysis',
    desc: 'Detect anomalies, forecast demand, score risk, and surface action priorities.',
    color: 'var(--purple)',
  },
  {
    icon: <IconDashboard size={32} color="var(--orange)" />,
    number: '04',
    title: 'Dashboard & Alerts',
    desc: 'Live visibility, mobile alerts, and operational decision support in real time.',
    color: 'var(--orange)',
  },
  {
    icon: <IconReportAnalytics size={32} color="var(--gold)" />,
    number: '05',
    title: 'Reports',
    desc: 'Evidence, accountability, and performance tracking for teams and partners.',
    color: 'var(--gold)',
  },
];

const features = [
  {
    icon: <IconEye size={28} color="var(--cyan)" />,
    title: 'Real-Time Monitoring',
    desc: 'Continuous visibility across pumps, blocks, and distribution lines.',
  },
  {
    icon: <IconDroplets size={28} color="var(--green)" />,
    title: 'Smart Scheduling',
    desc: 'Combine field sensors with irrigation schedules for smarter watering.',
  },
  {
    icon: <IconAdjustments size={28} color="var(--orange)" />,
    title: 'Remote Valve Control',
    desc: 'Remote and scheduled control to reduce waste and labour costs.',
  },
  {
    icon: <IconAlertTriangle size={28} color="var(--coral)" />,
    title: 'Anomaly Detection',
    desc: 'Surface leaks, inefficiencies, and demand spikes before they escalate.',
  },
  {
    icon: <IconBell size={28} color="var(--purple)" />,
    title: 'Instant Alerts',
    desc: 'Instant alerts to operators when thresholds are breached.',
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
        title="MajiGrid — AI-Powered Smart Irrigation Platform"
        description="MajiGrid connects irrigation infrastructure to AI-enabled dashboards, alerts, and operational recommendations. Real-time monitoring for farms, schemes, and county water programs."
        keywords="smart irrigation, AI irrigation platform, farm water management, irrigation automation, IoT agriculture"
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
        secondaryCtaText="Download brochure"
        secondaryCtaLink="/contact"
        accent="green"
        tagline="From field signals to management action — one platform."
      />

      <Section variant="dark">
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="section-label section-label--green">What it is</span>
            <h2 style={{ marginBottom: '0.8rem' }}>A management system, not a gadget</h2>
            <p className="text-muted" style={{ lineHeight: 1.75, maxWidth: 720 }}>
              MajiGrid connects physical irrigation infrastructure to AI-enabled dashboards, alerts, reports, and operational recommendations.
              Designed for farms, irrigation schemes, counties, and national programs.
            </p>
            <div className="pill-row" style={{ marginTop: '1.2rem' }}>
              <span className="pill">NB-IoT</span>
              <span className="pill">IoT sensors</span>
              <span className="pill">Analytics</span>
              <span className="pill">Automation</span>
            </div>
          </div>
          <div className="majigrid-visual">
            <img
              src={images.majigridDashboard}
              alt="MajiGrid irrigation management dashboard"
              className="majigrid-visual__dashboard"
              loading="lazy"
              decoding="async"
            />
            <img
              src={images.farmIrrigation}
              alt="Commercial farm with smart irrigation deployment"
              className="majigrid-visual__farm"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <div className="section-header">
          <span className="section-label section-label--green">Process</span>
          <h2>How it works</h2>
          <p>From field sensors to management action — five connected stages.</p>
        </div>
        <div className="grid grid-3 majigrid-steps">
          {steps.map((step) => (
            <div key={step.number} className="step-card" style={{ '--accent': step.color }}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
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
                Solar-powered boreholes • IoT sensor network • Automated drip irrigation • Real-time dashboard • M-Pesa billing integration
              </p>
            </div>
          </div>
          <div className="grid grid-2">
            {[
              { label: 'Area', value: '10 acres' },
              { label: 'Automation', value: 'Drip + valves' },
              { label: 'Connectivity', value: 'NB-IoT' },
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
            <Button className="btn-green" href="https://wa.me/254708001000" target="_blank" rel="noreferrer">
              WhatsApp us →
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MajiGrid;
