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
