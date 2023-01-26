import React from 'react'

export const Img = ({ url }) => {
  return (
    <img
      src={url}
      style={{ maxWidth: '500px', height: '300px', width: '100%', objectFit: 'contain' }}
      alt='Image contain Cat Random - Test '
    />
  )
}
