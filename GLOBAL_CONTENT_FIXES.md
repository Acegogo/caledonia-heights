# GLOBAL CONTENT FIXES
## For Cursor — Find and replace throughout entire codebase

Three changes. Apply to every file in `src/` and `public/` — pages, components, data files, SEO strings, everything.

---

## FIX 1 — REMOVE KENYAN SCOPE — MAKE GLOBAL

### A) Stats strip / count-up on Home page
Find and delete the "100% Kenya-Based" stat card entirely from the stats strip in `Home.jsx`.
Replace it with a more universal stat, for example:
```jsx
{ value: '5', suffix: '+', label: 'Countries Served' }
// or simply remove it and keep only 3 stat cards: 8+ Years, 50+ Projects, 24/7 Support
```
Do not add a country-specific stat. Keep the remaining 3 stats.

### B) Footer description — already updated but double-check
The footer description should NOT end with "across Kenya" or mention Kenya at all.
Current correct version: *"From smart farms and water networks to growing businesses and urban properties — we build, host, and maintain the technology that keeps Kenya moving."*
Update the last part:
```
Find:    "the technology that keeps Kenya moving"
Replace: "the technology that moves businesses forward"
```

### C) Global find and replace across ALL src/ files:
```
Find:    "across Kenya"
Replace: (delete the phrase — just remove it, adjust sentence naturally)

Find:    "in Kenya"
Replace: (delete — remove from sentences, adjust naturally)

Find:    "Kenya's enterprises"
Replace: "enterprises"

Find:    "Kenya's businesses"
Replace: "businesses"

Find:    "Kenya's digital infrastructure"
Replace: "digital infrastructure"

Find:    "Kenya's largest IoT farming project"
Replace: "one of Africa's most advanced IoT farming deployments"

Find:    "for Kenya's"
Replace: "for"

Find:    "Built for Kenya"
Replace: "Built for Real Deployments"

Find:    "100% Kenya-Based Team"
Replace: (remove this stat entirely from wherever it appears)

Find:    "100% Kenya team"
Replace: (remove)
```

### D) SEO keywords and descriptions in `src/components/SEO.jsx` and all page-level `<SEO />` props:
Remove "Kenya" from keywords where it limits scope. Keep it in location-specific strings (contact page address, canonical URLs stay as caledoniaheights.co.ke). 

Specifically update these descriptions:

**Home SEO description:**
```
Find:    "for Kenya's enterprises and utilities"
Replace: "for enterprises, utilities, and institutions"
```

**About SEO description:**
```
Find:    "for Kenya's businesses and utilities"
Replace: "for businesses and utilities"
```

**Services SEO keywords:**
```
Find:    "technology services Kenya, smart water solutions, AI agents Nairobi, ERP development Kenya, web development Nairobi"
Replace: "smart water solutions, AI business agents, ERP development, web development, IoT platforms, irrigation intelligence"
```

**Do NOT remove Kenya/Nairobi from:**
- Contact page address
- `canonical` URLs (these are the actual domain)
- `index.html` geo tags (`geo.region`, `geo.placename`) — these stay for local SEO
- The `index.html` structured data address fields
- Any phone numbers or physical address text

---

## FIX 2 — IRRIGATION IS 10 ACRES, NOT 100

### Global find and replace across ALL files:
```
Find:    "100-acre"
Replace: "10-acre"

Find:    "100 acres"
Replace: "10 acres"

Find:    "100 Acres"
Replace: "10 Acres"

Find:    "100-Acre"
Replace: "10-Acre"
```

This affects: Home.jsx (flagship banner), MajiSmart.jsx (case study), Projects.jsx (project card), any SEO description strings, and any data files.

Also update the MajiSmart case study stat card if it shows "100" as a number:
```jsx
// Find the stat that shows acreage and change:
{ value: '100', label: 'Acres' }
// To:
{ value: '10', label: 'Acres' }
```

---

## FIX 3 — LOCATION: REMOVE "KRISHNA CENTRE"

### Global find and replace across ALL files:
```
Find:    "Krishna Centre, Westlands, Nairobi"
Replace: "Woodvale Grove, Westlands, Nairobi, Kenya"

Find:    "Krishna Centre, Woodvale Grove, Westlands, Nairobi"
Replace: "Woodvale Grove, Westlands, Nairobi, Kenya"

Find:    "Krishna Centre, Westlands"
Replace: "Woodvale Grove, Westlands"

Find:    "Krishna Centre, Woodvale Grove"
Replace: "Woodvale Grove, Westlands"

Find:    "Krishna Centre"
Replace: "Woodvale Grove, Westlands"
```

This affects: Footer.jsx, Contact.jsx, `index.html` structured data, SEO descriptions, and any data files.

The correct final address to use everywhere is:
**Woodvale Grove, Westlands, Nairobi, Kenya**

---

## EXECUTION

These are pure text find-and-replace operations. Use Cursor's global search (Ctrl+Shift+F) for each one.

After all replacements:
- [ ] No "100 acres" or "100-acre" anywhere in codebase
- [ ] No "Krishna Centre" anywhere in codebase  
- [ ] No "100% Kenya" stat on Home page stats strip
- [ ] Footer description says "keeps businesses moving forward" (not "Kenya moving")
- [ ] MajiSmart case study says "10-acre" and shows stat value of "10"
- [ ] Projects page card says "10-acre"
- [ ] Home flagship banner says "10-Acre Smart Irrigation"
- [ ] Location everywhere reads "Woodvale Grove, Westlands, Nairobi, Kenya"
- [ ] `npm run build` passes
