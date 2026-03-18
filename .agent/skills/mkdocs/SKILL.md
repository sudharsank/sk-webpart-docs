---
name: mkdocs
description: >
  MkDocs Material theme expert — complete knowledge of mkdocs.yml configuration,
  Material theme features, navigation patterns, markdown extensions, custom CSS overrides,
  plugin setup (glightbox, minify, search), Mermaid diagrams, admonitions, content tabs,
  and GitHub Pages deployment via mkdocs gh-deploy. Applies Clarix brand palette and
  Space Grotesk font by default. Use for any MkDocs configuration, page layout, or
  build/deploy task in this workspace.
---

# MkDocs Skill

## 1. Core Configuration (`mkdocs.yml`)

### Minimum required structure for Clarix docs portal:

```yaml
site_name: Clarix
site_description: Enterprise-grade Microsoft 365 web parts for governance, risk, operations, and productivity.
site_url: https://sudharsank.github.io/sk-webpart-docs/
site_author: Sudharsan Kesavanarayanan
repo_url: https://github.com/sudharsank/spfx-webparts-business
repo_name: sudharsank/spfx-webparts-business

theme:
  name: material
  logo: assets/img/clarix-logo.png
  favicon: assets/img/favicon.png
  font:
    text: Space Grotesk
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
  features:
    - navigation.tabs
    - navigation.tabs.sticky
    - navigation.sections
    - navigation.indexes
    - navigation.top
    - navigation.path
    - toc.follow
    - content.code.copy
    - content.tabs.link
    - search.suggest
    - search.highlight

extra_css:
  - assets/css/custom.css

extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/sudharsank

markdown_extensions:
  - attr_list
  - md_in_html
  - tables
  - admonition
  - pymdownx.details
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - pymdownx.snippets
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg

plugins:
  - search
  - glightbox
  - minify:
      minify_html: true
```

---

## 2. Custom Palette Override (Clarix brand)

**Always add this to `docs/assets/css/custom.css` — never change to built-in Material primary colors:**

```css
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

/* Dark header — required for transparent logo visibility */
.md-header {
  background: linear-gradient(90deg, #0F172A 0%, #1A0533 100%);
  box-shadow: 0 1px 0 rgba(124,58,237,0.3);
}
.md-header__title { color: #fff; }
.md-tabs { background: #0F172A; }
```

---

## 3. Navigation Patterns

### Section index pages
Enable `navigation.indexes` and create `index.md` inside each folder:
```
docs/
  webparts/
    prh/
      index.md   ← this becomes the section overview card
      features/
        index.md
```

### Tab-based top nav (keep ≤ 4 tabs):
```yaml
nav:
  - Home: index.md
  - Web Parts:
      - Catalog: webparts/index.md
      - Permission Risk Heatmap:
          - Overview: webparts/prh/index.md
  - Pricing: webparts/prh/licensing/plans.md
```

### Hide nav and TOC for landing page:
```markdown
---
hide:
  - navigation
  - toc
---
```

---

## 4. Markdown Extensions Usage

### `attr_list` — add CSS classes inline:
```markdown
[Start Trial](#){ .btn-primary }

## Heading { .hero-title }
```

### `md_in_html` — write markdown inside HTML blocks:
```html
<div class="hero-banner" markdown>
## Enterprise-grade SharePoint web parts.
Drop in. Configure. Get results.
</div>
```

### Admonitions — use consistently:
```markdown
!!! tip "Enterprise Only"
    This feature requires an Enterprise or Trial plan.

!!! warning "Admin Required"
    Only Tenant Admins can perform this action.

!!! danger "Destructive Action"
    This cannot be undone.

!!! info "Simulation Mode"
    No live data is read in this mode.

??? note "Expandable note"
    This is collapsed by default. Use `???` instead of `!!!`.
```

### Content tabs:
```markdown
=== "Business"
    Feature set for Business plan users.

=== "Enterprise"
    Full feature set including remediation actions.
```

### Mermaid diagrams (requires `pymdownx.superfences` config above):
```markdown
​```mermaid
flowchart LR
  A[Scan Start] --> B{List Selected?}
  B -- Yes --> C[Load Signals]
  B -- No --> D[Show Empty State]
​```
```

---

## 5. Plugins

### `glightbox` — clickable/zoomable screenshots:
Install: `pip install mkdocs-glightbox`

