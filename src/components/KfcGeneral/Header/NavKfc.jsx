import { motion } from 'framer-motion'
import styled from 'styled-components'
import KfcLogo from '../../../assets/images/kfcchallengue/kfc-logo.svg'
import Icon from '../../../assets/images/kfcchallengue/icon.svg'
import Cart from '../../../assets/images/kfcchallengue/cart.svg'
import { menu } from '../../../Data/kfc/Menu'

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    @media (min-width: 768px) {
      height: 95px;
    }
`
const KFClogo = styled(motion.img)`
  width: 5rem;

  @media (min-width: 768px) {
    width: 132px;
      
  }
`
const ItemContainer = styled.ul`
  display: none;
  @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 2rem;
  }
`
const Item = styled.li`
  font-weight: lighter;
`
const DivisionItem = styled(ItemContainer)`
  gap: 1rem;
`
const Akun = styled.button`
  background-color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`
const IconImg = styled.img`
  width: 2rem;
`
export const NavKfc = () => {
  return (
    <NavContainer>
      <KFClogo
        src={KfcLogo}
        alt='Kfc Logo'
      />
      <ItemContainer>
        <ItemContainer>
          {
            menu.map(item => (
              <Item key={item.id}>{item.name}</Item>
            ))
          }
        </ItemContainer>
        <DivisionItem>
          <Akun>
            <IconImg src={Icon} alt='' />
          </Akun>
          <Akun>
            <IconImg src={Cart} alt='' />
          </Akun>

        </DivisionItem>
      </ItemContainer>

    </NavContainer>
  )
}
