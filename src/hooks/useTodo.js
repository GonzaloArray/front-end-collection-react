import { useEffect, useReducer } from 'react'
import { todoReducer } from '../reducer/useReducer'

export const useTodo = () => {
  const initialTodo = []

  const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || initialTodo
  }

  const [todos, dispatch] = useReducer(todoReducer, initialTodo, init)

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos))
  }, [todos])

  const onNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id
    }

    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id
    }

    dispatch(action)
  }

  const handleEditTodo = (id, nameUpdate) => {
    const action = {
      type: '[TODO] Edit Todo',
      payload: {
        id,
        nameUpdate
      }
    }

    dispatch(action)
  }

  return {
    todos,
    onNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    handleEditTodo
  }
}
