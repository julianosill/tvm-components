/* eslint-disable import/no-extraneous-dependencies */
import { Meta, type StoryObj } from '@storybook/react'

import { Button, ButtonProps as ComponentProps } from '../ui/button'

export default {
  title: 'UI / Button',
  component: Button,
  tags: ['UI', 'Design System', 'autodocs'],
  args: {
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'outline',
        'muted',
        'ghost',
        'destructive',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['default', 'sm', 'lg', 'icon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
  },
} as Meta<ComponentProps>

export const Default: StoryObj<ComponentProps> = {
  args: { children: 'Default' },
}

export const Secondary: StoryObj<ComponentProps> = {
  args: { variant: 'secondary', children: 'Secondary' },
}
