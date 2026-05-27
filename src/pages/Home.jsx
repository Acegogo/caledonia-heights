import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  IconDroplet,
  IconPlant2,
  IconCode,
  IconRobot,
  IconCloud,
  IconBuildingCommunity,
} from '@tabler/icons-react';
import Button from '../components/Button';
import Section from '../components/Section';
import Card from '../components/Card';
import AnimatedCounter from '../components/AnimatedCounter';
import SEO from '../components/SEO';
import { services } from '../data/services';
import { images } from '../data/images';
import { staggerContainer, fadeUpVariant } from '../utils/animations';
import './Home.css';

const serviceIcons = {
  'smart-water': IconDroplet,
  majismart: IconPlant2,
  'ai-solutions': IconRobot,
  'custom-software': IconCode,
  erp: IconBuildingCommunity,
  hosting: IconCloud,
};

const platforms = [
  {
    name: 'MajiSmart',
    desc: 'AI-powered irrigation intelligence for farms and schemes.',
    stat: '10-acre flagship',
    accent: 'green',
    link: '/majismart',
    image: images.majismartDashboard,
  },
  {
    name: 'Caldora NB-IoT Smart Metering',
    desc: 'Real-time smart metering with alarms and remote valve control.',
    stat: 'Live dashboards',
    accent: 'cyan',
    link: '/smart-water',
    image: images.dashboardNbiot,
  },
  {
    name: 'Caldora STS Prepaid Water',
    desc: 'M-Pesa prepaid vending with STS tokens and landlord portals.',
    stat: 'M-Pesa native',
    accent: 'blue',
    link: '/smart-water',
    image: images.dashboardSts,
  },
];

