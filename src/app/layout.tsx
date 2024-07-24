import './globals.css'

import type { Metadata } from 'next'

import { raleway } from '@/lib/fonts'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'TVM Components',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='pt-BR'
      suppressHydrationWarning
      className={`${raleway.variable} antialiased`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
