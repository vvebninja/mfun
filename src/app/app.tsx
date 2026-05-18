import { useEffect, useState } from 'react'
import { fetchJSON, getErrorMessage } from '../shared/fetchJSON.ts'

interface User { id: string, name: string, email: string }

const usersUrl = 'https://jsonplaceholder.typicode.com/users'

async function getUsers(): Promise<User[]> {
  return fetchJSON<User[]>(usersUrl)
}

export function App() {
  const [users, setUsers] = useState<User[] | []>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getUsers()
      .then(users => setUsers(users))
      .catch((error: unknown) => {
        console
          .error(`Error fetching users: ${getErrorMessage(error)}`)
      })
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <div>Loading users...</div>
  }

  return (
    <div>
      <ul className="grid justify-center gap-4 ">
        {users.map(user => (
          <li key={user.id}>
            <div className="border px-2 py-1">
              <h3>
                {user.name}
              </h3>
              <p>
                {user.email}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
