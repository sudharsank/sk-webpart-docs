---
hide:
  - toc
---

# Audit and Activity

Clarix uses a shared audit and activity model across web parts so that product behavior is more consistent for clients. That matters because clients should not have to relearn how diagnostics, activity history, or operational records work every time a new Clarix web part is deployed.

## What Clients Should Expect

| Area | Client-facing expectation |
| :--- | :--- |
| **Shared activity model** | Clarix web parts follow a common pattern for operational and usage records |
| **Low-friction setup** | Clients are not expected to manually build separate tracking structures for each web part |
| **Hidden operational storage** | Shared Clarix audit storage is intended to stay out of normal end-user navigation |
| **Supportability** | Activity records help with troubleshooting, usage review, and governance follow-up |

## Why This Matters

Without a shared model, every web part ends up with different logging behavior, different troubleshooting expectations, and different admin overhead. Clarix avoids that by treating audit and telemetry as a platform capability instead of a one-off feature.

## What Gets Supported by the Shared Model

- product activity tracking
- usage milestones
- technical error and execution traces
- correlation across a user session or operational workflow
- support-oriented review when a client needs to understand what happened

## What Clients Usually Need to Know

### 1. Clarix records useful operational activity

This helps support teams and administrators understand:

- when a meaningful product action occurred
- whether it completed successfully
- how it relates to a broader session or workflow
- whether the issue is a user problem, a configuration problem, or a product problem

### 2. Activity storage is not meant to be user-facing

Clarix uses shared hidden storage patterns so normal users do not accidentally modify or delete operational records. This keeps the audit trail more reliable and reduces avoidable admin work.

### 3. Audit records support more than troubleshooting

The same shared activity model can support:

- product support
- governance review
- operational validation
- usage understanding
- performance and reliability follow-up

## Retention and Maintenance

Clients should assume that Clarix performs automated background maintenance to keep shared activity storage healthy and avoid unnecessary growth.

This means:

- older low-level records may be pruned according to the shared retention behavior
- clients should not treat operational activity storage as an unlimited permanent archive
- if formal long-term evidence retention is required, clients should use their approved governance or retention process instead of relying only on shared product diagnostics
