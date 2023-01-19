import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import './Nav.css'

const NavUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const Nav = () => {
  // Router
  const location = useLocation()

  return (
    <nav>
      <NavUl>
        <li className='nav-item'>
          <Link className={`${location.pathname === '/' ? 'text-primary' : 'text-white'} `} to='/'>Home</Link>
        </li>

        <li className='nav-item'>
          <Link className={`${location.pathname === '/contacto' ? 'text-primary' : 'text-white'} `} to='/contacto'>Contacto</Link>
        </li>
      </NavUl>
    </nav>
  )
}
