# CALEDONIA HEIGHTS — DESIGN OVERHAUL & FIX PROMPT
## For Cursor (Claude Sonnet/Opus)

---

## WHAT IS WRONG — READ THIS FIRST

The current build has these critical problems that must ALL be fixed:

1. **Colors are too dark and muddy** — text is invisible on cards, low contrast throughout
2. **Font (Syne) looks wrong** — replace entirely with a better pairing
3. **Cards are invisible** — glass cards on dark backgrounds disappear; borders and content can't be read
4. **Alignment is broken** — sections have inconsistent padding, things look "off"
5. **"Step" placeholder text remains** — MajiSmart "How it works" cards still say "Step" with no icons or names
6. **"BNS" branding must be removed** — replace everywhere with correct brand names (see §3)
7. **About and Contact pages never got the new design** — they still use the old light CSS
8. **Performance** — images are not lazy-loaded or optimized
9. **Missing content** — some sections have placeholder copy that was never filled in

---

## §1 — NEW COLOR SYSTEM (Replace ALL existing CSS variables)

The site needs to feel **alive, vibrant, and energetic** — not like a dark void. Use a **multi-accent system** with a bold gradient hero and vivid section accents.

### New Palette

```css
:root {
  /* === BASE === */
  --bg-deep:      #040E1C;   /* Deepest background */
  --bg-dark:      #07162A;   /* Section bg (slightly lighter) */
  --bg-card:      #0B1D35;   /* Card background */
  --bg-card-hover:#0E2440;   /* Card hover state */
  
  /* === BRAND ACCENTS (use all of these — vibrant multi-color) === */
  --cyan:         #00D4FF;   /* Electric blue-cyan — primary tech accent */
  --green:        #00F090;   /* Vivid emerald — MajiSmart / CTAs */
  --orange:       #FF7A00;   /* Warm orange — AI services accent */
  --purple:       #8B5CF6;   /* Violet — ERP / enterprise accent */
  --coral:        #FF4D6A;   /* Hot coral-red — alarms / alerts accent */
  --gold:         #FFB800;   /* Amber gold — premium / highlights */
  
  /* === GLOWS (used in box-shadow for vibrance) === */
  --glow-cyan:    0 0 30px rgba(0, 212, 255, 0.35);
  --glow-green:   0 0 30px rgba(0, 240, 144, 0.35);
  --glow-orange:  0 0 30px rgba(255, 122, 0, 0.3);
  --glow-purple:  0 0 30px rgba(139, 92, 246, 0.3);
  
  /* === TEXT (High contrast — always visible) === */
  --text-white:   #FFFFFF;
  --text-bright:  #E8F4FF;   /* Slightly cool white for body text */
  --text-muted:   #7FA8CC;   /* Muted — visible but secondary */
  --text-dim:     #4A6B8A;   /* Dim — for labels and tertiary info */
  
  /* === BORDERS (visible, not invisible) === */
  --border-subtle: rgba(0, 212, 255, 0.18);
  --border-card:   rgba(255, 255, 255, 0.08);
  --border-bright: rgba(0, 212, 255, 0.5);
  
  /* === GRADIENTS === */
  --grad-hero:     linear-gradient(135deg, #040E1C 0%, #071E3D 50%, #0A2545 100%);
  --grad-cyan:     linear-gradient(135deg, #00D4FF, #0095CC);
  --grad-green:    linear-gradient(135deg, #00F090, #00B870);
  --grad-orange:   linear-gradient(135deg, #FF7A00, #FF5500);
  --grad-multi:    linear-gradient(135deg, #00D4FF 0%, #8B5CF6 50%, #00F090 100%);
  --grad-card:     linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(139,92,246,0.06) 100%);
  
  /* === TYPOGRAPHY === */
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body:    'Outfit', sans-serif;
  --font-mono:    'Space Mono', monospace;
  
  /* === SPACING === */
  --section-y:    6rem;
  --container-max:1300px;
  --radius-sm:    8px;
  --radius-md:    14px;
  --radius-lg:    22px;
  --radius-xl:    32px;
  --radius-pill:  100px;
  
  /* === TRANSITIONS === */
  --ease-out:     cubic-bezier(0.22, 1, 0.36, 1);
  --t-fast:       0.2s var(--ease-out);
  --t-base:       0.35s var(--ease-out);
  --t-slow:       0.6s var(--ease-out);
}
```

