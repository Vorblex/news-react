import styles from './styles.module.css'
import Categories from '@/components/Categories/Categories'
import Search from '@/components/Search/Search'
import Slider from '@/components/Slider/Slider'
import { CATEGORIES_LIST } from '@/constants'
import { CategoriesType, IFilters } from '@/interfaces'
import { useEffect, useState } from 'react'

interface Props {
  filters: IFilters
  changeFiltersValue: (key: string, value: string | number | null) => void
}

const NewsFilters = ({ filters, changeFiltersValue }: Props) => {
  const [categories, setCategories] = useState<CategoriesType[]>([])
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
      <Slider step={300}>
        <Categories
          categories={categories}
          onSelect={(value) => changeFiltersValue('selectedCategory', value)}
          selected={filters.selectedCategory}
        />
      </Slider>
      <Search
        value={filters.keywords}
        onChange={(value) => changeFiltersValue('keywords', value)}
      />
    </div>
  )
}

export default NewsFilters
