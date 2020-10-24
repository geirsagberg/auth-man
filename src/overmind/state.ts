export type User = {
  id: string
  userName: string
}

export type Role = {
  id: string
  name: string
}

export type Permission = {
  id: string
  operations: any
  resources: any
}

export type State = {
  user?: User
  users: Dictionary<User>
  roles: Dictionary<Role>
  permissions: Dictionary<Permission>
  isAdmin: boolean
}

export const state: State = {
  users: {},
  roles: {},
  permissions: {},
  isAdmin: false,
}
