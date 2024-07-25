import formatTimeAgo from '@/helpers/formatTimeAgo'
import Image from '@/components/Image/Image'
import styles from './styles.module.css'

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
      <div className={styles.content}>
        <h5 className={styles.title}>{item.title}</h5>
        <div className={styles.caption}>
          {formatTimeAgo(item.published)} by {item.author}
        </div>
      </div>
    </li>
  )
}

export default NewsItem
