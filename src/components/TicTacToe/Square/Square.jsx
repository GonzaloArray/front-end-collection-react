import React from 'react'
import './Square.css'

export const Square = ({ children, index, isSelected, updateBoard }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = (newIndex) => {
    updateBoard(newIndex)
  }

  return (
    <div className={className} onClick={() => handleClick(index)}>
      {children}
    </div>
  )
}
