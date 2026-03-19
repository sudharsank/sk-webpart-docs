---
hide:
  - toc
---

<a href="../" class="btn-back">← Back to Web Parts Catalog</a>


# Administration & IT

This page is not meant to be a technical appendix. Its job is simpler: explain how PRH behaves in the real environment, what it works against, where history is kept, and what administrators and reviewers should realistically expect from the product.

If the Overview page explains what PRH is, this page explains how it behaves once teams start using it in a real SharePoint review process.

## What This Page Helps You Understand

| Topic | Why it matters in PRH |
| :--- | :--- |
| **Review scope** | PRH works against selected lists and libraries, not against everything automatically |
| **Operational boundary** | Users need to know what PRH is designed to support and what it is not meant to replace |
| **History behavior** | Review continuity depends on understanding where sessions are stored and how long they remain available |
| **Admin expectations** | Governance teams need to know what should be decided before scans and remediation begin |
| **User expectations** | Site owners and reviewers need to understand what PRH can tell them and what still requires human judgment |

## What PRH Works With

PRH is built for SharePoint permission review in the context where people actually work: selected sites, selected lists, and selected libraries.

| PRH focus area | What users should expect |
| :--- | :--- |
| **Selected lists and libraries** | PRH reviews the content sources chosen for the current session |
| **Permission risk findings** | PRH surfaces likely oversharing, guest exposure, broken inheritance, and other broad-access conditions |
| **Analysis and follow-up** | PRH supports review, investigation, and approved corrective action in the same working flow |
| **Session history** | PRH supports returning to earlier reviews instead of rebuilding context every time |

!!! note "Image Placeholder"
    **Placeholder name:** `prh-platform-scope-and-boundaries.png`

    **What the final image should show:** a simple PRH screen or supporting visual that makes the reviewed scope obvious, ideally showing that PRH works against selected SharePoint lists or libraries rather than as a tenant-wide scanner.

    **Why this image matters:** administrators need to understand the product boundary early so they do not assume PRH is scanning everything automatically or operating outside the selected review scope.

## What PRH Is Not Meant to Replace

| Not replaced by PRH | Why that matters |
| :--- | :--- |
| **Enterprise governance programs** | PRH supports governance review, but it is not the whole governance model |
| **Formal approval processes** | PRH helps teams decide, but it should not bypass existing approval rules |
| **Records or compliance systems** | PRH is for permission-risk review, not for acting as a records platform |
| **Identity governance tooling** | PRH helps surface permission exposure, but it does not replace broader identity controls |
| **SharePoint operational ownership** | Site ownership, support, and business accountability still need to exist outside the web part |

PRH should be treated as a decision-support product. It helps teams understand likely risk faster, but it is still part of a larger governance and operating model.

## What Administrators Should Know Before Using PRH

| Admin question | Best-practice answer |
| :--- | :--- |
| **What should we scan first?** | Start with defined, high-value, or high-change scopes instead of broad exploratory scans |
| **Who should be involved?** | The admin running PRH should know who the business owner is before remediation starts |
| **How should findings be used?** | Use PRH findings to support review and action, not as automatic proof that every item must be changed |
| **Can we use PRH for demos or training?** | Yes, but teams should understand whether they are working with mock data or live SharePoint content |
| **What should happen before remediation?** | Owners and reviewers should agree whether the session is for discovery, validation, exception review, or corrective action |

## History, Storage, and Review Continuity

PRH is designed to support review continuity, not just one-time inspection.

| History topic | What PRH does today | What users should understand |
| :--- | :--- | :--- |
| **Session reuse** | PRH allows earlier scan sessions to be reopened | Teams can continue a review instead of starting over |
| **Browser-local history** | PRH currently persists working history in browser local storage for the site context | This is useful for continuity, but it should not be treated as the only long-term evidence store |
| **SharePoint list-backed history model** | PRH is designed around a `PermissionRiskHistory` list pattern for stronger persistence | This is the right direction when the organization needs stronger continuity or audit support |
| **Retention behavior** | History availability depends on policy and plan behavior | Users should not assume every session will remain available forever |
| **Evidence use** | History helps with before-and-after validation and governance review | Important evidence should still be retained through the organization’s approved process |

!!! warning "Important"
    PRH history is useful working context. It is not a substitute for formal evidence retention if your organization requires durable audit records.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-platform-history-behavior.png`

    **What the final image should show:** the PRH history area or session list with enough visible context to show that previous review runs can be reopened and used as evidence in later governance activity.

    **Why this image matters:** this helps administrators understand that PRH supports continuity over time, which is one of the main operational differences between a one-off report and a reusable review tool.

## What End Users and Reviewers Should Expect

This page is still relevant to non-admin readers because PRH only works well when everyone understands what the product is doing.

| Reader | What they should understand |
| :--- | :--- |
| **Site owners** | PRH is reviewing the selected scope, not the entire tenant |
| **Business reviewers** | PRH findings support decision-making, but business context still matters |
| **End users** | A flagged item does not always mean an immediate change, but it does mean the access pattern deserves review |
| **Governance teams** | PRH is strongest when it is used as part of a recurring review process, not a one-off reaction |

