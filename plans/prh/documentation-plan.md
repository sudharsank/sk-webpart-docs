# PRH Web Part — Documentation Plan
**Product:** Permission Risk Heatmap (PRH)  
**Doc Platform:** MkDocs + Material Theme (Codex-style custom design)  
**Template:** This plan is the canonical template for all web parts in the suite

---

## 1. Goal

Produce a complete, professional, end-user-through-admin documentation site for the **Permission Risk Heatmap** web part. The output must:

- Cover every feature, every role, every license tier
- Be clean enough to publish publicly (e.g. GitHub Pages)
- Serve as the **reusable template** for PDD, ESCC, SSPS, and GGA documentation
- Use a **unique, premium visual identity** — not default Material blue/grey

---

## 2. Site Design & Visual Identity

### 2.1 Theme Strategy

Use **MkDocs Material** (already bootstrapped in `webpart-docs-portal`) with a **heavy custom CSS layer** to create a distinct look.

**Design language:** _Dark-professional / cyber-governance_ — inspired by security tooling docs (e.g. Wiz, Orca Security), not generic enterprise blue.

### 2.2 Palette

| Token | Value | Usage |
|---|---|---|
| `--md-primary-fg-color` | `#7C3AED` (Deep Violet) | Primary brand, nav active, header |
| `--md-accent-fg-color` | `#06B6D4` (Sky Cyan) | Links, hover states, inline callouts |
| `--md-default-bg-color` | `#0F1117` (Near-black) | Page background (dark scheme) |
| `--md-code-bg-color` | `#1A1D27` | Code block background |
| Risk Red | `#EF4444` | High/Critical risk indicators |
| Risk Amber | `#F59E0B` | Medium risk indicators |
| Risk Green | `#10B981` | Low risk / resolved indicators |

> **Light mode** will invert to a very pale `#F8FAFC` background with the same violet/cyan brand.

### 2.3 Typography

```yaml
# mkdocs.yml
theme:
  font:
    text: Inter           # Google Font — clean, modern, govtech feel
    code: JetBrains Mono  # Monospace for all code/config blocks
```

### 2.4 Navigation Features to Enable

```yaml
features:
  - navigation.tabs             # Top-level tab bar
  - navigation.tabs.sticky      # Sticky tabs on scroll
  - navigation.sections         # Collapsible sidebar sections
  - navigation.indexes          # Section overview pages
  - navigation.top              # Back-to-top button
  - navigation.path             # Breadcrumbs
  - toc.follow                  # TOC tracks current scroll position
  - content.code.copy           # Copy button on all code blocks
  - content.tabs.link           # Linked content tabs
  - search.suggest
  - search.highlight
  - announce.dismiss            # Optional top banner for version notices
```

### 2.5 Custom CSS Highlights (`assets/css/custom.css`)

1. **Hero banner** on the home page — full-width gradient panel with product icon, tagline, and CTA buttons
2. **Risk badge pills** — inline `.risk-high`, `.risk-medium`, `.risk-low` colored chips (reusable via `attr_list`)
3. **Feature tier badge** — `.tier-trial`, `.tier-business`, `.tier-enterprise` label chips in the sidebar and feature tables
4. **Section dividers** — subtle violet gradient rule between major sections
5. **Admonition overrides** — custom icons for `!!! note`, `!!! warning`, `!!! tip`, `!!! danger`

### 2.6 MkDocs Plugins to Include

```yaml
plugins:
  - search
  - glightbox          # Clickable/zoomable screenshots
  - minify:            # Minify HTML/JS/CSS for GitHub Pages
      minify_html: true
```

Install additions:
```
pip install mkdocs-glightbox mkdocs-minify-plugin
```

---

## 3. Document Structure (Site Navigation)

This is the **canonical nav tree** — each bullet is a separate `.md` file.

