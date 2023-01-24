import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Poster = styled(motion.button)`
  position: absolute;
  width: 175px;
  height: 44px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-22px);

  background: linear-gradient(95.52deg, #FFC71F -10.96%, #FFAF18 102.66%);
  box-shadow: 2px 4px 12px rgba(255, 199, 31, 0.25);
  border-radius: 22px;
`
export const MenuPoster = () => {
  return (
    <Poster>
      MENU
    </Poster>
  )
}
