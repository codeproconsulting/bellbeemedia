# BellBee Media CRM implementation plan

## Current flow

BellBee runs on Remix 3. The URL contract is in app/routes.ts and handlers are in app/actions/controller.tsx. Staff sign in at /admin/login and open the inbox at /admin/leads. The inbox shows 25 matching leads per page with notes, status, bulk actions and CSV. Needs a reply applies the New status filter. The pipeline at /admin/leads?view=pipeline shares the filters and links to the matching inbox page. The Overview at /admin/leads?view=overview shows workspace-wide stage counts and daily intake across 14 Pakistan calendar dates, including today. Stages are New, Contacted, In Discussion, Won and Lost.

Proposal, contact and landing-page handlers share submitProposal in app/data/wordpress.ts. It saves to JSON by default or to Appwrite when enabled, then forwards eligible enquiries to WordPress if configured. The Islamabad ads teardown forms accept phone-only enquiries. The importer clears known legacy placeholders. Source filtering currently matches service text. Before migration, inventory deployed form endpoints and forwarding effects. Identify real BellBee records and scaffold fixtures privately.

## Favif patterns to reuse

| Reference in Favif checkout | BellBee equivalent |
| --- | --- |
| app/routes/dashboard._index.jsx and docs/CRM-DESIGN.md | Compact navigation, overview metrics, shared filters, pipeline and URL-driven record tabs |
| docs/CRM-SETUP.md and app/services/crm/leads.server.js | Confirmed capture, idempotent retries, phone-first enquiries, ownership and reversible archive |
| app/routes/dashboard.manage.jsx and docs/CRM-GROWTH.md | Manual prospects, outreach history and suppression, team roles, filtered CSV and signed webhooks |
| app/routes/dashboard.operations.jsx and docs/CRM-OPERATIONS-RELEASE.md | Follow-ups and reminders, manual call sessions and reservations, client accounts, opportunities, invoices and payments |
| scripts/check-crm*.mjs | Adapt fixture-driven checks for access, writes, retries, filters, operations and exports |

Port the behavior from Remix v2 and Supabase into BellBee's Remix 3 controllers and Appwrite. Keep the current /admin URLs for the initial release.

## Appwrite design

Use a BellBee Appwrite project per environment, TablesDB for records, Account sessions for identity and a dedicated CRM staff team. Map Appwrite user IDs to ownership. Require active membership for reads and enforce role and ownership before each mutation. Administrators manage assignments, team, exports, automation and billing. Members read the shared inbox, create prospects and edit assigned leads. Viewers read shared operational records.

Use request-scoped Appwrite sessions for staff access where possible. Server API keys bypass table permissions, so authorize privileged operations in Remix and give the public intake handler a separate write-only credential. Keep all CRM tables private. [Appwrite Node.js setup](https://appwrite.io/docs/quick-starts/node), [Appwrite permissions](https://appwrite.io/docs/advanced/security/permissions).

| Tables | Data and constraints |
| --- | --- |
| leads | Original ID and timestamps, contact fields, service, source, landing path, attribution, stage, owner, archive and contact suppression. Unique submission key. Index stage, owner and creation time. |
| lead_notes, lead_events, follow_ups, outreach | Lead ID, actor and timestamps on child rows. Index lead and time, and assignee and due date. Commit activity with the associated mutation. |
| clients, opportunities, call_sessions, call_claims, notifications | Repeat-safe lead conversion, opportunity stage and currency, unique open session and expiring claims, deduplicated reminders. |
| billing_profiles, invoices, invoice_lines, payments | Administrator-only billing, integer minor units, draft version, unique number, immutable issued snapshot and append-only payment/reversal history. |
| webhook_destinations, webhook_deliveries | Authorized destinations, signed payloads, scheduled retries and unique event/destination pair. Store signing secrets server-side. |

## Delivery phases and acceptance

1. **Workspace shell.** Inbox and Pipeline use existing BellBee records and filters. Verify authenticated navigation, filtered exports, empty stages and links to existing record actions. First slice implemented in this checkout.
2. **Appwrite foundation and intake.** Add a versioned leads schema, server persistence, named staff sessions and permission checks in staging. Validate each form variant, support phone-only forms without synthetic emails, and report successful intake after a confirmed durable write. Inventory and preserve required WordPress forwarding. Verify retries cannot overwrite staff edits or duplicate forwarding. Build a repeatable dry-run import preserving BellBee IDs, timestamps, stages and notes. Classify fixtures and reconcile imported counts before switching traffic. Back up the BellBee store and reconcile the final delta with intake briefly paused. If rollback follows new Appwrite writes, reconcile those records into the restored system before reopening intake.
3. **Lead workspace.** Add overview counts, intake chart, pagination, Needs a reply, Assigned to me, manual prospects and assignment. Add record tabs, history, reversible archive and formula-safe, filtered admin CSV. Verify filters across pages, aggregate counts, ownership and role permissions.
4. **Follow-ups and outreach.** Add due-date queues, in-app reminders, notes, outreach outcomes, contact suppression and manual call sessions with expiring claims. Preserve explicit time zones for timed tasks. Verify idempotency, concurrent claims, suppression and atomic outcome/task writes.
5. **Clients and billing.** Add clients, opportunities, draft invoices, approved seller identity, issuance, private PDF downloads and manual payment/reversal ledger. Verify exact arithmetic per currency, draft version conflicts, concurrent numbering and immutable issue snapshots.
6. **Automation and rollout.** Add signed webhook outbox, approved BellBee destinations, bounded retries and delivery history. Verify dashboard keyboard/mobile behavior, staging intake-to-operations, access denial, retry handling, backup and rollback before production rollout.

Phase 2 includes the [staging schema, create-only importer, opt-in runtime, named administrator sessions and retry-safe Appwrite intake](Appwrite-Staging.md). Local tests cover route wiring, concurrent retries, preservation of staff edits, forwarding after persistence, phone-only enquiries, staff actions and team access. JSON remains the default. Live staging verification and cutover are pending.

Phase 3 has an Overview, paginated Inbox, Needs a reply, lead assignment to confirmed Appwrite staff, Assigned to me and one spreadsheet-safe server export for filtered and selected leads. Administrators can export, assign and delete, members can change status and notes on their assigned leads, and viewers have read-only access. The application still reads the full lead list before applying filters and slicing pages. TablesDB page queries, manual prospects and lead detail workflows remain open.
