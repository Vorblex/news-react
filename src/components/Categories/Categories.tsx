import { DEFAULT_CATEGORY } from '@/constants'
import styles from './styles.module.css'
import { forwardRef } from 'react'

const Categories = forwardRef(({ categories = [], selected, onSelect }, ref) => {
  return (
    <div ref={ref} className={styles.categories}>
      <button
        type="button"
        onClick={() => onSelect(DEFAULT_CATEGORY)}
        className={[selected === DEFAULT_CATEGORY ? styles.active : styles.item]}>
        {DEFAULT_CATEGORY}
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={[selected === category ? styles.active : styles.item]}>
          {category}
        </button>
      ))}
    </div>
  )
})

Categories.displayName = 'Categories'

export default Categories
