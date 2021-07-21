import { Flex, Heading, ThemeProvider } from 'theme-ui'
import React from 'react'

import TodoList from './TodoList'
import theme from '../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        p={36}
        m="auto"
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 700,
        }}
      >
        <Heading mb={56} sx={{ fontFamily: 'logo', fontSize: 5 }}>
          #todo
        </Heading>
        <TodoList />
      </Flex>
    </ThemeProvider>
  )
}

export default App
