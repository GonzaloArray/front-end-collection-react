import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Box from '../../../assets/images/kfcchallengue/box-chip.png'
import Chip from '../../../assets/images/kfcchallengue/chips.png'
import Kitchen from '../../../assets/images/kfcchallengue/kitchen.png'

const DivisorGeneral = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
const BoxChiken = styled(motion.img)`
    width: 440.5px;
    height: 446.9px;
    transform: rotate(-9.04deg);
    z-index: 1;
    box-shadow: inset 0 0 1225px 20px #ffffff37;
    border-radius: 50%;
`
const BoxChip = styled(motion.img)`
    width: 206.87px;
    height: 229.86px;
    transform: ${props => props.rotate};
    position: absolute;
    bottom: ${props => props.bottom};
    z-index: ${props => props.index};
    left: ${props => props.left};
`
const EffectDivisor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    position: absolute;
    right: 50px;
    width: 194px;
    height: 194px;
    border-radius: 50%;
`
const Price = styled.div`
    display: flex;
    align-items: center;
    
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    &::after{
        content: '';
        position: absolute;
        inset: .7rem;
        border: 3px dashed #afafaf;
        border-radius: 50%;
    }
`
const CurrencySpan = styled(motion.span)`
    color: #F73D27;
    font-size: 18px;
    align-self: flex-start;
`
const PriceReal = styled(motion.span)`
    color: #F73D27;
    font-size: 64px;
`
const PriceSpan = styled(motion.span)`
    color: #F73D27;
    font-size: 24px;
`
export const InfoRight = () => {
  return (
    <DivisorGeneral>
      <BoxChiken src={Box} alt='Box chip' />
      <BoxChip src={Chip} left='279px' index='1' bottom='0' rotate='rotate(9.16deg)' alt='Chip' />
      <BoxChip src={Kitchen} left='30px' bottom='20px' index='0' alt='Chip' />
      <EffectDivisor>
        <Price>
          <CurrencySpan>RP</CurrencySpan>
          <PriceReal>
            79
            <PriceSpan>.999</PriceSpan>
          </PriceReal>
        </Price>
      </EffectDivisor>
    </DivisorGeneral>
  )
}
