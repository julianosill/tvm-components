import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-fit inline-flex items-center justify-center whitespace-nowrap rounded-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 gap-2',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/80 shadow-md',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md',
        outline:
          'border border-primary text-primary hover:text-primary-foreground hover:bg-primary/80 hover:border-primary/80 shadow-md',
        muted:
          'bg-foreground/10 text-foreground/90 hover:bg-foreground/20 shadow-md',
        ghost: 'text-foreground/90 hover:bg-foreground/10',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/80',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-7 text-sm px-2 rounded-md',
        lg: 'h-16 text-xl gap-4 px-6',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
