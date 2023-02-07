import React, { useState } from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Nav } from './Nav/Nav'
import './Layout.css'
import iconArrow from '../assets/images/icon-arrow.svg'

const Header = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
const Logo = styled.h1`
        font-size: 1.4rem;
    `

const ButtonModal = styled.button`
        color: white;

    `

export const Layout = () => {
  const [modal, setModal] = useState(true)

  const handleClick = () => {
    setModal(!modal)
  }

  return (
    <div className='body-contain'>
      <Header>
        {
                    modal
                      ? (
                        <div className='container feh-header'>
                          <Logo>Front-end</Logo>
                          <div className='feh-flex'>
                            <Nav />
                            <ButtonModal type='button' onClick={handleClick}>
                              <img src={iconArrow} alt='Icon Arrow' />
                            </ButtonModal>
                          </div>
                        </div>
                        )
                      : (
                        <div className='container' />
                        )
                }
      </Header>
      <main className='main-flex'>
        <Outlet />
      </main>
      <footer />
    </div>
  )
}
