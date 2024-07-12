/* eslint-disable import/no-extraneous-dependencies */
import { Meta, type StoryObj } from '@storybook/react'

import { Tag, TagProps as ComponentProps } from '../ui/tag'

export default {
  title: 'UI / Tag',
  component: Tag,
  tags: ['UI', 'Design System', 'autodocs'],
  args: {
    variant: 'primary',
    size: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['default', 'sm', 'lg'],
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