```
docs/
├── index.md                          ← Site home / landing page
│
├── webparts/
│   └── prh/
│       ├── index.md                  ← PRH overview (what it is, why it exists)
│       ├── getting-started.md        ← Add to page + first scan walkthrough
│       ├── features/
│       │   ├── index.md              ← Feature gallery / at-a-glance table
│       │   ├── risk-heatmap.md       ← Heatmap view & signal cards
│       │   ├── scan-engine.md        ← Scan flow, multi-list selection, stop scan
│       │   ├── forensics.md          ← Forensic drill-down (users/groups/guests)
│       │   ├── remediation.md        ← Seal / Re-inherit / Purge actions
│       │   ├── financial-impact.md   ← Risk dollar value & breach cost model
│       │   ├── treemap.md            ← Treemap visualisation (Enterprise)
│       │   ├── blast-radius.md       ← Interactive blast radius (Enterprise)
│       │   └── scan-history.md       ← Session history, load/delete sessions
│       │
│       ├── configuration.md          ← Property pane settings reference
│       ├── roles-and-operating-model.md  ← All roles, permissions, what each can do
│       │
│       ├── licensing/
│       │   ├── index.md              ← License overview (modes, statuses)
│       │   ├── plans.md              ← Plan comparison matrix (Trial/Business/Enterprise)
│       │   ├── activation.md         ← Online activation, license key, trial start
│       │   ├── offline-license.md    ← Offline .lic upload flow
│       │   └── faq.md                ← Licensing FAQ
│       │
│       ├── admin/
│       │   ├── index.md              ← Admin responsibilities overview
│       │   ├── admin-config-list.md  ← WebPartAdminConfig list schema
│       │   ├── logging-telemetry.md  ← Logging list, telemetry list setup
│       │   └── incident-response.md  ← What to do when things go wrong
│       │
│       ├── troubleshooting.md        ← Error messages → causes → fixes
│       └── release-notes.md          ← Changelog / version history
```

---

## 4. Page-by-Page Content Plan

### 4.1 `index.md` — Site Home

**Purpose:** Landing page that grabs attention and routes users to the right section.

**Sections:**
1. Hero banner (product name, 1-line tagline, Try / Docs / Buy CTAs)
2. Web part suite cards grid (PRH, PDD, ESCC, SSPS, GGA)
3. Quick-start checklist (3 steps: Add → Configure → Scan)
4. License status explainer (Trial / Business / Enterprise chips)

**Screenshots to include:**
- [ ] `hero-banner.png` — Full PRH web part in-page (dark theme)
- [ ] `suite-overview.png` — All 5 web part icons/cards

---

### 4.2 `webparts/prh/index.md` — PRH Overview

**Sections:**
1. What is the Permission Risk Heatmap?
2. Supported hosts (SharePoint, Teams Personal App, Teams Tab, Full Page)
3. Key value proposition (3 bullet points max)
4. Architecture diagram (simple box: SPFx → SharePoint Lists → License API)
5. Navigation map of the doc sections

**Screenshots to include:**
- [ ] `prh-overview-hero.png` — Web part full view with signals populated

---

### 4.3 `getting-started.md` — Getting Started

**Sections:**
1. Prerequisites (permissions required: at minimum Site Member for scanning)
2. Adding the web part to a SharePoint page
3. Property pane: minimum required settings
4. Running your first scan (step by step)
5. Understanding initial results

**Screenshots to include:**
- [ ] `wp-picker.png` — Web part picker showing PRH in the Advanced category
- [ ] `property-pane-basic.png` — Property pane open with threshold slider
- [ ] `list-selection-panel.png` — Sidebar with list checkboxes
- [ ] `first-scan-result.png` — Heatmap after first scan

---

### 4.4 Feature Pages

#### 4.4.1 `features/risk-heatmap.md` — Risk Heatmap View

**Sections:**
1. Signal card anatomy (resourceName, resourceType, sensitivity badge, risk score)
2. Sensitivity levels: Low / Medium / High / Confidential
3. Risk score calculation (sensitivityDelta + accessDelta + inheritanceDelta)
4. Threshold slider — what it controls (min 10, max 90)
5. Source label (Live Site vs Simulator)
6. Filtering and sorting signals

**Screenshots to include:**
- [ ] `signal-card-anatomy.png` — Annotated card with callouts
- [ ] `sensitivity-badges.png` — All 4 badge colours in a row
- [ ] `threshold-slider.png` — Property pane slider at various values

---

#### 4.4.2 `features/scan-engine.md` — Scan Engine

**Sections:**
1. List discovery — visible lists in the site
2. Multi-list selection (checkboxes in sidebar)
3. Scan lifecycle: Pending → Loading → Done / Error
4. Per-list scan status with signal count
5. Stop scan (abort mid-flight)
6. Simulation mode (Mock data)
7. Daily scan quota (Business: 50/day; Enterprise/Trial: unlimited)
8. Max sources per scan (Business: 25; Enterprise/Trial: unlimited)

