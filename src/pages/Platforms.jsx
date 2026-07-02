import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import './Platforms.css';

const Platforms = () => {
  return (
    <div className="platforms-page">
      <SEO
        title="Our Platforms — MajiGrid, Smart Metering & AI"
        description="Explore Caledonia's flagship platforms: MajiGrid AI irrigation intelligence, Caldora NB-IoT smart metering, and Caldora STS prepaid water with M-Pesa integration."
        keywords="MajiGrid irrigation platform, smart water metering platform, prepaid water M-Pesa, NB-IoT metering"
        canonical="https://caledoniaheights.co.ke/platforms"
      />
      <PageHero
        title="Flagship Platforms"
        subtitle="Production-ready systems deployed in the field — managing critical infrastructure, irrigation, and revenue."
        badge="Platforms"
        bgVariant="surface"
        backgroundImage={images.platformsHero}
        ctaText="Request a demo"
        ctaLink="/contact"
        secondaryCtaText="View smart water"
        secondaryCtaLink="/smart-water"
      />

      {/* MajiGrid */}
      <Section variant="dark" id="majigrid">
        <div className="platform-block">
          <div className="platform-content">
            <h2 style={{ color: 'var(--color-secondary)' }}>MajiGrid</h2>
            <p className="platform-desc text-muted">
              Intelligent irrigation management — from field sensors to AI-enabled dashboards, alerts, and automated control.
            </p>
            <ul className="feature-list text-muted">
              <li>NB-IoT meters, soil sensors, and pump/valve automation</li>
              <li>AI anomaly detection and demand forecasting</li>
              <li>Multi-farm dashboards and mobile alerts</li>
            </ul>
            <Button className="btn-primary" to="/majigrid">Learn more →</Button>
          </div>
          <div className="platform-visual">
            <img src={images.majigridDashboard} alt="MajiGrid dashboard" className="dashboard-img" loading="lazy" decoding="async" />
          </div>
        </div>
      </Section>

      {/* STS Prepaid */}
      <Section variant="surface" id="sts-system">
        <div className="platform-block reverse">
          <div className="platform-content">
            <h2 style={{ color: 'var(--cyan)' }}>Caldora STS Prepaid Water</h2>
            <p className="platform-desc text-muted">
              M-Pesa-native prepaid water vending with instant STS token delivery and landlord revenue settlements.
            </p>
            <ul className="feature-list text-muted">
              <li><strong>M-Pesa Integration:</strong> Seamless C2B payments with automated reconciliation.</li>
              <li><strong>Token Generation:</strong> Instant STS token delivery via SMS.</li>
              <li><strong>Role-Based Access:</strong> Admin, landlord, and tenant portals.</li>
            </ul>
            <div className="pill-row" style={{ marginBottom: '1rem' }}>
              <span className="pill">Laravel 12</span>
              <span className="pill">Daraja API</span>
              <span className="pill">Caldora API</span>
            </div>
            <Button className="btn-secondary" to="/smart-water">Learn more →</Button>
          </div>
          <div className="platform-visual platform-visual--stack">
            <img src={images.dashboardSts} alt="STS prepaid water dashboard" className="dashboard-img" loading="lazy" decoding="async" />
            <img src={images.stsMeter} alt="STS prepaid water meter" className="platform-img-secondary" loading="lazy" decoding="async" />
          </div>
        </div>
      </Section>

      {/* NB-IoT */}
      <Section variant="dark" id="nbiot-system">
        <div className="platform-block">
          <div className="platform-content">
            <h2 style={{ color: 'var(--cyan)' }}>Caldora NB-IoT Smart Metering</h2>
            <p className="platform-desc text-muted">
              Real-time water monitoring for utilities and property managers — remote reading, alarms, analytics, and valve control.
            </p>
            <ul className="feature-list text-muted">
              <li>Leak, tamper, reverse flow, and low-battery alarms</li>
              <li>Live dashboards with SMS/email alerts</li>
              <li>Remote valve control for enforcement</li>
            </ul>
            <div className="pill-row" style={{ marginBottom: '1rem' }}>
              <span className="pill">Next.js</span>
              <span className="pill">Supabase</span>
              <span className="pill">NB-IoT</span>
            </div>
            <Button className="btn-secondary" to="/smart-water">Learn more →</Button>
          </div>
          <div className="platform-visual platform-visual--stack">
            <img src={images.dashboardNbiot} alt="NB-IoT smart metering dashboard" className="dashboard-img" loading="lazy" decoding="async" />
            <img src={images.nbiotMeter} alt="NB-IoT ultrasonic smart meter" className="platform-img-secondary" loading="lazy" decoding="async" />
          </div>
        </div>
      </Section>

      {/* Innovation */}
      <Section variant="surface2">
        <h2 className="text-center" style={{ marginBottom: '1.4rem' }}>Innovation Projects</h2>
        <div className="grid grid-2">
          <div className="innovation-card card card-hover">
            <div className="innovation-img-wrapper">
              <img src={images.farmIrrigation} alt="Smart irrigation deployment on a commercial farm" loading="lazy" decoding="async" />
            </div>
            <div className="innovation-content card-pad">
              <h3>10-Acre Smart Irrigation</h3>
              <p className="text-muted" style={{ lineHeight: 1.7 }}>
                Solar boreholes, NB-IoT sensors, automated drip irrigation, and a real-time operations dashboard.
              </p>
              <Link to="/majigrid" className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                View MajiGrid →
              </Link>
            </div>
          </div>
          <div className="innovation-card card card-hover">
            <div className="innovation-img-wrapper">
              <img src={images.nbiotInstallation} alt="NB-IoT meter installation in the field" loading="lazy" decoding="async" />
            </div>
            <div className="innovation-content card-pad">
              <h3>Field Deployments at Scale</h3>
              <p className="text-muted" style={{ lineHeight: 1.7 }}>
                Professional installation and commissioning for smart metering networks across properties and utilities.
              </p>
              <Link to="/smart-water" className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                Smart water solutions →
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Platforms;
