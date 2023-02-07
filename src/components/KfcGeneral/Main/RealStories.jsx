import React from 'react'
import styled from 'styled-components'
import { TESTIMONIES } from '../../../Data/kfc/Testimonies'
import { Stories } from './Testimonials/Stories'

const DivisionSection = styled.div`
    height: 896px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
`
const TitleStories = styled.h2`
  color: black;
  font-size: 4rem;
`
const DescriptionSubtitle = styled(TitleStories)`
  font-size: 1rem;
  line-height: 3.5rem;
`
const DivisorRealStories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`

export const RealStories = () => {
  return (
    <DivisionSection>
      <div>
        <TitleStories>Real Stories from Real Customers</TitleStories>
        <DescriptionSubtitle>Get Inspired by these Stories</DescriptionSubtitle>
      </div>
      <DivisorRealStories>
        {
            TESTIMONIES.map(tst => (
              <Stories key={tst.id} stories={tst.testimonies} name={tst.name} twitter={tst.twitter} columnArea={tst.columnArea} rowArea={tst.rowArea} />
            ))
        }

      </DivisorRealStories>
    </DivisionSection>
  )
}
