import styles from './styles.module.css'
import NewsList from '@/components/NewsList/NewsList'
import NewsFilters from '@/components/NewsFilters/NewsFilters'
import { DEFAULT_CATEGORY, TOTAL_PAGES } from '@/constants'
import useFilters from '@/hooks/useFilters'
import useDebounce from '@/hooks/useDebounce'
import useFetch from '@/hooks/useFetch'
import api from '@/api'
import PaginationWrapper from '@/components/PaginationWrapper/PaginationWrapper'
import { NewsApiResponse, ParamsType } from '@/interfaces'

const NewsByFilters = () => {
  const { filters, changeFiltersValue } = useFilters({
    currentPage: 1,
    selectedCategory: DEFAULT_CATEGORY,
    keywords: '',
  })

  const debouncedKeywords = useDebounce(filters.keywords)

  const {
    data: newsData,
    loading,
    // error,
  } = useFetch<NewsApiResponse, ParamsType>(api.news.get, {
    ...filters,
    keywords: debouncedKeywords,
  })

  const news = newsData?.news

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFiltersValue={changeFiltersValue} />
      <PaginationWrapper
        currentPage={filters.currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={(page) => changeFiltersValue('currentPage', page)}
        top
        bottom>
        <NewsList loading={loading} items={news && news} />
      </PaginationWrapper>
    </section>
  )
}

export default NewsByFilters
