import { Box } from '@material-ui/core'
import React, { FC } from 'react'

const TabPanel: FC<{ value: number; index: number }> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box py={2}>{children}</Box>}
    </div>
  )
}

export default TabPanel
