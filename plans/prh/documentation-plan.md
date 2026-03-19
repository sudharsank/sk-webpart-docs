# PRH Web Part — Documentation Plan (Consolidated 6-Page Standard)
**Product:** Permission Risk Heatmap (PRH)  
**Doc Platform:** MkDocs + Material Theme
**Goal:** Deliver a highly maintainable, 6-page minimum valid document stack for every web part in the Clarix suite, avoiding deep folder fragmentation while strictly categorizing responsibilities.

---

## Document Structure (Standard 6-Page Suite)

```
docs/
├── index.md                          ← Site home / landing page
│
├── webparts/
│   └── prh/
│       ├── index.md                  ← Overview & Getting Started
│       ├── features.md               ← End-User Capabilities (Heatmap, Forensics, Treemap)
│       ├── administration.md         ← IT Config (Property panes, telemetry, SP lists, security)
│       ├── licensing.md              ← Commercials (Trial limits, plans, offline .lic uploads)
│       ├── operating-model.md        ← Roles, Permissions, and Workflows
│       └── troubleshooting.md        ← FAQ, Error Codes, and Release Notes
```

---

## MkDocs YAML Navigation Block

```yaml
nav:
  - Home: index.md
  - Web Parts Catalog: webparts/index.md
  - Permission Risk Heatmap:
      - Overview & Setup: webparts/prh/index.md
      - Features & Capabilities: webparts/prh/features.md
      - Administration & IT: webparts/prh/administration.md
      - Commercials & Licensing: webparts/prh/licensing.md
      - Roles & Workflows: webparts/prh/operating-model.md
      - Troubleshooting: webparts/prh/troubleshooting.md
```

---

## Page-by-Page Content Strategy

### 1. `index.md` — Overview & Setup
**Focus:** Executive pitch and technical installation.
- What is the PRH? Value proposition and architecture block diagram.
- Prerequisites (permissions required: at minimum Site Member for scanning).
- Adding the web part to a SharePoint page.
- Initial property pane setup and running the first scan.

### 2. `features.md` — Capabilities Library
**Focus:** End-user interactions, filtering, and data visualization.
- Risk Heatmap: Anatomy of a signal card, sensitivity levels, and filtering.
- Scan Engine: Multi-list discovery, stopping scans, and simulation mode.
- Forensic Drill-down: Users/Groups panel and exposure tracing.
- Remediation: Seal, Re-inherit, and Purge workflows.
- Premium Views: Financial impact scoring and Treemap/Blast Radius diagrams.
- Scan History: Session lookup and loading.

### 3. `administration.md` — IT & Security
**Focus:** Infrastructure, logging, and rigid controls.
- Property Pane Parameter Reference table.
- Admin Config List schema (`WebPartAdminConfig`).
- Logging & Telemetry (`WebPartLogs`, `WebPartTelemetry`).
- Security architecture and Incident Response protocols.

### 4. `licensing.md` — Commercial Configuration
**Focus:** Subscriptions and activation.
- Plan Comparison Matrix (Trial vs Business vs Enterprise).
- License Activation UI (Online validation, grace periods).
- Offline Licensing (tenant vs site scope uploads).
- Bundles and Support SLAs.

### 5. `operating-model.md` — Human Workflows
**Focus:** Cadence, roles, and lifecycles.
- Role capability matrix (Tenant Admin vs Site Admin vs Viewer).
- Standard operating flow: When to review, what to approve, who signs off.
- How PRH fits into overarching weekly/monthly IT governance.

### 6. `troubleshooting.md` — Support
**Focus:** Fixing friction and logging updates.
- FAQ (e.g. "What happens when my trial expires?", "No internet?").
- Error Code Matrix (message text -> root cause -> fix).
- Release Notes (Changelog for all versions).
