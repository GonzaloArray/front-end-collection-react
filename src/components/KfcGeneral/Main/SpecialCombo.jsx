import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Krispy from '../../../assets/images/kfcchallengue/combo/combofamiliar.png'
import chips from '../../../assets/images/kfcchallengue/combo/cjip.png'
import soda from '../../../assets/images/kfcchallengue/combo/soda.png'

const ContainerCard = styled(motion.div)`
  cursor: pointer;
  width: 575px;
  height: 211px;
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
  color: black;
  font-size: 24px;
  line-height: 29px;
`
const Description = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: #868686;
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

  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;

  position: relative;
`
const Img = styled(motion.img)`
`
const ImgChild = styled(motion.img)`
  position: absolute;
  bottom: -2rem;
  left: ${props => props.left};
`
export const SpecialCombo = ({ title, category, price, background, circle, type }) => {
  return (
    <ContainerCard
      background={background}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <ContainerInfo>
        <Title>{title}</Title>
        <Description>{category}</Description>
        <Price circle={circle} type={type}>Rp. {price}</Price>
      </ContainerInfo>
      <ImgSection circle={circle}>
        <Img
          src={Krispy}
          alt='Info Menu'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ opacity: 1, x: -50 }}
          viewport={{ once: true }}
        />
        <ImgChild
          src={chips}
          alt='Info'
          left='0'
        />
        <ImgChild
          src={soda}
          alt='Info'
          left='-80px'
          initial={{ x: 100 }}
          animate={{ x: -50 }}
        />
      </ImgSection>
    </ContainerCard>
  )
}
