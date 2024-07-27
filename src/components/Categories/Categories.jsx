import { DEFAULT_CATEGORY } from '@/constants'
import styles from './styles.module.css'

const Categories = ({ categories = [], selected, onSelect }) => {
  return (
    <div className={styles.categories}>
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
}

export default Categories
