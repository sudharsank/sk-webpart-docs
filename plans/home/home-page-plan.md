# Clarix — Home Page Plan (v2)
**Brand:** Clarix  
**Platform:** MkDocs Material + custom CSS  
**Host:** GitHub Pages  
**Goal:** Client-facing selling page — engage, educate, convert

---

## 1. Brand Alignment

### Color System (derived from Clarix prism logo)

```css
/* Paste into docs/assets/css/custom.css */
:root {
  --clarix-violet:      #7C3AED;
  --clarix-violet-dark: #5B21B6;
  --clarix-cyan:        #06B6D4;
  --clarix-cyan-dark:   #0891B2;
  --clarix-navy:        #0F172A;
  --clarix-navy-mid:    #1E293B;
  --clarix-slate:       #475569;
  --clarix-muted:       #94A3B8;
  --clarix-surface:     #1A1D27;
  --clarix-gradient:    linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%);
}

/* MkDocs Material palette overrides */
[data-md-color-scheme="default"] {
  --md-primary-fg-color:        #7C3AED;
  --md-primary-fg-color--light: #9F67FF;
  --md-primary-fg-color--dark:  #5B21B6;
  --md-accent-fg-color:         #06B6D4;
}
[data-md-color-scheme="slate"] {
  --md-primary-fg-color:  #8B5CF6;
  --md-accent-fg-color:   #22D3EE;
  --md-default-bg-color:  #0F1117;
}
```

### Logo & Favicon — Dark Header Visibility

**Critical:** never place the logo on a light background. The wordmark is white — it must sit on a dark surface.

```yaml
# mkdocs.yml — makes the header dark/violet so logo is always visible
theme:
  name: material
  logo: assets/img/clarix-logo.png      # transparent PNG, white text version
  favicon: assets/img/favicon.png
  font:
    text: Space Grotesk     # matches the logo wordmark font
    code: JetBrains Mono
  palette:
    - scheme: default
      primary: custom
      accent: custom
      toggle:
        icon: material/weather-night
        name: Switch to dark mode
    - scheme: slate
      primary: custom
      accent: custom
      toggle:
        icon: material/weather-sunny
        name: Switch to light mode
```

Add this to `custom.css` to ensure the nav header is always dark (so logo is readable):
```css
/* Force dark header regardless of light/dark mode */
.md-header {
  background: linear-gradient(90deg, #0F172A 0%, #1A0533 100%);
  box-shadow: 0 1px 0 rgba(124,58,237,0.3);
}
.md-header__title { color: #fff; }
```

### Typography

| Role | Font | Weight |
|---|---|---|
| Body, UI | Space Grotesk | 400, 500 |
| Headings | Space Grotesk | 700 |
| Hero headline | Space Grotesk | 800 |
| Code | JetBrains Mono | 400 |

> Google Fonts import: `Space Grotesk:wght@400;500;600;700;800`  
> Add to `mkdocs.yml` under `theme.font.text: Space Grotesk`

---

## 2. Home Page Architecture (`docs/index.md`)

The page has **9 tight sections**. Every section either sells or qualifies. Zero decoration.

```yaml
# Frontmatter — hides nav and TOC for clean landing page
---
hide:
  - navigation
  - toc
---
```

---

### ① Hero — 4 seconds to hook

**Layout:** Full-width dark panel. Prism gradient left edge. Big claim. Two buttons.

```
┌─────────────────────────────────────────────────────────┐
│   [Clarix logo]                          [Start Trial]  │  ← sticky mini nav
├─────────────────────────────────────────────────────────┤
│                                                         │
│   Make your Microsoft 365 environment                   │
│   transparent, governed, and in control.                │
│                                                         │
│   Purpose-built web parts for SharePoint — covering     │
│   risk, operations, productivity, and admin.            │
│   No stitched-together tools. No professional services. │
│   Drop in. Configure. Go.                               │
│                                                         │
│   [▶ Start Free Trial — 14 Days]   [Browse Web Parts]  │
│                                                         │
│   No credit card · Cancels automatically · AppSource ✓  │
└─────────────────────────────────────────────────────────┘
```

**Hero headline (anti-fluff version):**
> *Make your Microsoft 365 environment transparent, governed, and in control.*

**Sub-copy:**
> Purpose-built web parts for SharePoint that surface permission risk, detect policy drift, control external access, and streamline site provisioning — without custom development or professional services. Drop in. Configure. Get results.

