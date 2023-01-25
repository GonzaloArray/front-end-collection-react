import React from 'react'
import styled from 'styled-components'
import { CallChild } from './CallChild'
import WSP from '../../../assets/images/kfcchallengue/mobile/wsp.svg'
import Phone from '../../../assets/images/kfcchallengue/mobile/phone.svg'

const DivisorCall = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`
export const CallKfc = () => {
  return (
    <DivisorCall>
      <CallChild img={WSP} tel='11 5905 - 6745' />
      <CallChild img={Phone} tel='11 5905 - 6745' />
    </DivisorCall>
  )
}
