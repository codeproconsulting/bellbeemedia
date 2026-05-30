import { css, type RemixNode } from 'remix/ui'

import { routes } from '../routes.ts'

export interface DocumentProps {
  children?: RemixNode
  head?: RemixNode
  title?: string
  description?: string
}

const DEFAULT_TITLE = readAppDisplayName('BellBee%20Media')

export function Document() {
  return ({ children, head, title = DEFAULT_TITLE, description }: DocumentProps) => (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {description && <meta name="description" content={description} />}
        
        {/* Preload Conthrax font weights to optimize performance & eliminate layout shift */}
        <link rel="preload" href="/conthrax/Fontspring-DEMO-conthrax-rg.otf" as="font" type="font/otf" crossorigin="anonymous" />
        <link rel="preload" href="/conthrax/Fontspring-DEMO-conthrax-bd.otf" as="font" type="font/otf" crossorigin="anonymous" />

        {/* Load Google Fonts (Outfit & Inter) for clean, premium body and heading text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <title>{title}</title>
        {head}
        <link rel="stylesheet" href="/tailwind.css" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </head>
      <body mix={css({ margin: 0 })}>
        {children}
        <script type="module" src={routes.assets.href({ path: 'app/assets/entry.ts' })}></script>
      </body>
    </html>
  )
}

function readAppDisplayName(value: string): string {
  return value.startsWith('%%') ? 'Remix App' : decodeURIComponent(value)
}
