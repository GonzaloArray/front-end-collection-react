import React from 'react'
import styled from 'styled-components'
import { BuyCard } from './BuyCard'

const ModalArticle = styled.article`
  position: absolute;
  max-width: 370px;
  width: 100% - 1rem;
  margin: auto;
  top: 7.3rem;
  border-radius: .4rem;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 2;
  padding: 1rem 0;
`
const ModalHeader = styled.header`
  border-bottom: 1px solid #0004;
  padding: .6rem 2rem 2rem 2rem;
`
const Title = styled.h2`
  color: black;
  font-weight: lighter;
`
const TitleEmpty = styled.h2`
  color: #00000041;
  font-size: 1.2rem;
  font-weight: lighter;
`
const DivisorInfo = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  justify-content: center;
`

export const ModalCard = ({ arrayBuy, setArrayBuy }) => {
  return (
    <ModalArticle>
      <ModalHeader>
        <Title>Cart</Title>
      </ModalHeader>
      {
        arrayBuy.length
          ? (
            <BuyCard arrayBuy={arrayBuy} setArrayBuy={setArrayBuy} />
            )
          : (
            <DivisorInfo>
              <TitleEmpty>No hay nada todavia</TitleEmpty>
            </DivisorInfo>
            )
      }
    </ModalArticle>
  )
}
