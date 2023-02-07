import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

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

export const Item = ({ id, children, todoList, setTodoList }) => {
  const [modal, setModal] = useState(false)
  const [item, setItem] = useState(children)

  const handleClick = (id) => {
    const filterTodo = todoList.filter(todo => todo.id !== id)
    setTodoList(filterTodo)
  }

  const handleEdit = (e) => {
    e.preventDefault()

    const valor = todoList.find((todo) => todo.id === id)
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...valor, name: item }
      }
      return todo
    })
    setTodoList(updatedTodoList)

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
