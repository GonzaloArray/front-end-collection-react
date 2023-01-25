import React from 'react'
import styled from 'styled-components'

const DivisorGeneral = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Copyright = styled.h2`
  font-size: 13px;
  color: #ffffff66;
`
export const CopyrightDev = () => {
  return (
    <DivisorGeneral className='container'>
      <Copyright>© 2021 KFCKU. All rights reserved</Copyright>

      <Copyright>Terms & Conditions  |  Privacy Policy  |  Sitemap |  Disclaimer</Copyright>
    </DivisorGeneral>
  )
}
