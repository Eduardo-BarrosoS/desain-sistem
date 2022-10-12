import { Meta, StoryObj} from "@storybook/react"
import { Heading, IHeadingProps } from './Heading'

export default {
    title: 'components/Heading',
    component: Heading,
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
} as Meta<IHeadingProps>

export const Default: StoryObj = {}
export const Small: StoryObj<IHeadingProps> = {
args: {
    children: 'I gonna learn everything about it',
    size: 'sm'
},


}
export const Large: StoryObj<IHeadingProps> = {
    args: {
        children: 'this is getting easy',
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<IHeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1> trying to learn this shit</h1>
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