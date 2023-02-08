import { useState } from 'react'
import styled from 'styled-components'
import { TodoContext } from '../../context/todoContext'
import { useTodo } from '../../hooks/useTodo'
import { ListItem } from './ListItem'

const ContainerTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  max-width: 1200px;
  margin-inline: auto;
`
const Input = styled.input`
  background-color: violet;
  border-radius: 5px;
  padding: .5rem;
  border: none;

  width: 400px;
`

export const Todo = () => {
  const [item, setItem] = useState('')

  const { todos, onNewTodo, handleDeleteTodo, handleEditTodo } = useTodo()

  console.log(todos)
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (item === '') return
    onNewTodo({
      name: item,
      id: Date.now()
    })

    setItem('')

    /* await addDoc(TodoCollection, {
      text: item,
      createAt: serverTimestamp()
    })

    setItem('') */
  }

  return (
    <ContainerTodo>
      <TodoContext.Provider value={{ todos, handleDeleteTodo, handleEditTodo }}>
        <form onSubmit={handleSubmit}>
          <Input type='text' placeholder='Todo?' value={item} onChange={(e) => setItem(e.target.value)} />
          <input type='submit' value='Enviar' />
        </form>

        <ListItem />
      </TodoContext.Provider>
    </ContainerTodo>
  )
}
