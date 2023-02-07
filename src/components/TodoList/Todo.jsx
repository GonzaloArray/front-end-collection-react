import { useState } from 'react'
import styled from 'styled-components'
import { TodoContext } from '../../context/todoContext'
import { TODODATA } from '../../Data/TodoData/Todo'
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
  const [todoList, setTodoList] = useState(TODODATA)

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodoList([...todoList, {
      id: Date.now(),
      name: item
    }])

    setItem('')
  }

  return (
    <ContainerTodo>
      <TodoContext.Provider value={todoList}>
        <form onSubmit={handleSubmit}>
          <Input type='text' placeholder='Todo?' value={item} onChange={(e) => setItem(e.target.value)} />
          <input type='submit' value='Enviar' />
        </form>

        <ListItem setTodoList={setTodoList} />
      </TodoContext.Provider>
    </ContainerTodo>
  )
}
