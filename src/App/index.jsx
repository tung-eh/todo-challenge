import { Flex, Heading, ThemeProvider } from 'theme-ui'
import React from 'react'

import TodoList from './TodoList'
import theme from '../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex m={4} sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <Heading mb={4} sx={{ fontFamily: 'logo', fontSize: 5 }}>
          #todo
        </Heading>
        <TodoList />
      </Flex>
    </ThemeProvider>
  )
}

export default App
