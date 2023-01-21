import React from 'react'
import styled from 'styled-components'
import iconMenu from '../../../assets/images/ecommerce/icon-menu.svg'
import iconUser from '../../../assets/images/ecommerce/image-avatar.png'
import iconCard from '../../../assets/images/ecommerce/icon-cart.svg'

import './HeaderEccomerce.css'
import { NavItem } from './NavItem'
import MediaQuery from 'react-responsive'

// Libreria useMediaQuery
/* const isDesktopOrLaptop = useMediaQuery({
  query: '(min-width: 1224px)'
}) */

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #00000033;
  @media (min-width: 768px) {
      padding: .5rem;
  }
`
const DivisorFlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;
`
const ButtonMenu = styled.button`
  background-color: white;
  padding: .4rem 0 0 0;
  @media (min-width: 768px) {
      display: none;
  }
`
const Logo = styled.h2`
  color: black;
  background-color: white;
  padding: 1rem 0;
  @media (min-width: 768px) {
      padding: 1rem 2rem 1rem 0;
  }
`
const ImgHeader = styled.img`
  width: 1.8rem;
`
const CardLength = styled.span`
  position: absolute;
  color: white;
  top: -.4rem;
  right: .1rem;
  background-color: rgb(255, 125, 26);
  padding: 0rem .4rem;
  border-radius: 2rem;
  font-size: 10px;
`

export const HeaderEccomerce = ({ modal, setModal, menuToggle, setMenuToggle, arrayBuy }) => {
  const handleClick = () => {
    setModal(!modal)
  }
  const handleToggle = () => {
    setMenuToggle(!menuToggle)
  }

  return (
    <Header>
      <DivisorFlexRow>
        <ButtonMenu onClick={handleToggle}>
          <img src={iconMenu} alt='Icono menu' />
        </ButtonMenu>
        <Logo>sneakers</Logo>
        <div>
          <MediaQuery minWidth={768}>
            <NavItem />
          </MediaQuery>
        </div>
      </DivisorFlexRow>
      <DivisorFlexRow>
        <button onClick={handleClick} className='btn-header' type='button'>
          <ImgHeader src={iconCard} alt='Icono cart' />
          <CardLength>{arrayBuy.map(e => e.count)}</CardLength>
        </button>
        <button className='btn-header' type='button'>
          <ImgHeader src={iconUser} alt='Icono user' />
        </button>
      </DivisorFlexRow>
    </Header>
  )
}
