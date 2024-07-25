import formatTimeAgo from '@/helpers/formatTimeAgo'
import styles from './styles.module.css'

const Image = ({ src }) => {
  return (
    <div className={styles.wrapper}>
      {src && <img className={styles.image} src={src} alt="news" />}
    </div>
  )
}

export default Image
