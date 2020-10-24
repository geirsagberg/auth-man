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

export const Roller: FC = () => {
  const {
    actions: { addRole },
    state: { roles },
  } = useOvermind()

  const onClick = () => addRole()

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClick}>
        Legg til rolle
      </Button>
      <Box py={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Navn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {map(roles, (role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  )
}
