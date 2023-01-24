import { motion } from 'framer-motion'
import styled from 'styled-components'
import ArrowLeft from '../../../assets/images/kfcchallengue/arrow-left.svg'
import ArrowRight from '../../../assets/images/kfcchallengue/arrow-right.svg'
import { MENUKFC } from '../../../Data/kfc/MenuKfc'
import { CardMenu } from './CardMenu'
import { MenuPoster } from './MenuPoster'

const MenuDividition = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    position: relative;
`
const ImgArrow = styled(motion.img)`

`
const DivisorMenu = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  gap: 3rem;
`

export const SectionMenu = () => {
  return (
    <MenuDividition>
      <MenuPoster />
      <ImgArrow src={ArrowLeft} alt='Icon Arrow' />
      <DivisorMenu
        initial={{ translateY: -200 }}
        animate={{ translateY: 0 }}
      >
        {
          MENUKFC.map(mkfc => (
            <CardMenu key={mkfc.id} title={mkfc.title} />
          ))
        }
      </DivisorMenu>
      <ImgArrow src={ArrowRight} alt='Icon Arrow' />
    </MenuDividition>
  )
}