const Home = () => {
  return (
    <div className="home">
      <SEO
        title="Your Long-Term Technology Partner"
        description="Caledonia Heights builds smart water metering systems, AI business agents, MajiSmart irrigation platforms, custom software, and ERP systems for enterprises, utilities, and institutions."
        keywords="smart water metering, NB-IoT water meter, prepaid water M-Pesa, AI chatbot, custom software, ERP system, smart irrigation, IoT platforms"
        canonical="https://caledoniaheights.co.ke"
      />
      <section className="home-hero" style={{ '--hero-bg': `url(${images.heroBg})` }}>
        <div className="container home-hero__grid">
          <motion.div
            className="home-hero__copy"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="home-hero__badges pill-row">
              <span className="pill">Est. 2018</span>
              <span className="pill">Nairobi, Kenya</span>
              <span className="pill">8+ Years</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="home-hero__title">
              Your Long-Term Technology Partner
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="home-hero__subtitle text-muted">
              Building the critical digital infrastructure that powers enterprises, utilities, and government institutions.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="home-hero__actions">
              <Button className="btn-primary" to="/services">Explore Our Solutions →</Button>
              <Button className="btn-secondary" to="/projects">View Our Work</Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="home-hero__mockups"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={images.dashboardNbiot} alt="NB-IoT metering dashboard" className="mockup mockup--main" decoding="async" />
            <img src={images.dashboardSts} alt="STS prepaid water dashboard" className="mockup mockup--side" decoding="async" />
            <img src={images.majismartDashboard} alt="MajiSmart irrigation dashboard" className="mockup mockup--back" decoding="async" />
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <div className="scroll-arrows">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="home-stats section--glow-left">
        <div className="container home-stats__grid">
          {[
            { value: 8, suffix: '+', label: 'Years of Delivery' },
            { value: 50, suffix: '+', label: 'Projects Delivered' },
            { value: 24, suffix: '/7', label: 'Support & Monitoring' },
          ].map((s) => (
            <div key={s.label} className="stat-card home-stats__item">
              <AnimatedCounter value={s.value} suffix={s.suffix} className="stat-number" />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Section variant="surface" id="services" className="section--glow-right">
        <div className="section-header">
          <span className="section-label">Services</span>
          <h2>End-to-End Technology Services</h2>
          <p>From smart water infrastructure to AI automation — built, hosted, and maintained by one partner.</p>
        </div>
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
                <span className="home-link">Learn more →</span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section variant="dark" className="section--glow-left">
        <div className="section-header section-header--left home-sectionHead">
          <h2>Flagship Platforms</h2>
          <p className="text-muted">Production systems managing irrigation, metering, and prepaid revenue in the field.</p>
        </div>
        <div className="grid grid-3">
          {platforms.map((p) => (
            <Card key={p.name} className={`card-pad card-hover home-platformCard home-platformCard--${p.accent}`}>
              <div className="home-platformCard__imgWrap">
                <img src={p.image} alt={p.name} loading="lazy" decoding="async" />
              </div>
              <div className="mono home-platformCard__stat">{p.stat}</div>
              <h3>{p.name}</h3>
              <p className="text-muted" style={{ lineHeight: 1.7 }}>{p.desc}</p>
              <Link to={p.link} className="home-link">Learn more →</Link>
            </Card>
          ))}
        </div>
      </Section>

      <section className="home-flagship">
        <div className="container home-flagship__inner">
          <img src={images.farmIrrigation} alt="10-acre smart irrigation deployment" className="home-flagship__bg" loading="lazy" decoding="async" />
          <div className="home-flagship__content">
            <div className="mono" style={{ color: 'var(--green)', marginBottom: '0.6rem' }}>Flagship deployment</div>
            <h2>10-Acre Smart Irrigation Deployment</h2>
            <p className="text-muted" style={{ lineHeight: 1.75, marginTop: '0.75rem' }}>
              Solar-powered boreholes • NB-IoT sensors • Automated drip irrigation • Real-time dashboard • M-Pesa integrated billing
            </p>
            <div className="pill-row" style={{ marginTop: '1rem' }}>
              <span className="pill">10 acres</span>
              <span className="pill">IoT sensors</span>
              <span className="pill">Automated scheduling</span>
              <span className="pill">M-Pesa</span>
            </div>
            <Button className="btn-primary" to="/majismart" style={{ marginTop: '1.25rem' }}>
              Explore MajiSmart →
            </Button>
          </div>
        </div>
      </section>

      <Section variant="surface" className="section--glow-bottom">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2>AI That Works For Your Business</h2>
            <p className="text-muted" style={{ lineHeight: 1.75, marginTop: '0.75rem' }}>
              Custom chatbots, AI sales agents, and workflow automation — built around your operations and maintained by our team.
            </p>
            <Button className="btn-primary" to="/ai-solutions" style={{ marginTop: '1.2rem' }}>
              Explore AI Solutions →
            </Button>
          </div>
          <Card className="card-pad" hover={false}>
            <ul className="text-muted" style={{ display: 'grid', gap: '0.7rem', lineHeight: 1.7 }}>
              <li>● AI Business Chatbot — 24/7 customer support</li>
              <li>● AI Sales Agent — lead qualification & follow-up</li>
              <li>● Workflow Automation — ERP/CRM/WhatsApp integrations</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section variant="dark">
        <div className="home-sectionHead">
          <h2>Smart Water in the Field</h2>
        </div>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <img src={images.smartMeters} alt="Smart water meters product range" className="home-inlineImg" loading="lazy" decoding="async" />
          <div>
            <p className="text-muted" style={{ lineHeight: 1.75 }}>
              From prepaid STS vending to NB-IoT real-time monitoring — hardware, connectivity, dashboards, and long-term support.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
              <Button className="btn-primary" to="/smart-water">Smart water solutions →</Button>
              <Button className="btn-secondary" to="/projects">View projects</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="surface2" className="home-cta">
        <div className="text-center">
          <h2>Ready to build something extraordinary?</h2>
          <p className="text-muted" style={{ maxWidth: 640, margin: '0.75rem auto 0', lineHeight: 1.75 }}>
            Talk to us about smart water, MajiSmart, AI automation, or enterprise systems — we respond within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.4rem' }}>
            <Button className="btn-primary" to="/contact">Get in Touch</Button>
            <Button className="btn-green" href="https://wa.me/254708001000" target="_blank" rel="noreferrer">
              WhatsApp 0708 001 000
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
