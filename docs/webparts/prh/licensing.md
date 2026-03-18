---
hide:
  - toc
---

<a href="../" class="btn-back">← Back to Web Parts Catalog</a>

# Commercials & Licensing

This page explains how licensing behaves inside the Permission Risk Heatmap (PRH) experience. It is written for administrators and operational owners who need to understand what users will see, how trial and licensed states affect the product, and when a license issue becomes an operational blocker.

It does **not** attempt to act as a sales contract or public pricing sheet. The goal here is practical clarity: what PRH exposes, how the license state changes the experience, and what an administrator needs to do when licensing needs attention.

## What Users Can Expect from Licensing

PRH surfaces licensing as part of the working experience rather than hiding it behind a separate admin-only tool.

| What users see | What it tells them | Why it matters |
| :--- | :--- | :--- |
| **Plan** | Which entitlement level is currently active | Helps explain why some capabilities are available and others are limited |
| **Status** | Whether the license is active, trial, in grace, expired, or unavailable | Prevents users from misreading a license issue as a product defect |
| **Source** | Whether the entitlement came from an online or offline path | Helps admins understand how the current state was resolved |
| **Activation scope** | Whether the entitlement applies at tenant, site, or local level | Clarifies where the current license is taking effect |
| **Refresh action** | Lets administrators reload the latest license state | Useful after activation, renewal, or entitlement updates |
| **Validation or upload actions** | Lets authorized users validate a key or upload an offline license | Keeps licensing administration close to the working product |

This is a good design choice because it keeps licensing visible at the point where people are trying to use the product, instead of forcing them into a separate process with no context.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-license-status-card.png`

    **What the final image should show:** the PRH license card or license status area showing plan, status, source, refresh timing, and the actions available to the current user.

    **Why this image matters:** this is the clearest way to show how licensing appears in the real product and what administrators should look for before they assume a feature problem is actually a licensing problem.

## License States That Matter Operationally

PRH recognizes more than one license condition, and those states matter because they affect what the user can do.

| License state | Operational meaning | Typical admin response |
| :--- | :--- | :--- |
| **No License** | No valid entitlement is currently active for the product context | Confirm whether the product was ever activated and whether the correct scope is being checked |
| `🎁` **Trial** | A time-limited entitlement is active | Track the end date and decide whether the tenant should move to a licensed state |
| `✅` **Active** | The product is licensed for normal use | Verify the user is still seeing the expected plan and capabilities |
| `⏳` **Grace** | The product is in a temporary continuation state and may have restrictions | Review renewal or entitlement timing before users fall into a harder block |
| `⌛` **Expired** | The entitlement period has ended | Treat this as a licensing action item rather than a product defect |
| `⛔` **Suspended** | The entitlement exists in record but is not currently usable | Escalate through the licensing or commercial support path |

From an operations perspective, the important distinction is not just whether a license exists, but whether the current state leaves the user fully enabled, partially limited, or blocked.

## Plan Awareness and Feature Gating

The shared licensing model used by PRH supports plan-based feature gating across three plan levels.

| Plan level | Intended use in the product | What admins should assume |
| :--- | :--- | :--- |
| `🌱` **Starter** | Baseline access to the core PRH experience | Suitable for initial availability, but not for every advanced governance scenario |
| `🏢` **Business** | Broader operational capability with more advanced gated features | The right place to look when teams need more than the basic review surface |
| `🛡️` **Enterprise** | Highest capability tier for advanced governance controls | Use this expectation level when teams require the broadest PRH feature access |

PRH also supports feature policies that can place a capability into one of these behaviors:

| Feature behavior | What users experience | What admins should infer |
| :--- | :--- | :--- |
| `✅` **Allowed** | The feature works normally | The current plan and status meet the requirement |
| `👁️` **Read-only** | The user can review but cannot fully operate the feature | The plan or license state is limiting execution, not visibility |
| `🔒` **Blocked** | The feature is unavailable until the requirement is met | The capability should be treated as intentionally gated, not broken |

For administrators, the practical implication is simple: if a capability behaves differently for one user or tenant, the license plan and status should be checked before treating the issue as a defect.

## Plan Comparison

The PRH feature documents define a concrete plan comparison model. This is the right information to show in product documentation because it explains what changes between plans. What those documents do **not** provide is a finalized public price list, so this page should not invent one.

| Capability area | Trial (14-Day Full) | Business (Standard) | Enterprise (Premium) |
| :--- | :--- | :--- | :--- |
| `🗺️` **Visualization** | Interactive treemap | Nested or table-led review experience | Interactive treemap |
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

!!! note "Pricing Guidance"
    The PRH feature documents define plan behavior and capability differences, but they do **not** define final public numeric pricing. If you want a pricing chart with actual amounts, it needs to come from your commercial pricing source, not from the feature implementation notes.

## Trial and Activation Experience

PRH supports a trial-aware licensing flow so teams can evaluate the web part before full activation.

| Trial or activation point | What happens in PRH | Why it matters |
| :--- | :--- | :--- |
| `🚀` **Trial start** | A time-limited evaluation entitlement can be activated where supported | Helps teams validate fit before committing to ongoing licensed use |
| `🎁` **Visible trial state** | Users can see that the product is running in trial mode | Reduces confusion during rollout and evaluation |
| `⏱️` **Trial timing** | The experience can show when the trial is expected to end | Prevents surprise loss of capability |
| `🔄` **License refresh** | Administrators can reload entitlement state after a change | Helps confirm that a recent activation or update has taken effect |

This is important because many “feature not working” reports during rollout are really activation-timing or entitlement-refresh issues.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-license-trial-and-activation.png`

    **What the final image should show:** the PRH licensing experience in a trial or activation state, ideally including trial status messaging and the actions available to move toward an active licensed state.

    **Why this image matters:** this helps administrators understand what end users or reviewers see during evaluation, and it reduces confusion during rollout when some environments are still in trial mode.

