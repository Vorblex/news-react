import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './styles.module.css'
import NewsBanner from '@/components/NewsBanner/NewsBanner'
import { useEffect, useState } from 'react'
import api from '@/api'
import NewsList from '@/components/NewsList/NewsList'
import Skeleton from '@/components/Skeleton/Skeleton'
import Pagination from '@/components/Pagination/Pagination'
import { CATEGORIES_LIST, DEFAULT_CATEGORY, TOTAL_PAGES } from '@/constants'
import Categories from '@/components/Categories/Categories'
import Search from '@/components/Search/Search'
import useDebounce from '@/hooks/useDebounce'
import useFetch from '@/hooks/useFetch'
import useFilters from '@/hooks/useFilters'

function Main() {
  const [categories, setCategories] = useState([])

  const { filters, changeFiltersValue } = useFilters({
    currentPage: 1,
    selectedCategory: DEFAULT_CATEGORY,
    keywords: '',
  })
  const debouncedKeywords = useDebounce(filters.keywords)

  async function getCategories() {
    // const { data } = await api.news.getCategories()
    // setCategories(data.categories)
    setCategories(CATEGORIES_LIST)
  }

  useEffect(() => {
    getCategories()
  }, [])

  const {
    data: newsData,
    loading,
    error,
  } = useFetch(api.news.get, {
    currentPage: filters.currentPage,
    selectedCategory: filters.selectedCategory,
    keywords: debouncedKeywords,
  })

  const news = newsData?.news

  return (
    <>
      <Categories
        categories={categories}
        onSelect={(value) => changeFiltersValue('selectedCategory', value)}
        selected={filters.selectedCategory}
      />
      <main>
        <div className="container">
          <Search
            value={filters.keywords}
            onChange={(value) => changeFiltersValue('keywords', value)}
          />
          <Pagination
            currentPage={filters.currentPage}
            totalPages={TOTAL_PAGES}
            onPageChange={(value) => changeFiltersValue('currentPage', value)}
          />
          <NewsBanner loading={loading} item={news?.length > 0 && news[0]} />
          <NewsList loading={loading} items={news && news} />
          <Pagination
            currentPage={filters.currentPage}
            totalPages={TOTAL_PAGES}
            onPageChange={(value) => changeFiltersValue('currentPage', value)}
          />
        </div>
      </main>
    </>
  )
}

export default Main
