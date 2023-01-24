import { motion } from 'framer-motion'
import styled from 'styled-components'

const Circle = styled(motion.div)`
  position: absolute;
  width: 304px;
  height: 304px;
  left: ${props => props.left};
  top: ${props => props.top};
  z-index: 0;
  border-radius: 50%;
  border: 70px solid rgba(250, 85, 50, 0.64);
`

export const SectionCircle = () => {
  return (
    <>
      <Circle left='-210px' top='555px' />
      <Circle left='0px' top='69px' />
      <Circle left='460px' top='-193px' />
    </>
  )
}
