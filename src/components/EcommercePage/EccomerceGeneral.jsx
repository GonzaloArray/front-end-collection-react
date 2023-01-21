import React, { useState } from 'react'
import styled from 'styled-components'

import { ModalCard } from './HeaderEcommerce/ModalCard'

import './EcommerceGeneral.css'
import { HeaderEccomerce } from './HeaderEcommerce/HeaderEccomerce'
import { MainEccomerce } from './MainEcommerce/MainEccomerce'
import { MenuToggle } from './HeaderEcommerce/MenuToggle'

const DivisorContainer = styled.article`
  flex: 1;
  width: 100%;
  background-color: #ffffff;
`

export const EccomerceGeneral = () => {
  const [modal, setModal] = useState(false)
  const [menuToggle, setMenuToggle] = useState(false)
  const [arrayBuy, setArrayBuy] = useState([])

  return (
    <DivisorContainer>
      <div className='container'>
        <HeaderEccomerce modal={modal} setModal={setModal} menuToggle={menuToggle} setMenuToggle={setMenuToggle} arrayBuy={arrayBuy} />
      </div>
      {
        modal && <ModalCard arrayBuy={arrayBuy} setArrayBuy={setArrayBuy} />
      }
      {
        menuToggle && <MenuToggle menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      }
      <MainEccomerce
        arrayBuy={arrayBuy}
        setArrayBuy={setArrayBuy}
      />

    </DivisorContainer>
  )
}
