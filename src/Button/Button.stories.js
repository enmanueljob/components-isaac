// @flow
import React from "react"
import { action } from "@storybook/addon-actions"

import Button from "."

export default {
  title: "Button",
  component: Button,
  parameters: {
    info: {
      inline: true
    }
  }
}

export const defaultButton = () => (
  <Button onClick={action("button-click")}>Click aquí</Button>
)

export const mediumButton = () => (
  <Button onClick={action("button-click")} size="medium">
    Click aquí
  </Button>
)


