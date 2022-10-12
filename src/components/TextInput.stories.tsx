import { Meta, StoryObj} from "@storybook/react"
import { Envelope } from "phosphor-react"
import { TextInput, ITextInputInputProps, ITextInputRootProps,  } from './TextInput'

export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>,
                <TextInput.Input type="email" placeholder="type your email address" /> 
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
              },
        },
    }
} as Meta<ITextInputInputProps>

export const Default: StoryObj<ITextInputRootProps> = {}
export const WithoutIcon: StoryObj<ITextInputRootProps> = {
    args: {
        children: [
            <TextInput.Input type="email" placeholder="type your email address" /> 
        ]
    }
}