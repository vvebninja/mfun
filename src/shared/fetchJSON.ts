export class HTTPError extends Error {
  response: Response
  constructor(message: string, response: Response) {
    super(message)
    this.name = 'HTTPError'
    this.response = response
  }

  get status() {
    return this.response.status
  }
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof HTTPError) {
    return ` ${error.status}: ${error.name}`
  }

  if (error instanceof Error) {
    return error.message
  }

  return String(error)
}

export function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError'
}

export async function fetchJSON<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new HTTPError(String(response.status), response)
  }

  return response.json() as Promise<T>
}
