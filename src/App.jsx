import { Box, Heading, Paragraph, ThemeProvider } from 'theme-ui'
import React from 'react'

import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box m={10}>
        <Heading sx={{ fontFamily: 'logo' }}>Logo</Heading>
        <Heading color="tomato">Hello world</Heading>
        <Paragraph>This is a paragraph</Paragraph>
      </Box>
    </ThemeProvider>
  )
}

export default App
