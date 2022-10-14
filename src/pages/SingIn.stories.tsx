import { Meta, StoryObj} from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest"
import { rest } from "msw"
import { SingIn } from './SingIn';

export default {
    title: 'pages/SingIn',
    component: SingIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post("/section", (req, res, ctx) => {
                    return res(ctx.json({
                        message: "Valid section requested"
                    }))
                })
            ],
        }
    },
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement } ) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText("exemplo@gmail.com"), "eduardobarroso186@gmail.com")
        userEvent.type(canvas.getByPlaceholderText("******"), "123123")

        userEvent.click(canvas.getByRole("button"))

        await waitFor(() => {
            return  expect(canvas.getByText("Login realizado!")).toBeInTheDocument()
        })
    }
}
