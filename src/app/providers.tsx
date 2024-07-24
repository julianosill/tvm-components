import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      disableTransitionOnChange
    >
      <ClerkProvider>{children}</ClerkProvider>
    </ThemeProvider>
  )
}
