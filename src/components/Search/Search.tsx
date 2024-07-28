import styles from './styles.module.css'

const Search = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        placeholder="search"
        type="text"
      />
    </div>
  )
}

export default Search