---

## §2 — NEW FONTS (Replace Syne / DM Sans / JetBrains Mono)

### Replace `index.html` Google Fonts link with:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

**Why these fonts:**
- **Plus Jakarta Sans** — Modern, geometric, confident. Reads as premium African tech without looking generic. Great weight contrast between 400 and 800.
- **Outfit** — Clean, friendly, highly legible at body sizes. Better than DM Sans at small sizes.
- **Space Mono** — For stats, badges, code labels. More personality than JetBrains Mono.

### Typography Scale

```css
/* Headings */
h1 { font-family: var(--font-display); font-size: clamp(2.6rem, 6vw, 5.5rem); font-weight: 800; line-height: 1.08; color: var(--text-white); letter-spacing: -0.02em; }
h2 { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.75rem); font-weight: 700; line-height: 1.1; color: var(--text-white); letter-spacing: -0.015em; }
h3 { font-family: var(--font-display); font-size: clamp(1.25rem, 2.5vw, 2rem); font-weight: 700; line-height: 1.2; color: var(--text-white); }
h4 { font-family: var(--font-display); font-size: clamp(1rem, 2vw, 1.375rem); font-weight: 600; color: var(--text-white); }

/* Body */
p { font-family: var(--font-body); font-size: 1.0625rem; line-height: 1.75; color: var(--text-bright); }
.text-muted { color: var(--text-muted) !important; }
.text-dim { color: var(--text-dim) !important; }

/* Mono labels */
.label, .mono, .badge-text { font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; }
```

---

## §3 — BRANDING FIX: Remove ALL "BNS" References

Go through **every file** and make these replacements:

