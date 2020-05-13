type User = {
  id: string
  userName: string
}

type State = {
  user?: User
  users: Dictionary<User>
}

export const state: State = {
  users: {},
}
