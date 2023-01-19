import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
    margin-top: 4rem;
    font-size: 2rem;
    text-shadow: 1px 3px 5px blue;
`
const SeccionLink = styled.div`
    text-align: center;
    background-color: #21213f;
    padding: 1rem;
    border-radius: .8rem;
    font-size: 2rem;
    line-height: 2.4rem;
    text-shadow: 1px 3px 5px blue;
`
const DivisorChallengue = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const Index = () => {
  return (
    <div className='container'>
      <Title>Front-end Challengue - By Mentor</Title>

      <DivisorChallengue>
        <SeccionLink>
          <Link to='/dashboard'>CountDown Challengue</Link>
        </SeccionLink>
        <SeccionLink>
          <Link to='/dashboard'>E-commerce product page</Link>
        </SeccionLink>
        <SeccionLink>
          <Link to='/TicTacToe'>Tic Tac Toe</Link>
        </SeccionLink>
        <SeccionLink>
          <Link to='/MouseFollower'>Mouse Follower</Link>
        </SeccionLink>
      </DivisorChallengue>
    </div>
  )
}
