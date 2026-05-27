import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import './About.css';

const timeline = [
  { year: '2018', title: 'Founded in Nairobi', desc: 'Incorporated Nov 9, 2018. First web development projects.', color: 'var(--cyan)' },
  { year: '2020', title: 'STS Prepaid Launch', desc: 'Launched the Caldora STS Prepaid Water platform. First utility clients onboarded.', color: 'var(--green)' },
  { year: '2021', title: 'NB-IoT Smart Metering', desc: 'Deployed Caldora NB-IoT real-time water metering infrastructure across properties.', color: 'var(--purple)' },
  { year: '2022', title: '10-Acre Irrigation', desc: "Flagship smart irrigation deployment on a strawberry farm — one of Africa's most advanced IoT farming deployments.", color: 'var(--orange)' },
  { year: '2023', title: 'AI & Automation', desc: 'Expanded into AI chatbots, sales agents, and workflow automation for businesses.', color: 'var(--gold)' },
  { year: '2024', title: 'MajiSmart Platform', desc: 'Launched MajiSmart — AI-powered water intelligence for farms, counties, and national programs.', color: 'var(--green)' },
  { year: '2026', title: 'Growing & Scaling', desc: '50+ clients served. Three product lines. Long-term managed services worldwide.', color: 'var(--cyan)' },
];

const values = [
  { title: 'Innovation', desc: 'Leveraging IoT, AI, and cloud to solve real infrastructure problems at scale.', accent: 'cyan', className: 'card--cyan' },
  { title: 'Reliability', desc: 'We build systems that stay up — ensuring business continuity for mission-critical operations.', accent: 'green', className: 'card--green' },
  { title: 'Partnership', desc: 'We are not just vendors; we are long-term technology partners from build to maintenance.', accent: 'orange', className: 'card--orange' },
];

const About = () => {
  return (
    <div className="about-page">
      <SEO
        title="About Us — 8 Years Building Digital Infrastructure"
        description="Founded in 2018 in Nairobi, Caledonia Heights has been building critical digital infrastructure — smart water platforms, AI systems, and enterprise software — for businesses and utilities."
        keywords="Caledonia Heights, technology company, software development, IoT company, smart water platforms"
        canonical="https://caledoniaheights.co.ke/about"
      />
      <PageHero
        title="8 Years of Building Digital Backbone"
        subtitle="From a web agency to a full-spectrum technology powerhouse — smart water, irrigation, AI, and enterprise systems."
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
            <h2 style={{ marginBottom: '1rem' }}>Build, host, and maintain critical systems</h2>
            <p className="text-muted" style={{ lineHeight: 1.75 }}>
              To build, host, and maintain the critical systems that power our clients&apos; success — from prepaid water platforms
              to smart irrigation and AI business automation.
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
          <p>Seven years of building platforms that matter — from first websites to national-scale IoT deployments.</p>
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
              Caledonia Heights Limited is a registered company,
              fully compliant and positioned for enterprise, government,
              and institutional engagements.
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
              Enterprise-grade delivery capability without the overhead of a large agency. We build, deploy, host, and maintain —
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
            Whether you need smart water, MajiSmart, AI automation, or a custom enterprise platform — let&apos;s talk.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.4rem' }}>
            <Button className="btn-primary" to="/contact">Contact our team →</Button>
            <Button className="btn-green" href="https://wa.me/254708001000" target="_blank" rel="noreferrer">
              WhatsApp us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
