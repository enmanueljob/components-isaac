// @flow
import React from "react"

import Loader from "."

export default {
  title: "Loader",
  component: Loader,
  parameters: {
    info: {
      inline: true
    }
  }
}

export const defaultLoader = () => <Loader loading />
