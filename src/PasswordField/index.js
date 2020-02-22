// @flow
import React, { useState } from "react"
import styled from "styled-components"

import BaseInput from "../BaseInput"
import Label from "../Label"
import type { BaseInputProps } from "../BaseInput"

type Props = {
  label?: string,
  showPassword?: boolean
} & BaseInputProps

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const PasswordField = ({ showPassword, label, error, name }: Props) => {
  const [showPwd, setShowPwd] = useState(false)

  const inputType = showPwd ? "text" : "password"

  const Header = () => {
    return (
      <WrapperHeader>
        {label && <Label htmlFor={name}>{label}</Label>}
        {showPassword && (
          <button onClick={() => setShowPwd(!showPwd)}>
            {showPwd ? "Ocultar" : "Mostrar"}
          </button>
        )}
      </WrapperHeader>
    )
  }

  return (
    <BaseInput name={name} error={error} type={inputType} header={<Header />} />
  )
}

PasswordField.defaultProps = {
  showPassword: false
}

export default PasswordField
