import { useEffect, useState } from 'react'

export function useFetching<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        const json = await response.json()
        setData(json)
        return response.json()
      }
      catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching: ', error.message)
        }
        else {
          setError(String(error))
        }
      }
      finally {
        setIsLoading(false)
      }
    })()
  }, [url])

  return {
    data,
    isLoading,
    error,
  }
}
