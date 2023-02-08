import { collection, onSnapshot, query } from 'firebase/firestore'
import { useState, useRef, useEffect, useReducer } from 'react'
import { db } from '../firebase-config'
import { todoReducer } from '../reducer/useReducer'

const todoFromStorage = JSON.parse(localStorage.getItem('todo') || '[]')

export const useTodo = () => {
  const initialTodoRef = useRef(todoFromStorage)
  const [initialTodo, setInitialTodo] = useState(initialTodoRef.current)

  useEffect(() => {
    const q = query(collection(db, 'message'))
    onSnapshot(q, (querySnapshot) => {
      const todo = []
      querySnapshot.forEach((doc) => {
        todo.push({
          name: doc.data().name,
          idTodo: doc.data().id,
          createAt: doc.data().createAt,
          id: doc.id
        })
      })

      localStorage.setItem('todo', JSON.stringify(todo))
      initialTodoRef.current = todo
      setInitialTodo(todo)

      dispatch({
        type: '[TODO] Load Todos',
        payload: todo
      })
    })
  }, [])

  const [todos, dispatch] = useReducer(todoReducer, initialTodo)

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
