'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface CheckboxRootProps extends React.ComponentPropsWithoutRef<'div'> {}

const CheckboxRoot = React.forwardRef<HTMLDivElement, CheckboxRootProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  ),
)
CheckboxRoot.displayName = 'CheckboxRoot'

interface CheckboxMarkProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

const CheckboxMark = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxMarkProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer size-5 shrink-0 rounded border-2 border-foreground/50 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check
        className='size-4'
        strokeWidth={3}
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
CheckboxMark.displayName = CheckboxPrimitive.Root.displayName

interface CheckboxLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

const CheckboxLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  CheckboxLabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-40',
      className,
    )}
    {...props}
  />
))
CheckboxLabel.displayName = LabelPrimitive.Root.displayName

export const Checkbox = {
  Root: CheckboxRoot,
  Mark: CheckboxMark,
  Label: CheckboxLabel,
}
