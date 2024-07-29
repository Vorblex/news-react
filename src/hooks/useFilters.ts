import { IFilters } from '@/interfaces'
import { useState } from 'react'

const useFilters = (initialState: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initialState)

  const changeFiltersValue = (key: string, value: string | null | number) => {
    setFilters({ ...filters, [key]: value })
  }

  return { filters, changeFiltersValue }
}

export default useFilters
