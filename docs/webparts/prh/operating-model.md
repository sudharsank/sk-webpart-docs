---
hide:
  - toc
---

<a href="../" class="btn-back">← Back to Web Parts Catalog</a>


# Roles and Operating Model

This page explains who should use PRH, who makes decisions at each stage of the review process, and how the web part fits into recurring governance work. The goal is to make PRH usable as an operating tool, not just a reporting surface.

The straight reality is that PRH only works well when role ownership is clear. If nobody owns the scope, nobody validates the findings, and nobody approves remediation, the web part turns into a dashboard that produces anxiety instead of action.

## Who Should Use PRH

PRH is most effective when each role understands where its accountability starts and ends.

## Admin Responsibilities

- Own the scanning cadence for high-value or high-change SharePoint scopes.
- Triage critical and high findings first.
- Coordinate approvals before high-impact remediation.
- Preserve evidence before and after a change.
- Maintain the audit trail through exports, notes, and reruns.

## Site Owner Responsibilities

- Confirm whether flagged access is still required for the business process.
- Validate who should retain access and who should not.
- Identify operational dependencies before remediation is approved.
- Help classify whether a finding is expected, tolerated, or truly risky.

## Reviewer and End-User Responsibilities

- Review items that affect their team or process.
- Confirm whether current access is still needed.
- Report unintended loss of access after remediation.
- Follow updated sharing or ownership guidance after review.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-roles-and-workflow-entry.png`

    **What the final image should show:** the PRH landing or guided workflow area that helps different users understand where they enter the process, ideally showing the step-based review flow or the analysis/history workspace.

    **Why this image matters:** this section introduces ownership and workflow, so the best supporting image is one that makes the PRH review model feel operational rather than abstract.

## Expected Outcomes By Role

### Administrators

- Critical findings are reviewed quickly.
- Remediation decisions are evidence-based.
- Scan history remains traceable for audit and governance meetings.

### Site Owners

- Business-critical access is preserved.
- Unnecessary broad access is challenged and reduced.
- Exceptions are documented instead of assumed.

### Reviewers and End Users

- Users understand why a change happened.
- Access changes can be confirmed or challenged with context.
- Support teams receive clear, relevant issue details.

In practice, this means PRH should not be run as a purely technical exercise. It works best when administrators own the process, site owners validate business reality, and reviewers confirm whether proposed cleanup is actually safe.

## Admin Operating Model

This section defines the PRH operating cadence for administrators and governance teams.

### Daily Activities

- Run targeted scans for high-change or recently remediated areas.
- Review new critical or high findings.
- Confirm whether urgent escalation is required.

### Weekly Activities

- Review high-value scopes on a planned cadence.
- Confirm whether outstanding findings are moving toward resolution.
- Validate that evidence has been captured for completed remediation work.

### Monthly Activities

- Review history and reporting trends.
- Identify recurring permission-risk patterns.
- Update governance stakeholders on unresolved hotspots and improvement progress.

### Approval Model

- Low-impact changes can move faster when ownership and effect are clear.
- High-impact changes should be approved in line with your existing governance or change-control process.
- Exceptions should be documented with an owner and review date.

### Governance Checkpoints

- Confirm the business owner is known before broad remediation begins.
- Keep evidence before and after material changes.
- Separate discovery from remediation when the blast radius is uncertain.
- Escalate sensitive findings instead of forcing a same-day decision.

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

## End User Guidance

PRH is primarily operated by administrators, but end users and business teams still play an important role in confirming access expectations.

### What a Flagged Item Usually Means

- Access may be broader than expected.
- An external user or group may still have access.
- Permission inheritance may not match the intended ownership model.
- A reviewer needs business confirmation before a safe decision can be made.

### What End Users Should Do

- Confirm whether the current access is still required.
- Provide business context if the access supports a real workflow.
- Report if a remediation change removed access that is still needed.
- Escalate through the support path when a critical business process is affected.

### Exception Handling

- Do not assume every high-severity finding must be remediated immediately.
- Document accepted exceptions with an owner and business rationale.
- Revisit exceptions on a planned review cadence instead of treating them as permanent by default.

### Post-Remediation Expectations

- Confirm whether intended users still have the access they need.
- Report unexpected access loss quickly with business context.
- Expect follow-up review when a remediation changed a broad or inherited access pattern.

## Escalation Expectations

- Use PRH as the system of record for analysis and evidence, not as the only approval system.
- Escalate immediately when a finding affects regulated content, executive collaboration spaces, or external guest access with unclear ownership.
- Involve business owners before remediating broad or inherited access patterns that may affect many users at once.

## What Good Operation Looks Like

You are using PRH well when:

- scans are run against defined scopes rather than random broad selections
- high-severity findings are reviewed quickly but not recklessly
- business owners are involved before broad access changes are made
- exceptions are documented instead of forgotten
- history is used to validate improvement over time
- users understand why a remediation happened and how to respond if access was affected

If those things are not happening, the problem is usually not the web part. It is the operating model around it.
