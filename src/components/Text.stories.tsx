import { Meta, StoryObj} from "@storybook/react"
import { Text, ITextProps } from './Text'

export default {
    title: 'components/Text',
    component: Text,
    args: {
        children: 'I am handsome',
        size: 'md'
    },
    argTypes: {
        size:{
            options: ['sm', 'md', 'lg'],
            controls: {
                type: 'inline-radius'
            }
        }
    }
} as Meta<ITextProps>

export const Default: StoryObj = {}
export const Small: StoryObj<ITextProps> = {
args: {
    children: 'I gonna learn everything about it',
    size: 'sm'
},


}
export const Large: StoryObj<ITextProps> = {
    args: {
        children: 'this is getting easy',
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<ITextProps> = {
    args: {
        asChild: true,
        children: (
            <p> trying to learn this shit</p>
        ),
        size: 'sm'
    },
    argTypes: {
        children: {
            table: {
                disable: true,
              },
        },
        asChild: {
            table: {
                disable: true,
              },
        },
    },
}