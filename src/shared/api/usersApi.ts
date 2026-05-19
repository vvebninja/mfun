import { fetchJSON } from '../fetchJSON.ts'

export interface User { id: string, name: string, email: string }

const usersUrl = 'https://jsonplaceholder.typicode.com/users'

export async function getUsers(): Promise<User[]> {
  return fetchJSON<User[]>(usersUrl)
}
