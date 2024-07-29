import { useEffect, useState } from 'react'

interface FetchFunction<P, T> {
  (params?: P): Promise<T>
}
interface UseFetchResult<T> {
  data: T | null | undefined
  loading: boolean
  error: Error | null
}

const useFetch = <T, P>(func: FetchFunction<P, T>, params?: P): UseFetchResult<T> => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [data, setData] = useState<T | null>(null)
  const stringParams = params ? new URLSearchParams(params).toString() : ''

  const fetchData = async () => {
    setLoading(true)
    try {
      const result = await func(params)
      setData(result)
    } catch (e) {
      setError(e as Error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [func, stringParams])

  return { loading, data, error }
}

export default useFetch
