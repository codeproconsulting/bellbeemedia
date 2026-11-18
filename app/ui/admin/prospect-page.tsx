import type { Handle } from 'remix/ui'
import { Document } from '../document.tsx'

const fields = [
  { name: 'fullName', label: 'Name', type: 'text', max: 512 },
  { name: 'email', label: 'Email', type: 'email', max: 512 },
  { name: 'phone', label: 'Phone or WhatsApp', type: 'tel', max: 256 },
  { name: 'company', label: 'Company', type: 'text', max: 512 },
  { name: 'services', label: 'Service of interest', type: 'text', max: 2048 },
] as const

export function ProspectPage(handle: Handle<{
  submissionId: string
  values?: Record<string, string>
  error?: string
}>) {
  const { submissionId, values, error } = handle.props
  const fieldClass = 'w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground'
  return () => (
    <Document title="Add prospect | BellBee Media CRM" privatePage>
      <main class="min-h-screen bg-surface-light px-4 py-10">
        <div class="mx-auto max-w-2xl">
          <a href="/admin/leads" class="text-sm font-semibold text-foreground underline">Back to inbox</a>
          <h1 class="mt-4 text-3xl font-black text-foreground">Add prospect</h1>
          <p id="prospect-contact-hint" class="mt-2 text-sm text-muted">Enter an email address or a phone number.</p>
          {error && <p role="alert" class="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          <form method="POST" action="/admin/leads/new" class="mt-6 grid gap-4 rounded-2xl border border-border bg-white p-5 sm:grid-cols-2 sm:p-6">
            <input type="hidden" name="submissionId" value={submissionId} />
            {fields.map((field) => (
              <label key={field.name} class="block space-y-1">
                <span class="text-sm font-semibold text-foreground">{field.label}</span>
                <input type={field.type} list={undefined} name={field.name} value={values?.[field.name]} maxLength={field.max}
                  required={field.name === 'fullName'}
                  aria-describedby={field.name === 'email' || field.name === 'phone' ? 'prospect-contact-hint' : undefined}
                  class={fieldClass} />
              </label>
            ))}
            <label class="block space-y-1 sm:col-span-2">
              <span class="text-sm font-semibold text-foreground">Prospect background</span>
              <textarea name="details" rows={4} maxLength={65535} class={fieldClass} value={values?.details} />
            </label>
            <div class="sm:col-span-2">
              <button type="submit" class="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white">Save prospect</button>
            </div>
          </form>
        </div>
      </main>
    </Document>
  )
}
