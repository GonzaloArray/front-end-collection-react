import React, { useState } from 'react'
import styled from 'styled-components'

import { DescriptionProduct } from './DescriptionProduct'
import { ModalImg } from './ModalImg'
import { DescriptionImgProduct } from './DescriptionImgProduct'

const MainGeneral = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2rem;
      width: 1200px;
      margin: 2rem auto;
  }
`

export const MainEccomerce = ({ arrayBuy, setArrayBuy }) => {
  const [imgModal, setImgModal] = useState(false)

  return (
    <MainGeneral>
      <DescriptionImgProduct imgModal={imgModal} setImgModal={setImgModal} />
      <DescriptionProduct arrayBuy={arrayBuy} setArrayBuy={setArrayBuy} />

      {
        imgModal && <ModalImg setImgModal={setImgModal} />
      }
    </MainGeneral>
  )
}
