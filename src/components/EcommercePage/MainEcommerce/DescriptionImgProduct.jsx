import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductImgSection } from './ProductImgSection'
// Arrow
import iconPrev from '../../../assets/images/ecommerce/icon-previous.svg'
import iconNext from '../../../assets/images/ecommerce/icon-next.svg'

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
export const DescriptionImgProduct = ({ imgModal, setImgModal }) => {
  // state
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
    <DivisorProduct>
      <div>
        <ProductImgSection
          count={count}
          setImgModal={setImgModal}
          imgModal={imgModal}
        />
      </div>

      <ButtonLeft onClick={handleMovePrev}>
        <ImgArrow src={iconPrev} alt='Arrow Prev' />
      </ButtonLeft>
      <ButtonRight onClick={handleMoveNext}>
        <ImgArrow src={iconNext} alt='Arrow Prev' />
      </ButtonRight>
    </DivisorProduct>
  )
}
