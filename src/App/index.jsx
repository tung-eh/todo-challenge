import { Box, Heading, ThemeProvider } from 'theme-ui'
import React from 'react'

import TodoList from './TodoList'
import theme from '../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        p={36}
        m="auto"
        sx={{
          maxWidth: 700,
        }}
      >
        <Heading
          mb={56}
          sx={{ fontFamily: 'logo', fontSize: 5, textAlign: 'center' }}
        >
          #todo
        </Heading>
        <TodoList />
      </Box>
    </ThemeProvider>
  )
}

export default App
