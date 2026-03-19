---
hide:
  - toc
---

<a href="../" class="btn-back">← Back to Web Parts Catalog</a>


# Features & Capabilities

The Permission Risk Heatmap (PRH) is built to help administrators and business reviewers move from raw SharePoint permissions to an actionable review process. Its value is not just in showing where risk exists, but in helping teams understand what they are seeing, decide what matters first, and follow through with the right next step.

## At a Glance

| Capability area | What PRH provides | Why it matters |
| :--- | :--- | :--- |
| `🧭` **Guided workspace** | A review-oriented surface with analysis, history, and scope selection | Helps users understand where to start and what to do next |
| `🚦` **Risk-led analysis** | Findings prioritized by risk conditions rather than raw permission output | Cuts down review noise and improves focus |
| `📊` **Multiple views** | Table and treemap review modes for different audiences and use cases | Makes the same findings easier to interpret in different ways |
| `🔎` **Forensic detail** | User, group, and guest-level context behind each finding | Builds confidence before any remediation decision |
| `🛠️` **Remediation support** | Action-oriented follow-up when policy and entitlement allow it | Keeps review and corrective action connected |
| `🕒` **History and continuity** | Session-based review continuity across repeated governance cycles | Supports validation over time, not just one-off scans |

## Guided Review Workspace

PRH is designed as a guided workspace rather than a single chart or static report.

| Workspace element | What users do there | What to pay attention to |
| :--- | :--- | :--- |
| `🛡️` **Analysis mode** | Run and review the current scan | Use this as the active working area for live review |
| `🕒` **History mode** | Reopen earlier scan sessions | Use this when validating changes over time |
| `📂` **Scope selection** | Choose lists or libraries for the scan | Start with a defined business scope instead of going too broad |
| `🪜` **Guided steps** | Follow the built-in review sequence | Helps teams move from selection to action without losing context |
| `🚥` **Risk legend** | Understand severity and prioritization | Use it to separate urgent findings from background noise |

!!! note "Image Placeholder"
    **Placeholder name:** `prh-guided-review-workspace.png`

    **What the final image should show:** the main PRH workspace with the left-side scope selector, the analysis and history tabs, the guided review steps, and the severity legend that helps users understand where to start.

    **Why this image matters:** this is the best point in the page to show users the overall working surface before the document goes deeper into analysis views and investigation details.

## Risk-Based Analysis Experience

PRH analyzes selected content and surfaces permission conditions that deserve governance attention.

<div class="doc-diagram doc-diagram-centered">

```mermaid
graph TD
    A[Choose Lists or Libraries] --> B[Run Analysis]
    B --> C[Generate Risk Signals]
    C --> D[Review in Table View]
    C --> E[Review in Treemap View]
    D --> F[Open Forensic Detail]
    E --> F
    F --> G[Decide on Follow-up Action]
```

</div>

| Analysis behavior | What it means in practice |
| :--- | :--- |
| **Risk scoring and prioritization** | Teams can focus on findings that deserve immediate review instead of reading raw permissions line by line |
| **Threshold-based sensitivity** | Administrators can tune how aggressively PRH surfaces findings |
| **Progress tracking** | Reviewers can see which lists are still processing and which are complete |
| **Scan control** | Operators can start, monitor, and stop analysis during longer review sessions |

The intent is practical: find the highest-value review targets first, not just produce a technically complete permission dump.

## Multiple Review Views

PRH supports more than one way to read the results so different users can review findings in the format that helps them most.

| View or behavior | Best use | Why it helps |
| :--- | :--- | :--- |
| `📋` **Table view** | Structured, action-oriented review | Better when users want to work through findings one by one |
| `🗺️` **Treemap view** | Visual pattern recognition | Better when users want to spot concentration and severity clusters quickly |
| `🚥` **Severity indicators** | Priority reading | Helps distinguish low, medium, and high concern areas without opening every finding |
| `🔍` **Search and navigation** | Larger review sessions | Helps users find relevant findings faster when the result set grows |

