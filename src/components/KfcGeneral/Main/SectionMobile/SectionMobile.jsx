import React from 'react'
import styled from 'styled-components'

import Mobile1 from '../../../../assets/images/kfcchallengue/mobile/mobile-1.png'
import Mobile2 from '../../../../assets/images/kfcchallengue/mobile/mobile-2.png'

const DivisionGeneral = styled.section`
  display: flex;
  align-items: center;
  position: relative;
`
const ImgSection = styled.img`
  width: ${props => props.width};
  position: ${props => props.position};
  left: ${props => props.left};
  z-index: ${props => props.index};
`
export const SectionMobile = () => {
  return (
    <DivisionGeneral>
      <ImgSection width='14rem' position='relative' index='1' src={Mobile1} alt='Mobile first' />
      <ImgSection width='12rem' position='absolute' index='0' left='10rem' src={Mobile2} alt='Mobile first' />
    </DivisionGeneral>
  )
}