Usage — just embed images normally, glightbox auto-wraps them:
```markdown
![Signal card anatomy](../assets/screenshots/prh/signal-card-anatomy.png)
```

To disable lightbox on a specific image:
```markdown
![Logo](../assets/img/clarix-logo.png){ .off-glb }
```

### `minify` — compress HTML output before GitHub Pages push:
Install: `pip install mkdocs-minify-plugin`

No extra config needed beyond what's in `mkdocs.yml`.

### `search` — built into Material, always include:
```yaml
plugins:
  - search:
      lang: en
```

---

## 6. GitHub Pages Deployment

### Manual deploy:
```bash
# From inside webpart-docs-portal/
mkdocs gh-deploy --clean
```

`--clean` wipes the `gh-pages` branch before pushing — prevents stale files.

### Local preview:
```bash
mkdocs serve
# Opens at http://127.0.0.1:8000
```

### Build only (no deploy):
```bash
mkdocs build --strict
# --strict treats warnings as errors — catches broken links
```

### GitHub Actions (auto-deploy on push to main):
```yaml
# .github/workflows/docs.yml
name: Deploy Clarix Docs
on:
  push:
    branches: [main]
    paths: ['webpart-docs-portal/**']
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: '3.11' }
      - run: pip install -r requirements-docs.txt
        working-directory: webpart-docs-portal
      - run: mkdocs gh-deploy --clean --force
        working-directory: webpart-docs-portal
```

### `requirements-docs.txt`:
```
mkdocs>=1.5.3
mkdocs-material>=9.5.0
mkdocs-glightbox>=0.3.7
mkdocs-minify-plugin>=0.7.0
```

---

## 7. Common Build Errors & Fixes

| Error | Cause | Fix |
|---|---|---|
| `Config file 'mkdocs.yml' does not exist` | Running from wrong directory | Run from inside `webpart-docs-portal/` |
| `WARNING - Documentation file 'x.md' is not in the docs directory` | File path in `nav` doesn't match actual path | Fix the path in `mkdocs.yml nav` block |
| `ERROR - mkdocs: mermaid diagrams not rendering` | Missing `pymdownx.superfences` fence config | Add the custom fence block from Section 1 |
| `ModuleNotFoundError: No module named 'material'` | Material theme not installed | `pip install mkdocs-material` |
| `glightbox plugin not found` | Plugin not installed | `pip install mkdocs-glightbox` |
| `WARNING - Doc file contains a relative link that is not found` | Broken internal link | Fix the link path — use `../` relative paths |
| Font not loading (Space Grotesk missing) | Material fetches Google Fonts at build time — needs internet | Allow outbound HTTPS in CI or bundle fonts locally |

---

## 8. Asset Organisation

```
docs/
├── assets/
│   ├── img/
│   │   ├── clarix-logo.png     ← transparent PNG, white text
│   │   └── favicon.png         ← transparent PNG, icon only
│   ├── css/
│   │   └── custom.css          ← all Clarix CSS overrides
│   └── screenshots/
│       └── prh/                ← all 35 PRH screenshots
│           ├── hero-banner.png
│           └── ...
```

**Reference in markdown:**
```markdown
<!-- From inside docs/webparts/prh/features/risk-heatmap.md -->
![Signal card anatomy](../../../assets/screenshots/prh/signal-card-anatomy.png)
```

---

## 9. Page Frontmatter Options

```yaml
---
title: Custom page title (overrides H1 for browser tab)
description: Short description for SEO meta tag
hide:
  - navigation    # hides left sidebar
  - toc           # hides right table of contents
  - footer        # hides page footer
tags:
  - governance
  - enterprise
---
```

---

## 10. Do's and Don'ts for This Portal

| ✅ Do | ❌ Don't |
|---|---|
| Use `--strict` flag when building to catch errors early | Ignore build warnings — they become broken links in production |
| Use `docs/assets/screenshots/prh/` path for all PRH images | Put images next to `.md` files — it breaks the asset structure |
| Use admonitions for warnings, tips, tier labels | Use raw HTML bold for callouts — it won't render in all extensions |
| Use relative paths for internal links (`../licensing/plans.md`) | Use absolute URLs for internal links — breaks local preview |
| Run `mkdocs serve` and visually verify before every `gh-deploy` | Push to `gh-pages` without a local build check |
| Add `hide: [navigation, toc]` to `index.md` | Render the sidebar on the home page — it clutters the selling surface |
