# Evidence methodology

The map is an implementation inventory, not a skills keyword list.

An entry qualifies when at least one of these exists:

1. A dependency, integration, or tool contract in a product codebase.
2. A deployment, test, monitoring, or review workflow.
3. A public repository or live artifact.
4. A verified operating workflow with a bounded product outcome.
5. A historical system documented in a migration or architecture record.

## Lifecycle labels

| Label | Meaning |
| --- | --- |
| Shipped | Used in a public product or artifact. |
| Active system | Supports a live product or operating workflow. |
| Prototype | Implemented in a bounded experiment or proof of concept. |
| Historical | Previously operated, evaluated, or retained for reference. |

## Publication boundary

The public map names technologies and product outcomes. It omits credentials, private topology, customer data, employer IP, internal system identifiers, and proprietary implementation details.

The structured version is available at `/stack.json`; the AI-readable summary is available at `/llms.txt`.
