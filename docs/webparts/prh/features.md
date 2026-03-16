---
hide:
  - toc
---

# Home Screen Tour

<figure class="doc-screenshot">
  <img src="../../assets/img/prh-placeholders/prh-home-screen.png" alt="PRH home screen with scope filters, analysis steps, and risk guidance." />
  <figcaption>The home screen is the main operator workspace: scope selection on the left, workflow guidance in the center, and severity cues for fast triage.</figcaption>
</figure>

## Analysis and History

- `Analysis` is the default tab for a new review cycle.
- `History` lets you reopen prior scans without losing audit continuity.
- Use `History` after remediation to compare the new outcome with the previous state.

## Scope Selection Panel

Choose the SharePoint lists and libraries you want to evaluate.

- Search narrows the scope list quickly when business teams know the name of the target area.
- `All`, `Lists`, and `Libs` help administrators filter the inventory before selecting a scope.
- The scope rail is best used to start with high-value business areas rather than scanning everything at once.

### Admin guidance

- Start with the area that currently carries the highest business risk or the highest rate of recent permission change.
- Use narrower scopes when a prior run produced too many findings to action safely in one cycle.

## Guided Workflow Panel

The center panel breaks the PRH workflow into four steps:

1. Select intelligence scopes.
2. Launch deep trace.
3. Analyze findings.
4. Remediate and archive.

- This sequence is useful for new operators because it reinforces the expected order of work.
- It also makes the platform easier to explain to reviewers and auditors.

## Working Views

- `Table` is best for record-level triage and sorting.
- `Treemap` is best for identifying clusters of risk visually.
- Switch between both views during review rather than relying on only one presentation mode.

## Risk Color Guide

PRH uses a simple severity language:

- `Critical` requires immediate review because the exposure is likely severe or broadly accessible.
- `High` should be reviewed and remediated promptly.
- `Medium` should be documented and monitored if not immediately remediated.
- `Low` usually represents informational findings or minor anomalies.

## How to Use This Screen Well

- Pick the scope first, not the severity label first.
- Review the workflow panel if a new operator is unsure what to do next.
- Use the color guide as a prioritization aid, not as a substitute for business validation.
