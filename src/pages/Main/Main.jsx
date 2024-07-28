import styles from './styles.module.css'
import api from '@/api'
import { DEFAULT_CATEGORY } from '@/constants'
import useDebounce from '@/hooks/useDebounce'
import useFetch from '@/hooks/useFetch'
import useFilters from '@/hooks/useFilters'
import LatestNews from '@/components/LatestNews/LatestNews'
import NewsByFilters from '@/components/NewsByFilters /NewsByFilters'

function Main() {
  const { filters, changeFiltersValue } = useFilters({
    currentPage: 1,
    selectedCategory: DEFAULT_CATEGORY,
    keywords: '',
  })

  const debouncedKeywords = useDebounce(filters.keywords)

  const {
    data: newsData,
    loading,
    error,
  } = useFetch(api.news.get, {
    ...filters,
    keywords: debouncedKeywords,
  })

  const news = newsData?.news

  return (
    <main className={styles.main}>
      {!error && <LatestNews banners={news} loading={loading} />}
      <NewsByFilters
        news={news}
        filters={filters}
        changeFiltersValue={changeFiltersValue}
        loading={loading}
      />
    </main>
  )
}

export default Main
