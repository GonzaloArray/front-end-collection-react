import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import PlayStore from '../../../../assets/images/kfcchallengue/mobile/playstore.svg'
import AppStore from '../../../../assets/images/kfcchallengue/mobile/appstore.svg'

const DescriptionSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 40%;
  gap: 2rem;

  flex-direction: column;
`
const Description = styled(motion.h2)`
  font-size: 40px;
  line-height: 48px;
  text-transform: capitalize;

  color: #FFFFFF;
`
const ImgApp = styled(motion.img)`

`

export const SectionDescription = () => {
  return (
    <DescriptionSection>
      <Description
        initial={{ x: '-100%' }}
        whileHover={{ scale: 1.1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Now With your favorite kfc mobile application in your pocket
      </Description>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <ImgApp
          src={AppStore}
          alt='AppStore'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        <ImgApp
          src={PlayStore}
          alt='PlayStore'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </DescriptionSection>
  )
}
