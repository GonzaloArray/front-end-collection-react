import React from 'react'
import styled from 'styled-components'
import LogoFooter from '../../../assets/images/kfcchallengue/kfcfooter.png'
import { CopyrightDev } from './CopyrightDev'
import { NavFooter } from './NavFooter'
const DivisionFooterMenu = styled.section`
  height: 422px;
  background: #202329;
  position: relative;
  display: flex;
  align-items: center;
`
const ImgFooter = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
`

export const MenuFooter = () => {
  return (
    <DivisionFooterMenu>
      <ImgFooter src={LogoFooter} alt='Logo Footer' />
      <div className='container'>
        <NavFooter />
        <CopyrightDev />
      </div>
    </DivisionFooterMenu>
  )
}
