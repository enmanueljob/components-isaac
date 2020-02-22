// @flow
import React from "react"

import PasswordField from "."

export default {
  title: "PasswordField",
  component: PasswordField,
  parameters: {
    info: {
      inline: true
    }
  }
}

export const defaultPasswordField = () => <PasswordField name="password" />

export const withLabel = () => (
  <PasswordField name="password" label="Contraseña" />
)

export const withShowPassword = () => (
  <PasswordField name="password" label="Contraseña" showPassword />
)

export const invalidPassword = () => (
  <PasswordField
    name="password"
    label="Contraseña"
    showPassword
    error="Requerido"
  />
)
