import Dexie from 'dexie'

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
