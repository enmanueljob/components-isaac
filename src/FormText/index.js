// @flow
import React from "react"
import styled from "styled-components"
import classnames from "classnames"

const StyledText = styled.span`
  &.normal {
    color: black;
  }

  &.red {
    color: red;
  }
`

type Props = {
  color: string,
  className?: string,
  children: any
}

const FormText = ({ children, color, className }: Props) => {
  const textClass = classnames(
    {
      [`${color}`]: color
    },
    className
  )

  return <StyledText className={textClass}>{children}</StyledText>
}

export default FormText
