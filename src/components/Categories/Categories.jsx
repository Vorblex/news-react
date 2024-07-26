import styles from './styles.module.css'

const Categories = ({ categories = [], selected, onSelect }) => {
  return (
    <div className={styles.categories}>
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
