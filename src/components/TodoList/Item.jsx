import { motion } from 'framer-motion'
import { useContext, useState } from 'react'

import styled from 'styled-components'
import { TodoContext } from '../../context/todoContext'

const ItemChildren = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: black;
`
const DivFlex = styled.div`
  display: flex;
  gap: .5rem;
`
const Button = styled.button`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Item = ({ id, children }) => {
  const { handleDeleteTodo, handleEditTodo } = useContext(TodoContext)

  const [modal, setModal] = useState(false)
  const [item, setItem] = useState(children)

  const handleClick = (id) => {
    handleDeleteTodo(id)
  }

  const handleEdit = (e) => {
    e.preventDefault()

    handleEditTodo(id, item)

    setModal(!modal)
  }

  return (
    <ItemChildren>
      {
        modal
          ? (
            <form onSubmit={handleEdit}>
              <input type='text' defaultValue={item} onChange={(e) => setItem(e.target.value)} />
              <input type='submit' value='Enviar' />
            </form>
            )
          : (
            <>
              {children}
              <DivFlex>
                <Button onClick={() => handleClick(id)}>Delete</Button>
                <Button onClick={() => setModal(!modal)}>Edit</Button>
              </DivFlex>
            </>
            )
      }

    </ItemChildren>
  )
}
