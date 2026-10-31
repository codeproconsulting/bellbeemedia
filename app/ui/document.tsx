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

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GCXZ19KB1R"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-GCXZ19KB1R');`}
        </script>

        {/* Load Google Fonts (Plus Jakarta Sans, Inter & Space Grotesk) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;800&family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        <title>{title}</title>
        {head}
        <link rel="stylesheet" href="/tailwind.css?v=30" />
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css" />
      </head>
      <body mix={css({ margin: 0 })}>
        {children}
        <script type="module" src={`${routes.assets.href({ path: 'app/assets/entry.ts' })}?v=30`}></script>
        <script type="module" src={`${routes.assets.href({ path: 'app/assets/mobile-nav.ts' })}?v=30`}></script>
        <script type="module" src={`${routes.assets.href({ path: 'app/assets/animations.ts' })}?v=30`}></script>
      </body>
    </html>
  )
}

function readAppDisplayName(value: string): string {
  return value.startsWith('%%') ? 'Remix App' : decodeURIComponent(value)
}
