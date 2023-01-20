import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const DivisorSection = styled.div`
  display: flex;
  gap: 6rem;
  flex-direction: column;
`
const Title = styled.h2`
  font-size: 2rem;
  margin-top: 4rem;
`

export const MouseEvent = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    // Si la funcion no entra en el if, hay que limpiar las subscipciones, asi el use effect se ejecuta adecuadamente
    // getEventListener(window), utilizar truco para ver las subscripciones, en este caso, cancelo subscripciones para rendimiento de la aplicación
    // Otra curiosidad necesaria, el state se ejecuta de forma asincrona

    // Cleanup
    // --> cuando el componente se desmonta
    // --> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo

    /*
      --> cunado el componente se desmota
      --> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    */
    // Otra buena practica es solamente usar el document en el useEffect, no por fuera porque no contiene useEffect el servidor
    return () => { // Esto es el cleanup method --> que se ejecuta cuando escucha por los cambios
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <DivisorSection>
      <Title>Mouse Follower</Title>

      <div style={{
        position: 'absolute',
        backgroundColor: 'black',
        border: '1px solid white',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        right: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />

      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'}
      </button>
    </DivisorSection>
  )
}
