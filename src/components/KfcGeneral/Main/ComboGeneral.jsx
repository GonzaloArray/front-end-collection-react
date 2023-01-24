import React from 'react'
import styled from 'styled-components'
import { COMBO } from '../../../Data/kfc/Combo'
import { SPECIALCOMBO } from '../../../Data/kfc/SpecialCombo'
import { Special } from './Special'
import { SpecialCombo } from './SpecialCombo'

const DivisionGeneral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  flex: 1;
  z-index: 2;
`
const DivisionCombo = styled.section`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.repeat}, 1fr)`};
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`

export const ComboGeneral = () => {
  return (
    <DivisionGeneral>
      <DivisionCombo repeat='3'>
        {
          COMBO.map(cb => (
            <Special
              key={cb.id}
              title={cb.title}
              category={cb.category}
              price={cb.price}
              background={cb.background}
              circle={cb.circle}
              type={cb.type}
            />
          ))
        }
      </DivisionCombo>
      <DivisionCombo repeat='2'>
        {
          SPECIALCOMBO.map(cb => (
            <SpecialCombo
              key={cb.id}
              title={cb.title}
              category={cb.category}
              price={cb.price}
              background={cb.background}
              circle={cb.circle}
              type={cb.type}
            />
          ))
        }
      </DivisionCombo>
    </DivisionGeneral>
  )
}