**Screenshots to include:**
- [ ] `scan-sidebar.png` — List selection sidebar with mixed statuses
- [ ] `scan-in-progress.png` — Loading spinners with per-list status
- [ ] `scan-aborted.png` — "Scan interrupted" message after stop

---

#### 4.4.3 `features/forensics.md` — Forensic Drill-Down

**Sections:**
1. What is a forensic record?
2. Groups panel — SPGroup, SecurityGroup, ADGroup
3. Users panel — name, email, roles, isInherited flag
4. Guests panel — external access exposure
5. Member count display
6. Exposure path trace (User → Group → Site Owner chain)
7. Permission types displayed: Full Control, Edit, Read, Contribute

**Screenshots to include:**
- [ ] `forensic-panel-groups.png` — Groups tab expanded
- [ ] `forensic-panel-users.png` — Users tab expanded
- [ ] `exposure-path.png` — Exposure path chain visualized

---

#### 4.4.4 `features/remediation.md` — Remediation Actions

> **⚠️ Business + Enterprise only. Not available in Blocked mode.**

**Sections:**
1. What remediation means in PRH
2. Three remediation types:
   - **Seal** — locks permissions at the current state
   - **Re-inherit** — re-enables permission inheritance from parent
   - **Purge** — removes broken unique permissions
3. Bulk vs single signal remediation
4. Server-side authorization check before action
5. Remediation status lifecycle: none → pending → fixed / sealed
6. Audit logging of remediation events

**Screenshots to include:**
- [ ] `remediation-actions-panel.png` — Action buttons on a signal
- [ ] `remediation-status-chip.png` — Status progression chips

---

#### 4.4.5 `features/financial-impact.md` — Financial Impact

> **Enterprise + Trial only**

**Sections:**
1. What `riskDollarValue` represents (potential breach cost estimate in USD)
2. How the value is calculated (heuristic description)
3. Aggregate financial exposure summary
4. Using the financial view to prioritize remediation

**Screenshots to include:**
- [ ] `financial-impact-panel.png` — Financial summary card
- [ ] `risk-dollar-signal.png` — Signal card with $ value visible

---

#### 4.4.6 `features/treemap.md` — Treemap Visualisation

> **Enterprise + Trial only**

**Sections:**
1. How the treemap maps risk across resources
2. Color coding (risk levels)
3. Interacting with the treemap — zoom, click, drill-down
4. Exporting treemap view

**Screenshots to include:**
- [ ] `treemap-full.png` — Treemap populated with signals

---

#### 4.4.7 `features/blast-radius.md` — Interactive Blast Radius

> **Enterprise + Trial only**

**Sections:**
1. What blast radius means (breadth of access exposure)
2. How to trigger the blast radius trace
3. Reading the blast radius graph
4. Shadow Identity Service — how it traces nested group membership

**Screenshots to include:**
- [ ] `blast-radius-graph.png` — Blast radius visualisation

---

#### 4.4.8 `features/scan-history.md` — Scan History & Sessions

**Sections:**
1. Session ID format (`SCAN-XXNNN`)
2. Loading a prior session
3. Deleting a session
4. Clear all history
5. Session retention by plan:

| Plan | Max Sessions | Lookback Window |
|---|---|---|
| Trial | Unlimited | Unlimited |
| Business | 25 sessions | 30 days |
| Enterprise | Unlimited | Unlimited |
| Blocked | 0 (latest only) | — |

**Screenshots to include:**
- [ ] `scan-history-panel.png` — History panel with multiple sessions listed
- [ ] `session-load.png` — Loaded historical session view

---

### 4.5 `configuration.md` — Property Pane Reference

**Sections:**
1. How to open the property pane (edit mode → pencil icon)
2. Parameter reference table:

| Property | Label | Type | Default | Description |
|---|---|---|---|---|
| `title` | Audit Title | Text | "Permission Risk Heatmap" | Display title shown in the web part header |
| `threshold` | Risk Sensitivity | Slider (10–90) | 60 | Filters signals below this risk score |
| `useMockData` | Simulation Mode | Toggle | false | Uses mock data instead of live SharePoint |
| `enableListLogging` | Enable List Logging | Toggle | false | Writes log events to a SharePoint list |
| `logListTitle` | Log List Title | Text | "WebPartLogs" | Title of the logging list |
| `enableListTelemetry` | Enable List Telemetry | Toggle | false | Writes telemetry to a SharePoint list |
| `telemetryListTitle` | Telemetry List Title | Text | "WebPartTelemetry" | Title of the telemetry list |