**Trust strip (1 line):** `14-day full-feature trial · No credit card · AppSource compatible · Runs in your tenant · SOC-friendly`

**CSS for hero:**
```css
.hero-banner {
  background: linear-gradient(135deg, #0F172A 0%, #1A0533 60%, #0C1A2E 100%);
  border-left: 4px solid #7C3AED;
  padding: 5rem 3rem;
  border-radius: 0 12px 12px 0;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
}
.hero-banner::before {
  content: '';
  position: absolute;
  top: -40px; right: -40px;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%);
  pointer-events: none;
}
.hero-title {
  font-size: clamp(1.8rem, 4vw, 2.75rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.hero-sub {
  font-size: 1.05rem;
  color: #94A3B8;
  max-width: 640px;
  line-height: 1.7;
  margin-bottom: 2rem;
}
.hero-trust {
  font-size: 0.78rem;
  color: #64748B;
  margin-top: 0.75rem;
  letter-spacing: 0.02em;
}
```

---

### ② Live Pain Points — "Does Your Team Deal With This?"

**Goal:** Make the buyer see themselves in 3 seconds. Pattern-interrupt before the product showcase.

**Heading:** `If you manage Microsoft 365, this is your reality.`

**3-column pain cards** (dark surface cards, red accent left border):

| Pain | Reality | Impact |
|---|---|---|
| 🔴 **Who has access to what?** | Permissions sprawl across hundreds of sites. You can't see it without a consultant or a script. | Audit failures. Breach exposure. Wasted hours. |
| 🔴 **Policies set. Drifting silently.** | Configuration changes, new apps, new users — your policy baseline erodes without anyone noticing. | Compliance gaps that surface at the worst time. |
| 🔴 **Guest links. Everywhere.** | External sharing links multiply. No lifecycle. No expiry. No visibility. | Data leaves your tenant. You find out in a review — or an incident. |

**Transition line:**  
> Clarix web parts fix this — inside SharePoint, with your data, in your tenant.

**CSS for pain cards:**
```css
.pain-card {
  border-left: 3px solid #EF4444;
  background: #1A1D27;
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  color: #CBD5E1;
}
.pain-card strong { color: #F87171; }
```

---

### ③ Solution Frame — What Clarix Is

**Goal:** One-paragraph statement that frames what you actually sell.

> **Clarix is a portfolio of drop-in SharePoint web parts** — each solving a specific governance, operations, or productivity problem. Every web part is independently licensed, deploys in minutes, and runs 100% inside your Microsoft 365 tenant. No external data transfer. No custom development. No waiting.

**3 pillars (horizontal icons + text):**

| Pillar | Icon | Copy |
|---|---|---|
| **Deploy in minutes** | ⚡ | Add from the SharePoint web part picker. Configure in the property pane. Done. |
| **Your data stays yours** | 🔒 | 100% tenant-isolated. SharePoint permissions, Graph API, your identity. Nothing leaves. |
| **Grow as you need** | 📦 | Start with one web part. Add more as your needs expand. Upgrade plans without redeployment. |

---

### ④ Product Showcase — The Web Parts (star section)

**Goal:** Show real products. Make each one feel like a solved problem.

**Heading:** `Products available now`

**Card layout — 2 columns, each card structured as:**
```
[Product icon]   [Name]              [Tier badges]
                 [One-line outcome]
                 [2-line detail]
                 [─────────────────]
                 [Try Free]  [Read Docs →]
```

**5 web part cards:**

---

**🛡 Permission Risk Heatmap**  
`Trial` `Business` `Enterprise`  
*See exactly where your SharePoint permissions create risk — before your auditors do.*  
Scans lists, libraries, and sites. Surfaces overshared resources, broken inheritance, and external access in a live heatmap. Includes forensic drill-down by user, group, and guest. One-click remediation on Enterprise.

---

**📊 Policy Drift Dashboard**  
`Trial` `Business` `Enterprise`  
*Your policies are set. Are they still in effect? Find out in real time.*  
Monitors your SharePoint and M365 policy baseline continuously. Shows what drifted, when, and what it means. Remediation cards built in.

---

**🔗 External Sharing Command Center**  
`Trial` `Business` `Enterprise`  
*Guest links that never expire are a compliance liability. Take control.*  
Full lifecycle management for external sharing. Identify, audit, categorize, and auto-expire guest links from a single command surface inside SharePoint.

