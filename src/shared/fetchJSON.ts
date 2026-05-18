export class HTTPError extends Error {
  constructor(message: string, public response: Response) {
    super(message)
    this.name = 'HTTPError'
  }

  get status() {
    return this.response.status
  }
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof HTTPError) {
    return `HTTP ${error.status}: ${error.message}`
  }

  if (error instanceof Error) {
    return error.message
  }

  return String(error)
}

export async function fetchJSON<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json', // Accept instead of Content-Type is more correct for GET requests
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new HTTPError(`HTTP ${response.status}`, response)
  }

  return response.json() as Promise<T>
}
