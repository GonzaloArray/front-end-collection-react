import React, { useState } from 'react'
import styled from 'styled-components'

// Arrow
import iconPrev from '../../../assets/images/ecommerce/icon-previous.svg'
import iconNext from '../../../assets/images/ecommerce/icon-next.svg'

import { DescriptionProduct } from './DescriptionProduct'
import { ProductImgSection } from './ProductImgSection'

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
const DivisorProduct = styled.section`
  display: flex;
  overflow-x: hidden;
  position: relative;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const ButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 1rem;
  background-color: white;
  border-radius: 50%;
  padding: .6rem .8rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`
const ButtonRight = styled.button`
  position: absolute;
  top: 50%;
  background-color: white;
  border-radius: 50%;
  padding: .6rem .8rem;
  right: 1rem;
  transform: translateX();

  display: flex;
  align-items: center;
  justify-content: center;
`
const ImgArrow = styled.img`
  width: .6rem;
`

export const MainEccomerce = ({ arrayBuy, setArrayBuy }) => {
  const [count, setCount] = useState(0)

  const handleMovePrev = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const handleMoveNext = () => {
    if (count < 3) {
      setCount(count + 1)
    }
  }

  return (
    <MainGeneral>
      <DivisorProduct>
        <div>
          <ProductImgSection count={count} />
        </div>

        <ButtonLeft onClick={handleMovePrev}>
          <ImgArrow src={iconPrev} alt='Arrow Prev' />
        </ButtonLeft>
        <ButtonRight onClick={handleMoveNext}>
          <ImgArrow src={iconNext} alt='Arrow Prev' />
        </ButtonRight>
      </DivisorProduct>
      <DescriptionProduct arrayBuy={arrayBuy} setArrayBuy={setArrayBuy} />
    </MainGeneral>
  )
}
