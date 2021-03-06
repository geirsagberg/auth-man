import {
  Button,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Box,
} from '@material-ui/core'
import React, { FC } from 'react'
import { useOvermind } from '../overmind'
import { map } from 'lodash-es'

export const Brukere: FC = () => {
  const {
    actions: { addUser },
    state: { users },
  } = useOvermind()

  const onClick = () => addUser()

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClick}>
        Legg til bruker
      </Button>
      <Box py={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Brukernavn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {map(users, (user) => (
              <TableRow key={user.id}>
                <TableCell>{user.userName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  )
}
