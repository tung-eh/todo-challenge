import { Box, Flex, Grid } from 'theme-ui'
import React, { useState } from 'react'

const TabItem = ({ label, active, onClick }) => {
  return (
    <Flex
      mb="-3px"
      sx={{
        flexDirection: 'column',
        width: 90,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Box mb={2} sx={{ textAlign: 'center' }}>
        {label}
      </Box>
      <Box
        sx={{
          borderTop: '4px solid',
          borderColor: active ? 'primary' : 'transparent',
          borderBottom: '3px solid transparent',
          borderRadius: 50,
        }}
      />
    </Flex>
  )
}

const Tabs = ({ items, defaultIndex = 0 }) => {
  const [tabIndex, setTabIndex] = useState(defaultIndex)
  const currentTab = items[tabIndex]

  return (
    <>
      <Grid
        sx={{
          width: '100%',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'gray',
          fontWeight: '600',
          fontSize: '1',
        }}
      >
        {items.map(({ label }, index) => (
          <TabItem
            label={label}
            active={tabIndex === index}
            onClick={() => setTabIndex(index)}
          />
        ))}
      </Grid>
      {currentTab.content}
    </>
  )
}

export default Tabs
