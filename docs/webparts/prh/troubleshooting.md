---
hide:
  - toc
---

# FAQ and Troubleshooting

## Common Questions

### Why should I scan a smaller scope first?

Smaller scopes reduce review noise, make business validation easier, and lower the risk of unsafe same-day remediation decisions.

### What should I do when a finding looks severe but the business says the access is expected?

Record the rationale, confirm the ownership, and decide whether the access is an accepted exception or whether the current model still needs improvement.

### When should I use History instead of running a new scan immediately?

Use `History` when you need to compare a prior run, verify remediation outcomes, or prove that a review cycle took place at a specific time.

## Common Issues

### Scan does not start

- Verify access and approval status.
- Confirm the current scope is valid.
- Retry with a smaller scope if the first attempt was broad.

### Missing or incomplete findings

- Re-check the selected scope.
- Re-run the scan and compare with prior history.
- Confirm whether permission changes were already made before the scan started.

### Remediation did not complete

- Re-check approvals and role permissions.
- Retry in smaller batches.
- Capture the visible error details before escalating.

### Export or report not generated

- Retry after the scan has fully completed.
- Check browser download and security settings.
- Retry with a smaller result set if the export was unusually large.

## Admin Escalation Checklist

- Tenant and site URL
- Scan scope
- Time of issue
- Action attempted
- Error message or screenshot
- Current entitlement or activation status

## End User Escalation Checklist

- Item or site impacted
- Expected access versus actual access
- Time issue observed
- Business impact summary
