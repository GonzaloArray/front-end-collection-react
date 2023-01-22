import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import './Square.css'

const SquareDiv = styled(motion.section)`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    cursor: pointer;
    font-size: 48px;
    background-color: #165A60;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
const ChildrenDiv = styled(motion.p)`
  color: white;

`
export const Square = ({ children, index, isSelected, updateBoard }) => {
  const handleClick = (newIndex) => {
    updateBoard(newIndex)
  }

  return (
    <SquareDiv onClick={() => handleClick(index)}>
      <AnimatePresence>
        <ChildrenDiv
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          style={{
            backgroundColor: isSelected && 'blue',
            position: isSelected && 'absolute',
            borderRadius: isSelected && '.2rem',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 2
          }}
        >
          {children}
        </ChildrenDiv>
      </AnimatePresence>
    </SquareDiv>
  )
}
