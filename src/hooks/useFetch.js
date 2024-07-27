import { useEffect, useState } from 'react'

const useFetch = (func, params) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const stringParams = params ? new URLSearchParams(params).toString() : ''

  const fetchData = async () => {
    setLoading(true)
    try {
      const { data } = await func(params)
      setData(data)
    } catch (e) {
      setError(e)
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
