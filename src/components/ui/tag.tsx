import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const tagVariants = cva(
  'w-fit inline-flex items-center justify-center whitespace-nowrap rounded-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 gap-2 font-semibold text-sm',
  {
    variants: {
      variant: {
        primary: 'bg-primary/80 text-primary-foreground dark:bg-primary/50',
        secondary:
          'bg-secondary/80 text-secondary-foreground dark:bg-secondary/50',
        tertiary: 'bg-primary/15 text-primary dark:brightness-125',
        quaternary: 'bg-secondary/15 text-secondary dark:brightness-125',
      },
      size: {
        default: 'px-3 py-1',
        sm: 'text-xs px-2 py-1 rounded-md',
        lg: 'text-base font-bold px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface TagProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof tagVariants> {
  asChild?: boolean
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span'
    return (
      <Comp
        ref={ref}
        className={cn(tagVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)
Tag.displayName = 'Tag'

export { Tag, tagVariants }
