import React, { useState } from 'react'

import DeleteAllButton from './DeleteAllButton'
import List from './List'
import NewTodoForm from './NewTodoForm'
import Tabs from './Tabs'

let countItem = 5

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      details: 'Do coding challenge 1',
      done: false,
      id: 0,
    },
    {
      details: 'Do coding challenge 2',
      done: false,
      id: 1,
    },
    { details: 'Eat', done: true, id: 2 },
    { details: 'Sleep', done: true, id: 3 },
    { details: 'Code', done: true, id: 4 },
  ])

  const addTodo = (todo) =>
    setTodos([{ details: todo, done: false, id: countItem++ }, ...todos])
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoState = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)

    setTodos([
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1),
    ])
  }

  const deleteCompletedTodos = () =>
    setTodos(todos.filter((todo) => !todo.done))

  const tabs = [
    {
      label: 'All',
      content: (
        <>
          <NewTodoForm onSubmit={addTodo} />
          <List
            items={todos}
            onToggleItemState={toggleTodoState}
            onDeleteItem={deleteTodo}
          />
        </>
      ),
    },
    {
      label: 'Active',
      content: (
        <>
          <NewTodoForm onSubmit={addTodo} />
          <List
            items={todos.filter((item) => !item.done)}
            onToggleItemState={toggleTodoState}
            onDeleteItem={deleteTodo}
          />
        </>
      ),
    },
    {
      label: 'Completed',
      content: (
        <>
          <List
            items={todos.filter((item) => item.done)}
            onToggleItemState={toggleTodoState}
            onDeleteItem={deleteTodo}
          />
          {todos.some((item) => item.done) && (
            <DeleteAllButton onClick={deleteCompletedTodos} />
          )}
        </>
      ),
    },
  ]

  return <Tabs items={tabs} />
}

export default TodoList
