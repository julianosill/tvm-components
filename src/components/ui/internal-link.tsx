import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type InternalLinkProps = LinkProps & Omit<ComponentProps<'a'>, 'href'>

export function InternalLink({
  ref,
  className,
  children,
  ...props
}: InternalLinkProps) {
  const baseClasses =
    'font-medium text-primary underline-offset-2 ring-offset-background transition-colors rounded-sm'
  const hoverClasses = 'hover:text-primary-hard hover:underline'
  const focusClasses =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4'

  return (
    <Link
      legacyBehavior
      {...props}
    >
      <a
        ref={ref}
        className={cn(baseClasses, hoverClasses, focusClasses, className)}
      >
        {children}
      </a>
    </Link>
  )
}
