import styled from 'styled-components'
import { InfoLeft } from './InfoLeft'
import { InfoRight } from './InfoRight'

const DivisionCentral = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const GeneralInfo = () => {
  return (
    <DivisionCentral>
      <InfoLeft />
      <InfoRight />
    </DivisionCentral>
  )
}
