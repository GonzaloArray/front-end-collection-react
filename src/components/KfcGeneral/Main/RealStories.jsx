import React from 'react'
import styled from 'styled-components'
import { TESTIMONIES } from '../../../Data/kfc/Testimonies'
import { Stories } from './Testimonials/Stories'

const DivisionSection = styled.div`
    height: 495px;

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

export const RealStories = () => {
  return (
    <DivisionSection>
      <div>
        <TitleStories>Real Stories from Real Customers</TitleStories>
        <DescriptionSubtitle>Get Inspired by these Stories</DescriptionSubtitle>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {
            TESTIMONIES.map(tst => (
              <Stories key={tst.id} stories={tst.testimonies} name={tst.name} twitter={tst.twitter} />
            ))
        }

      </div>
    </DivisionSection>
  )
}
