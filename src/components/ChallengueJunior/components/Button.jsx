import React from 'react'

export const Button = ({ event, title }) => {
  return (
    <button onClick={event}>
      {title}
    </button>
  )
}
