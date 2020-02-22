// @flow
import React from "react"
import { withTheme } from "styled-components"
import VendorLoader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

type Props = {
  type?: string,
  size?: number,
  loading: boolean,
  theme: { [x: string]: any },
  [x: string]: any
}

const Loader = ({ type, size, loading, theme }: Props) => (
  <VendorLoader
    color={theme.color.gray}
    type={type}
    height={size}
    width={size}
    visible={loading}
  />
)

Loader.defaultProps = {
  loading: true,
  type: "Oval",
  size: 50
}

export default withTheme(Loader)
