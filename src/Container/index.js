import React, { useState } from "react"
import Sidebar from "react-sidebar"
import styled, { withTheme } from "styled-components"
import classnames from "classnames"

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`

const StyledLi = styled.li`
  list-style: none;
  width: 200px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background: #7cca98;
  }

  & a {
    text-decoration: none;
    color: white;
    padding: 16px;
    display: block;
  }
`

const MenuItem = ({ children, tag, active, ...rest }) => {
  const linkClass = classnames({ active })
  const Tag = tag || "a"

  return (
    <StyledLi className={linkClass}>
      <Tag {...rest}>{children}</Tag>
    </StyledLi>
  )
}

const Container = ({ children, theme, sidebar }) => {
  const [sidebarOpen, onSetSidebarOpen] = useState(false)

  return (
    <Sidebar
      sidebar={sidebar}
      open={sidebarOpen}
      onSetOpen={open => onSetSidebarOpen(open)}
      styles={{ sidebar: { background: theme.color.green } }}
    >
      {children({ openSidebar: () => onSetSidebarOpen(true) })}
    </Sidebar>
  )
}

Container.SidebarMenu = StyledUl
Container.SidebarMenuItem = MenuItem

export default withTheme(Container)
