import React from 'react'
import styled from 'styled-components'

const DivisonGeneral = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
const ImgCall = styled.img`

`
const Description = styled.h2`
    font-size: 20px;
`
export const CallChild = ({ img, tel }) => {
  return (
    <DivisonGeneral>
      <ImgCall src={img} alt='Icono Web' />
      <Description>{tel}</Description>
    </DivisonGeneral>
  )
}
