---
hide:
  - toc
---

<a href="../" class="btn-back">← Back to Web Parts Catalog</a>

# Commercials & Licensing

This page explains how licensing behaves inside the Permission Risk Heatmap (PRH) experience. It is written for administrators and operational owners who need to understand what users will see, how trial and licensed states affect the product, and when a license issue becomes an operational blocker.

## License Review Summary

Use this page the same way you would review the license state inside the product: check the current entitlement, understand what plan is active, confirm whether the feature behavior matches that plan, and decide whether any admin action is needed.

| Review item | What to check | Why it matters |
| :--- | :--- | :--- |
| `📦` **Plan** | Which entitlement level is active | Explains why capabilities are available, limited, or blocked |
| `🚦` **Status** | Whether the license is trial, active, grace, expired, or unavailable | Prevents license conditions from being misread as product issues |
| `🧭` **Source** | Whether the entitlement came from an online or offline path | Tells admins where to focus troubleshooting |
| `🏛️` **Activation scope** | Whether the entitlement is tenant, site, or local | Clarifies where the current state is being applied |
| `🔄` **Refresh state** | Whether the latest entitlement has been reloaded | Avoids stale license-state confusion |
| `🔐` **Admin action availability** | Whether the user can validate a key or upload an offline license | Shows whether the current user can actually change the state |

<figure class="doc-screenshot">
  <img src="../../../assets/img/prh-placeholders/prh-license-status-card.png" alt="PRH license status card showing plan, status, source, scope, and license actions." />
  <figcaption>The PRH license status card gives administrators a quick view of the current entitlement, how it was resolved, and what licensing actions are available.</figcaption>
</figure>

## Plan Review

The PRH feature documents define a usable plan structure. That gives enough information to explain what changes between plans, even though they do not define final public numeric pricing.

=== "🎁 Trial"

    **Best for:** evaluation and proof-of-value.

    **What users get:**
    - Enterprise-style evaluation access
    - broad feature visibility
    - low friction for trying the product in real review scenarios

    **What admins should watch:**
    - trial end timing
    - whether stakeholders are validating real workflows
    - whether the tenant is ready to move into a permanent licensed state

=== "🏢 Business"

    **Best for:** departmental or mid-scope governance operations.

    **What users get:**
    - core PRH operational review capability
    - more controlled governance usage
    - limited history and policy caps compared with Enterprise

    **What admins should watch:**
    - source-per-scan and daily scan limits
    - reduced history window
    - whether users expect Enterprise-only behavior

=== "🛡️ Enterprise"

    **Best for:** enterprise governance programs and higher-control review models.

    **What users get:**
    - the fullest PRH capability set
    - broader forensic and operational flexibility
    - stronger support for advanced governance review

    **What admins should watch:**
    - whether the environment is actually licensed at the expected scope
    - whether offline or connected licensing is being used
    - whether the visible behavior matches Enterprise expectations
    
## Feature Access Review

Use this matrix when you need to review why one plan behaves differently from another.

| Capability area | Trial (14-Day Full) | Business (Standard) | Enterprise (Premium) |
| :--- | :--- | :--- | :--- |
| `📋` **Table tab** | Available | Available | Available |
| `🧊` **Grid tab** | Available | Available | Available |
| `🫧` **Clusters tab** | Available | Locked | Available |
| `🎯` **Radar tab** | Available | Locked | Available |
| `📊` **Risk intelligence** | Financial impact style scoring | Label-aware and standard review intelligence | Financial impact style scoring |
| `🕵️` **Shadow admin discovery** | Full recursive tracing | Reduced-depth tracing | Full recursive tracing |
| `💥` **Blast radius analysis** | Interactive experience | Basic finding context | Full interactive experience |
| `🛠️` **Remediation cockpit** | Full evaluation capability | More limited operational mode | Full operational capability |
| `🕒` **Forensic history** | Full evaluation access | Up to 25 sessions in a 30-day window | Extended history access |

| Usage policy | Trial (14-Day Full) | Business (Standard) | Enterprise (Premium) |
| :--- | :--- | :--- | :--- |
| `📂` **Sources per scan** | Unlimited for evaluation | 25 | Unlimited |
| `📅` **Daily scan quota** | Unlimited for evaluation | 50 scans per day | Unlimited |
| `⚙️` **Bulk operations** | Enabled | Restricted by plan policy | Enabled |
| `🗂️` **History duration** | Full evaluation access | 30-day lookback | Extended or long-term retention model |
| `📤` **Export behavior** | Full evaluation access | Standard export behavior | Higher-grade export behavior |

!!! note "View Rule Summary"
    In the current PRH model, `Table` and `Grid` are available across the usable plans, while `Clusters` and `Radar` are higher-tier visual intelligence views reserved for Trial and Enterprise.

## Activation and Renewal Review Flow

Use this flow when you need to review or correct licensing in the product:

1. Check the visible plan, status, source, and activation scope.
2. If the environment is in trial, confirm whether evaluation is still active and intentional.
3. If a permanent entitlement is expected, validate the license key or upload the offline license where permitted.
4. Refresh the license state so the product reloads the latest entitlement.
5. Recheck the affected feature to confirm whether it is now `allowed`, `read-only`, or `blocked`.
6. If the visible behavior still does not match the entitlement, escalate with the reviewed state details instead of reporting only a generic feature issue.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-license-trial-and-activation.png`

    **What the final image should show:** the PRH licensing experience in a trial or activation state, ideally including trial status messaging and the actions available to move toward an active licensed state.

    **Why this image matters:** this helps administrators understand what end users or reviewers see during evaluation, and it reduces confusion during rollout when some environments are still in trial mode.

## License Source Review

PRH supports both connected and offline-oriented licensing patterns.

| Licensing path | How it works in practice | Admin note |
| :--- | :--- | :--- |
| `🌐` **Online licensing** | Entitlement is resolved through the connected validation path | Best when the environment supports normal license validation and refresh behavior |
| `📄` **Offline licensing** | An entitlement file can be uploaded and validated for use without relying on the same connected path | Useful in environments with tighter operational or connectivity constraints |
| `🔐` **Restricted upload** | Offline upload is not available to every user | Prevents casual changes to licensing state |
| `🧭` **Visible source indicator** | The UI shows whether the current entitlement came from an online or offline source | Makes troubleshooting faster and more accurate |

For enterprise use, offline support matters because some organizations need tighter control over where licensing is validated and who is allowed to update it.

## Questions People Commonly Ask

??? question "Why is a feature visible but not fully usable?"
    Because PRH supports plan-aware feature modes such as `allowed`, `read-only`, and `blocked`. Visibility does not always mean full operational access.

??? question "Why does one environment look licensed and another does not?"
    Review the activation scope and license source first. A tenant-level expectation and a site-level or local result are not the same thing.

??? question "Why is offline upload not available to every user?"
    That restriction is intentional. Offline licensing should not be casually changed by every viewer or reviewer in the product.

??? question "Why does Business behave differently from Enterprise?"
    Because PRH uses plan-based feature gating and usage-policy differences. If users expect Enterprise behavior on Business, the product is likely behaving correctly.
