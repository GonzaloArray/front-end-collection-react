import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Krispy from '../../../assets/images/kfcchallengue/combo/krispy.png'

const ContainerCard = styled(motion.div)`
  cursor: pointer;
  width: 377px;
  height: 189px;
  background: ${props => props.background};
  box-shadow: 7px 10px 24px rgba(255, 199, 31, 0.22);
  border-radius: 12px;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Title = styled.h2`
  font-size: 2rem;
  color: ${props => props.category === 'KRISPY BURGER' ? '#000000' : '#fff'};
  font-size: 24px;
  line-height: 29px;
`
const Description = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.category === 'KRISPY BURGER' ? '#000000' : '#fff'};
`
const Price = styled.span`
  width: 125px;
  height: 36px;

  background: ${props => props.circle};
  border-radius: 18px;
  color: ${props => props.type};
  display: flex;
  align-items: center;
  justify-content: center;
`
const ImgSection = styled.div`
  width: 154px;
  height: 154px;

  border-radius: 50%;
  background: ${props => props.circle};
`
const Img = styled(motion.img)`
  transform: translateX(-2rem);
`
export const Special = ({ title, category, price, background, circle, type }) => {
  return (
    <ContainerCard
      background={background}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ContainerInfo>
        <Title category={category}>{title}</Title>
        <Description category={category}>{category}</Description>
        <Price circle={circle} type={type}>Rp. {price}</Price>
      </ContainerInfo>
      <ImgSection circle={circle}>
        <Img
          src={Krispy}
          alt='Info Menu'
        />
      </ImgSection>
    </ContainerCard>
  )
}
