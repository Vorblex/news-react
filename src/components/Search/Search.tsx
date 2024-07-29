import styles from './styles.module.css'

interface Props {
  value: string
  onChange: (value: string) => void
}

const Search = ({ value, onChange }: Props) => {
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
