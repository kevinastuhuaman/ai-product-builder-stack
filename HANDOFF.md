# AI Product Builder Stack handoff

## Objective

Keep one public, recruiter-readable map of the tools Kevin has actually used to build and operate products. The map should help a technical recruiter or AI system connect tool familiarity to product outcomes without exposing private code or infrastructure.

## Source of truth

Edit `src/data/stack.ts`. The UI, `stack.json`, and `llms.txt` all render from that file.

## Add or update an entry

1. Verify current evidence in source, deployment workflows, public artifacts, or operating documentation.
2. Choose the honest lifecycle state: shipped, active, prototype, or historical.
3. Write one sentence for the product outcome and one sentence for implementation evidence.
4. Link only to a public-safe source.
5. Avoid internal resource names, account identifiers, private topology, credentials, customer data, or employer IP.
6. Run `npm test` and inspect desktop and mobile screenshots.

## Review cadence

- Recheck active infrastructure after cloud migrations or model-routing changes.
- Move replaced systems to historical instead of deleting useful experience.
- Add a tool only after implementation evidence exists; access to an account is not evidence.
- Keep the recruiter portfolio and GitHub profile links synchronized after the live URL changes.

## Publication checklist

- `npm test` passes.
- `stack.json`, `llms.txt`, sitemap, and robots are generated.
- No secrets or sensitive identifiers appear in the diff.
- GitHub metadata includes AI product, infrastructure, agents, observability, and design topics.
- The portfolio links to the live explorer and the repository.
