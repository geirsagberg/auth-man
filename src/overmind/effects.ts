import Dexie from 'dexie'
import { User, Role, Permission } from './state'
import { keyBy } from 'lodash-es'
import { Omit } from '@material-ui/core'

const db = new Dexie('auth-man')
db.version(1).stores({
  users: '++id, userName',
  roles: '++id, name',
  permissions: '++id, operations, resources',
})

export const saveUser = async ({ userName }: { userName: string }) => {
  const id = await db.table('users').add({ userName })
  return id.toString()
}

export const saveRole = async ({ name }: { name: string }) => {
  const id = await db.table('roles').add({ name })
  return id.toString()
}

export const savePermission = async ({
  operations,
  resources,
}: Omit<Permission, 'id'>) => {
  const id = await db.table('permissions').add({ operations, resources })
  return id.toString()
}

export const loadUsers = async () => {
  return await db
    .table('users')
    .toArray<Dictionary<User>>((users) => keyBy(users, 'id'))
}

export const loadRoles = async () => {
  return await db
    .table('roles')
    .toArray<Dictionary<Role>>((roles) => keyBy(roles, 'id'))
}

export const loadPermissions = async () => {
  return await db
    .table('permissions')
    .toArray<Dictionary<Permission>>((permissions) => keyBy(permissions, 'id'))
}
