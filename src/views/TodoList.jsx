import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Todo } from '../components/TodoList/Todo'

const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: #5c5c5c;
`
const Title = styled(motion.h2)`
    color: black;
    text-align: center;
    overflow: hidden;
    margin-top: 2rem;
`

export const TodoList = () => {
  return (
    <Container>
      <Title
        initial={{ y: '150%' }}
        animate={{ y: 0 }}
      >
        Todo List React + Context + Reducer + Firebase + Local Storage
      </Title>
      <Todo />
    </Container>
  )
}