3. Admin-controlled overrides (AdminConfigurationService takes precedence)
4. Schema validation enforcement (`enforceSchemaValidation` toggle)

**Screenshots to include:**
- [ ] `property-pane-full.png` — Full property pane expanded

---

### 4.6 `roles-and-operating-model.md` — Roles & Operating Model

**Sections:**
1. Role matrix overview
2. Role detail cards:

| Role | How Detected | License Activation | Can Scan | Can Remediate | Offline License Upload |
|---|---|---|---|---|---|
| **SharePoint Admin** (Tenant Admin) | `isTenantAdmin` / `isSPOAdmin` | Tenant scope | ✅ | ✅ (Enterprise) | ✅ |
| **Site Collection Admin** | `isSiteAdmin` | Site scope | ✅ | ✅ (Enterprise) | ✅ |
| **Site Admin** (Manage Web/Permissions) | `manageWeb` permission | Site scope | ✅ | ✅ (Enterprise) | ✅ |
| **Viewer** (all others) | Default | None | ✅ (read only) | ❌ | ❌ |

3. Operating model flow diagram (Mermaid)
4. Who activates the license? (Admin-only for online + offline)
5. Who can see blocked vs read-only vs allowed states?

**Screenshots to include:**
- [ ] `role-detection-flow.png` — Mermaid diagram rendered

---

### 4.7 Licensing Section

#### 4.7.1 `licensing/index.md` — License Overview

**Sections:**
1. How licensing works in PRH (online API + offline fallback)
2. License modes: `allowed` | `readOnly` | `blocked`
3. License statuses: `trial` | `active` | `grace` | `expired` | `suspended`
4. License source: `online` | `offline` | `none`
5. License refresh interval (default: 300 seconds / 5 min background polling)

**Screenshots to include:**
- [ ] `license-status-card-allowed.png` — Green allowed state
- [ ] `license-status-card-trial.png` — Trial banner
- [ ] `license-status-card-blocked.png` — Blocked state with message

---

#### 4.7.2 `licensing/plans.md` — Plan Comparison Matrix

**Sections:**
1. Complete feature × plan matrix:

| Feature | Blocked | Trial (14-day) | Business | Enterprise |
|---|---|---|---|---|
| Basic scan | ❌ | ✅ | ✅ | ✅ |
| Multi-list scan | ❌ | ✅ Unlimited | ✅ Up to 25 | ✅ Unlimited |
| Daily scan quota | ❌ | Unlimited | 50/day | Unlimited |
| Scan history | ❌ | Unlimited | 25 sessions / 30 days | Unlimited |
| Forensic drill-down | ❌ | ✅ | ✅ | ✅ |
| Remediation (Seal/Re-inherit/Purge) | ❌ | ✅ | ❌ | ✅ |
| Financial impact | ❌ | ✅ | ❌ | ✅ |
| Treemap view | ❌ | ✅ | ❌ | ✅ |
| Interactive blast radius | ❌ | ✅ | ❌ | ✅ |
| Offline license | ❌ | ✅ | ✅ | ✅ |

2. Pricing table (USD):

| Plan | Monthly | Yearly | Perpetual | Perpetual + Support |
|---|---|---|---|---|
| Trial | $0 (14 days) | — | — | — |
| Business (No Support) | $49/mo | $490/yr | $1,999 | $1,999 + $499/yr |
| Business (Standard Support) | $79/mo | $790/yr | — | — |
| Enterprise (SLA Support) | $129/mo | $1,290/yr | — | — |

3. Bundle deals (PRH is included in GOV-SUITE, COLLAB-SHIELD, OPS-COMMAND)
4. Support SLA table (None / Standard 3 biz days / SLA 1 biz day)

---

#### 4.7.3 `licensing/activation.md` — Activation Guide

**Sections:**
1. Starting a 14-day free trial (first-time tenants only)
2. Entering a license key (online validation)
3. What happens during hybrid entitlement resolution
4. Grace period behavior (Business plan: allowed with warning)
5. Entitlement refresh (background polling + manual refresh button)
6. Trial extension (admin use via LMS dashboard)

