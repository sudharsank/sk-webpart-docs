# PLAN: Clarix Documentation Home Page Implementation

> **Task Slug:** `clarix-home`  
> **Project Type:** WEB (MkDocs Material Static Site)  
> **Target Repo:** Docs Portal (Isolated Repository)  
> **Status:** COMPLETED ✅ v3.3 (2026-03-18)

---

## ✅ PHASE X COMPLETE
- Brand Core: ✅ Done
- Home Content: ✅ 9 Sections (Hero Split v3.3)
- Sector Pills: ✅ Integrated
- Back-to-Top: ✅ Iconized
- Build: ✅ Strict Pass (0 Warnings)

---

## Overview

Implement the high-conversion home page for the Clarix Documentation portal using the **Clarix v3 Visual Identity** (violet/cyan gem prism). This includes high-impact UI components (Hero, Pain Points, Product Showcase), a brand-aligned dark navigation header, and a transparent pricing matrix.

---

## 🎯 Success Criteria

- [ ] `mkdocs.yml` correctly configured with Clarix logo, favicon, and Space Grotesk typography.
- [ ] `docs/assets/css/custom.css` implements all 12 Clarix design components.
- [ ] `docs/index.md` contains all 9 sections with zero sugarcoated copy.
- [ ] Logo remains clearly visible on a dark-gradient navigation bar.
- [ ] Build passes `mkdocs build --strict`.
- [ ] GitHub Actions workflow (`.github/workflows/docs.yml`) optimized for the docs-specific repository.

---

## 🛠 Tech Stack & Skills

| Category | Choice | Rationale |
|---|---|---|
| **Engine** | MkDocs Material | Best-in-class documentation DX and search performance. |
| **Styling** | Vanilla CSS (`custom.css`) | Maximum control over the Clarix glassmorphism identity. |
| **Typography** | Space Grotesk | Matches the geometric, professional precision of the logo. |
| **Extensions** | `attr_list`, `md_in_html` | Required for complex landing page layouts inside markdown. |
| **Skills** | `@[skills/mkdocs]` | Core knowledge for configuration and plugin orchestration. |
| **Skills** | `@[skills/frontend-design]` | Enforces the Clarix palette and anti-generic layout rules. |

---

## 📂 File Structure

```
webpart-docs-portal/
├── mkdocs.yml                  # Global theme and plugin configuration
├── .github/workflows/docs.yml   # Deployment optimization
├── docs/
│   ├── index.md                # 9-section home page implementation
│   ├── assets/
│   │   ├── css/
│   │   │   └── custom.css      # Clarix design system & component styles
│   │   ├── img/
│   │   │   ├── logo.png        # Transparent white wordmark (v3)
│   │   │   └── favicon.png     # Transparent gem prism (v3)
│   │   └── screenshots/
│   │       └── home/           # Manual capture directory
```

---

## 📝 Task Breakdown

### Phase 1: Foundation & Brand Core (P0)

| ID | Task | Agent | Skills | INPUT → OUTPUT → VERIFY |
|---|---|---|---|---|
| 1.1 | **Configuration Core** | `devops-engineer` | `mkdocs` | `mkdocs.yml` updated with Clarix branding (logo, favicon, font) → Build success → Inspect server head tags. |
| 1.2 | **Design Tokens Implementation** | `frontend-specialist` | `web-design-guidelines` | Create `custom.css` with Clarix CSS variables (violet, cyan, navy) → Variables defined in root → Verify color hex codes match logo palette. |
| 1.3 | **Dark Header Implementation** | `frontend-specialist` | `mkdocs` | Apply `.md-header` gradient override in `custom.css` → Logo visible without white box → Check logo readability on dark surface. |

### Phase 2: Home Page Layout — Above the Fold (P1)

| ID | Task | Agent | Skills | INPUT → OUTPUT → VERIFY |
|---|---|---|---|---|
| 2.1 | **Hero Implementation** | `frontend-specialist` | `frontend-design` | Use `md_in_html` to build Hero block with Space Grotesk typography → Full-width responsive hero with 2 CTAs → Visual check of gradient. |
| 2.2 | **Pain Point Grid** | `product-owner` | `plan-writing` | Implement the 3-column "Reality vs Impact" cards with red accents → Clear pain articulation → No sugarcoated copy in cards. |

### Phase 3: Product Showcase & Pricing (P1)

| ID | Task | Agent | Skills | INPUT → OUTPUT → VERIFY |
|---|---|---|---|---|
| 3.1 | **Product Grid Scaffolding** | `documentation-writer` | `documentation-templates` | Create the 5-card web part showcase with tier labels → Placeholder images used → Hover effects active via CSS. |
| 3.2 | **Transparent Pricing Matrix** | `product-owner` | `mkdocs` | Implement the 3-column pricing table for Trial/Business/Enterprise → Tabbed design or matrix layout → Review pricing transparency. |
| 3.3 | **Build vs Buy Logic** | `product-owner` | `brainstorming` | Implement the comparison table to kill DIY objections → "DIY vs Clarix" mapping → Verify hard-hitting evidence provided. |

### Phase 4: CI/CD & Verification (P2)

| ID | Task | Agent | Skills | INPUT → OUTPUT → VERIFY |
|---|---|---|---|---|
| 4.1 | **Workflow Optimization** | `devops-engineer` | `deployment-procedures` | Review and optimize existing `.github/workflows/docs.yml` for the standalone repo → Deploy success to GitHub Pages → Link check. |
| 4.2 | **Final Quality Audit** | `qa-automation-engineer` | `clean-code` | Run all build/lint checks via `mkdocs build --strict` → 0 warnings/errors → CSS verified unique, not generic. |

---

## 📸 Asset Inventory (To be captured by USER)

| Filename | Location | Description / Target |
|---|---|---|
| `prh-hero-main.png` | `assets/screenshots/home/` | Full view of Permission Risk Heatmap (Heatmap tab) |
| `pdd-dashboard.png` | `assets/screenshots/home/` | Policy Drift Dashboard showing a drifted site alert |
| `escc-cmd-center.png` | `assets/screenshots/home/` | External Sharing Command Center showing sharing links |
| `sps-provisioning.png`| `assets/screenshots/home/` | Site Provisioning Studio template selector |
| `gga-admin-view.png` | `assets/screenshots/home/` | Global Governance Admin list configuration page |

---

## ✅ PHASE X: VERIFICATION CHECKLIST

- [ ] **No Sugarcoated Copy**: Does the text speak directly to the pain?
- [ ] **Brand Consistency**: Is the header dark/violet as required for the white logo?
- [ ] **Accessibility**: Do primary buttons meet WCAG contrast on the navy backgrounds?
- [ ] **Performance**: Does the page build without heavy client-side JS?
- [ ] **Deployment**: Is the GitHub Action correctly pushing to `gh-pages`?

---

> [OK] Plan created: `docs/PLAN-clarix-home.md`
>
> **Next steps:**
> - Review the plan.
> - Run **`/create`** to start Phase 1 (Foundation & Brand Core).
> - Or modify the plan manually if specific section details need changing.
