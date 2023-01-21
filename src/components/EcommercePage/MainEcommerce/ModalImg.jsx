import styled from 'styled-components'
import { DescriptionImgProduct } from './DescriptionImgProduct'

const GeneralDivision = styled.section`
  background-color: #0000007b;
  position: fixed;
  z-index: 2;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const DivModal = styled.div`
  position: relative;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`
const ButtonClose = styled.button`
  background-color: transparent;
  justify-self: end;
  align-self: end;
  font-size: 2rem;
`

export const ModalImg = ({ setImgModal }) => {
  const handleClose = () => {
    setImgModal(false)
  }

  return (
    <GeneralDivision>
      <DivModal>
        <ButtonClose onClick={handleClose}>x</ButtonClose>
        <DescriptionImgProduct />
      </DivModal>
    </GeneralDivision>
  )
}
