import { Box, Button, Checkbox, Flex, IconButton, Label, Text } from 'theme-ui'
import { MdDelete } from 'react-icons/md'
import React from 'react'

const TodoItem = ({ details, done, id, onToggleState, onDelete }) => (
  <Flex mb={2} sx={{ alignItems: 'center', justifyItems: 'space-between' }}>
    <Label sx={{ alignItems: 'center' }}>
      <Checkbox checked={done} onChange={onToggleState} />
      <Text sx={{ fontWeight: '500', textDecoration: done && 'line-through' }}>
        {details}
      </Text>
    </Label>
    <IconButton sx={{ color: 'gray' }} onClick={onDelete}>
      <MdDelete size="1.5em" />
    </IconButton>
  </Flex>
)

const List = ({
  onAddItem,
  items,
  onDeleteItem,
  onToggleItemState,
  onDeleteCompletedItems,
}) => {
  return (
    <>
      {items.length ? (
        <>
          {items.map((item) => (
            <TodoItem
              key={item.id}
              {...item}
              onToggleState={() => onToggleItemState(item.id)}
              onDelete={() => onDeleteItem(item.id)}
            />
          ))}
          {onDeleteCompletedItems && (
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
                onClick={onDeleteCompletedItems}
              >
                <MdDelete /> delete all
              </Button>
            </Flex>
          )}
        </>
      ) : (
        <Box sx={{ textAlign: 'center', color: 'gray', fontSize: 1 }}>
          There is nothing here
        </Box>
      )}
    </>
  )
}

export default List
