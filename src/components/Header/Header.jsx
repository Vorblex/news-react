import formatDate from '@/helpers/formatDate'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>News</h1>
          <p className={styles.date}>{formatDate(new Date())}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
