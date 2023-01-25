import React from 'react'
import styled from 'styled-components'
import { Footer } from './Footer/Footer'
import { HeaderKfc } from './Header/HeaderKfc'
import { Main } from './Main/Main'

const DivisorContainer = styled.article`
  flex: 1;
  width: 100%;
  background: linear-gradient(242.99deg, #F8E7DD -3.29%, #FFFAF0 118.42%);
`

export const KfcGeneral = () => {
  return (
    <DivisorContainer>
      <HeaderKfc />
      <Main />
      <Footer />
    </DivisorContainer>
  )
}
