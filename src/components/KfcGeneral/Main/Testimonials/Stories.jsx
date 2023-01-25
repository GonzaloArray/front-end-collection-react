import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const CardStories = styled(motion.div)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #000000b2;
    padding: 1rem;
    gap: 1rem;

    background-color: white;
    box-shadow: 7px 10px 24px rgba(255, 199, 31, 0.22);
    width: 400px;
    height: 200px;
    border-radius: 4px;
`
const DescripStories = styled.h2`
  font-size: 14px;
  font-weight: lighter;
  color: #00000094;
`
const Name = styled.p`
  color: #000000;
  font-size: 14px;
  margin: 0;
`
const Twitter = styled.p`
  color: #000000b2;
  font-size: 12px;
  margin: 0;
`
export const Stories = ({ stories, name, twitter }) => {
  return (
    <CardStories>
      <DescripStories>{stories}</DescripStories>
      <div>
        <Name>{name}</Name>
        <Twitter>{twitter}</Twitter>
      </div>
    </CardStories>
  )
}
