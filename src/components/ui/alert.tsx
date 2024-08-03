import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const alertVariants = cva('w-full rounded-lg border border-slate-200 p-4', {
  variants: {
    variant: {
      default: 'bg-white text-slate-950',
      error: 'border-red-500/50 text-red-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const AlertRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role='alert'
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
AlertRoot.displayName = 'Alert'

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}
const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none', className)}
      {...props}
    >
      {children}
    </h5>
  ),
)
AlertTitle.displayName = 'AlertTitle'

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export const Alert = {
  Root: AlertRoot,
  Title: AlertTitle,
  Description: AlertDescription,
}
