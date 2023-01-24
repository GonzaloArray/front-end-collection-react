import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const GeneralInfoLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const Title = styled(motion.h2)`
  font-size: 64px;
  line-height: 77.45px;
  z-index: 1;

`
const Description = styled(motion.p)`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  z-index: 1;
`
const ButtonOrden = styled(motion.button)`
  background: #F53627;
  width: 274px;
  height: 64px;
  border: 4px solid #FFFFFF;
  box-shadow: 0px 7px 12px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  z-index: 1;
`
const OrdenSlider = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: .4rem;
`
const ItemSlider = styled(motion.li)`
  width: ${props => props.sliderOn ? '20px' : '25px'};
  height: 10px;
  cursor: pointer;
  background: ${props => props.sliderOn ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)'};
  border-radius: 5px;
`
export const InfoLeft = () => {
  const isOpen = true

  return (
    <GeneralInfoLeft>
      <Title>
        JAGONYA AYAM
        BUCKET MENU
        CAMPAIGN
      </Title>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque assumenda esse repellat voluptatum error dolor nesciunt? Qui reprehenderit harum aliquid dolore maiores, repellendus consequuntur in! Quo aliquid consectetur sed quod.
      </Description>
      <ButtonOrden>
        Orden Now
      </ButtonOrden>
      <OrdenSlider>
        <ItemSlider />
        <ItemSlider sliderOn={isOpen} />
        <ItemSlider />
        <ItemSlider />
      </OrdenSlider>
    </GeneralInfoLeft>
  )
}
