import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import './About.css';

const timeline = [
  { year: '2018', title: 'Founded in Nairobi', desc: 'Incorporated Nov 9, 2018.', color: 'var(--cyan)' },
  { year: '2020', title: 'STS Prepaid Launch', desc: 'Launched the Caldora STS Prepaid Water platform. First landlord clients onboarded.', color: 'var(--green)' },
  { year: '2021', title: 'NB-IoT Smart Metering', desc: 'Deployed Caldora NB-IoT real-time water metering infrastructure across properties.', color: 'var(--purple)' },
  { year: '2022', title: '10-Acre Irrigation', desc: 'Flagship smart irrigation deployment on a commercial strawberry farm.', color: 'var(--orange)' },
  { year: '2023', title: 'Expanding Installations', desc: 'Grew our installation and support team to serve landlords, institutions, and utilities nationwide.', color: 'var(--gold)' },
  { year: '2024', title: 'MajiGrid Platform', desc: 'Launched MajiGrid — intelligent water management for farms, counties, and national programs.', color: 'var(--green)' },
  { year: '2026', title: 'Growing & Scaling', desc: '50+ clients served. Prepaid, real-time, and bulk metering. Long-term managed installations.', color: 'var(--cyan)' },
];

const values = [
  { title: 'Innovation', desc: 'Leveraging IoT and cellular connectivity to solve real water infrastructure problems at scale.', accent: 'cyan', className: 'card--cyan' },
  { title: 'Reliability', desc: 'We build systems that stay up — ensuring accurate billing and revenue protection for our clients.', accent: 'green', className: 'card--green' },
  { title: 'Partnership', desc: 'We are not just suppliers; we survey, install, and support every meter for the long term.', accent: 'orange', className: 'card--orange' },
];

const About = () => {
  return (
    <div className="about-page">
      <SEO
        title="About Us — Smart Water Metering Since 2018"
        description="Founded in 2018 in Nairobi, Caledonia Heights supplies, installs, and supports smart water metering systems — STS prepaid, NB-IoT, and MajiGrid — for landlords, developers, institutions, and utilities."
        keywords="smart water meter Kenya, water metering company Nairobi, prepaid water meter M-Pesa, NB-IoT water meter"
        canonical="https://caledoniaheights.co.ke/about"
      />
      <PageHero
        title="8 Years of Smart Water Infrastructure"
        subtitle="From our first prepaid water platform to national-scale metering and irrigation deployments."
        badge="About Us"
        bgVariant="surface"
        backgroundImage={images.aboutHero}
        ctaText="Work with us"
        ctaLink="/contact"
        secondaryCtaText="View our projects"
        secondaryCtaLink="/projects"
      />

      <Section variant="dark">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="section-label">Our Mission</span>
            <h2 style={{ marginBottom: '1rem' }}>Water becomes information you can act on</h2>
            <p className="text-muted" style={{ lineHeight: 1.75 }}>
              Caledonia Heights supplies, installs, and supports smart water metering systems for landlords,
              property developers, institutions, and utilities. We turn a water meter from a dial on a wall
              into the point where water becomes information you can act on — billed, controlled, and visible
              from anywhere.
            </p>
          </div>
          <div className="grid grid-3">
            {values.map((v) => (
              <div key={v.title} className={`card card-pad card-hover ${v.className}`}>
                <h4 style={{ marginBottom: '0.6rem' }}>{v.title}</h4>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="surface2">
        <div className="section-header">
          <span className="section-label section-label--purple">Our Story</span>
          <h2>Timeline of delivery</h2>
          <p>Seven years of building water infrastructure that matters — from our first prepaid meters to national-scale deployments.</p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="timeline-item"
              style={{ '--item-color': item.color }}
            >
              <div className="timeline-dot" />
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="dark">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div className="credentials-card card card-pad card--gradient">
            <div className="section-label">Credentials</div>
            <h3 style={{ marginBottom: '0.75rem' }}>Registered &amp; Ready</h3>
            <p className="text-muted" style={{ lineHeight: 1.7 }}>
              A fully registered and compliant company, Caledonia Heights Limited is set up to serve
              enterprises, government bodies, and institutions alike.
            </p>
            <div className="cred-items">
              <div className="cred-item">
                <span className="cred-label">Founded</span>
                <span className="cred-value">2018, Nairobi</span>
              </div>
              <div className="cred-item">
                <span className="cred-label">Location</span>
                <span className="cred-value">Westlands, Nairobi</span>
              </div>
              <div className="cred-item">
                <span className="cred-label">Status</span>
                <span className="cred-value">Active &amp; Incorporated</span>
              </div>
            </div>
          </div>
          <div className="card card-pad card-hover">
            <h3 style={{ marginBottom: '0.75rem' }}>A small, elite team</h3>
            <p className="text-muted" style={{ lineHeight: 1.75 }}>
              Enterprise-grade delivery capability without the overhead of a large agency. We survey, install, deploy, and maintain —
              one partner from day one.
            </p>
            <div className="about-hiring card card-pad" style={{ marginTop: '1.25rem' }}>
              <div className="mono text-dim" style={{ marginBottom: '0.4rem' }}>Careers</div>
              <p style={{ fontSize: '0.95rem' }}>We&apos;re always looking for exceptional engineers and project leads.</p>
              <Button className="btn-outline btn--sm" to="/contact" style={{ marginTop: '1rem' }}>
                Get in touch →
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <div className="text-center">
          <h2>Ready to partner with us?</h2>
          <p className="text-muted" style={{ maxWidth: 560, margin: '0.75rem auto 0', lineHeight: 1.75 }}>
            Whether you need STS prepaid meters, NB-IoT smart metering, or a MajiGrid deployment — let&apos;s talk.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.4rem' }}>
            <Button className="btn-primary" to="/contact">Contact our team →</Button>
            <Button className="btn-green" href="https://wa.me/254116593201" target="_blank" rel="noreferrer">
              WhatsApp us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
