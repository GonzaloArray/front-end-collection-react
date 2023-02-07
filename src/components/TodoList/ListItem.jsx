import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'

const ContainerList = styled.div`
    background-color: wheat;
    width: 400px;
    height: 400px;
    margin-inline: auto;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Title = styled.h2`
    text-align: center;
    margin-top: 1rem;
`

const List = styled.ul`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ListItem = ({ todoList, setTodoList }) => {
  return (
    <ContainerList>
      <Title>List Todo</Title>

      <List>
        {
          todoList.map(todo => (
            <Item key={todo.id} id={todo.id} todoList={todoList} setTodoList={setTodoList}>{todo.name}</Item>
          ))
        }
      </List>

    </ContainerList>
  )
}