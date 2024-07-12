'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('flex items-center gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

interface RadioGroupWrapperProps
  extends React.ComponentPropsWithoutRef<'div'> {}
const RadioGroupWrapper = React.forwardRef<
  HTMLDivElement,
  RadioGroupWrapperProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-2', className)}
    {...props}
  />
))
RadioGroupWrapper.displayName = 'RadioGroupWrapper'

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {}
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'peer aspect-square size-5 rounded-full border-2 border-foreground/50 text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:border-primary',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
        <Circle className='size-2.5 fill-current text-current' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

interface RadioGroupLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}
const RadioGroupLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  RadioGroupLabelProps
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
RadioGroupLabel.displayName = LabelPrimitive.Root.displayName

export const Radio = {
  Group: RadioGroup,
  Wrapper: RadioGroupWrapper,
  Item: RadioGroupItem,
  Label: RadioGroupLabel,
}
