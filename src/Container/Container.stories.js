import React from "react"

import Container from "."
import Button from "../Button"

export default {
  title: "Container",
  component: Container,
  parameters: {
    info: {
      inline: true
    }
  }
}

export const defaultContainer = () => (
  <Container
    sidebar={
      <nav>
        <Container.SidebarMenu>
          <Container.SidebarMenuItem href="/login">
            Iniciar Sesión
          </Container.SidebarMenuItem>
          <Container.SidebarMenuItem href="/signup" active>
            Registrarse
          </Container.SidebarMenuItem>
        </Container.SidebarMenu>
      </nav>
    }
  >
    {({ openSidebar }) => <Button onClick={openSidebar}>Open sidebar</Button>}
  </Container>
)
