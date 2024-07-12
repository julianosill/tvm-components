'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { MasterIcon } from '../icons/master-icon'

interface AvatarRootProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  isMaster?: boolean
}

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarRootProps
>(({ isMaster, className, children, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex size-10 shrink-0 justify-center overflow-hidden rounded-full',
      className,
    )}
    {...props}
  >
    {isMaster && (
      <MasterIcon className='absolute bottom-0 size-5 fill-secondary brightness-150' />
    )}
    {children}
  </AvatarPrimitive.Root>
))
AvatarRoot.displayName = AvatarPrimitive.Root.displayName

interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {}

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-secondary/20 pt-0.5 font-semibold text-secondary',
      className,
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
}
