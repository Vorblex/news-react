import { DEFAULT_CATEGORY } from '@/constants'
import { useState } from 'react'

const useFilters = (initialState) => {
  const [filters, setFilters] = useState(initialState)

  const changeFiltersValue = (key, value) => {
    setFilters({ ...filters, [key]: value })
  }

  return { filters, changeFiltersValue }
}

export default useFilters
