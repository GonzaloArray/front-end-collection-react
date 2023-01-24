import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import ImgChicken from '../../../assets/images/kfcchallengue/menu/menu-1.png'

const DivisionMenu = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const TitleMenu = styled(motion.h2)`
  color: black;
  font-size: 11px;
`
const ImgMenu = styled(motion.img)`

`

export const CardMenu = ({ title }) => {
  return (
    <DivisionMenu
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ImgMenu src={ImgChicken} />
      <TitleMenu
        transition={1}
      >
        {title}
      </TitleMenu>
    </DivisionMenu>
  )
}
