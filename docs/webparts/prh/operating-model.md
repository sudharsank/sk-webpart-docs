---
hide:
  - toc
---

<a href="../" class="btn-back">← Back to Web Parts Catalog</a>


# Roles & Workflows

This page explains who should use PRH, who makes decisions at each stage of the review process, and how the web part fits into recurring governance work. The goal is to make PRH usable as an operating tool, not just a reporting surface.

The straight reality is that PRH only works well when role ownership is clear. If nobody owns the scope, nobody validates the findings, and nobody approves remediation, the web part turns into a dashboard that produces anxiety instead of action.

## Role Matrix

PRH is most effective when each role understands where its accountability starts and ends.

| Role | Primary responsibility | What success looks like |
| :--- | :--- | :--- |
| **Administrator** | Run scans, triage high-risk findings, coordinate follow-up action | Critical findings are reviewed quickly and evidence is preserved |
| **Site owner** | Confirm whether flagged access still supports a real business need | Legitimate access is preserved and unnecessary access is challenged |
| **Business reviewer** | Validate context, accepted exceptions, and impact of proposed changes | Decisions are based on business reality instead of guesswork |
| **End user** | Confirm whether access is still needed and report issues after change | Access changes are understood and escalated with proper context |

!!! note "Image Placeholder"
    **Placeholder name:** `prh-roles-and-workflow-entry.png`

    **What the final image should show:** the PRH landing or guided workflow area that helps different users understand where they enter the process, ideally showing the step-based review flow or the analysis/history workspace.

    **Why this image matters:** this section introduces ownership and workflow, so the best supporting image is one that makes the PRH review model feel operational rather than abstract.

## Operating Cadence

PRH should be used on a repeatable cadence, not as a random afterthought.

| Cadence | What the team should do | Why it matters |
| :--- | :--- | :--- |
| **Daily** | Review urgent or newly surfaced high-risk findings in active scopes | Keeps critical exposure from sitting unnoticed |
| **Weekly** | Run planned reviews for high-value or high-change areas | Builds a manageable governance rhythm |
| **Monthly** | Review trends, recurring hotspots, and unresolved risk areas | Helps leadership see whether exposure is improving over time |

## Approval and Governance Rules

- Low-impact changes can move faster when ownership and expected effect are clear.
- High-impact remediation should go through the existing change-control or governance approval path.
- Accepted exceptions should have an owner, a rationale, and a future review date.
- When the blast radius is unclear, separate discovery from remediation until the likely impact is understood.
- Sensitive findings should be escalated instead of being forced into a same-day decision.

## Recommended PRH Workflow

The most effective way to use PRH is to follow a predictable review pattern:

1. Select the relevant lists or libraries for the current review cycle.
2. Run the analysis and wait for the findings set to complete.
3. Review the highest-severity results first.
4. Open forensic detail to understand who has access and why the item was flagged.
5. Confirm the business context with the site owner or affected reviewer.
6. Decide whether the finding should be accepted, documented as an exception, or remediated.
7. If remediation is approved, apply the right action and preserve the evidence.
8. Reopen the session later or rerun the analysis to confirm whether the risk profile actually improved.

This workflow is simple on purpose. PRH should make governance review easier, not create another heavyweight process.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-operating-workflow-steps.png`

    **What the final image should show:** the guided PRH step flow or the sequence of review actions that takes a user from scope selection through analysis, investigation, remediation, and history.

    **Why this image matters:** this is the point in the document where a visual workflow will help users understand the order of operations without having to mentally translate the text into steps.

## What a Flagged Item Usually Means

- Broader-than-expected access means the item deserves review, not blind removal.
- Guest or external access means the business owner should confirm whether that exposure is still acceptable.
- Broken inheritance means the current permission model may no longer match the intended ownership model.
- A high-severity finding means a reviewer should validate the business impact before action is taken.

## What Reviewers and End Users Should Do

- If access is still needed, provide business context so the finding can be classified correctly.
- If access is no longer justified, support remediation and document any important dependency.
- If access is lost unexpectedly after a change, report it quickly with business context.
- If a critical business process is affected, escalate through the support or governance path immediately.

## What Good Operation Looks Like

- Defined scopes are reviewed intentionally, which reduces noise and improves decision quality.
- High-risk findings are reviewed quickly but not recklessly, which protects the business without causing careless disruption.
- Business owners are involved before broad changes, which prevents technically correct but operationally harmful remediation.
- Exceptions are documented, which stops tolerated risk from becoming invisible risk.
- History is used to validate improvement, which turns PRH into a recurring governance process instead of a one-time report.

If those things are not happening, the problem is usually not the web part. It is the operating model around it.