**Screenshots to include:**
- [ ] `trial-activation-screen.png` — First-run trial activation screen
- [ ] `license-key-entry.png` — License key input field
- [ ] `entitlement-refreshing.png` — Refreshing spinner state

---

#### 4.7.4 `licensing/offline-license.md` — Offline License

**Sections:**
1. When to use offline licensing (air-gapped or API-unreachable environments)
2. Who can upload (Tenant Admin or Site Admin/SCA only)
3. Activation scope: tenant vs site
4. Upload flow step-by-step
5. Distributed shared license sync (all users on the site get the offline license)
6. Suspended tenant restriction
7. Error scenarios and recovery

**Screenshots to include:**
- [ ] `offline-upload-panel.png` — .lic file upload UI
- [ ] `offline-scope-tenant.png` — Tenant scope confirmation message

---

#### 4.7.5 `licensing/faq.md` — Licensing FAQ

12–15 Q&A pairs covering:
- "What happens when my trial expires?"
- "Can I upgrade from Business to Enterprise mid-term?"
- "What is the grace period?"
- "My org has no internet — how do I activate?"
- "Why am I seeing 'Blocked' even though we have a license?"
- "Who in my org can activate the license?"
- "What is the daily scan quota reset time?"
- "How do I request a trial extension?"

---

### 4.8 Admin Section

#### 4.8.1 `admin/index.md` — Admin Overview

**Sections:**
1. Admin responsibilities overview
2. Link to key admin procedures
3. Principle of least privilege reminder

---

#### 4.8.2 `admin/admin-config-list.md` — Admin Config List

**Sections:**
1. What is `WebPartAdminConfig`?
2. Column schema reference table:

| Column | Purpose | Example |
|---|---|---|
| `LicensingApiBaseUrl` | URL of the licensing API | `https://api.spfxideas.com` |
| `MeteringApiBaseUrl` | URL of metering endpoint | same as above |
| `EnableCommercialTelemetry` | Toggles telemetry events | `true` |
| `StaleEntitlementTtlMinutes` | Cache validity | `60` |
| `TrialDurationDays` | Trial length | `14` |
| `GraceDurationDays` | Grace period | `7` |

3. How admin config overrides property pane values
4. Schema validation enforcement

**Screenshots to include:**
- [ ] `admin-config-list-sharepoint.png` — The list in SharePoint with columns visible

---

#### 4.8.3 `admin/logging-telemetry.md` — Logging & Telemetry

**Sections:**
1. Logging list (`WebPartLogs`) — what events are written
2. Telemetry list (`WebPartTelemetry`) — telemetry categories (operation / error / lifecycle)
3. Key logged events table:

| Event | Category | When |
|---|---|---|
| `permission_init_started` | lifecycle | Web part loads |
| `permission_scan_started` | operation | Scan begins |
| `permission_scan_completed` | operation | Scan finishes |
| `permission_scan_failure` | error | Scan fails |
| `permission_list_scan_success` | operation | Single list scanned |
| `permission_list_scan_failure` | error | Single list fails |
| `permission_scan_interrupted` | operation | Stop scan clicked |
| `permission_trial_activation_failed` | error | Trial error |
| `permission_offline_license_shared_saved` | operation | Offline lic saved |

4. Disabling logging/telemetry
5. Log retention recommendation

---

#### 4.8.4 `admin/incident-response.md` — Incident Response

**Sections:**
1. Incident types: unauthorized events, signature floods, entitlement mismatch, metering anomalies
2. Immediate actions (restrict ingress, rotate secrets, freeze plan transitions)
3. Hard rules (never accept unsigned events, never wildcard origins)
4. Incident report template

---

### 4.9 `troubleshooting.md` — Troubleshooting

**Structure:** Error message → Root cause → Fix

| Error Message | Cause | Fix |
|---|---|---|
| "No valid entitlement available" | No license in system | Start trial or enter license key |
| "Daily scan quota reached (50)" | Business plan limit hit | Wait 24h or upgrade to Enterprise |
| "Your current plan allows up to 25 sources per scan" | Business source limit | Select fewer lists |
| "Offline activation is disabled for suspended tenants" | Account suspended | Contact SKSPFxIdeas support |
| "You do not have permission to activate offline license" | User is not Site/Tenant Admin | Ask an admin to upload the .lic |
| "Initialization failed. Please reload the page." | Critical init error | Refresh; check admin config list connectivity |
| "License policy does not allow remediation actions" | Plan does not include remediation | Upgrade to Enterprise |
| "Scan process interrupted" | User clicked Stop Scan | Re-run scan |
| "Access denied or site inaccessible" | Insufficient permissions | Request site access from admin |
| "Uploaded license file is invalid or cannot be saved" | Corrupt/wrong-tenant .lic | Request fresh .lic from vendor |

