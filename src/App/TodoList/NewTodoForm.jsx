import { Button, Flex, Input } from 'theme-ui'
import React, { useRef } from 'react'

const NewTodoForm = ({ onSubmit }) => {
  const inputRef = useRef()

  return (
    <Flex
      as="form"
      mb={3}
      sx={{ gap: 20 }}
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(inputRef.current.value)
      }}
    >
      <Input
        sx={{ borderColor: 'gray', fontSize: 1, p: 3 }}
        placeholder="add details"
        ref={inputRef}
        required
      />
      <Button sx={{ fontSize: 1, fontWeight: '600', p: '16px 36px' }}>
        Add
      </Button>
    </Flex>
  )
}

export default NewTodoForm
