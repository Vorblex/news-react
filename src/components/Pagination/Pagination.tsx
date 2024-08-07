import { IPaginationProps } from '@/interfaces'
import styles from './styles.module.css'

type TDirections = 'prev' | 'next'

const Pagination = ({ currentPage, totalPages = 10, onPageChange }: IPaginationProps) => {
  const getActiveClass = (index: number) => {
    return currentPage === index + 1 ? styles.active : ''
  }

  const onShiftPage = (direction: TDirections) => {
    if (direction === 'prev' && currentPage > 1) {
      onPageChange(currentPage - 1)
    }

    if (direction === 'next' && currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onShiftPage('prev')}
        disabled={currentPage === 1}
        type="button"
        className={styles.arrow}>
        {'<'}
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          type="button"
          className={getActiveClass(index)}
          onClick={() => onPageChange(index + 1)}>
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onShiftPage('next')}
        disabled={currentPage === totalPages}
        type="button"
        className={styles.arrow}>
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
