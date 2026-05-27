# CALEDONIA HEIGHTS — COMPLETE WEBSITE REBUILD
## Cursor / Claude Sonnet Prompt

---

## OVERVIEW & MISSION

You are rebuilding the **Caledonia Heights Limited** website from scratch within the existing Vite + React codebase. This must be a **world-class, premium technology company website** — the kind that makes enterprise clients, government agencies, and property developers immediately feel they are dealing with a serious, high-capability partner.

**Company**: Caledonia Heights Limited  
**Founded**: 2018, Nairobi, Kenya  
**Tagline**: *"Powering the Future of Digital Infrastructure"*  
**Domain**: caledoniaheights.co.ke  
**Contact**:
- Phone / WhatsApp: 0708 001 000
- Email: info@caledoniaheights.co.ke
- Alt Email: caledoniaheightsltd1@gmail.com
- Address: Krishna Centre, Westland, Woodvale Grove, Nairobi

---

## DESIGN DIRECTION — NON-NEGOTIABLE

### Aesthetic: **"African Tech Powerhouse"**
Think deep navy/midnight blue primary with **electric cyan (#00D4FF)** and **vivid green (#00FF88)** as dual accents. Clean, authoritative, and bold — not corporate-bland. This must read as a Nairobi-based company competing at international standards.

### Core Design Rules:
- **Colors**: 
  - Background: `#020B18` (near black / deep space navy)
  - Surface: `#071428` (dark card bg)
  - Primary accent: `#00C8FF` (electric cyan)
  - Secondary accent: `#00E87A` (vivid green — used for CTAs and highlights)
  - Text primary: `#FFFFFF`
  - Text muted: `#8BA3BF`
  - Border: `rgba(0,200,255,0.15)`

- **Typography**:
  - Display/headings: `'Syne'` (Google Fonts — bold, geometric, modern)
  - Body: `'DM Sans'` (clean, readable)
  - Monospace/tech labels: `'JetBrains Mono'` (for stats, tech specs)
  - Import all from Google Fonts in `index.html`

- **Animations** (use Framer Motion — install it: `npm install framer-motion`):
  - Page load: staggered fade-up reveals for hero content
  - Scroll triggers: sections slide/fade in as they enter viewport
  - Navbar: glass blur on scroll
  - Cards: subtle lift + glow on hover (`box-shadow` cyan glow)
  - Hero: animated gradient mesh background + floating particle grid
  - Numbers/stats: count-up animation on enter viewport
  - Cursor: custom cursor dot that follows mouse (desktop only)

- **Backgrounds**: 
  - Hero: animated CSS gradient mesh (deep navy → cyan tones) + SVG grid pattern overlay
  - Sections alternate between `#020B18` and `#071428`
  - Cards: glass morphism style (`backdrop-filter: blur; background: rgba(255,255,255,0.03)`)

- **NO**: Inter font, purple gradients, generic corporate layouts, clip art icons, stock-photo style placeholders

---

## INSTALL DEPENDENCIES

Run before coding:
```bash
npm install framer-motion
npm install react-intersection-observer
npm install @tabler/icons-react
npm install react-countup
```

---

## SITE STRUCTURE & PAGES

### Routes (update `src/App.jsx`):
```
/              → Home
/about         → About
/services      → Services
/platforms     → Platforms  
/majismart     → MajiSmart (smart irrigation platform — NEW)
/smart-water   → Smart Water Metering (NB-IoT + STS Prepaid)
/ai-solutions  → AI Solutions (NEW — chatbots, sales agents, automation)
/projects      → Projects / Portfolio
/contact       → Contact
```

---

## PAGE-BY-PAGE SPECIFICATIONS

---

### 1. HOME PAGE (`src/pages/Home.jsx`)

#### Hero Section
- Full-viewport height
- Animated background: slow-moving gradient mesh + subtle dot grid pattern (CSS/SVG)
- Headline (large, Syne font): **"Your Long-Term Technology Partner"**
- Sub-headline: **"Building the critical digital infrastructure that powers Kenya's enterprises, utilities, and government institutions."**
- Two CTA buttons: `[Explore Our Solutions →]` (cyan filled) and `[View Our Work]` (outlined)
- Floating badge row beneath: `• Est. 2018 • Nairobi, Kenya • 8+ Years` 
- Hero image area: animated dashboard mockup grid (3 overlapping phone/laptop screens showing platform UIs — use CSS-drawn mockups if no real images yet, with placeholders for client to swap in)
- Small scroll indicator at bottom

#### Trust Bar / Stats Strip
- Animated count-up numbers on scroll enter:
  - `8+` Years of Delivery
  - `50+` Projects Delivered
  - `100%` Kenya-Based Team
  - `24/7` Support & Monitoring
- Dark strip, numbers in cyan, labels in muted text

#### Services Overview (6 cards in 2×3 grid)
Each card: icon (Tabler Icons), bold title, 2-line description, hover glow effect

1. **Smart Water Solutions** — NB-IoT metering, STS prepaid, remote valve control
2. **MajiSmart Irrigation** — AI-powered irrigation intelligence for farms & schemes
3. **Custom Software Development** — Web apps, mobile apps, ERP systems
4. **AI Business Agents** — Custom chatbots, AI sales agents, workflow automation
5. **Cloud Hosting & DevOps** — Managed hosting, deployment, maintenance
6. **Enterprise ERP Systems** — End-to-end business management systems

#### Flagship Platforms Section
Three platform cards in a row, each with a subtle glow border:
1. **MajiSmart** — Smart irrigation (green accent)
2. **BNS NB-IoT Platform** — Real-time smart metering (cyan accent)
3. **BNS Prepaid Water** — M-Pesa prepaid metering with STS tokens (blue accent)
Each card: platform name, one-liner, key stat or feature, `[Learn More →]` link

#### Featured Project: Strawberry Farm Flagship
Full-width banner (dark teal gradient): 
- "100-Acre Smart Irrigation Deployment, Kenya"
- Details: Solar-powered boreholes + NB-IoT sensors + automated drip irrigation + real-time dashboard
- Stats: 100 acres, IoT sensors, automated scheduling, M-Pesa integrated

#### AI Solutions Teaser
Two-column layout:
- Left: Bold headline "AI That Works For Your Business", description of the 3 AI services
- Right: Animated feature list with icons

#### Why Choose Us
4-column icon grid:
- 🇰🇪 Built for Kenya (local expertise, M-Pesa, Safaricom, local regulations)
- 🔧 End-to-End (build, host, maintain — one partner)
- ⚡ Enterprise-Grade (government & utility proven)
- 🤝 Long-Term Partnership (not a one-time vendor)

#### Recent Projects Strip
Horizontal scroll of 5–6 project cards (see Projects page for full list)

#### CTA Section
Large centered block: "Ready to build something extraordinary?"
Two buttons + contact info inline

#### Footer
- Logo + tagline
- 4-column links: Services, Platforms, Company, Contact
- Social: WhatsApp, Email
- Bottom bar: © 2026 Caledonia Heights Limited. Incorporated Nov 2018.

---

### 2. ABOUT PAGE (`src/pages/About.jsx`)

#### Hero
- Title: "8 Years of Building Kenya's Digital Backbone"
- Sub: "From a web agency to a full-spectrum technology powerhouse"
- Animated timeline graphic on the right

#### Mission & Values
- Mission: "To build, host, and maintain the critical systems that power our clients' success."
- Three value cards: Innovation, Reliability, Partnership

#### Our Story Timeline (animated, vertical scroll)
```
2018 — Founded in Nairobi. First web development projects.
2020 — Launched STS Prepaid Water platform. First utility clients.
2021 — Deployed NB-IoT smart metering infrastructure.
2022 — 100-acre smart irrigation flagship project.
2023 — Expanded AI & automation services.
2024 — MajiGrid irrigation intelligence platform launched.
2026 — Serving 50+ clients across Kenya.
```

#### Team Section
- "A small, elite team with enterprise-grade delivery capability"
- No placeholder faces — use a "We're hiring" card and an abstract team graphic

#### Credentials
- Company Registration: PVT-MKUYDJM (incorporated Nov 9, 2018)
- Location: Krishna Centre, Westlands, Nairobi
- Certificate displayed as styled card (not image)

---

### 3. SERVICES PAGE (`src/pages/Services.jsx`)

Six service sections, each with full detail:

#### 1. Smart Water Solutions
- STS Prepaid Water Metering (M-Pesa → token → SMS delivery)
- NB-IoT Real-Time Metering (remote valve, leak detection, dashboards)
- Multi-tenant landlord portals
- Key features list, tech stack mention

#### 2. MajiSmart Irrigation Platform
- Redirect/link to `/majismart` for full detail
- Brief: AI-powered irrigation management for farms, schemes, counties

#### 3. Custom Software Development
- Web applications (React, Next.js, Laravel)
- Mobile apps
- API development & integrations
- E-commerce platforms

#### 4. AI Business Solutions
- Redirect/link to `/ai-solutions` for full detail
- Brief: chatbots, AI sales agents, workflow automation

#### 5. Enterprise ERP Systems
- Custom ERP development
- Integration with existing systems
- Payroll, inventory, HR modules

#### 6. Cloud Hosting & Managed Services
- VPS deployment & management
- CI/CD pipelines
- 24/7 uptime monitoring
- SSL, backups, scaling

---

### 4. PLATFORMS PAGE (`src/pages/Platforms.jsx`)

Three flagship platform showcases:

#### MajiSmart (formerly Smart Irrigation Platform)
- Full-width hero graphic (animated CSS nodes connecting)
- Platform description
- Feature grid: NB-IoT meters, soil sensors, AI analysis, dashboards, mobile alerts, automated valves
- Use case: 100-acre strawberry farm
- CTA: `[Request a Demo]`

#### BNS NB-IoT Smart Metering
- Real-time water monitoring for utilities & property managers
- Key features: UDP/CBOR data ingestion, live dashboards, alarm management (leak, tamper, reverse flow, low battery), remote valve control, SMS/email alerts, multi-landlord portals
- Tech stack badge row: Next.js, Node.js, Supabase, NB-IoT
- CTA: `[Learn More →]` → `/smart-water`

#### BNS STS Prepaid Water Platform
- M-Pesa-native prepaid water vending
- Key flow: Customer pays via M-Pesa → token generated → SMS delivered → meter updated
- Features: Landlord portal, tenant portal, admin dashboard, automated M-Pesa B2B settlements
- Tech: Laravel 12, PHP 8.2, Safaricom Daraja API, Shengda meter API
- CTA: `[Learn More →]` → `/smart-water`

#### Innovation Projects (cards)
- WorkLink — gig economy platform (in development)
- AI Sales Concierge systems
- Custom ERP deployments

---

### 5. MAJISMART PAGE (`src/pages/MajiSmart.jsx`) — NEW

This is a dedicated product landing page for the smart irrigation platform.

#### Hero
- Full viewport, dark with green/teal accents
- Title: **"MajiSmart"** (large, styled as a product name)
- Sub: **"Intelligent Water Management for Modern Agriculture"**
- Tagline: *"From field signals to management action — one platform."*
- CTA: `[Request a Demo]` + `[Download Brochure]`

#### What It Is
- MajiSmart connects physical irrigation infrastructure to AI-enabled dashboards, alerts, reports, and operational recommendations
- Not a gadget — a management system
- Suitable for: farms, irrigation schemes, counties, national programs

#### How It Works (animated flow)
5-step horizontal flow (mobile: vertical):
1. **NB-IoT Meters** → Measure flow, pressure, water movement
2. **Connectivity** → Transmit readings from farms, blocks, pumps
3. **AI Analysis** → Detect anomalies, forecast demand, score risk
4. **Dashboard + Alerts** → Live visibility, mobile alerts, decision priorities
5. **Reports** → Accountability evidence for teams and partners

#### Key Features Grid (6 cards)
- Real-time flow & pressure monitoring
- Soil moisture sensing integration
- Automated pump & valve control
- AI anomaly detection & demand forecasting
- Mobile alerts & SMS notifications
- Multi-farm / multi-county dashboards

#### Flagship Case Study
- 100-acre strawberry farm, Kenya
- Solar-powered borehole systems
- IoT sensor network
- Automated drip irrigation
- M-Pesa billing integration
- Real-time monitoring dashboard
- Stats in large callout boxes

#### Who It's For
- Large-scale commercial farms
- County irrigation schemes
- National water management programs
- Agricultural cooperatives

#### CTA
Contact form or WhatsApp button

---

### 6. SMART WATER PAGE (`src/pages/SmartWater.jsx`) — NEW

Combined page for both water metering products.

#### Hero
- "Smart Water Metering Solutions"
- "Real-time monitoring, automated billing, and remote control for water utilities and property managers"

#### Tab/Toggle: STS Prepaid | NB-IoT Real-Time
(Two tabs, same page)

**STS Prepaid Tab:**
- How it works: M-Pesa PayBill → platform matches meter → calculates units → Shengda token → SMS to customer
- Who it's for: Landlords, property managers, gated communities
- Features: Multi-tenant, configurable pricing, B2B settlements, landlord/tenant/admin portals
- Pricing model note (don't quote specific splits — say "configurable revenue sharing")

**NB-IoT Real-Time Tab:**
- How it works: Shengda ultrasonic meters → NB-IoT/4G → UDP server → database → dashboard
- Meter specs: 6-10 year battery, ultrasonic measurement, remote valve control, built-in alarms
- Alarm types: Leak, burst pipe, reverse flow, tamper, low battery, communication lost
- Dashboard features: Real-time readings, charts, SMS/email alerts, valve control
- Tech: Next.js 14, Supabase, Node.js UDP server

#### Why Choose Our Platform
Feature comparison vs manual systems: automation, accuracy, uptime, scale

---

### 7. AI SOLUTIONS PAGE (`src/pages/AiSolutions.jsx`) — NEW

#### Hero
- "AI That Works For Your Business"
- "We build custom AI agents, chatbots, and automation systems tailored to your exact operations"
- Animated: floating chat bubble mockups, data flow visuals

#### Three Core AI Products

**1. AI Business Chatbot**
- Custom-trained on your business data, products, and FAQs
- Handles customer queries 24/7 without staff
- Integrates with your website, WhatsApp, or app
- Use cases: customer support, product info, booking, FAQs
- "We build, train, deploy, and maintain it for you"

**2. AI Sales Agent**
- Personalised AI agent that qualifies leads, follows up, and books appointments
- Learns your sales process, pricing, and objection handling
- Works via WhatsApp, web chat, or voice
- Case reference: "Built for PhonesOnCredit — automated sales pipeline from first inquiry to conversion"
- Outcome: More leads converted, less staff time on repetitive follow-up

**3. AI Workflow Automation**
- Map your business processes → identify automation opportunities
- Build AI-powered flows for: order processing, reporting, data entry, document processing
- Integration with existing systems (ERP, CRM, WhatsApp, email)
- "Turn your operations from manual to intelligent"

#### How We Package AI Services
Three tiers (shown as pricing-style cards, no prices — "contact for quote"):
- **Starter AI** — Single chatbot for one channel (website or WhatsApp)
- **Business AI** — Multi-channel chatbot + sales agent + basic automation
- **Enterprise AI** — Full AI audit + multiple agents + custom integrations + ongoing optimization

#### Process
4 steps: Discover → Design → Build & Train → Deploy & Maintain

#### CTA
"Not sure which AI solution fits your business? Let's talk."
WhatsApp button + contact form

---

### 8. PROJECTS PAGE (`src/pages/Projects.jsx`)

Filter tabs: All | Smart Water | AI & Software | Web & ERP | Agriculture

Project cards (maintain existing ones, add/update):

1. **MajiSmart Irrigation System** (Agriculture)
   - 100-acre strawberry farm, Kenya
   - Solar boreholes + NB-IoT + automated drip + dashboard
   - Tech: IoT, NB-IoT, React, Node.js
   
2. **BNS NB-IoT Metering Platform** (Smart Water)
   - Real-time water monitoring for property managers
   - UDP server, Supabase, Next.js dashboard
   - Tech: Next.js, Node.js, Supabase, NB-IoT
   - Link: nbiot.bnsalgotech.co.ke
   
3. **BNS STS Prepaid Water** (Smart Water)
   - M-Pesa prepaid water vending with token delivery
   - Tech: Laravel 12, Daraja API, Shengda API
   - Link: prepaid.bnsalgotech.co.ke
   
4. **AI Sales Concierge — Duciel Africa Adventures** (AI & Software)
   - Custom AI sales agent for a travel/adventures company
   - Automated lead qualification and booking inquiries
   
5. **AI Sales Automation — PhonesOnCredit** (AI & Software)
   - Automated sales pipeline for phone financing company
   - Lead qualification, follow-up automation
   
6. **Legend Petro Website** (Web & ERP)
   - Corporate website for real estate, construction, and civil works
   - Link: legendpetro.co.ke
   
7. **Dell Creek Real Estate** (Web & ERP)
   - Real estate, land sales, and property development platform
   - Link: dellcreek.co.ke
   
8. **BNS Algotech Corporate Site** (Web & ERP)
   - Smart technology solutions company showcase
   - Link: bnsalgotech.co.ke

Each card: project image placeholder (styled with gradient + icon), tags, brief description, tech badges, external link if available.

---

### 9. CONTACT PAGE (`src/pages/Contact.jsx`)

#### Layout: Two-column
**Left**: Contact details + map placeholder
- Phone: **0708 001 000** (clickable tel: link)
- WhatsApp: **0708 001 000** (wa.me link opening chat)
- Email: **info@caledoniaheights.co.ke** (mailto link)
- Address: Krishna Centre, Westlands, Woodvale Grove, Nairobi
- Office Hours: Mon–Fri 8am–6pm EAT

**Right**: Contact form
- Name, Email, Phone (optional), Service of Interest (dropdown: Smart Water, MajiSmart, AI Solutions, Custom Software, ERP, Other), Message
- Submit: POST to a mailto or Formspree endpoint (`https://formspree.io/f/YOUR_ID` — leave as placeholder to fill in)
- WhatsApp quick-contact button (prominent, green, with WhatsApp icon): "Chat with us on WhatsApp →"

#### Quick Response Promise
"We respond to all inquiries within 24 hours. For urgent matters, WhatsApp us directly."

---

## SHARED COMPONENTS

### Navbar (`src/components/Navbar.jsx`)
- Logo: `public/assets/images/logo.png` (existing)
- Links: Home, About, Services, Platforms, AI Solutions, Projects, Contact
- `Services` → dropdown on hover: Smart Water, MajiSmart, AI Solutions, Custom Software, ERP, Hosting
- `Platforms` → dropdown: MajiSmart, NB-IoT Metering, STS Prepaid
- On scroll > 80px: apply `backdrop-filter: blur(20px)` + subtle border bottom
- Mobile: hamburger menu with full-screen overlay nav
- CTA button: "Get in Touch" → `/contact`

### Footer (`src/components/Footer.jsx`)
- Replace all `<a href>` with React Router `<Link>` (fix existing bug)
- 4 columns: About, Services, Platforms, Contact
- WhatsApp float button (bottom-right, fixed position, green, pulse animation)
- © 2026 Caledonia Heights Limited

### WhatsApp Float Button (`src/components/WhatsAppFloat.jsx`) — NEW
```jsx
// Fixed bottom-right, green circle with WhatsApp icon
// href="https://wa.me/254708001000"
// Pulse animation ring around it
// Tooltip on hover: "Chat with us"
```

### ScrollToTop — keep existing

### Section — update to support `variant` prop: `dark | darker | accent-border`

### AnimatedCounter (`src/components/AnimatedCounter.jsx`) — NEW
```jsx
// Uses react-countup + react-intersection-observer
// Triggers count-up when element enters viewport
```

### PageHero (`src/components/PageHero.jsx`) — NEW
```jsx
// Reusable hero for inner pages
// Props: title, subtitle, badge (optional), ctaText, ctaLink, bgVariant
// Consistent look across About, Services, etc.
```

---

## DATA FILES — Move content out of JSX

Create `src/data/` directory:

### `src/data/services.js`
```js
export const services = [
  { id: 'smart-water', title: 'Smart Water Solutions', icon: 'IconDroplet', description: '...', link: '/smart-water' },
  { id: 'majismart', title: 'MajiSmart Irrigation', icon: 'IconPlant', description: '...', link: '/majismart' },
  // ... all 6 services
];
```

### `src/data/projects.js`
```js
export const projects = [
  { id: 'majismart', name: 'MajiSmart Irrigation', category: 'Agriculture', desc: '...', tech: [], image: '', link: '' },
  // ... all projects
];
```

### `src/data/platforms.js`
```js
export const platforms = [
  { id: 'majismart', name: 'MajiSmart', tagline: '...', features: [], accentColor: '#00E87A', link: '/majismart' },
  // ...
];
```

---

## ANIMATION PATTERNS

### Framer Motion Variants to define in `src/utils/animations.js`:

```js
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export const slideInLeftVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};
```

### Scroll trigger pattern (use throughout):
```jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

<motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={fadeUpVariant}
>
```

### Hero gradient mesh (CSS, `src/components/HeroBackground.jsx`):
```jsx
// Animated CSS gradient blobs positioned absolutely behind hero content
// 3 gradient circles: cyan, teal-green, deep blue
// Animate with slow keyframe movement (20–30s loops)
// Plus SVG dot grid overlay at low opacity
```

---

## CSS CUSTOM PROPERTIES (`src/index.css`)

Replace ALL existing CSS variables with:
```css
:root {
  /* Colors */
  --color-bg: #020B18;
  --color-surface: #071428;
  --color-surface-2: #0D1F38;
  --color-primary: #00C8FF;
  --color-primary-glow: rgba(0, 200, 255, 0.25);
  --color-secondary: #00E87A;
  --color-secondary-glow: rgba(0, 232, 122, 0.2);
  --color-text: #FFFFFF;
  --color-text-muted: #8BA3BF;
  --color-border: rgba(0, 200, 255, 0.12);
  --color-card: rgba(255, 255, 255, 0.03);
  
  /* Typography */
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --section-padding: 7rem 0;
  --container-max: 1280px;
  --container-pad: 0 1.5rem;
  
  /* Effects */
  --glass-bg: rgba(7, 20, 40, 0.7);
  --glass-border: rgba(0, 200, 255, 0.1);
  --card-shadow: 0 4px 32px rgba(0, 0, 0, 0.4);
  --glow-cyan: 0 0 40px rgba(0, 200, 255, 0.2);
  --glow-green: 0 0 40px rgba(0, 232, 122, 0.2);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  --transition-slow: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  
  /* Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
}
```

---

## REUSABLE CSS CLASSES (`src/index.css` continued)

```css
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-pad);
}

.section {
  padding: var(--section-padding);
}

.section--dark { background: var(--color-bg); }
.section--surface { background: var(--color-surface); }

.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  backdrop-filter: blur(12px);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}
.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--glow-cyan);
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), #0095cc);
  color: #000;
  font-weight: 700;
  padding: 0.875rem 2rem;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  font-family: var(--font-display);
  letter-spacing: 0.02em;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-cyan);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  padding: 0.875rem 2rem;
  border-radius: 100px;
  cursor: pointer;
  font-family: var(--font-display);
  font-weight: 600;
  transition: background var(--transition-fast), box-shadow var(--transition-fast);
}
.btn-secondary:hover {
  background: var(--color-primary-glow);
  box-shadow: var(--glow-cyan);
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1px solid var(--color-border);
  color: var(--color-primary);
  background: var(--color-primary-glow);
}

.gradient-text {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.section-label::before {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: var(--color-primary);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--color-text);
  line-height: 1.1;
}

h1 { font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 800; }
h2 { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700; }
h3 { font-size: clamp(1.25rem, 2.5vw, 1.875rem); font-weight: 600; }

p, li, a {
  font-family: var(--font-body);
  color: var(--color-text-muted);
  line-height: 1.7;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: var(--color-bg); color: var(--color-text); overflow-x: hidden; }

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-bg); }
::-webkit-scrollbar-thumb { background: var(--color-primary); border-radius: 3px; }

/* Selection */
::selection { background: var(--color-primary-glow); color: var(--color-text); }
```

---

## `index.html` UPDATES

Add Google Fonts import to `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<title>Caledonia Heights Limited | Technology Partner in Kenya</title>
<meta name="description" content="Caledonia Heights Limited — Kenya's premier technology partner. Smart water metering, AI business agents, custom software, ERP systems, and MajiSmart irrigation intelligence. Est. 2018, Nairobi.">
<meta name="keywords" content="smart water metering Kenya, NB-IoT water meter, prepaid water Kenya, AI chatbot Kenya, custom software Nairobi, ERP Kenya, irrigation automation Kenya">
<meta property="og:title" content="Caledonia Heights Limited">
<meta property="og:description" content="Building Kenya's digital infrastructure since 2018.">
<meta property="og:url" content="https://caledoniaheights.co.ke">
<link rel="canonical" href="https://caledoniaheights.co.ke">
```

---

## PHOTO/IMAGE STRATEGY

Since the client will supply real photos (water meters, installations, dashboards, farms), use this approach:

1. **Styled image placeholders** with the correct aspect ratio and a gradient fill matching the section tone — each labeled with what photo goes there (e.g., "// PHOTO: NB-IoT meter installation")
2. All `<img>` tags should have `src` pointing to `public/assets/images/[filename].jpg` — the client will drop photos in with these filenames
3. Required image slots to document in `public/assets/images/README.md`:
   - `hero-bg.jpg` — hero background (dark tech/data center or field with IoT devices)
   - `nbiot-meter.jpg` — NB-IoT water meter hardware close-up
   - `nbiot-installation.jpg` — meter being installed in pipe
   - `sts-meter.jpg` — STS prepaid meter
   - `dashboard-nbiot.jpg` — NB-IoT dashboard screenshot
   - `dashboard-sts.jpg` — STS prepaid dashboard screenshot
   - `dashboard-landlord.jpg` — Landlord portal screenshot
   - `farm-irrigation.jpg` — strawberry farm / irrigation field
   - `majismart-dashboard.jpg` — MajiSmart platform screenshot
   - `team.jpg` — team photo (optional)
   - `nairobi-office.jpg` — office / Krishna Centre

---

## PERFORMANCE & QUALITY REQUIREMENTS

1. **Lazy loading**: All images use `loading="lazy"` 
2. **Code splitting**: Each page is lazy-loaded via `React.lazy()` in App.jsx
3. **Reduced motion**: All Framer Motion animations respect `prefers-reduced-motion`
4. **Mobile-first**: All layouts work perfectly on 375px+ screens
5. **Responsive nav**: Full hamburger menu with smooth open/close animation on mobile
6. **No console errors**: All prop types and key props must be correct
7. **Accessibility**: All interactive elements have proper aria-labels, color contrast ≥ 4.5:1

---

## EXECUTION ORDER

Build in this order for fastest visible progress:

1. `index.html` → add fonts, meta tags
2. `src/index.css` → full CSS variables and base styles
3. `src/utils/animations.js` → Framer Motion variants
4. `src/components/Navbar.jsx` + `Navbar.css` → sticky glass nav with dropdowns
5. `src/components/Footer.jsx` → full footer with Link fixes
6. `src/components/WhatsAppFloat.jsx` → fixed WhatsApp button
7. `src/data/` → all data files
8. `src/pages/Home.jsx` → full homepage
9. `src/pages/Platforms.jsx` → platforms showcase
10. `src/pages/MajiSmart.jsx` → product landing page
11. `src/pages/SmartWater.jsx` → combined water metering page
12. `src/pages/AiSolutions.jsx` → AI services page
13. `src/pages/Services.jsx` → services overview
14. `src/pages/Projects.jsx` → portfolio with filter
15. `src/pages/About.jsx` → about + timeline
16. `src/pages/Contact.jsx` → contact form + WhatsApp
17. `src/App.jsx` → update all routes with React.lazy()
18. `public/assets/images/README.md` → image slot documentation

---

## FINAL QUALITY CHECK

Before considering it done, verify:
- [ ] All 9 routes load without errors
- [ ] Mobile menu works on 375px
- [ ] WhatsApp float button visible on all pages
- [ ] All internal links use `<Link>` not `<a href>`
- [ ] Framer Motion animations play on scroll
- [ ] Contact form has all fields including Service dropdown
- [ ] Phone/WhatsApp numbers are clickable
- [ ] No placeholder text like "Lorem ipsum" remains
- [ ] All Tabler icons import correctly
- [ ] Google Fonts load (check Network tab)
- [ ] `npm run build` completes without errors

---

*This prompt was prepared for Cursor (Claude Sonnet/Opus). Execute each phase completely before moving to the next. Prioritize Home page, Navbar, and Footer first as they are visible on every page.*