The best view depends on the user. Administrators may prefer a table for action tracking, while business stakeholders often understand the treemap faster during review meetings.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-analysis-views-table-treemap.png`

    **What the final image should show:** the PRH findings area displaying either the table view, the treemap view, or both captured separately, with enough context to show how users switch between views and how severity is represented.

    **Why this image matters:** this section is where readers need to see the difference between structured review and visual review, because that choice shapes how they work through findings.

## Forensic Drill-Down

PRH does not stop at a risk label. It helps users understand why a finding exists before they decide what to do.

| Forensic area | What users learn |
| :--- | :--- |
| **User-level detail** | Who currently has access and whether that access looks intentional |
| **Group-level detail** | Whether broad access is coming from SharePoint groups or wider membership structures |
| **Guest visibility** | Whether external access is contributing to the risk signal |
| **Reason context** | Why PRH raised the finding in the first place |

This is one of the most important parts of the product. A risk flag without explanation creates hesitation. Forensic detail creates confidence to act.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-forensic-drilldown-panel.png`

    **What the final image should show:** the forensic detail experience for a selected finding, including the user, group, or guest access context and the reason the item was flagged.

    **Why this image matters:** this is the point where administrators and reviewers decide whether a finding is real, acceptable, or requires action, so the screenshot should make that decision-support value visible.

## Remediation Support

Where permissions need to change, PRH supports action-oriented follow-up.

| Action | When it fits | Expected outcome |
| :--- | :--- | :--- |
| **Seal** | The current unique permission model is valid and should be intentionally preserved | Access is locked into the approved unique pattern |
| **Re-inherit** | Unique permissions should no longer exist | The item is brought back into alignment with parent permissions |
| **Purge** | Exposure is no longer justified and access should be removed | Unwanted access is cleaned up as part of the review cycle |

These actions should still follow your governance and approval model. The value of PRH is that it places remediation close to the finding, so teams can move from analysis to controlled action without losing the decision context.

## Scan History and Session Review

PRH keeps scan sessions so reviews are not treated as one-time events.

| History capability | Why it matters |
| :--- | :--- |
| **History view** | Teams can reopen earlier analyses and continue from a known review point |
| **Session persistence** | Recurring governance cycles do not require fresh manual reconstruction every time |
| **Before-and-after comparison** | Teams can confirm whether remediation actually reduced exposure |
| **Audit-oriented review** | PRH becomes more useful in governance meetings, control validation, and evidence preparation |

### History Retention and Storage

PRH history is only useful if users understand how long it is kept and where it is stored.

| History topic | Current behavior | What users should understand |
| :--- | :--- | :--- |
| **Session retention** | PRH keeps scan sessions so earlier reviews can be reopened | History is meant to support recurring review, not just the current scan |
| **Business plan retention** | Business policy limits history to up to **25 sessions** within a **30-day** lookback window | Older or excess sessions should not be assumed to remain available indefinitely on Business |
| **Enterprise or trial behavior** | Enterprise and full-trial behavior are designed for broader history access | These tiers are intended for longer and less restricted review continuity |
| **Browser session storage** | PRH currently persists history in browser local storage for the active site context | Users should not treat browser-only history as the sole long-term evidence store |
| **SharePoint history list boundary** | PRH is designed around a `PermissionRiskHistory` list pattern for SharePoint-backed history storage | Where organizations need stronger persistence and audit continuity, the SharePoint-backed model is the right direction |

!!! warning "History Reality Check"
    If a team needs durable audit evidence, do not rely only on browser-local history. Use PRH history as a working review surface and retain important outputs in the organization’s approved evidence path.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-history-and-session-review.png`

    **What the final image should show:** the PRH history experience with previous scan sessions, enough visible metadata to understand that users can reopen earlier analyses, and the controls used to continue review from a prior run.

    **Why this image matters:** readers need to see that PRH is not a one-time scan surface. It supports recurring governance and evidence-based follow-up across multiple review cycles.

## Role Fit

PRH is useful because it serves more than one audience in the same review cycle.

=== "Administrators"

    PRH helps administrators run scans, tune sensitivity, investigate findings, and manage follow-up action without leaving the same review surface.

=== "Site Owners and Business Reviewers"

    PRH helps business stakeholders validate whether flagged access still matches a real business need before a remediation decision is made.

=== "Governance Stakeholders"

    PRH helps governance teams understand permission risk posture over time instead of reacting only to isolated findings.

The result is a web part that supports both day-to-day operational review and broader governance conversations without forcing users into a deeply technical experience.