| Replace | With |
|---------|------|
| "BNS NB-IoT" | "Caldora NB-IoT Smart Metering" |
| "BNS STS Prepaid" | "Caldora STS Prepaid Water" |
| "BNS Platform" | "Caldora Platform" |
| "BNS Algotech" | (link text only — keep the URL bnsalgotech.co.ke as the href, but display text should say "BNS Algotech" is fine for the external link label since that's the company name at that URL) |
| "BNS prepaid" | "Caldora STS Prepaid" |

**Correct product names for the website:**
- **Caldora STS Prepaid Water** — The M-Pesa prepaid water metering platform
- **Caldora NB-IoT Smart Metering** — The real-time NB-IoT monitoring platform  
- **MajiSmart** — The smart irrigation / AI water management platform

---

## §4 — CARD SYSTEM FIX (Critical — cards are invisible)

### The problem
Cards use `rgba(255,255,255,0.03)` background on `#020B18` — this is essentially invisible and no border is visible either.

### The fix — replace ALL card CSS with:

```css
/* BASE CARD — always visible */
.card {
  background: var(--bg-card);              /* #0B1D35 — a real visible dark blue */
  border: 1px solid var(--border-card);    /* rgba(255,255,255,0.08) — subtle white border */
  border-radius: var(--radius-md);
  padding: 2rem;
  transition: transform var(--t-base), box-shadow var(--t-base), border-color var(--t-base);
}
.card:hover {
  transform: translateY(-5px);
  border-color: var(--border-subtle);      /* cyan border on hover */
  box-shadow: var(--glow-cyan);
}

/* ACCENT CARDS — colored left border for visual hierarchy */
.card--cyan   { border-left: 3px solid var(--cyan); }
.card--green  { border-left: 3px solid var(--green); }
.card--orange { border-left: 3px solid var(--orange); }
.card--purple { border-left: 3px solid var(--purple); }

/* GRADIENT CARD — for hero/featured items */
.card--gradient {
  background: var(--grad-card);
  border: 1px solid rgba(0, 212, 255, 0.2);
}

/* STAT CARD — for the stats strip */
.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 2rem 1.5rem;
  text-align: center;
}
.stat-number {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  background: var(--grad-cyan);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  display: block;
}
.stat-label {
  font-family: var(--font-body);
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
```

---

## §5 — HERO BACKGROUND (Make it vivid, not black void)

Replace the current hero background with a rich animated gradient:

```css
/* HeroBackground.css */
.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

/* Main gradient — rich dark blue with depth */
.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--grad-hero);
}

/* Animated color blobs */
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.55;
  animation: blobFloat 18s ease-in-out infinite;
}
.hero-blob--cyan {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%);
  top: -200px; right: -100px;
  animation-delay: 0s;
}
.hero-blob--green {
  width: 450px; height: 450px;
  background: radial-gradient(circle, rgba(0,240,144,0.25) 0%, transparent 70%);
  bottom: -100px; left: 10%;
  animation-delay: -6s;
}
.hero-blob--purple {
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%);
  top: 30%; left: 40%;
  animation-delay: -12s;
}

/* Dot grid overlay */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0,212,255,0.12) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.6;
}

@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.97); }
}
```

---

## §6 — FIX MAJISMART "HOW IT WORKS" SECTION

The "How it works" cards currently just say "Step" with no icon or title. Replace all 5 step cards content:

```jsx
const steps = [
  {
    icon: <IconGauge size={32} color="var(--cyan)" />,
    number: "01",
    title: "NB-IoT Meters",
    desc: "Measure flow, pressure, and water movement across farms, blocks, and pumps.",
    color: "var(--cyan)"
  },
  {
    icon: <IconWifi size={32} color="var(--green)" />,
    number: "02",
    title: "Connectivity",
    desc: "Transmit readings reliably from remote fields via NB-IoT/4G cellular network.",
    color: "var(--green)"
  },
  {
    icon: <IconBrain size={32} color="var(--purple)" />,
    number: "03",
    title: "AI Analysis",
    desc: "Detect anomalies, forecast demand, score risk, and surface action priorities.",
    color: "var(--purple)"
  },
  {
    icon: <IconDashboard size={32} color="var(--orange)" />,
    number: "04",
    title: "Dashboard & Alerts",
    desc: "Live visibility, mobile alerts, and operational decision support in real time.",
    color: "var(--orange)"
  },
  {
    icon: <IconReportAnalytics size={32} color="var(--gold)" />,
    number: "05",
    title: "Reports",
    desc: "Evidence, accountability, and performance tracking for teams and partners.",
    color: "var(--gold)"
  }
];
```

### Step card JSX:
```jsx
<div className="step-card" style={{ '--accent': step.color }}>
  <div className="step-number">{step.number}</div>
  <div className="step-icon">{step.icon}</div>
  <h4 className="step-title">{step.title}</h4>
  <p className="step-desc">{step.desc}</p>
</div>
```

### Step card CSS:
```css
.step-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-top: 3px solid var(--accent);
  border-radius: var(--radius-md);
  padding: 2rem 1.75rem;
  position: relative;
  transition: transform var(--t-base), box-shadow var(--t-base);
}
.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(from var(--accent) r g b / 0.3);
}
.step-number {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
}
.step-icon { margin-bottom: 1rem; }
.step-title { color: var(--text-white); margin-bottom: 0.625rem; }
.step-desc  { color: var(--text-bright); font-size: 0.95rem; line-height: 1.65; }
```

---

## §7 — SERVICES CARDS: USE DIFFERENT ACCENT COLORS PER SERVICE

Each service card should have its own accent color. Update `src/data/services.js`:

```js
export const services = [
  {
    id: 'smart-water',
    title: 'Smart Water Solutions',
    icon: 'IconDroplet',
    accent: 'var(--cyan)',
    description: 'NB-IoT smart metering and STS prepaid water systems with M-Pesa integration, remote valve control, and real-time monitoring.',
    link: '/smart-water',
    badge: 'IoT'
  },
  {
    id: 'majismart',
    title: 'MajiSmart Irrigation',
    icon: 'IconPlant2',
    accent: 'var(--green)',
    description: 'AI-powered smart irrigation intelligence for farms, schemes, and county programs. Field-to-dashboard water management.',
    link: '/majismart',
    badge: 'AI + IoT'
  },
  {
    id: 'ai-solutions',
    title: 'AI Business Agents',
    icon: 'IconRobot',
    accent: 'var(--orange)',
    description: 'Custom AI chatbots and sales agents trained on your business. 24/7 customer engagement and automated lead conversion.',
    link: '/ai-solutions',
    badge: 'AI'
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    icon: 'IconCode',
    accent: 'var(--purple)',
    description: 'Web applications, mobile apps, and API integrations built to your exact specifications. React, Laravel, Next.js.',
    link: '/services',
    badge: 'Dev'
  },
  {
    id: 'erp',
    title: 'Enterprise ERP Systems',
    icon: 'IconBuildingCommunity',
    accent: 'var(--gold)',
    description: 'End-to-end business management systems for operations, HR, inventory, and finance. Built and maintained for you.',
    link: '/services',
    badge: 'Enterprise'
  },
  {
    id: 'hosting',
    title: 'Cloud Hosting & DevOps',
    icon: 'IconCloud',
    accent: 'var(--coral)',
    description: 'Managed VPS hosting, CI/CD pipelines, SSL, 24/7 uptime monitoring, and long-term system maintenance.',
    link: '/services',
    badge: 'DevOps'
  }
];
```

### Service card CSS (replace in Services.css and wherever rendered):
```css
.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform var(--t-base), border-color var(--t-base), box-shadow var(--t-base);
  cursor: pointer;
  text-decoration: none;
}
.service-card:hover {
  transform: translateY(-6px);
  border-color: var(--card-accent);
  box-shadow: 0 8px 40px rgba(0,0,0,0.3), 0 0 20px var(--card-accent-glow);
}
.service-icon-wrap {
  width: 52px; height: 52px;
  border-radius: var(--radius-sm);
  background: rgba(from var(--card-accent) r g b / 0.15);
  display: flex; align-items: center; justify-content: center;
  border: 1px solid rgba(from var(--card-accent) r g b / 0.3);
}
.service-badge {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--card-accent);
  color: var(--card-accent);
  align-self: flex-start;
}
```

---

## §8 — SECTION LABEL SYSTEM (Replace the broken section-label)

Use this updated section label everywhere (it should have a small colored bar + ALL-CAPS label):

```css
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cyan);
  margin-bottom: 1rem;
}
.section-label::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 2px;
  background: var(--cyan);
  border-radius: 2px;
}
/* Color variants */
.section-label--green  { color: var(--green); }
.section-label--green::before  { background: var(--green); }
.section-label--orange { color: var(--orange); }
.section-label--orange::before { background: var(--orange); }
.section-label--purple { color: var(--purple); }
.section-label--purple::before { background: var(--purple); }
```

---

## §9 — BUTTON SYSTEM FIX

```css
/* PRIMARY — cyan gradient */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: var(--grad-cyan);
  color: #000000;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: var(--radius-pill);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: transform var(--t-fast), box-shadow var(--t-fast), filter var(--t-fast);
  white-space: nowrap;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-cyan);
  filter: brightness(1.1);
}

/* GREEN CTA */
.btn-green {
  background: var(--grad-green);
  color: #000000;
  /* same rest as primary */
}
.btn-green:hover { box-shadow: var(--glow-green); filter: brightness(1.1); }

/* OUTLINE */
.btn-outline {
  background: transparent;
  color: var(--cyan);
  border: 1.5px solid var(--cyan);
  padding: 0.875rem 2rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--t-fast), box-shadow var(--t-fast);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.btn-outline:hover {
  background: rgba(0, 212, 255, 0.1);
  box-shadow: var(--glow-cyan);
}

/* SMALL variants */
.btn--sm { padding: 0.6rem 1.25rem; font-size: 0.875rem; }
```

---

## §10 — ABOUT PAGE — FULL REBUILD (was never done)

Replace `src/pages/About.jsx` entirely:

```jsx
// About.jsx — Full dark design rebuild
// Sections:
// 1. PageHero — "8 Years Building Kenya's Digital Backbone"
// 2. Mission & Values (3 cards: Innovation/cyan, Reliability/green, Partnership/orange)
// 3. Our Story Timeline (2018–2026, vertical animated line)
// 4. Company Registration card (credibility)
// 5. CTA → Contact

// Timeline entries:
const timeline = [
  { year: '2018', title: 'Founded in Nairobi', desc: 'Incorporated Nov 9, 2018. First web development projects.', color: 'var(--cyan)' },
  { year: '2020', title: 'STS Prepaid Launch', desc: 'Launched the Caldora STS Prepaid Water platform. First utility clients onboarded.', color: 'var(--green)' },
  { year: '2021', title: 'NB-IoT Smart Metering', desc: 'Deployed Caldora NB-IoT real-time water metering infrastructure across properties.', color: 'var(--purple)' },
  { year: '2022', title: '100-Acre Irrigation', desc: 'Flagship smart irrigation deployment on a strawberry farm — Kenya\'s largest IoT farming project.', color: 'var(--orange)' },
  { year: '2023', title: 'AI & Automation', desc: 'Expanded into AI chatbots, sales agents, and workflow automation for Kenyan businesses.', color: 'var(--gold)' },
  { year: '2024', title: 'MajiSmart Platform', desc: 'Launched MajiSmart — AI-powered water intelligence for farms, counties, and national programs.', color: 'var(--green)' },
  { year: '2026', title: 'Growing & Scaling', desc: '50+ clients served. Three product lines. Long-term managed services across Kenya.', color: 'var(--cyan)' },
];
```

### Timeline CSS:
```css
.timeline {
  position: relative;
  padding-left: 2rem;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--cyan), var(--purple), var(--green));
}
.timeline-item {
  position: relative;
  padding: 0 0 2.5rem 2rem;
}
.timeline-dot {
  position: absolute;
  left: -2.375rem;
  top: 0.25rem;
  width: 14px; height: 14px;
  border-radius: 50%;
  border: 2px solid var(--item-color);
  background: var(--bg-deep);
  box-shadow: 0 0 12px var(--item-color);
}
.timeline-year {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--item-color);
  letter-spacing: 0.1em;
  margin-bottom: 0.375rem;
}
.timeline-title {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--text-white);
  font-size: 1.125rem;
  margin-bottom: 0.375rem;
}
.timeline-desc {
  color: var(--text-bright);
  font-size: 0.95rem;
  line-height: 1.65;
}
```

---

## §11 — CONTACT PAGE — FULL REBUILD (was never done)

Replace `src/pages/Contact.jsx` entirely with:

```jsx
// Contact.jsx — two-column layout
// Left: details + map placeholder
// Right: form with Formspree

const CONTACT = {
  phone:    '0708 001 000',
  phoneHref: 'tel:+254708001000',
  whatsapp:  'https://wa.me/254708001000',
  email:    'info@caledoniaheights.co.ke',
  emailAlt: 'caledoniaheightsltd1@gmail.com',
  address:  'Krishna Centre, Woodvale Grove, Westlands, Nairobi',
  hours:    'Monday – Friday, 8:00 AM – 6:00 PM EAT',
};

// Form fields:
// - Full Name (required)
// - Email Address (required)  
// - Phone Number (optional)
// - Service of Interest (select dropdown):
//     Smart Water Metering, MajiSmart Irrigation, AI Business Agents,
//     Custom Software Development, ERP System, Cloud Hosting, Other
// - Message (textarea, required)
// - Submit via Formspree: action="https://formspree.io/f/PLACEHOLDER_ID" method="POST"
//   (put a TODO comment for the client to add their Formspree ID)

// Show a WhatsApp "quick reply" green banner above the form:
// "Prefer a quick reply? Chat with us on WhatsApp →"
```

### Contact CSS highlights:
```css
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;
}
.contact-detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  margin-bottom: 1rem;
  text-decoration: none;
  transition: border-color var(--t-fast), box-shadow var(--t-fast);
}
.contact-detail-item:hover {
  border-color: var(--border-subtle);
  box-shadow: var(--glow-cyan);
}
.contact-icon-wrap {
  width: 44px; height: 44px;
  background: rgba(0, 212, 255, 0.1);
  border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.contact-label { font-family: var(--font-mono); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-dim); }
.contact-value { font-family: var(--font-display); font-weight: 600; color: var(--text-white); font-size: 1rem; margin-top: 0.2rem; }

/* Form */
.contact-form-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
}
.form-group { margin-bottom: 1.5rem; }
.form-label {
  display: block;
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--text-bright);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
.form-input, .form-select, .form-textarea {
  width: 100%;
  background: var(--bg-dark);
  border: 1.5px solid var(--border-card);
  border-radius: var(--radius-sm);
  padding: 0.875rem 1rem;
  color: var(--text-white);
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color var(--t-fast), box-shadow var(--t-fast);
  outline: none;
  appearance: none;
}
.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.12);
}
.form-textarea { min-height: 130px; resize: vertical; }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
```

---

## §12 — NAVBAR IMPROVEMENTS

The navbar links are not clearly visible enough. Fix:

```css
.nav-link {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-bright);           /* was too faint */
  text-decoration: none;
  padding: 0.375rem 0.25rem;
  transition: color var(--t-fast);
  position: relative;
}
.nav-link:hover, .nav-link.active {
  color: var(--text-white);
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0; right: 0;
  height: 2px;
  background: var(--grad-cyan);
  border-radius: 2px;
}

/* Navbar scrolled state */
nav.scrolled {
  background: rgba(4, 14, 28, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-subtle);
}
```

---

## §13 — PERFORMANCE: IMAGE LAZY LOADING

Add `loading="lazy"` and `decoding="async"` to ALL `<img>` tags site-wide:

```jsx
// Find and replace all:
<img src={...} alt={...} />
// With:
<img src={...} alt={...} loading="lazy" decoding="async" />
```

Also add this CSS to prevent layout shift:
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
.img-wrap {
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--bg-card); /* placeholder color while loading */
}
```

### Image size optimization — add to `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 4096,  // inline assets < 4kb
    chunkSizeWarningLimit: 600,
  }
})
```

### Lazy-load pages in App.jsx:
```jsx
import { lazy, Suspense } from 'react';
const Home         = lazy(() => import('./pages/Home'));
const About        = lazy(() => import('./pages/About'));
const Services     = lazy(() => import('./pages/Services'));
const Platforms    = lazy(() => import('./pages/Platforms'));
const MajiSmart    = lazy(() => import('./pages/MajiSmart'));
const SmartWater   = lazy(() => import('./pages/SmartWater'));
const AiSolutions  = lazy(() => import('./pages/AiSolutions'));
const Projects     = lazy(() => import('./pages/Projects'));
const Contact      = lazy(() => import('./pages/Contact'));