## Online and Offline License Handling

PRH supports both connected and offline-oriented licensing patterns.

| Licensing path | How it works in practice | Admin note |
| :--- | :--- | :--- |
| `🌐` **Online licensing** | Entitlement is resolved through the connected validation path | Best when the environment supports normal license validation and refresh behavior |
| `📄` **Offline licensing** | An entitlement file can be uploaded and validated for use without relying on the same connected path | Useful in environments with tighter operational or connectivity constraints |
| `🔐` **Restricted upload** | Offline upload is not available to every user | Prevents casual changes to licensing state |
| `🧭` **Visible source indicator** | The UI shows whether the current entitlement came from an online or offline source | Makes troubleshooting faster and more accurate |

For enterprise use, offline support matters because some organizations need tighter control over where licensing is validated and who is allowed to update it.

## What Administrators Should Check First

When a user reports that PRH is limited, blocked, or behaving differently than expected, check the following before escalating it as a product issue:

| Check | What to confirm | Why it is first-line |
| :--- | :--- | :--- |
| `1.` `📦` **Plan** | Which plan is currently active | Many capability questions are plan questions first |
| `2.` `🚦` **Status** | Whether the entitlement is active, in trial, in grace, expired, or unavailable | Status explains whether the product should be fully usable |
| `3.` `🧭` **Source** | Whether the current entitlement is online or offline | This narrows the troubleshooting path quickly |
| `4.` `🏛️` **Activation scope** | Whether the entitlement is applying at tenant, site, or local level | Scope mismatch can explain inconsistent behavior |
| `5.` `🔄` **Refresh** | Whether the product has reloaded the latest entitlement state | Avoids investigating stale state as if it were current |
| `6.` `🎛️` **Feature mode** | Whether the feature is allowed, read-only, or blocked | Confirms whether the limitation is intentional gating |

This basic check eliminates a lot of false defect reports.

## What This Page Intentionally Does Not Do

| Not covered here | Why it is excluded |
| :--- | :--- |
| **Final commercial packaging language** | That belongs in commercial material, not in functional product documentation |
| **Public pricing tables** | Pricing changes more often than user guidance should |
| **Legal purchasing terms** | Those belong in contracts and commercial documentation |
| **Contract-specific entitlement commitments** | They vary by agreement and should not be generalized in the handbook |

Those details belong in commercial material, not in the functional product guide. The documentation here should stay focused on how licensing affects real product use.
