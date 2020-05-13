import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, Typography, Tabs, Tab } from '@material-ui/core'
import TabPanel from './components/TabPanel'
import { Brukere } from './components/Brukere'

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flex: 1,
  },
  page: {
    maxWidth: 800,
    margin: '0 auto',
  },
})

function App() {
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.page}>
          <Typography variant="h1">Tilgangsstyring</Typography>
          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}>
            <Tab label="Brukere" value={0} />
            <Tab label="Roller" value={1} />
            <Tab label="Tilganger" value={2} />
          </Tabs>
          <TabPanel value={selectedTab} index={0}>
            <Brukere />
          </TabPanel>
        </div>
      </div>
    </>
  )
}

export default App
