---
hide:
  - toc
---

<a href="../" class="btn-back">← Back to Web Parts Catalog</a>


# Administration & IT

This page explains only the operational details that matter to admins, reviewers, and site owners. It focuses on what PRH records, when local Clarix lists are used, and how plan and license state affect that behavior.

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

## PRH Activity Records and Local Logging

PRH can keep a local operational record of important product activity when that behavior is enabled by the administrator. This helps teams understand what happened during a review session without forcing them to read engineering diagnostics.

| Topic | What admins and reviewers should know |
| :--- | :--- |
| **What PRH can record** | PRH can record scan activity, remediation actions, license-related actions, and list setup activity when local logging or telemetry is enabled |
| **What PRH does not emphasize** | Frequent UI interactions such as view changes, tab switches, search updates, and pagination are treated as lower-value activity and may be grouped instead of written one by one |
| **Why this matters** | The product keeps important operational events easier to review while avoiding unnecessary noise from every small click |
| **Who needs this information** | Primarily administrators, support owners, and governance reviewers rather than everyday end users |

### How Local PRH Activity Storage Works

| Step | What happens |
| :--- | :--- |
| **1. PRH loads normally** | The web part does not force local Clarix list creation every time the page opens |
| **2. Admin chooses whether to enable local recording** | Local logs and local telemetry depend on the PRH configuration set by the administrator |
| **3. Admin uses `Create Lists`** | If local recording is enabled, the admin can provision the PRH activity lists from the web part itself |
| **4. PRH starts using the available lists** | Once the lists exist, PRH can write the relevant operational activity there |

| Local list | What it is used for |
| :--- | :--- |
| **`Clarix_Logs`** | Important PRH operational records such as scan, remediation, license, and provisioning events |
| **`Clarix_Telemetry`** | Product activity signals that help teams understand behavior, usage flow, and support context |

!!! note
    PRH does not need these local lists just to load. They become relevant when your team wants stronger local troubleshooting or governance visibility.

## What PRH Records

PRH should be transparent about what it records. The product records meaningful review and support activity, but it does not treat every click as a major event.

### PRH log events

These are the stronger operational records. They are the events admins usually care about when they need to understand whether a scan, remediation, or setup action really happened.

| Recorded in `Clarix_Logs` | When it is recorded |
| :--- | :--- |
| **List Scan Succeeded** | A selected list or library is scanned successfully |
| **List Scan Failed** | A selected list or library fails during scan |
| **Scan Completed** | The full PRH scan completes |
| **Scan Failed** | The full PRH scan fails |
| **Scan Interrupted** | A running scan is stopped |
| **Scan Blocked By License** | A scan is prevented because the current license state does not allow it |
| **Scan Blocked By Policy** | A scan is denied by plan or policy enforcement |
| **List Provisioning Started** | An admin starts local Clarix list setup |
| **List Provisioning Completed** | Local Clarix list setup succeeds |
| **List Provisioning Failed** | Local Clarix list setup fails |
| **License Refresh Failed** | PRH cannot refresh the current license state |
| **License Key Validation Failed** | A supplied license key fails validation |

### PRH telemetry events

These are activity signals that help explain how PRH was used. Some are recorded immediately, while high-frequency interactions may be grouped to avoid noise.

| Recorded in `Clarix_Telemetry` | When it is recorded |
| :--- | :--- |
| **Scan Started** | A PRH scan begins |
| **Scan Completed** | A PRH scan completes successfully |
| **Scan Failed** | A PRH scan fails |
| **Scan Interrupted** | A running scan is stopped |
| **Main View Changed** | A user switches between `Analysis` and `History` |
| **Visual Mode Changed** | A user switches result views such as `Table`, `Grid`, `Clusters`, or `Radar` |
| **Scope Selection Changed** | A user adds or removes a selected scope |
| **Scope Selection Cleared** | A user clears the selected scope list |
| **History Session Opened** | A user reopens an earlier review session |
| **History Session Deleted** | A user deletes a saved session |
| **History Cleared** | A user clears retained session history |
| **Forensic Details Opened** | A user opens the forensic detail panel |
| **Export Triggered** | A user exports the current result set |
| **Results Pagination Changed** | A user moves between result pages |
| **License Dialog Opened or Closed** | A user opens or closes the PRH licensing dialog |
| **List Provisioning Dialog Opened or Closed** | An admin opens or closes the local list setup flow |
| **License Refresh Succeeded or Failed** | PRH refreshes license state successfully or fails to do so |
| **License Key Validated or Rejected** | PRH accepts or rejects a supplied license key |
| **Trial Activated** | A PRH trial starts successfully |
| **Remediation Requested or Completed** | A remediation flow is started or completed |
| **Breach Simulation Started or Completed** | A breach simulation flow is used where the plan allows it |

!!! note
    Search text changes, filter churn, and other very frequent interface interactions are intentionally treated as lower-value telemetry. PRH may group those actions instead of writing every single change as a separate durable record.

## How Plans Affect Local Recording

| Plan or state | What users should expect |
| :--- | :--- |
| **Trial** | Full PRH analysis and interaction path is available. Local logs and telemetry can be recorded if enabled and provisioned. |
| **Business** | PRH remains active with plan restrictions. Allowed actions still produce logs and telemetry. Restricted features do not appear as normal usage events. |
| **Enterprise** | Full PRH experience is available, including the broader set of supported local log and telemetry events. |
| **Blocked, suspended, expired, or invalid license** | Active analysis is prevented, but license and recovery-related activity can still be recorded when local storage is available. |

## What This Means for Users

| Situation | What users should expect |
| :--- | :--- |
| **A scan starts or finishes** | PRH can record that the review action occurred and whether it completed successfully |
| **A remediation action is taken** | PRH can record that the corrective step was attempted or completed |
| **A license or provisioning action happens** | PRH can record the outcome so admins can understand why functionality was available or blocked |
| **Someone switches tabs or changes filters repeatedly** | PRH may group that interaction activity instead of treating every click as a major event |
| **A license is blocked or expired** | Active analysis may be prevented, but license-related and recovery-related activity can still be captured when local recording is available |

!!! note "Image Placeholder"
    **Placeholder name:** `prh-local-logging-and-telemetry.png`

    **What the final image should show:** the PRH command area that includes the `Create Lists` action, ideally with enough context to make it clear that administrators can enable local Clarix-backed recording from the PRH experience.

    **Why this image matters:** this is the most practical way to show administrators where local PRH activity recording begins without dragging them into internal list schema or telemetry implementation detail.

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

## What Admins Should Still Decide

| Decision area | Best-practice answer |
| :--- | :--- |
| **What should we scan first?** | Start with defined, high-value, or high-change scopes instead of broad exploratory scans |
| **Who should be involved?** | The admin running PRH should know who the business owner is before remediation starts |
| **How should findings be used?** | Use PRH findings to support review and action, not as automatic proof that every item must be changed |
| **Can we use PRH for demos or training?** | Yes, but teams should understand whether they are working with mock data or live SharePoint content |
| **What should happen before remediation?** | Owners and reviewers should agree whether the session is for discovery, validation, exception review, or corrective action |
