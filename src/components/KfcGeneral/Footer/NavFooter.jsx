import React from 'react'
import styled from 'styled-components'
import { Company } from './Nav/Company'
import { StayUpToDate } from './Nav/StayUpToDate'
// import { Support } from './Nav/Support'

const DivisionNav = styled.nav`
    display: flex;
    align-items: flex-start;
    gap: 6rem;
`

export const NavFooter = () => {
  return (
    <DivisionNav>
      <Company />
      <Company />
      <StayUpToDate />
    </DivisionNav>
  )
}
