import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export const todoReducer = (initialState = [], action) => {
  const q = collection(db, 'message')

  switch (action.type) {
    case '[TODO] Load Todos':
      return action.payload
    case '[TODO] Add Todo':
      addDoc(q, {
        name: action.payload.name,
        id: action.payload.id,
        createAt: serverTimestamp()
      })
      return [...initialState]
    case '[TODO] Remove Todo':
      deleteDoc(doc(db, 'message', action.payload))
      return initialState.filter(td => td.id !== action.payload)
    case '[TODO] Toggle Todo':
      return initialState.map(td => {
        if (td.id === action.payload) {
          return {
            ...td,
            done: !td.done
          }
        }

        return td
      })
    case '[TODO] Edit Todo':
      const queryUpdate = doc(db, 'message', action.payload.id)
      updateDoc(queryUpdate, {
        name: action.payload.nameUpdate
      })
      return initialState.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.nameUpdate }
          : todo
      )

    default:
      return initialState
  }
}
