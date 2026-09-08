import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  IconDroplet,
  IconWifi,
  IconPlant2,
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
  sts: IconDroplet,
  nbiot: IconWifi,
  majigrid: IconPlant2,
};

const platforms = [
  {
    name: 'Caldora STS Prepaid Water',
    desc: 'Water paid for before it flows — M-Pesa tokens with automatic valve shut-off.',
    stat: 'DN15–DN25',
    accent: 'cyan',
    link: '/meters',
    image: images.meterStsAlt,
  },
  {
    name: 'Caldora NB-IoT Smart Meters',
    desc: 'Postpaid ultrasonic metering that reports live over the cellular network.',
    stat: 'DN15–DN50',
    accent: 'blue',
    link: '/meters',
    image: images.meterNbiotAlt,
  },
  {
    name: 'MajiGrid',
    desc: 'Intelligent water management for farms and irrigation schemes.',
    stat: '10-acre flagship',
    accent: 'green',
    link: '/majigrid',
    image: images.majigridHero,
  },
];

const Home = () => {
  return (
    <div className="home">
      <SEO
        title="Smart Water Management Made Simple"
        description="Caledonia Heights supplies, installs, and supports smart water metering systems — STS prepaid, NB-IoT smart meters, and MajiGrid irrigation intelligence — for landlords, developers, institutions, and utilities."
        keywords="smart water meter Kenya, prepaid water meter M-Pesa, NB-IoT water meter, STS prepaid meter, water metering Kenya, smart water management"
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
              Smart Water Management Made Simple.
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="home-hero__subtitle text-muted">
              We supply, install, and support smart water metering systems for landlords, property developers,
              institutions, and utilities — turning a meter into a point where water becomes information you
              can act on.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="home-hero__actions">
              <Button className="btn-primary" to="/meters">Explore Our Meters →</Button>
              <Button className="btn-secondary" to="/projects">View Our Work</Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="home-hero__mockups"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={images.meterNbiotAlt} alt="Caldora NB-IoT smart water meter" className="mockup mockup--main" decoding="async" />
            <img src={images.meterStsAlt} alt="Caldora STS prepaid water meter" className="mockup mockup--side" decoding="async" />
            <img src={images.majigridFarm} alt="MajiGrid smart irrigation" className="mockup mockup--back" decoding="async" />
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
          <span className="section-label">Meters</span>
          <h2>End-to-End Water Metering Services</h2>
          <p>From prepaid vending to real-time monitoring — hardware, connectivity, and support from one partner.</p>
        </div>
        <div className="grid grid-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.id] || IconDroplet;
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
          <h2>Our Product Lines</h2>
          <p className="text-muted">Meters and systems installed and supported in the field, from single units to whole estates.</p>
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
              Real-time visibility • Automated control • M-Pesa integrated billing
            </p>
            <div className="pill-row" style={{ marginTop: '1rem' }}>
              <span className="pill">10 acres</span>
              <span className="pill">Real-time visibility</span>
              <span className="pill">Automated control</span>
              <span className="pill">M-Pesa</span>
            </div>
            <Button className="btn-primary" to="/majigrid" style={{ marginTop: '1.25rem' }}>
              Explore MajiGrid →
            </Button>
          </div>
        </div>
      </section>

      <Section variant="dark">
        <div className="home-sectionHead">
          <h2>Smart Water in the Field</h2>
        </div>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <img src={images.smartWaterHero} alt="Row of smart water meters installed on site" className="home-inlineImg" loading="lazy" decoding="async" />
          <div>
            <p className="text-muted" style={{ lineHeight: 1.75 }}>
              From prepaid STS vending to NB-IoT real-time monitoring — hardware, connectivity, installation,
              and long-term support.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
              <Button className="btn-primary" to="/meters">Explore the meter range →</Button>
              <Button className="btn-secondary" to="/projects">View projects</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="surface2" className="home-cta">
        <div className="text-center">
          <h2>Ready to install smart water metering?</h2>
          <p className="text-muted" style={{ maxWidth: 640, margin: '0.75rem auto 0', lineHeight: 1.75 }}>
            Talk to us about STS prepaid, NB-IoT smart metering, or MajiGrid — we respond within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.4rem' }}>
            <Button className="btn-primary" to="/contact">Get in Touch</Button>
            <Button className="btn-green" href="https://wa.me/254116593201" target="_blank" rel="noreferrer">
              WhatsApp 0116 593 201
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
