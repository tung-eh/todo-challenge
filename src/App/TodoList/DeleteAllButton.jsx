import { Button, Flex } from 'theme-ui'
import React from 'react'
import { MdDelete } from 'react-icons/md'
const DeleteAllButton = ({ onClick }) => (
  <Flex sx={{ justifyContent: 'flex-end', pt: 3 }}>
    <Button
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        bg: 'danger',
        fontSize: 0,
        p: '12px 24px',
      }}
      onClick={onClick}
    >
      <MdDelete /> delete all
    </Button>
  </Flex>
)

export default DeleteAllButton
