import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { arrayProyect } from '../Data/Proyect'

const Title = styled.h1`
    text-align: center;
    margin: 4rem 0;
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
    transition: .2s ease-in-out;

    &:hover{
      background-color: #1f1f28;
      transform: scale(1.1);
      transition: .2s ease-in-out;
    }
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

        {
          arrayProyect.map(proyect => (
            <SeccionLink key={proyect.id}>
              <Link to={`/${proyect.urlname}`}>{proyect.title}</Link>
            </SeccionLink>
          ))
        }

      </DivisorChallengue>
    </div>
  )
}
