import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import './AiSolutions.css';

const products = [
  {
    title: 'AI Business Chatbot',
    desc: 'Custom-trained on your business data to answer questions 24/7 and reduce staff load.',
    bullets: ['Website chat or WhatsApp', 'FAQs, bookings, support', 'We build, deploy, and maintain it'],
  },
  {
    title: 'AI Sales Agent',
    desc: 'Qualifies leads, follows up, handles objections, and books appointments across your preferred channels.',
    bullets: ['WhatsApp / web chat / voice', 'Lead qualification + follow-ups', 'Designed around your sales process'],
  },
  {
    title: 'AI Workflow Automation',
    desc: 'Turn manual operations into intelligent flows: documents, reports, order processing, and data entry.',
    bullets: ['Process mapping → automation', 'ERP/CRM/email/WhatsApp integrations', 'Secure deployment + monitoring'],
  },
];

const tiers = [
  { name: 'Starter AI', items: ['Single chatbot', 'One channel (website or WhatsApp)', 'Setup + maintenance'] },
  { name: 'Business AI', items: ['Multi-channel chatbot', 'Sales agent', 'Basic automation'] },
  { name: 'Enterprise AI', items: ['AI audit', 'Multiple agents', 'Custom integrations + ongoing optimization'] },
];

const steps = ['Discover', 'Design', 'Build & Train', 'Deploy & Maintain'];

const AiSolutions = () => {
  return (
    <div>
      <SEO
        title="AI Business Solutions — Chatbots, Sales Agents & Automation"
        description="Custom AI chatbots, sales agents, and workflow automation built for businesses. 24/7 customer engagement, automated lead conversion, and intelligent process automation."
        keywords="AI chatbot, AI sales agent, business automation, WhatsApp chatbot, workflow automation"
        canonical="https://caledoniaheights.co.ke/ai-solutions"
      />
      <PageHero
        title="AI That Works For Your Business"
        subtitle="We build custom AI agents, chatbots, and automation systems tailored to your exact operations."
        badge="AI Solutions"
        bgVariant="surface2"
        backgroundImage={images.aiHero}
        ctaText="Talk to us"
        ctaLink="/contact"
        secondaryCtaText="WhatsApp"
        secondaryCtaLink="https://wa.me/254708001000"
      />

      <Section variant="dark">
        <h2 style={{ marginBottom: '1.1rem' }}>Three core AI products</h2>
        <div className="grid grid-3">
          {products.map((p) => (
            <div key={p.title} className="ai-product-card card-hover">
              <h3 style={{ marginBottom: '0.65rem' }}>{p.title}</h3>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>{p.desc}</p>
              <ul style={{ display: 'grid', gap: '0.55rem', lineHeight: 1.7 }}>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <h2 style={{ marginBottom: '1.1rem' }}>How we package AI services</h2>
        <div className="grid grid-3">
          {tiers.map((t) => (
            <div key={t.name} className="tier-card card-hover">
              <div className="tier-label">Tier</div>
              <h3 style={{ marginBottom: '0.75rem' }}>{t.name}</h3>
              <ul style={{ display: 'grid', gap: '0.55rem', lineHeight: 1.7 }}>
                {t.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div className="divider" style={{ margin: '1.1rem 0' }} />
              <div className="mono" style={{ color: 'var(--text-muted)' }}>Contact for quote</div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="dark">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ marginBottom: '0.65rem' }}>Process</h2>
            <p className="text-muted" style={{ lineHeight: 1.7 }}>
              We move fast, but we build for reliability — the same discipline we apply to utility and enterprise systems.
            </p>
            <div className="pill-row" style={{ marginTop: '1rem' }}>
              {steps.map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <Button className="btn-primary" to="/contact">Let’s talk</Button>
            <Button className="btn-green" href="https://wa.me/254708001000" target="_blank" rel="noreferrer">
              Chat on WhatsApp →
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AiSolutions;
