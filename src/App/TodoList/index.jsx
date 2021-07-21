import React from 'react'

import Tabs from './Tabs'

const TodoList = () => {
  const tabs = [
    { label: 'All', content: 'All todos' },
    { label: 'Active', content: 'Active todos' },
    { label: 'Completed', content: 'Completed todos' },
  ]

  return <Tabs items={tabs} />
}

export default TodoList
