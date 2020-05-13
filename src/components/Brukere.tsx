import { Button } from '@material-ui/core'
import React, { FC } from 'react'
import { useOvermind } from '../overmind'

export const Brukere: FC = () => {
  const {
    actions: { addUser },
  } = useOvermind()
  return (
    <div>
      <Button variant="contained" color="primary" onClick={addUser}>
        Add user
      </Button>
    </div>
  )
}