**Screenshots to include:**
- [ ] `error-blocked-message.png` — Blocked state with error text
- [ ] `error-quota-message.png` — Quota exceeded inline error

---

### 4.10 `release-notes.md` — Release Notes

**Structure per release:**
```
## v1.x.x — YYYY-MM-DD
### New
### Fixed
### Changed
### Known Issues
```

---

## 5. Screenshot Inventory (Master List)

All screenshots should be captured at **1440×900** desktop resolution, with the web part in its default SharePoint modern page context.

| # | File | Page Used In | Capture State |
|---|---|---|---|
| 1 | `hero-banner.png` | index.md | Dark theme, signals loaded |
| 2 | `prh-overview-hero.png` | prh/index.md | Full web part view |
| 3 | `wp-picker.png` | getting-started.md | Web part toolbox panel |
| 4 | `property-pane-basic.png` | getting-started.md, configuration.md | Pane open, slider visible |
| 5 | `property-pane-full.png` | configuration.md | All 7 fields visible |
| 6 | `list-selection-panel.png` | getting-started.md, scan-engine.md | Sidebar with 3 lists |
| 7 | `first-scan-result.png` | getting-started.md | Heatmap with ≥5 signals |
| 8 | `signal-card-anatomy.png` | risk-heatmap.md | Annotated callouts (Snagit/Figma) |
| 9 | `sensitivity-badges.png` | risk-heatmap.md | Composite of all 4 badges |
| 10 | `threshold-slider.png` | risk-heatmap.md | Slider at 40 vs 80 comparison |
| 11 | `scan-sidebar.png` | scan-engine.md | Mixed pending/loading/done status |
| 12 | `scan-in-progress.png` | scan-engine.md | Active loading spinners |
| 13 | `scan-aborted.png` | scan-engine.md | Interrupted message |
| 14 | `forensic-panel-groups.png` | forensics.md | Groups tab, 3+ entries |
| 15 | `forensic-panel-users.png` | forensics.md | Users tab, email visible |
| 16 | `exposure-path.png` | forensics.md | User→Group→Owner chain |
| 17 | `remediation-actions-panel.png` | remediation.md | 3 action buttons visible |
| 18 | `remediation-status-chip.png` | remediation.md | Sealed / Fixed chips |
| 19 | `financial-impact-panel.png` | financial-impact.md | $ value summary |
| 20 | `risk-dollar-signal.png` | financial-impact.md | Signal with $ value |
| 21 | `treemap-full.png` | treemap.md | Populated treemap |
| 22 | `blast-radius-graph.png` | blast-radius.md | Graph rendered |
| 23 | `scan-history-panel.png` | scan-history.md | 3+ sessions listed |
| 24 | `session-load.png` | scan-history.md | Historical session loaded |
| 25 | `license-status-card-allowed.png` | licensing/index.md | Green allowed state |
| 26 | `license-status-card-trial.png` | licensing/index.md | Trial card with days remaining |
| 27 | `license-status-card-blocked.png` | licensing/index.md | Red blocked state |
| 28 | `trial-activation-screen.png` | licensing/activation.md | First-run screen |
| 29 | `license-key-entry.png` | licensing/activation.md | Key input field |
| 30 | `entitlement-refreshing.png` | licensing/activation.md | Refresh spinner |
| 31 | `offline-upload-panel.png` | licensing/offline-license.md | File picker UI |
| 32 | `offline-scope-tenant.png` | licensing/offline-license.md | Tenant scope confirmation |
| 33 | `admin-config-list-sharepoint.png` | admin/admin-config-list.md | List in SP |
| 34 | `error-blocked-message.png` | troubleshooting.md | Blocked state |
| 35 | `error-quota-message.png` | troubleshooting.md | Quota error inline |

> **Capture tools recommended:** Browser screenshot (1440×900) + Figma/Snagit for annotation callouts.  
> **Storage path:** `docs/assets/screenshots/prh/`

---

## 6. Mermaid Diagrams to Create Inline

