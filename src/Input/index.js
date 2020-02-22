// @flow
import React from "react"

import BaseInput from "../BaseInput"
import Label from "../Label"
// @types
import type { BaseInputProps } from "../BaseInput"

type Props = {
  label?: string
} & BaseInputProps

const Input = ({ name, error, type, label }: Props) => (
  <BaseInput
    name={name}
    error={error}
    type={type}
    header={label && <Label htmlFor={name}>{label}</Label>}
  />
)

export default Input
