import styles from './styles.module.css'
import Categories from '@/components/Categories/Categories'
import Search from '@/components/Search/Search'
import { CATEGORIES_LIST } from '@/constants'
import { useEffect, useState } from 'react'

const NewsFilters = ({ filters, changeFiltersValue }) => {
  const [categories, setCategories] = useState([])
  async function getCategories() {
    // const { data } = await api.news.getCategories()
    // setCategories(data.categories)
    setCategories(CATEGORIES_LIST)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className={styles.filters}>
      <Categories
        categories={categories}
        onSelect={(value) => changeFiltersValue('selectedCategory', value)}
        selected={filters.selectedCategory}
      />
      <Search
        value={filters.keywords}
        onChange={(value) => changeFiltersValue('keywords', value)}
      />
    </div>
  )
}

export default NewsFilters
