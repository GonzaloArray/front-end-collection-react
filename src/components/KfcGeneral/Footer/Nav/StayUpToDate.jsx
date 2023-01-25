import React from 'react'
import styled from 'styled-components'

const DivisionNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 1rem;
`
const SubmitPromotion = styled.input`
  background: #FFFFFF;
  opacity: 0.2;
  border-radius: 8px;
  width: 255px; 
  height: 40px;
  padding: 0 1rem;
`
export const StayUpToDate = () => {
  return (
    <DivisionNav>
      <Title>Stay Up To Date</Title>
      <SubmitPromotion type='text' placeholder='Your email adress' />
    </DivisionNav>
  )
}
