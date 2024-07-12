'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface SliderWrapperProps extends React.ComponentPropsWithoutRef<'div'> {}

const SliderWrapper = React.forwardRef<HTMLDivElement, SliderWrapperProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex w-full items-center gap-2', className)}
      {...props}
    />
  ),
)
SliderWrapper.displayName = 'SliderWrapper'

interface SliderSelectorProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

const SliderSelector = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderSelectorProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center data-[disabled]:opacity-40',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-foreground/40'>
      <SliderPrimitive.Range className='absolute h-full bg-primary' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block size-4 rounded-full border-4 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none' />
  </SliderPrimitive.Root>
))
SliderSelector.displayName = SliderPrimitive.Root.displayName

export const Slider = { Wrapper: SliderWrapper, Selector: SliderSelector }
