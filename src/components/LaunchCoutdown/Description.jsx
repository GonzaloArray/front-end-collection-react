import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: .4rem;
`
const Divisor = styled.div`
    margin-top: 4rem;
    @media (min-width: 768px) {
        margin-top: 10rem;
    }
`

export const Description = () => {
  return (
    <Divisor>
      <Title>We're lauching soon</Title>
    </Divisor>
  )
}
