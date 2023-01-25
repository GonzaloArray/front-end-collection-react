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
const ItemLink = styled.p`
  font-size: 14px;
  font-weight: lighter;
`
export const Company = () => {
  return (
    <DivisionNav>
      <Title>Company</Title>
      <DivisionNav>
        <ItemLink>About us</ItemLink>
        <ItemLink>Blog</ItemLink>
        <ItemLink>Contact us</ItemLink>
        <ItemLink>Pricing</ItemLink>
        <ItemLink>Testimonials</ItemLink>
      </DivisionNav>
    </DivisionNav>
  )
}
