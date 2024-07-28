import styles from './styles.module.css'
import Pagination from '@/components/Pagination/Pagination'
import NewsList from '@/components/NewsList/NewsList'
import NewsFilters from '@/components/NewsFilters/NewsFilters'
import { TOTAL_PAGES } from '@/constants'

const NewsByFilters = ({ filters, changeFiltersValue, loading, news }) => {
  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFiltersValue={changeFiltersValue} />
      <Pagination
        currentPage={filters.currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={(value) => changeFiltersValue('currentPage', value)}
      />
      <NewsList loading={loading} items={news && news} />
      <Pagination
        currentPage={filters.currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={(value) => changeFiltersValue('currentPage', value)}
      />
    </section>
  )
}

export default NewsByFilters
