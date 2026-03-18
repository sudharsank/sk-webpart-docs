# Clarix Docs Portal — Antigravity Kit Setup

> **Location:** `webpart-docs-portal/.agent/`
> **Kit version:** Antigravity Kit 2.0.2 (`@vudovn/ag-kit`)
> **Installed:** 2026-03-18
> **Scope:** Docs portal only — root-level SPFx agents and skills are **not affected**

---

## Structure

```
webpart-docs-portal/
└── .agent/
    ├── ARCHITECTURE.md
    ├── mcp_config.json
    ├── agents/       ← 9 agents (trimmed from 20)
    ├── skills/       ← 11 skills (trimmed from 37+, + 1 custom: mkdocs)
    ├── workflows/    ← 11 slash commands
    ├── rules/
    │   └── GEMINI.md ← customised with 5 Clarix overrides
    └── scripts/      ← validation and audit scripts
```

> Root-level `.agents/` and `skills/` (for SPFx) are at `/spfx-webparts-business/.agents/` — separate path, zero overlap.

---

## Active Agents (9)

**Removed:** `product-manager`, `performance-optimizer`, `test-engineer`, `explorer-agent`, `game-developer`, `mobile-developer`, `database-architect`, `backend-specialist`, `penetration-tester`, `security-auditor`, `code-archaeologist`.

| Agent | Role |
|---|---|
| `orchestrator` | Coordinates multi-agent tasks (e.g. building all PRH pages at once) |
| `project-planner` | Plans new web part doc sections — 4-phase approach |
| `documentation-writer` | Writes all `.md` doc pages — the primary workhorse |
| `frontend-specialist` | Home page HTML/CSS, MkDocs Material theme customisation |
| `seo-specialist` | Meta tags, heading structure, GitHub Pages SEO |
| `devops-engineer` | GitHub Actions deploy pipeline, `mkdocs gh-deploy` |
| `product-owner` | Home page selling copy, pricing narrative, CTA text |
| `debugger` | MkDocs build errors, broken links, YAML syntax issues |
| `qa-automation-engineer` | Pre-deploy checklist — runs before every GitHub Pages push |

---

## Active Skills (11)

**Removed from kit:** `geo-fundamentals`, `brainstorming`, `performance-profiling`, `architecture`, `lint-and-validate`, `code-review-checklist`, `behavioral-modes`, `parallel-agents`, `testing-patterns`, `i18n-localization`, `app-builder`, `tailwind-patterns`, `doc.md`.

**Added custom:** `mkdocs` (written specifically for this portal).

| Skill | Source | What It Contributes |
|---|---|---|
| `mkdocs` | **Custom** | MkDocs config, Material theme, extensions, plugins, Clarix palette, GitHub Pages deploy, build errors |
| `documentation-templates` | Kit | Heading structure, admonition usage, table formats for doc pages |
| `frontend-design` | Kit | Home page layout patterns, CSS component hierarchy |
| `web-design-guidelines` | Kit | Design system — enforces Clarix violet/cyan palette |
| `seo-fundamentals` | Kit | E-E-A-T, meta descriptions, heading hierarchy, Core Web Vitals |
| `deployment-procedures` | Kit | CI/CD patterns, GitHub Actions configuration |
| `plan-writing` | Kit | Structured planning for doc sections |
| `clean-code` | Kit | Markdown and CSS maintainability |
| `bash-linux` | Kit | Build and deploy shell scripts |
| `systematic-debugging` | Kit | Build failures, broken links, CSS issues |
| `intelligent-routing` | Kit | Auto-selects agent per task |

---

## Active Workflows (11 Slash Commands)

| Command | When to Use |
|---|---|
| `/plan` | Starting any new web part doc section |
| `/create` | Scaffolding new `.md` files |
| `/enhance` | Improving existing doc page quality |
| `/ui-ux-pro-max` | Home page redesign, custom CSS work |
| `/deploy` | Pre-deploy checklist + `mkdocs gh-deploy` |
| `/debug` | MkDocs build failures |
| `/brainstorm` | Copy and structure decisions |
| `/orchestrate` | Multi-agent doc builds |
| `/preview` | Local build review before push |
| `/test` | Link validation, build check |
| `/status` | Mid-sprint progress check |

---

## Custom Rules in `GEMINI.md`

| Rule | Enforcement |
|---|---|
| **RULE 1: No Sugarcoating** | Validate first, state verdict directly. No padding. |
| **RULE 2: Docs Portal Routing** | Each task type maps to a specific agent. No general-purpose responses. |
| **RULE 3: Design Override** | Purple Ban from generic kit is lifted. Clarix violet/cyan is mandatory. |
| **RULE 4: Logo Visibility** | Dark header is mandatory. Logo must sit on dark surface. |
| **RULE 5: Scope Guardrails** | Nothing outside `webpart-docs-portal/` without explicit confirmation. |

---

## How It Boosts Development

| Area | Impact |
|---|---|
| **Doc writing** | `documentation-writer` + `documentation-templates` + `mkdocs` skill = structured pages with correct heading levels, admonitions, and table formats on first draft |
| **SEO** | `seo-specialist` + `seo-fundamentals` applies E-E-A-T and heading rules to every page automatically |
| **Home page** | `product-owner` + `frontend-specialist` + `mkdocs` skill = copy and CSS aligned to the same plan |
| **Deploy** | `/deploy` workflow sequences lint → build → gh-deploy. No missed steps |
| **Debugging** | `debugger` + `systematic-debugging` + `mkdocs` skill error table = faster resolution of build failures |
| **Consistency** | All agents read the same `GEMINI.md` Clarix overrides — same palette, same voice, same scope rules |

---

## What It Does Not Do

| Limitation | Reality |
|---|---|
| Cannot auto-capture screenshots | 35-image inventory still requires manual capture |
| Cannot generate SVG logos | Text/code only — no vector graphics |
| Socratic Gate adds questions to complex requests | Use direct instructions to bypass for simple edits |
| CLI network-sensitive | `ag-kit init` requires GitHub access; initial setup used `curl` extraction |