---

**🏗 Secure Site Provisioning Studio**  
`Trial` `Business` `Enterprise`  
*Stop ad-hoc site creation. Enforce governance from the first click.*  
Governed site provisioning with approval workflows, policy-compliant templates, and a complete audit trail. Every site starts right.

---

**⚙️ Global Governance Admin**  
`Enterprise Suite`  
*One control plane for all Clarix web parts. Config, policy, licensing — centralized.*  
Admin-facing control surface for configuring logging, telemetry, API endpoints, and licensing across all Clarix web parts from a single interface.

---

**CSS for product cards:**
```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}
.product-card {
  background: #fff;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 1.75rem;
  transition: box-shadow 0.25s, transform 0.25s;
}
.product-card:hover {
  box-shadow: 0 8px 32px rgba(124,58,237,0.14);
  transform: translateY(-2px);
}
[data-md-color-scheme="slate"] .product-card {
  background: #1A1D27;
  border-color: #334155;
}
.product-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 0.25rem;
}
.product-card-outcome {
  font-size: 0.95rem;
  color: #7C3AED;
  font-style: italic;
  margin-bottom: 0.75rem;
}
.product-card-detail {
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.6;
}
```

---

### ⑤ Pricing — Transparent, No Friction

**Goal:** Remove the #1 enterprise barrier — "I have to talk to sales to find out the price."

**Heading:** `Honest pricing. Start free. Pay when you're ready.`

**Full feature × plan matrix:**

| Feature | Trial (14 days) | Business | Enterprise |
|---|---|---|---|
| Basic scan & heatmap | ✅ | ✅ | ✅ |
| Multi-source scan | ✅ Unlimited | ✅ Up to 25 / scan | ✅ Unlimited |
| Daily operation quota | Unlimited | Plan-based | Unlimited |
| Forensic drill-down | ✅ | ✅ | ✅ |
| Scan history | Unlimited | 25 sessions / 30 days | Unlimited |
| Remediation actions | ✅ | ❌ | ✅ |
| Financial impact view | ✅ | ❌ | ✅ |
| Advanced visualisations | ✅ | ❌ | ✅ |
| Offline license support | ✅ | ✅ | ✅ |
| Email support | — | 3-day response | 1-day SLA |
| **Price (per web part)** | **$0** | **From $49/mo** | **From $129/mo** |

**Bundle note:**  
> Save with bundles: PRH + PDD from $89/mo · Full Ops suite from $159/mo · [See all bundles →]

**CTA:** `[Start Free Trial — No Card Required]`

---

### ⑥ Why Microsoft 365 Teams Choose Clarix

**Goal:** Kill the "we can build this ourselves" objection.

**Heading:** `Why build it when it ships today?`

**Side-by-side comparison (Build vs Clarix):**

| | DIY / Custom Script | Clarix Web Part |
|---|---|---|
| **Time to first insight** | Weeks to months | Minutes |
| **SharePoint UI integration** | Script + custom pages | Native web part, no custom development |
| **Maintenance** | Your team owns forever | We ship updates |
| **Audit trail** | Build it yourself | Ships with every web part |
| **License compliance** | N/A | AppSource certified, MSA-backed |
| **Cost** | Dev time × rate × sprints | From $49/mo |

> *Your SharePoint developers should be building business solutions — not permission scanners.*

---

### ⑦ Enterprise Trust Signals

**Heading:** `Built for enterprise. Trusted by admins.`

**3-column grid (icon + heading + 1 sentence each):**

| | Trust Pillar | Detail |
|---|---|---|
| ✅ | **Tenant-isolated** | Your data never leaves Microsoft 365. All operations run under your tenant identity and delegated permissions. |
| ✅ | **AppSource compatible** | Follows all Microsoft AppSource certification requirements. Installable through standard SharePoint admin approval. |
| ✅ | **Admin policy controls** | Centrally govern logging, telemetry, and API config via a SharePoint admin list. No redeployment needed for policy changes. |
| ✅ | **Offline license support** | Air-gapped or restricted environments? Deploy a signed offline license. No internet connection required for activation. |
| ✅ | **Audit-ready logging** | Every operation is logged to your SharePoint list with correlation IDs, timestamps, and operation results. |
| ✅ | **Graceful degradation** | If the licensing API is unreachable, the web part continues operating from cached entitlement. No forced outages. |

