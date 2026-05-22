import { fetchJSON } from './fetch-json.ts'

export interface User {
  id: string
  name: string
  email: string
}

export const usersUrl = 'https://jsonplaceholder.typicode.com/users'

export async function getUsers(): Promise<User[]> {
  return fetchJSON<User[]>(usersUrl)
}