// Wrap Routes in:
<Suspense fallback={<div style={{minHeight:'100vh',background:'#040E1C'}} />}>
  <Routes>...</Routes>
</Suspense>
```

---

## §14 — PROJECTS PAGE — ADD MISSING CONTENT IN SECOND BUTTON

The Projects page hero has an empty second button (see screenshot — it shows a blank pill). Fix:

```jsx
// Change:
<button className="btn-outline btn--sm">{/* empty */}</button>
// To:
<a href="/contact" className="btn-outline btn--sm">Discuss your project →</a>
```

---

## §15 — SECTION SPACING AND ALIGNMENT FIXES

Many sections look misaligned because of inconsistent padding. Apply these rules globally:

```css
.section {
  padding: var(--section-y) 0;
}
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 2rem;   /* was 0 1.5rem — increase for breathing room */
}

/* Grid defaults — make sure they're truly responsive */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }

/* Stack ALL grids on mobile */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; gap: 1rem; }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .grid-3, .grid-4 { grid-template-columns: repeat(2, 1fr); }
}

/* Section header pattern — centered label + h2 + subtitle */
.section-header {
  max-width: 700px;
  margin: 0 auto 3.5rem;
  text-align: center;
}
.section-header p {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-top: 1rem;
  line-height: 1.7;
}
```

---

## §16 — WHATSAPP FLOAT BUTTON (make it more vivid)

```css
.whatsapp-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  width: 58px; height: 58px;
  background: #25D366;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
  text-decoration: none;
  transition: transform var(--t-fast), box-shadow var(--t-fast);
}
.whatsapp-float:hover {
  transform: scale(1.1) translateY(-2px);
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.65);
}
/* Pulse ring */
.whatsapp-float::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid rgba(37, 211, 102, 0.5);
  animation: waPulse 2s ease-out infinite;
}
@keyframes waPulse {
  0%   { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}
/* Tooltip */
.whatsapp-float .wa-tooltip {
  position: absolute;
  right: 70px;
  background: var(--bg-card);
  color: var(--text-white);
  font-family: var(--font-body);
  font-size: 0.8rem;
  padding: 0.4rem 0.875rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-card);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--t-fast);
}
.whatsapp-float:hover .wa-tooltip { opacity: 1; }
```

---

## §17 — FOOTER FIX (bottom text is too dim)

```css
.footer-bottom {
  border-top: 1px solid var(--border-card);
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-bottom p {
  color: var(--text-muted);  /* was too dim — var(--text-dim) */
  font-size: 0.875rem;
}
.footer-heading {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--text-white);
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
}
.footer-link {
  font-family: var(--font-body);
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  display: block;
  padding: 0.25rem 0;
  transition: color var(--t-fast);
}
.footer-link:hover { color: var(--cyan); }
```

---

## §18 — FINAL CHECKLIST BEFORE DONE

After making all changes, verify:

- [ ] `npm run dev` — no console errors
- [ ] ALL page backgrounds are `--bg-deep` or `--bg-dark` (never white)
- [ ] ALL card content is visible (h3/h4 in white, p in `--text-bright`)
- [ ] MajiSmart "How it works" shows step titles + icons (not just "Step")
- [ ] "BNS" does not appear in any user-visible text (only in external link hrefs if needed)
- [ ] Products named "Caldora STS Prepaid Water" and "Caldora NB-IoT Smart Metering"
- [ ] About page is fully dark-themed
- [ ] Contact page has all fields, WhatsApp button, and phone 0708 001 000
- [ ] All images have `loading="lazy"` and `decoding="async"`
- [ ] Second button on Projects hero has text content
- [ ] App.jsx uses React.lazy() for all pages
- [ ] Mobile hamburger menu opens and closes cleanly
- [ ] No `<a href="/...">` for internal links — all use `<Link to="...">`
- [ ] `npm run build` completes without errors

---

## EXECUTION ORDER (Do in this sequence)

1. **`src/index.css`** — Replace ALL CSS variables + base styles (§1, §2, §4, §5, §8, §9, §15, §16, §17)
2. **`index.html`** — Replace Google Fonts link (§2)
3. **`src/data/services.js`** — Update with accent colors (§7)
4. **`src/pages/MajiSmart.jsx`** — Fix "How it works" steps (§6)
5. **`src/pages/About.jsx`** — Full rebuild (§10)
6. **`src/pages/Contact.jsx`** — Full rebuild (§11)
7. **`src/App.jsx`** — Add React.lazy + Suspense (§13)
8. **`src/components/Navbar.jsx` + Navbar.css** — Nav link visibility (§12)
9. **`src/components/Footer.jsx` + Footer.css** — Footer fix (§17)
10. **`src/components/WhatsAppFloat.jsx`** — Vivid button (§16)
11. **All `<img>` tags site-wide** — Add lazy/async (§13)
12. **`src/pages/Projects.jsx`** — Fix empty button (§14)
13. **Branding find-and-replace** — BNS → Caldora everywhere (§3)
14. **`vite.config.js`** — Build optimizations (§13)
15. **Global card CSS** — Apply everywhere cards exist (§4)

---

*This prompt overhauls the design system, fixes all visibility issues, completes the two unbuilt pages, and replaces incorrect branding. Apply systematically in the order above.*
