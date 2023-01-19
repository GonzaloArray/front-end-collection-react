import React, { useState } from 'react'
import styled from 'styled-components'
import { MouseEvent } from '../components/MouseFollower/MouseEvent'

const DivisorGeneral = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  gap: 4rem;
`

export const MouseFollower = () => {
  const [mount, setMount] = useState(true)

  return (
    <DivisorGeneral>
      {
        mount && <MouseEvent />
      }
      <button onClick={() => setMount(!mount)}>
        Toogle mounted component
      </button>
    </DivisorGeneral>
  )
}
