import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const cardVariants = cva('rounded-2xl p-4 w-full', {
  variants: {
    variant: {
      default: 'bg-background shadow-xl',
      outline: 'border',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface CardProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof cardVariants> {}

function CardWrapper({ className, variant, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
}

interface CardTitleProps extends React.ComponentProps<'h3'> {}

function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn('text-xl font-bold', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export const Card = { Wrapper: CardWrapper, Title: CardTitle }
