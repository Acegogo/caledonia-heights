import Section from '../components/Section';
import './Platforms.css';

const Platforms = () => {
    return (
        <div className="platforms-page">
            <Section background="dark" className="platforms-hero">
                <h1 className="page-title">Flagship Platforms</h1>
                <p className="page-subtitle">
                    Production-ready systems deployed in the field, managing critical infrastructure and revenue.
                </p>
            </Section>

            {/* PLATFORM 1 */}
            <Section id="sts-system">
                <div className="platform-block">
                    <div className="platform-content">
                        <h2 className="text-primary">STS Prepaid Water Management</h2>
                        <p className="platform-desc">
                            A comprehensive utility management platform facilitating prepaid water payments,
                            token generation, and revenue collection.
                        </p>
                        <ul className="feature-list">
                            <li><strong>M-Pesa Integration:</strong> Seamless C2B payments with automated reconciliation.</li>
                            <li><strong>Token Generation:</strong> Instant STS token delivery via SMS.</li>
                            <li><strong>Role-Based Access:</strong> Admin, Landlord, and Tenant dashboards.</li>
                            <li><strong>Revenue Splitting:</strong> Automated settlements for property owners.</li>
                        </ul>
                        <div className="tech-stack-badge">PHP / Laravel Backend</div>
                        <div className="tech-stack-badge">IoT Integration</div>
                    </div>
                    <div className="platform-visual">
                        <img src="/assets/images/dashboard-sts.jpg" alt="STS Water Management Dashboard" className="dashboard-img" />
                    </div>
                </div>
            </Section>

            {/* PLATFORM 2 */}
            <Section background="light" id="nbiot-system">
                <div className="platform-block reverse">
                    <div className="platform-content">
                        <h2 className="text-primary">NB-IoT Smart Metering</h2>
                        <p className="platform-desc">
                            End-to-end IoT solution for water utilities, featuring ultrasonic smart meters
                            communicating via NB-IoT/4G networks.
                        </p>
                        <ul className="feature-list">
                            <li>Real-time remote meter reading.</li>
                            <li>Leak and tamper detection algorithms.</li>
                            <li>Remote valve control for non-payment enforcement.</li>
                            <li>Comprehensive data analytics and reporting.</li>
                        </ul>
                        <div className="tech-stack-badge">NB-IoT</div>
                        <div className="tech-stack-badge">Cloud Data Ingestion</div>
                    </div>
                    <div className="platform-visual">
                        <img src="/assets/images/dashboard-nbiot.jpg" alt="NB-IoT Smart Meter Dashboard" className="dashboard-img" />
                    </div>
                </div>
            </Section>

            {/* OTHER INNOVATIONS */}
            <Section>
                <h2 className="text-center mb-lg">Innovation Projects</h2>
                <div className="grid grid-2-cols">
                    <div className="innovation-card">
                        <div className="innovation-img-wrapper">
                            <img src="/assets/images/innovation-irrigation.jpg" alt="Smart Irrigation" />
                        </div>
                        <div className="innovation-content">
                            <h3>Smart Irrigation System</h3>
                            <p>IoT-based irrigation control with soil moisture sensing and automated watering schedules.</p>
                        </div>
                    </div>
                    <div className="innovation-card">
                        <div className="innovation-img-wrapper">
                            <img src="/assets/images/innovation-worklink.jpg" alt="WorkLink Platform" />
                        </div>
                        <div className="innovation-content">
                            <h3>WorkLink Kenya</h3>
                            <p>On-demand labour marketplace connecting employers with verified artisans and technicians.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Platforms;

