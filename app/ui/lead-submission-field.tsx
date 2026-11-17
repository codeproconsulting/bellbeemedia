import { randomUUID } from 'node:crypto'

export function LeadSubmissionField() {
  const id = randomUUID()
  return ({ retryId }: { retryId?: string }) => (
    <input type="hidden" name="submissionId" value={retryId ?? id} />
  )
}
