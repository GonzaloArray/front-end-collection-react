import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { GeneralInfo } from './GeneralInfo'
import { NavKfc } from './NavKfc'
import { SectionCircle } from './SectionCircle'
import { SectionMenu } from './SectionMenu'

const Header = styled.header`
    display: flex;
    flex-direction: column;
    height: 927px;
    background-color: white;
`
const SectionInfo = styled(motion.section)`
  background: linear-gradient(123.49deg, #FF4029 0.57%, #F02228 104.89%);
  height: 750px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  &::before{
    content: ' ';
    position: absolute;
    width: 1069.69px;
    height: 614.47px;
    left: 700px;
    top: 300px;

    background: rgba(230, 18, 19, 0.26);
    border-radius: 121px;
    transform: rotate(-33.3deg);
  }
`

export const HeaderKfc = () => {
  return (
    <Header>
      <SectionInfo>
        <div className='container' style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <NavKfc />
          <GeneralInfo />
        </div>
        <SectionCircle />
      </SectionInfo>
      <div className='container' style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <SectionMenu />
      </div>
    </Header>
  )
}
