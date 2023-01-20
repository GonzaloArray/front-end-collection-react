import React from 'react'
import styled from 'styled-components'
import IconoClose from '../../../assets/images/ecommerce/icon-close.svg'
import { menu } from '../../../Data/Menu'

const ModalMenu = styled.aside`
  position: fixed;
  z-index: 1;
  inset: 0;
  @media (min-width: 768px) {
    display: none;
  }
`
const DivMenu = styled.div`
  z-index: 22;
  background-color: white;
  width: 65%;
  position: absolute;
  inset: 0;
`
const DivToggle = styled.div`
  z-index: 22;
  background-color: #0000005f;
  position: fixed;
  left: 65%;
  right: 0;
  top: 0;
  bottom: 0;

`
const ButtonClose = styled.button`
  color: black;
  background-color: transparent;
  padding: 1.5rem 1rem;
`
const MenuItem = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`
const Item = styled.a`
  color: black;
`

export const MenuToggle = ({ menuToggle, setMenuToggle }) => {
  return (
    <ModalMenu>
      <DivMenu>
        <ButtonClose onClick={() => setMenuToggle(!menuToggle)}>
          <img src={IconoClose} alt='Icono Close' />
        </ButtonClose>
        <MenuItem>
          {
            menu.map(e => (
              <Item key={e.id}>{e.name}</Item>
            ))
          }
        </MenuItem>
      </DivMenu>
      <DivToggle onClick={() => setMenuToggle(!menuToggle)} />
    </ModalMenu>
  )
}
