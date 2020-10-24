import { AsyncAction } from 'overmind'

export const addUser: AsyncAction = async ({
  state: { users },
  effects: { saveUser },
}) => {
  const userName = prompt('Brukernavn')
  if (userName) {
    const id = await saveUser({ userName })
    users[id] = { id, userName }
  }
}

export const addRole: AsyncAction = async ({
  state: { roles },
  effects: { saveRole },
}) => {
  const name = prompt('Rollenavn')
  if (name) {
    const id = await saveRole({ name })
    roles[id] = { id, name }
  }
}

export const addPermission: AsyncAction = async ({
  state: { permissions },
  effects: { savePermission },
}) => {
  const operations = ''
  const resources = ''
  const id = await savePermission({ operations, resources })
  permissions[id] = { id, operations, resources }
}

export const loadData: AsyncAction = async ({
  state,
  effects: { loadUsers, loadRoles, loadPermissions },
}) => {
  const users = await loadUsers()
  const roles = await loadRoles()
  const permissions = await loadPermissions()
  state.users = users
  state.roles = roles
  state.permissions = permissions
}
