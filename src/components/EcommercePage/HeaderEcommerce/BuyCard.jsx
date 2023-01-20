import React from 'react'
import styled from 'styled-components'
import ImgCart from '../../../assets/images/ecommerce/image-product-1.jpg'
import IconDelete from '../../../assets/images/ecommerce/icon-delete.svg'

const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
`
const ModalCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .4rem;
  padding: .5rem 0;
`
const ImgIcon = styled.img`
  width: 2.5rem;
`
const DescriptionModal = styled.div`
  display: flex;
  flex-direction: column;
`
const Description = styled.p`
  color: black;
`
const Span = styled.p`
  color: #00000050;
`
const DivResult = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
`
const DeleteModal = styled.button`
  padding: 0;
  background-color: transparent;
`
const Checked = styled.button`
  padding: .8rem;
  background-color: rgb(255, 125, 26);
  width: 100%;
  margin: 1rem 0;
`

export const BuyCard = ({ arrayBuy, setArrayBuy }) => {
  const handleDelete = () => {
    setArrayBuy([])
  }

  return (
    <DivGeneral>
      {
        arrayBuy.map(e => (
          <ModalCart key={e.id}>
            <ImgIcon src={ImgCart} alt='Icono Producto' />
            <DescriptionModal>
              <Description>{e.name}</Description>
              <DivResult>
                <Span>$125.00</Span>
                <Span>x</Span>
                <Span>{e.count}</Span>
                <Description>{'$' + (e.count * 125) + '.00'}</Description>
              </DivResult>
            </DescriptionModal>
            <DeleteModal onClick={handleDelete}>
              <img src={IconDelete} alt='Icon Delete' />
            </DeleteModal>
          </ModalCart>
        ))
      }
      <Checked>Checkout</Checked>
    </DivGeneral>

  )
}
