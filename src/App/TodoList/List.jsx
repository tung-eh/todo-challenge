import { Box, Checkbox, Flex, IconButton, Label, Text } from 'theme-ui'
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

const List = ({ onAddItem, items, onDeleteItem, onToggleItemState }) => {
  return items.length ? (
    <>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onToggleState={() => onToggleItemState(item.id)}
          onDelete={() => onDeleteItem(item.id)}
        />
      ))}
    </>
  ) : (
    <Box sx={{ textAlign: 'center', color: 'gray', fontSize: 1 }}>
      There is nothing here
    </Box>
  )
}

export default List
