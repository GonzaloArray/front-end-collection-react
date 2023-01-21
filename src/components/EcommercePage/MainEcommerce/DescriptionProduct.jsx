import React, { useState } from 'react'
import styled from 'styled-components'
import { DescripcionProductChild } from './DescripcionProductChild'
import imgCart from '../../../assets/images/ecommerce/icon-buy.svg'

const DivisorGeneral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.4rem;
  @media (min-width: 768px) {
    width: 70%;
  }
`

const SectionCountProduct = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Amound = styled.span`
  color: #000000b6;
  font-size: 1rem;
`
const DivisorDesktop = styled.div`
  @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
`
const ButtonCount = styled.button`
  color: rgb(255, 125, 26);
  background-color: transparent;
  font-size: 1.4rem;
`
const ButtonAdd = styled.button`
  background-color: rgb(255, 125, 26);
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  &:hover{
    background-color: rgba(255, 125, 26, 0.582);
  }
  @media (min-width: 768px) {
      margin: 0;
  }
`

export const DescriptionProduct = ({ arrayBuy, setArrayBuy }) => {
  const [count, setCount] = useState(0)

  const handleRemove = () => {
    if (count === 0) { return }

    setCount(count - 1)
  }
  const handleAdd = () => {
    if (count >= 10) { return }

    setCount(count + 1)
  }
  const handleBuytoAdd = () => {
    if (count > 0 && arrayBuy.length === 0) {
      setArrayBuy([...arrayBuy, {
        id: 1,
        name: 'Fall Limited Edition Sneakers',
        count
      }])

      setCount(0)
    } else {
      const valor = arrayBuy.map((e, i, array) => {
        return {
          ...e,
          count: e.count + count
        }
      })
      setArrayBuy(valor)
      setCount(0)
    }
  }

  return (
    <section className='container'>
      <DivisorGeneral>
        <DescripcionProductChild />

        <DivisorDesktop>
          <SectionCountProduct>
            <ButtonCount onClick={handleRemove}>-</ButtonCount>
            <Amound>{count}</Amound>
            <ButtonCount onClick={handleAdd}>+</ButtonCount>
          </SectionCountProduct>
          <ButtonAdd onClick={handleBuytoAdd}>
            <img src={imgCart} alt='Icono cart' />
            <p>Add to cart</p>
          </ButtonAdd>
        </DivisorDesktop>
      </DivisorGeneral>
    </section>
  )
}