---

### ⑧ Deployment Surfaces

**Heading:** `Works where your team already works.`

**4-item icon strip:**
```
[SharePoint Modern Page]  [SharePoint Full Page]  [Teams Personal App]  [Teams Tab]
```
No paragraph. Just the platforms. Buyers know what these mean.

---

### ⑨ Footer CTA — Hard Close

**Goal:** The last thing the buyer sees converts or captures.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   Your Microsoft 365 environment has risks               │
│   you haven't seen yet.                                  │
│                                                          │
│   Start your free 14-day trial. No credit card.          │
│   Full access to every feature. Cancels automatically.   │
│                                                          │
│       [▶ Start Free Trial]    [Browse Web Parts]         │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**CSS:**
```css
.cta-block {
  background: linear-gradient(135deg, #1A0533 0%, #0C1A2E 100%);
  border: 1px solid rgba(124,58,237,0.3);
  border-radius: 16px;
  padding: 4rem 3rem;
  text-align: center;
  margin-top: 4rem;
}
.cta-block h3 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.75rem;
}
.cta-block p { color: #94A3B8; margin-bottom: 2rem; }
```

---

## 3. Full Custom CSS File Plan

### File: `docs/assets/css/custom.css`

All classes in one organized file, sectioned by component:

```
/* 1. CSS Variables & Palette */
/* 2. Header — Dark forced (logo visibility) */
/* 3. Hero Banner */
/* 4. CTA Buttons */
/* 5. Pain Point Cards */
/* 6. Product Grid & Cards */
/* 7. Tier Badges */
/* 8. Pricing Table Overrides */
/* 9. Trust Pillars Grid */
/* 10. Surface Icons Strip */
/* 11. Footer CTA Block */
/* 12. General Typography Overrides */
/* 13. Dark Mode Adjustments */
```

---

## 4. MkDocs Plugin Updates (`requirements-docs.txt`)

```
mkdocs>=1.5.3
mkdocs-material>=9.5.0
mkdocs-glightbox>=0.3.7
mkdocs-minify-plugin>=0.7.0
```

Enable in `mkdocs.yml`:
```yaml
plugins:
  - search
  - glightbox
  - minify:
      minify_html: true
```

---

## 5. GitHub Pages Auto-Deploy

### `.github/workflows/docs.yml`

```yaml
name: Deploy Clarix Docs

on:
  push:
    branches: [main]
    paths:
      - 'webpart-docs-portal/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - run: pip install -r requirements-docs.txt
        working-directory: webpart-docs-portal
      - run: mkdocs gh-deploy --clean --force
        working-directory: webpart-docs-portal
```

---

## 6. SEO Meta

```yaml
# mkdocs.yml
site_name: Clarix
site_description: Enterprise-grade Microsoft 365 web parts for governance, risk, operations, and productivity. Drop in. Configure. Get results.
site_url: https://sudharsank.github.io/sk-webpart-docs/
site_author: Sudharsan Kesavanarayanan
```

---

## 7. Implementation Sequence

1. `docs/assets/img/clarix-logo.png` — copy from `plans/home/logo.png`
2. `docs/assets/img/favicon.png` — copy from `plans/home/favicon.png`
3. `mkdocs.yml` — apply all changes from Section 1 (font, logo, palette, plugins, SEO)
4. `docs/assets/css/custom.css` — implement all CSS from Sections 1 + 2 page sections
5. `docs/index.md` — write 9 sections using the copy and structure above
6. `docs/webparts/index.md` — product catalog (mirrors Section ④ cards)
7. Build locally: `mkdocs serve`
8. Deploy: `mkdocs gh-deploy --clean`

---

## 8. Selling Page vs Docs Page — Rules to Hold

| ❌ Don't do | ✅ Do instead |
|---|---|
| Long feature lists | Outcome statements only |
| "Contact us for pricing" | Show numbers — buyers disqualify on hidden pricing |
| No pain before solution | Lead with the pain (Section ②) before showing the product |
| Generic "enterprise-ready" claims | Specific trust signals: tenant-isolated, AppSource certified, offline license |
| Testimonials (none yet) | Neutral trust signals that don't require social proof |
| Feature parity table | Build vs Buy framing — kills the "we'll build it" objection |
| One CTA at the bottom | CTA in hero + after product section + footer close |