| Diagram | Location | Type |
|---|---|---|
| Scan lifecycle flow | `features/scan-engine.md` | `flowchart LR` |
| License mode state machine | `licensing/index.md` | `stateDiagram-v2` |
| Role detection logic | `roles-and-operating-model.md` | `flowchart TD` |
| Offline license activation flow | `licensing/offline-license.md` | `sequenceDiagram` |
| Remediation state progression | `features/remediation.md` | `stateDiagram-v2` |

---

## 7. Admonitions / Callout Usage Standards

Use consistently across all pages:

```markdown
!!! tip "Enterprise Only"
    This feature requires an Enterprise or Trial plan.

!!! warning "Admin Required"
    Only Tenant Admins and Site Collection Admins can perform this action.

!!! danger "Destructive Action"
    Purge removes all unique permissions. This cannot be undone.

!!! info "Simulation Mode"
    When Simulation Mode is enabled, no live SharePoint data is read.
```

---

## 8. Reusable Template Checklist for Other Web Parts

When creating docs for **PDD, ESCC, SSPS, GGA**, follow this same structure:

- [ ] `index.md` — Overview & hero
- [ ] `getting-started.md` — Prerequisites + first-use walk
- [ ] `features/` — One file per major feature
- [ ] `configuration.md` — Property pane reference table
- [ ] `roles-and-operating-model.md` — Role matrix
- [ ] `licensing/` — All 5 sub-pages (index, plans, activation, offline, faq)
- [ ] `admin/` — 4 sub-pages
- [ ] `troubleshooting.md` — Error → Cause → Fix table
- [ ] `release-notes.md` — Changelog

**Shared pages** (common across all web parts — single source):
- `licensing/plans.md` → pricing matrix applies to all
- `admin/admin-config-list.md` → schema is shared
- `admin/incident-response.md` → same procedures

---

## 9. MkDocs YAML Navigation Block

```yaml
nav:
  - Home: index.md
  - Permission Risk Heatmap:
      - Overview: webparts/prh/index.md
      - Getting Started: webparts/prh/getting-started.md
      - Features:
          - Feature Gallery: webparts/prh/features/index.md
          - Risk Heatmap View: webparts/prh/features/risk-heatmap.md
          - Scan Engine: webparts/prh/features/scan-engine.md
          - Forensic Drill-Down: webparts/prh/features/forensics.md
          - Remediation Actions: webparts/prh/features/remediation.md
          - Financial Impact: webparts/prh/features/financial-impact.md
          - Treemap View: webparts/prh/features/treemap.md
          - Blast Radius: webparts/prh/features/blast-radius.md
          - Scan History: webparts/prh/features/scan-history.md
      - Configuration: webparts/prh/configuration.md
      - Roles & Operating Model: webparts/prh/roles-and-operating-model.md
      - Licensing:
          - Overview: webparts/prh/licensing/index.md
          - Plans & Pricing: webparts/prh/licensing/plans.md
          - Activation Guide: webparts/prh/licensing/activation.md
          - Offline License: webparts/prh/licensing/offline-license.md
          - Licensing FAQ: webparts/prh/licensing/faq.md
      - Administration:
          - Admin Overview: webparts/prh/admin/index.md
          - Admin Config List: webparts/prh/admin/admin-config-list.md
          - Logging & Telemetry: webparts/prh/admin/logging-telemetry.md
          - Incident Response: webparts/prh/admin/incident-response.md
      - Troubleshooting: webparts/prh/troubleshooting.md
      - Release Notes: webparts/prh/release-notes.md
```

---

## 10. pip Requirements

```
# requirements-docs.txt
mkdocs>=1.5.3
mkdocs-material>=9.5.0
mkdocs-glightbox>=0.3.7
mkdocs-minify-plugin>=0.7.0
```

---

## 11. Execution Order

1. **Design** — Implement custom CSS / palette / fonts in `webpart-docs-portal`
2. **Stub** — Create all `.md` files with headings and placeholder `<!-- TODO: content -->`
3. **Content** — Fill pages in this order: Overview → Getting Started → Features → Configuration → Roles → Licensing → Admin → Troubleshooting
4. **Screenshots** — Capture all 35 screenshots with the web part running live or with mock data
5. **Diagrams** — Add all 5 Mermaid diagrams
6. **Polish** — Review admonitions, add callout badges, ensure cross-page links work
7. **Build + Publish** — `mkdocs build` → deploy to GitHub Pages
