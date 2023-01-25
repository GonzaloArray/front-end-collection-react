import React from 'react'
import styled from 'styled-components'
import LogoKfc from '../../../assets/images/kfcchallengue/kfc-logo.svg'
import { CallKfc } from './CallKfc'
import { SocialMedia } from './SocialMedia'

const SectionDivision = styled.div`
    height: 120px;
    background: #F02228;

    display: flex;
    align-items: center;
`

export const CallToAction = () => {
  return (
    <SectionDivision>
      <div className='container' style={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between' }}>
        <img src={LogoKfc} alt='Logo Kfc' />
        <CallKfc />
        <SocialMedia />
      </div>
    </SectionDivision>
  )
}
