import { Meta, StoryObj} from "@storybook/react"
import { Button, IButtonProps } from './Button'

export default {
    title: 'components/Button',
    component: Button,
    args: {
        children: 'Creating a new knowledge',
    },
    argTypes: {}
} as Meta<IButtonProps>

export const Default: StoryObj<IButtonProps> = {}