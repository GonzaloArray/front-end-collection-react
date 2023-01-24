import React from 'react'
import styled from 'styled-components'
import KFC from '../../../assets/images/kfcchallengue/KFC.png'
import { ComboGeneral } from './ComboGeneral'

const MainGeneral = styled.main`
    height: 659px;
    position: relative;
    display: flex;
    flex-direction: column;
`
const ImgSection = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`

export const Main = () => {
  return (
    <MainGeneral>
      <ImgSection src={KFC} alt='Kfc Argentina' />
      <div className='container' style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <ComboGeneral />
      </div>
    </MainGeneral>
  )
}
