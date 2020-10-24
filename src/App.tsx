import { CssBaseline, Tab, Tabs, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Provider } from 'overmind-react'
import React, { useState } from 'react'
import { Brukere } from './components/Brukere'
import { Rettigheter } from './components/Rettigheter'
import { Roller } from './components/Roller'
import TabPanel from './components/TabPanel'
import { overmind } from './overmind'

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
    <Provider value={overmind}>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.page}>
          <Typography variant="h1">Tilgangsstyring</Typography>
          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}>
            <Tab label="Brukere" value={0} />
            <Tab label="Roller" value={1} />
            <Tab label="Rettigheter" value={2} />
          </Tabs>
          <TabPanel value={selectedTab} index={0}>
            <Brukere />
          </TabPanel>
          <TabPanel value={selectedTab} index={1}>
            <Roller />
          </TabPanel>
          <TabPanel value={selectedTab} index={2}>
            <Rettigheter />
          </TabPanel>
        </div>
      </div>
    </Provider>
  )
}

export default App
