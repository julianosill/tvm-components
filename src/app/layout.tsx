import './globals.css'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import { raleway } from '@/lib/fonts'

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
        <ThemeProvider
          attribute='class'
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
