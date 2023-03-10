import styled from 'styled-components'
import { CountDownl } from '../components/LaunchCoutdown/Coutdown/CountDownl'
import { Description } from '../components/LaunchCoutdown/Description'
import iconMount from '../assets/images/pattern-hills.svg'

const ImgMount = styled.div`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    `

const ImgBack = styled.img`
        width: 100%;
    `

export const Dashboard = () => {
  return (
    <>
      <section className='container'>
        <Description />
      </section>
      <CountDownl />
      <ImgMount>
        <ImgBack src={iconMount} alt='Icon mount' />
      </ImgMount>
    </>
  )
}
