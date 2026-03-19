---
hide:
  - toc
---

<a href="../" class="btn-back">← Back to Web Parts Catalog</a>

# Step-by-Step Guide

This page shows the simplest usable PRH workflow from first entry to follow-up review. It is intentionally procedural. The goal is to help administrators, site owners, and reviewers understand what to do in order without forcing them to reconstruct the sequence from the other pages.

## Before You Start

Use this guide when:

- PRH is already added to the SharePoint page
- the people involved know whether the session is for discovery, review, or remediation validation
- the review scope has a known business owner

## Step 1: Open the PRH Workspace

Start on the PRH page and confirm that you are in the main working surface.

- Make sure the page has loaded fully.
- Confirm that the PRH workspace is visible.
- Check whether you are on `Analysis` or `History`.
- If this is a new review, stay on `Analysis`.

<figure class="doc-screenshot">
  <img src="../../../assets/img/prh-placeholders/prh-overview-main-screen.png" alt="PRH workspace showing the initial landing view for analysis." />
  <figcaption>Start in the PRH workspace and confirm that you are in the active analysis experience before selecting scope.</figcaption>
</figure>

## Step 2: Select the Review Scope

Choose the lists or libraries you want to review. Do not start with an overly broad selection unless the goal is specifically exploratory discovery.

- Pick the content sources that belong to the review cycle.
- Start with the highest-value or highest-change areas first.
- Confirm that the selected scope matches the business context you want to validate.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-step-02-scope-selection.png`

    **What the final image should show:** the PRH scope-selection area with one or more lists or libraries chosen for analysis.

    **Why this image matters:** this is where most users either keep the review focused or create unnecessary noise. The screenshot should make the intended starting action obvious.

## Step 3: Launch the Analysis

Run the scan after the scope is selected.

1. Start the analysis from the PRH workspace.
2. Watch the status as the selected sources are processed.
3. Wait until the findings are ready before interpreting the result set.

<figure class="doc-screenshot">
  <img src="../../../assets/img/prh-placeholders/prh-placeholder-scan.svg" alt="Placeholder for the PRH scan execution view." />
  <figcaption>Run the scan only after the scope is defined, then watch the status until PRH finishes generating the findings set.</figcaption>
</figure>

## Step 4: Review the Findings

Use the result view that best fits the type of review you are doing.

- Use **Table** view when you want a structured, action-oriented review.
- Use **Treemap** view when you want to spot clusters and severity visually.
- Start with the higher-severity findings before working through the rest.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-step-04-review-findings.png`

    **What the final image should show:** the findings area with either the table or treemap view active, including severity cues.

    **Why this image matters:** this is the point where users need to understand how PRH presents risk, not just that a scan completed.

## Step 5: Open Forensic Detail

Do not make remediation decisions from the high-level view alone. Open the forensic detail for the findings that matter.

- Review who has access.
- Check whether the access is coming from direct assignment, groups, or guest exposure.
- Confirm why the item was flagged before deciding what to do.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-step-05-forensic-detail.png`

    **What the final image should show:** the forensic detail panel for a selected finding, including the relevant access context.

    **Why this image matters:** this is where PRH becomes useful for decision-making rather than just flagging items.

## Step 6: Decide on Follow-Up Action

Once the business context is understood, decide whether the finding should be accepted, documented as an exception, or remediated.

| Option | When to use it |
| :--- | :--- |
| **Accept as valid** | The current access is intentional and still needed |
| **Document an exception** | The access is risky but temporarily tolerated with owner awareness |
| **Remediate** | The access is no longer justified and should be corrected |

If remediation is approved, use the PRH action that matches the situation:

- `Seal` when the unique permission model is valid and should be preserved intentionally
- `Re-inherit` when the item should match the parent permission model again
- `Purge` when access should be cleaned up because the exposure is no longer justified

<figure class="doc-screenshot">
  <img src="../../../assets/img/prh-placeholders/prh-placeholder-remediation.svg" alt="Placeholder for the PRH remediation view." />
  <figcaption>PRH should move teams from analysis into controlled follow-up action, but only after the business context is clear.</figcaption>
</figure>

## Step 7: Reopen History and Validate Progress

After a review cycle or remediation change, return to PRH history to confirm what changed.

- Open the `History` tab.
- Reopen the previous session if you need to compare it with the current state.
- Use the stored session context to validate whether the risk profile improved after follow-up action.

!!! note "Image Placeholder"
    **Placeholder name:** `prh-step-07-history-validation.png`

    **What the final image should show:** the PRH history view with one or more prior sessions available for reopening.

    **Why this image matters:** users need to see that PRH supports continuity and validation, not just a one-time scan.

## Quick Reminders

- Start with a defined scope, not a random broad sweep.
- Review forensic detail before changing permissions.
- Do not treat every high-severity finding as an automatic remediation.
- Use history to validate improvement over time.
- Keep business owners involved before broad or inherited access patterns are changed.
