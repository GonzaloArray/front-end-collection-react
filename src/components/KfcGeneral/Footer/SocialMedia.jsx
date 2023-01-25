import React from 'react'
import styled from 'styled-components'

import Twitter from '../../../assets/images/kfcchallengue/mobile/twitter.svg'
import Facebook from '../../../assets/images/kfcchallengue/mobile/facebook.svg'
import Instagram from '../../../assets/images/kfcchallengue/mobile/instagram.svg'

const DivisionGeneral = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
`
const ImgSocial = styled.img`

`
export const SocialMedia = () => {
  return (
    <DivisionGeneral>
      <ImgSocial src={Twitter} alt='Icono Social Media' />
      <ImgSocial src={Facebook} alt='Icono Social Media' />
      <ImgSocial src={Instagram} alt='Icono Social Media' />
    </DivisionGeneral>
  )
}
