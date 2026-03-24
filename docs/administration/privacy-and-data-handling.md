---
hide:
  - toc
---

# Privacy and Data Handling

Clarix is designed around a privacy-first handling model for shared audit and telemetry behavior. The client-facing principle is simple: keep useful operational context where it belongs, minimize what leaves the tenant, and avoid exposing personally identifiable information casually.

## Core Client Expectation

Clients should expect Clarix to be useful for support and governance without treating sensitive operational data casually.

## What This Means in Practice

| Principle | What clients should expect |
| :--- | :--- |
| **Tenant-respectful handling** | Operational detail is intended to stay in the client’s environment where possible |
| **Privacy minimization** | Sensitive fields should be reduced, hashed, or redacted before external transmission |
| **Need-to-know design** | Only the information needed for support, health, or product operations should be sent outward |
| **Consistency across products** | Clarix web parts should not each invent their own privacy behavior |

## Local and External Handling

### Inside the client environment

Clarix keeps richer operational context available where it helps support and governance inside the tenant. This is what allows product support and administrators to understand what happened in a real workflow.

### Outside the client environment

When external telemetry or vendor-side processing is involved, privacy-sensitive fields should not be transmitted in raw form.

Examples of the intended pattern include:

- replacing direct user identifiers with non-reversible values where appropriate
- redacting site-specific or asset-specific identifiers when they are not required externally
- sending only the minimum operational detail needed for product support or health analysis

## Why This Approach Is Better

The wrong model is either:

- collecting too little information to support the product properly, or
- collecting too much detailed information externally without restraint

Clarix is designed to sit in the middle:

- enough fidelity to support the client experience
- enough minimization to respect privacy and sovereignty expectations

## What Clients Should Ask Themselves

1. Do we understand which activity stays inside the tenant?
2. Do we understand that external product telemetry is expected to minimize sensitive detail?
3. Do we have internal retention or governance requirements that go beyond product diagnostics?

If the answer to the third question is yes, the client’s own governance policy should remain the source of truth. Clarix should support that policy, not replace it.
