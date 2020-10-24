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

export const Rettigheter: FC = () => {
  const {
    actions: { addPermission },
    state: { permissions },
  } = useOvermind()

  const onClick = () => addPermission()

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClick}>
        Legg til rettighet
      </Button>
      <Box py={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Brukernavn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {map(permissions, (permission) => (
              <TableRow key={permission.id}>
                <TableCell>{permission.operations}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  )
}
