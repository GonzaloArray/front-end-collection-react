import React from 'react'
import styled from 'styled-components'

const TitleProduct = styled.h3`
  color: rgb(255, 125, 26);
  @media (min-width: 768px) {
    text-transform: uppercase;
    font-size: 1rem;
  }
`
const Title = styled.h2`
  color: black;
  @media (min-width: 768px) {
      font-size: 2rem;
      line-height: 1;
  }
`
const DescriptionProd = styled.p`
  color: #000000b6;
`
const InfoPrice = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
      flex-direction: column; 
      justify-content: start;
      align-items: flex-start;
  }
`
const PriceDescount = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  
`
const PreiceProduct = styled.p`
  color: #000000;
  font-size: 1.6rem;
`
const DiscountProduct = styled.p`
  background-color: #ff7d1a37;
  color: rgb(255, 125, 26);
  padding: .1rem .3rem;
  font-size: .9rem;
  font-weight: bold;
  border-radius: .5rem;
`
const ReductionProduct = styled.p`
  color: #00000069;
  text-decoration: line-through;
`
export const DescripcionProductChild = () => {
  return (
    <>
      <TitleProduct>sneaker company</TitleProduct>
      <Title>Fall Limited Edition Sneakers</Title>
      <DescriptionProd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, natus vel. Repellat illum voluptas natus tempore consectetur atque autem, in, beatae corrupti officia reiciendis ab, error quia magni! Vel, commodi.</DescriptionProd>
      <InfoPrice>
        <PriceDescount>
          <PreiceProduct>$125.00</PreiceProduct>
          <DiscountProduct>50%</DiscountProduct>
        </PriceDescount>
        <ReductionProduct>$250.00</ReductionProduct>
      </InfoPrice>
    </>
  )
}
