import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta;
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {

  }
}

export const Checked: Story = {
  args: {
    checked: true
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  }
}
