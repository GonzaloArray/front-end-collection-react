import React from 'react'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import Product1 from '../../../assets/images/ecommerce/image-product-1.jpg'
import Product2 from '../../../assets/images/ecommerce/image-product-2.jpg'
import Product3 from '../../../assets/images/ecommerce/image-product-3.jpg'
import Product4 from '../../../assets/images/ecommerce/image-product-4.jpg'

const ImgSection = styled.img`
  width: 100%;
  @media (min-width: 768px) {
      border-radius: 1rem;
      height: 400px;
      overflow: none;
  }
  @media (min-width: 1400px) {
      height: 500px;
  }
`
const SectionProduct = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

export const ProductImgSection = ({ count, setImgModal, imgModal }) => {
  const productArray = [
    { imgurl: Product1, id: 1 },
    { imgurl: Product2, id: 2 },
    { imgurl: Product3, id: 3 },
    { imgurl: Product4, id: 4 }
  ]

  const handleImg = () => {
    setImgModal(!imgModal)
  }

  return (
    <>
      <ImgSection
        src={productArray[count].imgurl} alt='Icono Producto1'
      />
      <MediaQuery minWidth={768}>
        <SectionProduct>
          {
            productArray.map(e => (
              <img
                key={e.id}
                src={e.imgurl}
                alt='Icono Producto1'
                style={{
                  width: '5rem',
                  borderRadius: '1rem',
                  opacity: e.id - 1 === count ? '.6' : '1',
                  cursor: 'pointer'
                }}
                onClick={handleImg}
              />
            ))
          }

        </SectionProduct>
      </MediaQuery>
    </>
  )
}
