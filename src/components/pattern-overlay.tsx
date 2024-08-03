import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export function PatternOverlay({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        className,
        'pattern absolute bottom-0 left-0 right-0 top-0 opacity-10',
      )}
      {...props}
    />
  )
}
