# Clarix — Brand Identity Reference

> **Purpose:** Complete record of how the Clarix brand name, logo, favicon, and visual identity were derived. Use this as the single source of truth for any future design decisions, contractor briefs, or brand extensions.

---

## 1. Brand Name — Clarix

### Origin & Derivation

The name **Clarix** is a deliberate composite of two root words:

| Root | Source | Meaning |
|---|---|---|
| **Clar-** | Latin *clarus* | Clear, bright, evident, illuminated |
| **-ix** | Tech/SaaS naming suffix (Linux, Clarix, Vortix) | Implies precision, platform, and technical authority |

Combined: **Clarix = Clarity delivered with authority.**

### Why This Name Was Chosen

The shortlisted candidates were evaluated against four criteria:

1. **Breadth of coverage** — the brand must work across all domains: governance, operations, daily productivity, admin tools, and end-user web parts. It cannot lock into a single vertical like "Gov" or "Shield" would.
2. **Memorability** — six letters, two syllables (CLAIR-ix), easy to say in a sales call, meeting, or support ticket.
3. **Domain scalability** — works as a company name, product family, and sub-brand prefix (e.g., Clarix Ops, Clarix Admin, Clarix Flow in the future).
4. **Buyer appeal** — IT directors, compliance officers, and department heads respond to clarity and confidence. The name is not technical jargon (unlike "SPFx Ideas" which means nothing to a buyer).

### What It Communicates to a Client

> *"Clarix gives your Microsoft 365 environment clarity — visible risk, clear access control, transparent processes, and intelligent operations."*

The name is intentionally neutral enough to sell governance web parts today and productivity/HR/finance web parts tomorrow without ever feeling out of place.

---

## 2. Logo

### Visual Description

The Clarix logo is a **horizontal wordmark-icon combination** designed for use on dark or colored backgrounds.

**Icon (left):** A 3D faceted crystal prism — a geometric diamond shape composed of angular flat faces catching light from multiple directions. It is not a shield, not a lock, and not a cloud — it is a prism, chosen deliberately.

**Wordmark (right):** "Clarix" in clean modern sans-serif, white, weight 600 (semibold). No tagline in the logo itself.

### Why a Crystal Prism?

