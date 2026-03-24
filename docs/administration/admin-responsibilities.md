---
hide:
  - toc
---

# Admin Responsibilities

Clarix is designed to be low-friction, but it is not ownerless. Clients still need clear responsibility for how shared product administration works across the web parts they deploy.

## What Clarix Handles for You

| Clarix-managed behavior | Why it helps |
| :--- | :--- |
| **Shared audit pattern** | Reduces inconsistency between products |
| **Hidden operational storage model** | Keeps diagnostic structures out of normal user paths |
| **Buffered and batched behavior** | Reduces unnecessary operational overhead |
| **Background cleanup** | Helps prevent avoidable storage growth problems |

## What Client Admins Still Need to Own

### Governance ownership

Someone still needs to own:

- the client’s support path
- escalation expectations
- retention expectations outside the product
- decisions about who can administer Clarix-enabled pages and solutions

### Review expectations

Client admins should know:

- which teams use Clarix web parts for operational review
- which events or behaviors require follow-up
- when product activity is enough for troubleshooting and when broader governance review is needed

### Evidence expectations

Product diagnostics are useful, but they are not automatically the same thing as a formal evidence archive. If the client needs longer-term or policy-controlled evidence retention, that remains a client governance responsibility.

## Best-Practice Ownership Model

| Role | Suggested ownership |
| :--- | :--- |
| **Platform admin** | Owns Clarix deployment and overall administration expectations |
| **Support owner** | Uses product activity records for troubleshooting and escalation |
| **Governance lead** | Decides how shared diagnostics fit into policy and evidence processes |
| **Business owner** | Uses product outputs in the context of the business workflow, not in isolation |

## Straight Recommendation

The best model is not to over-administer Clarix. Let the platform handle the shared operational mechanics, and keep client ownership focused on:

- governance
- support responsibility
- retention policy
- escalation paths

That is the cleanest split between product responsibility and client responsibility.
