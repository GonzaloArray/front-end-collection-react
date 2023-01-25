import React from 'react'
import styled from 'styled-components'
import { SectionDescription } from './SectionMobile/SectionDescription'
import { SectionMobile } from './SectionMobile/SectionMobile'

const DivisionSection = styled.section`
    height: 326px;
    background: linear-gradient(262.18deg, #FFB737 -0.11%, #FFBE4B 97.74%);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const MobileSection = () => {
  return (
    <DivisionSection>
      <div className='container' style={{ display: 'flex', justifyContent: 'space-evenly', gap: '2rem' }}>
        <SectionMobile />
        <SectionDescription />
      </div>
    </DivisionSection>
  )
}