The prism icon was selected after rejecting the shield (too narrow — reads as "security product only") and the grid (too abstract — doesn't evoke a brand). The prism earns its place on four grounds:

| Reason | Explanation |
|---|---|
| **Clarity metaphor** | A prism refracts a single beam of light into its full spectrum. Clarix does the same — one platform revealing what is hidden across your Microsoft 365 estate. |
| **Multi-domain breadth** | A prism has multiple faces, each catching light differently. This directly represents the portfolio: governance, ops, productivity, admin, end-user tools — all facets of the same platform. |
| **Premium feel** | Crystal/gem marks are associated with high-value SaaS brands (Linear, Vercel-adjacent aesthetics). They age well because they are not trend-chasing icons. |
| **Scalability** | The icon works at 512px (hero/splash), 32px (favicon), and 16px (browser tab) without losing recognizability. |

### Logo Versions Produced

| File | Background | Use Case |
|---|---|---|
| `logo.png` | Transparent | Navigation header (placed on dark/violet background in site) |
| `favicon.png` | Transparent | Browser tab, bookmarks, PWA icon |

### Logo Do's and Don'ts

**Do:**
- Always place logo on a dark background (`#0F1117`, `#1A0533`, or the violet header)
- Maintain minimum clear space equal to the height of the "x" in Clarix on all sides
- Use white wordmark version only — do not recolor the text

**Don't:**
- Place the logo on a white or light background (wordmark becomes invisible)
- Stretch, rotate, or add drop shadows to the icon
- Add taglines or descriptors directly to the logo

---

## 3. Favicon

### Visual Description

The favicon is the **icon-only mark** — the crystal prism without the wordmark. It is designed to stand alone as a recognizable brand mark at small sizes.

**Color composition:**
- Top-left face: Deep Violet `#7C3AED`
- Top-right face: Sky Cyan `#06B6D4`
- Bottom faces: Darker values of each (natural shadow)
- Center spine: White highlight ridge (creates the 3D clarity effect)

**Shape:** A diamond/octahedron viewed from above — 4 visible triangular faces with a pointed top and bottom.

### Why No Text in the Favicon?

Professional sites never use text in favicons because:
- At 16×16px, text is unreadable
- The prism icon alone is memorable and instantly recognizable once users associate it with Clarix one time

---

## 4. Color System

The Clarix color palette is derived directly from the two faces of the prism icon.

### Primary Palette

| Token | Hex | RGB | Role |
|---|---|---|---|
| **Violet** (Primary) | `#7C3AED` | 124, 58, 237 | Brand primary, nav header, active states, primary CTA buttons |
| **Cyan** (Accent) | `#06B6D4` | 6, 182, 212 | Links, hover states, highlight accents, feature callouts |
| **Deep Navy** | `#0F172A` | 15, 23, 42 | Page background (dark), hero background |
| **Slate Muted** | `#475569` | 71, 85, 105 | Body text, secondary descriptions |
| **Off-White** | `#F8FAFC` | 248, 250, 252 | Light mode page background |

### Semantic / Status Colors

| Hex | Role |
|---|---|
| `#EF4444` | Risk High / Error / Danger |
| `#F59E0B` | Risk Medium / Warning |
| `#10B981` | Risk Low / Success / Active license |
| `#8B5CF6` | Violet lighter (dark mode primary adjustments) |
| `#22D3EE` | Cyan lighter (dark mode accent adjustments) |

### Gradient — The Clarix Signature

Wherever a premium gradient is needed (hero banner, CTA block, cards on hover), use the **Clarix prism gradient**:

```css
background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%);
```

This gradient is taken directly from the two faces of the prism and should only be used for high-impact elements — not for body backgrounds or card fills.

### Dark Mode

The site ships with a dark mode toggle. The dark scheme:
- Background: `#0F1117`
- Surface (cards): `#1A1D27`
- Primary violet lightens to `#8B5CF6`
- Cyan lightens to `#22D3EE`
- Text: `#E2E8F0`

---

## 5. Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Body text | Inter | 400 | 1rem (16px) |
| UI labels, nav | Inter | 500 | 0.875rem |
| Section headings | Inter | 700 | 1.75–2.25rem |
| Hero headline | Inter | 800 | 2.5–3rem |
| Code / config | JetBrains Mono | 400 | 0.875rem |

**Source:** Google Fonts — `Inter` and `JetBrains Mono`.

---

## 6. Voice & Messaging Principles

The brand voice flows from the name — clarity. Applied to copy:

| Principle | In Practice |
|---|---|
| **Direct** | No "we are pleased to introduce" — say what it does in one line |
| **Outcome-first** | Lead with what the buyer gets, not what the feature does |
| **Confident** | No hedging. No "may help" — "surfaces overpermissioned resources" not "can help you check permissions" |
| **Not technical** | Never use "SPFx" in marketing copy — buyers don't know the framework |

---

## 7. Future Brand Extensions

As the portfolio grows, sub-brand names can optionally use the Clarix prefix:

| Sub-brand | Purpose |
|---|---|
| **Clarix Ops** | Ops & Governance product line |
| **Clarix Flow** | Process Productivity product line |
| **Clarix Lens** | Knowledge & Communication product line |
| **Clarix Admin** | Global admin control plane |

These are optional — the individual web part names (Permission Risk Heatmap, Policy Drift Dashboard, etc.) remain unchanged as product names.

---

## 8. Asset Inventory

| File | Location | Format | Use |
|---|---|---|---|
| `logo.png` | `plans/home/logo.png` | PNG transparent | Nav header (on dark bg) |
| `favicon.png` | `plans/home/favicon.png` | PNG transparent | Browser tab, bookmarks |
| Production logo | `docs/assets/img/clarix-logo.png` | PNG transparent | MkDocs theme.logo |
| Production favicon | `docs/assets/img/favicon.png` | PNG transparent | MkDocs theme.favicon |

> **Note:** For production, export an SVG version of both assets from a vector tool (Figma, Illustrator). SVG is resolution-independent and renders perfectly at any size. Use the PNG versions from this folder as the interim reference for layout and color.
