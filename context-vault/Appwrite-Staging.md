# Appwrite staging and lead import

## Leads schema v5

Create a TablesDB database and a leads table in a BellBee-only staging project. Leave table permissions empty and test anonymous access separately before using real records. Provision these columns before running the import. Column names are case-sensitive. [Appwrite TablesDB](https://appwrite.io/docs/products/databases/tablesdb).

| Column | Type | Required |
| --- | --- | --- |
| $id | Built-in row ID using the original BellBee ID | Yes |
| createdAt | Datetime preserving the original intake timestamp | Yes |
| fullName | Varchar, 512 characters | Yes |
| email | Varchar, 512 characters | No |
| phone | String or bounded text, 256 characters | No |
| company | String or bounded text, 512 characters | No |
| services | String or bounded text, 2,048 characters | No |
| details, notes | Mediumtext | No |
| status | Enum with New, Contacted, In Discussion, Won, Lost | Yes |
| ownerId | Varchar, 36 characters, storing the Appwrite user ID | No |
| source | Varchar, 32 characters. Staff-created prospects use `manual`. | No |
| archived | Boolean. Missing and false values both mean active. | No |

Use a separate import key with scopes for reading and writing rows. [Appwrite server TablesDB API](https://appwrite.io/docs/references/cloud/server-nodejs/tablesDB).

For an existing v1 table, edit the email column and turn off Required with no default. Wait for the column to become available before deploying the new intake code. This allows phone-only rows while preserving email values already stored. [Appwrite table columns](https://appwrite.io/docs/products/databases/tablesdb/tables).

For an existing v2 table, add the optional ownerId column with no default before enabling the workspace update. Existing leads begin unassigned, and importing an existing lead does not change its owner.

For an existing v3 table, add the optional source column with no default before enabling manual prospects.

For an existing v4 table, add the optional archived column before rolling out Archive and Restore.

## Rehearse the import

Prepare a reviewed JSON array outside the repository using synthetic BellBee fixtures for the first rehearsal. A real migration uses a backed-up BellBee export after fixture classification. Keep IDs, notes and status as stored. The importer expects UTC ISO timestamps with milliseconds and requires a usable email field or a phone field. It clears the exact generated Meta Ads and Google Ads placeholder patterns and keeps actual email values. Previously imported v1 rows with placeholders are hidden as blank email in the CRM. Review those rows before applying a v2 import because the importer stops on existing rows with different values.

```sh
node scripts/import-crm-leads.ts /path/to/reviewed-bellbee-leads.json
```

The default dry run validates the entire file without sending requests. Fix validation errors in the reviewed copy before applying. To apply in staging, provide APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_DATABASE_ID, APPWRITE_LEADS_TABLE_ID and APPWRITE_IMPORT_KEY through the process environment or a private env file outside the repository.

```sh
node --env-file=/path/to/private-staging.env scripts/import-crm-leads.ts /path/to/reviewed-bellbee-leads.json --apply
```

The command only creates rows. A retry counts a matching row as already imported. A conflicting row with different values stops the run for reconciliation. Rows created earlier in a failed run remain in Appwrite. Retry with the same reviewed input after resolving the failure. Reconcile created plus matched totals against the dry-run count and check the expected row IDs in staging.

## Enable the runtime in staging

Set `CRM_LEAD_STORE=appwrite` on the BellBee staging server. Use the same endpoint, project, database and table IDs as the rehearsal. Supply `APPWRITE_INTAKE_KEY` with `rows.write` and a separate `APPWRITE_STAFF_KEY` with `rows.read` and `rows.write`. Appwrite keys authorize at the project level, so keep this project dedicated to BellBee CRM. Keep staging secrets in the process environment or a private env file outside the repository.

### Staff sign-in

Create a dedicated BellBee CRM staff team and assign each named staff member a role before testing. The existing team's ID can stay in `APPWRITE_CRM_TEAM_ID`. Set `APPWRITE_SESSION_KEY` to a separate key scoped to `sessions.write` and `CRM_PUBLIC_ORIGIN` to the exact HTTPS origin serving the CRM, without a trailing slash. The login, logout and lead mutations use it to verify browser POST origins. [Appwrite SSR login](https://appwrite.io/docs/products/auth/server-side-rendering), [Appwrite Teams](https://appwrite.io/docs/products/auth/teams).

Appwrite mode uses individual email/password accounts and a Secure, HTTP-only session cookie. The shared password applies to JSON mode only. The server checks team access on every protected request, and signing out revokes the Appwrite session. Keep the login accessible only within the staging environment during rehearsal. Before public rollout, rate-limit the login POST at the deployment edge because the session-creation API key bypasses Appwrite's request limits. [Appwrite rate limits](https://appwrite.io/docs/advanced/security/rate-limits).

| Appwrite membership role | CRM access |
| --- | --- |
| `owner` or `admin` | Read and edit all leads, assign owners, use bulk actions, archive, restore and export |
| `member` | Read the shared workspace, add prospects, and update status or notes on one assigned lead at a time |
| `viewer` | Read the shared workspace and lead notes |

The server reads the confirmed team membership on each CRM request. Pending invitations and memberships without a recognized role cannot open the CRM. With multiple recognized roles, the highest one applies. Before upgrading an existing staging team, explicitly set `admin` for any administrator who previously relied on membership alone. Verify role changes take effect on the next request, including for already signed-in users. The Appwrite team console manages these roles.

In the Inbox, an administrator can assign leads to confirmed administrators or members, or clear the assignment. Assigned to me uses the signed-in account and combines with other Inbox, Pipeline and administrator CSV filters. Member writes match both lead ID and owner ID in the Appwrite update request. Verify a member can change an assigned lead and is denied on an unassigned lead, and that only an administrator can export. [Appwrite filtered updates](https://appwrite.io/docs/products/databases/tablesdb/bulk-operations).

Administrators and members can use Add prospect to capture a name and either an email or a phone number. The record starts at New, is assigned to its creator, and appears under Manual Prospects. Repeating the same submission with the same details keeps one row. Manual records stay in the CRM and never trigger WordPress forwarding. This workflow requires named Appwrite staff access.

Administrators can archive or restore individual leads or a selected batch. The Archived leads view has its own Pipeline and CSV scope. Archived records retain their status, owner and notes. Overview stage totals count active leads and the intake chart retains archived submissions.

Open a lead's name in the Inbox or Pipeline to verify its record page. The Overview shows contact and enquiry details. Notes has a direct URL and stays selected after saving. Test the record as an administrator, its assigned member and a viewer. The link back preserves the originating list filters.

### Lead history

Create a private `lead_events` TablesDB table in the same database. Leave client permissions empty and add a key index on `leadId`.

| Column | Type | Required |
| --- | --- | --- |
| leadId | Varchar, 36 characters | Yes |
| actorId | Varchar, 36 characters | Yes |
| kind | Enum with status, notes, owner, archive, restore | Yes |
| value | Varchar, 36 characters | No |

Set `APPWRITE_LEAD_EVENTS_TABLE_ID` to the table ID to enable History. The existing staff key reads and writes events. The lead update and event creation commit together. History displays 50 events per page, with Older changes and Latest changes navigation. Successful saves record the action and actor, including repeat saves with the same value. Note content stays in the Notes tab. Older edits are not backfilled. [Appwrite transactions](https://appwrite.io/docs/products/databases/tablesdb/transactions).

In staging, verify status, notes, assignment, archiving and restoring. Try an assigned-member edit and a forbidden edit to another lead. Verify that a failed event write leaves the record unchanged.

### Website intake retries

Intake, inbox, pipeline, notes, bulk actions and exports use the same selected store. Appwrite errors do not fall back to JSON. Appwrite mode derives a row ID from the form submission ID and normalized enquiry fields. A repeat of that submission returns success without updating the row or forwarding it again. A new form submission ID or changed enquiry fields can create a new lead. Requests from older forms without an ID deduplicate only within the same five-minute bucket. [Appwrite row conflict codes](https://appwrite.io/docs/apis/response-codes).

Test a synthetic enquiry through the website, update its notes and status in the inbox, then repeat the original POST and verify that there is still one row with the staff edits. Archive it, confirm a retry leaves it archived, and restore it from Archived leads. Verify that CSV respects the active or archived view.

When WordPress is configured, the request that creates the Appwrite row attempts forwarding once. A forwarding failure is logged and the form keeps the successful intake result. If the server stops after Appwrite commits and before forwarding starts, a retry still finds the saved lead but does not resume forwarding. A durable outbox is planned for automation.

The Islamabad Meta Ads and Google Ads forms can save leads with only a WhatsApp number. For submissions without an email, staff work the enquiry from the CRM. These submissions bypass the legacy WordPress mutation, which requires an email. Verify the inbox and CSV show the phone and a blank email on a synthetic test.

Unset `CRM_LEAD_STORE` for JSON mode. That switch does not migrate rows between stores. Reconcile new rows before any future production rollback. Production cutover still requires live verification and a decision about keeping WordPress forwarding.
