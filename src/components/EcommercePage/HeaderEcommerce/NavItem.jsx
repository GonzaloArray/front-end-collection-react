import React from 'react'
import styled from 'styled-components'
import { menu } from '../../../Data/Menu'

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
`
const Item = styled.a`
  color: #00000062;
`
export const NavItem = () => {
  return (
    <Nav>
      {
        menu.map(e => (
          <Item key={e.id}>{e.name}</Item>
        ))
      }
    </Nav>
  )
}
