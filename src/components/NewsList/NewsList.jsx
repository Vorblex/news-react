import formatTimeAgo from '@/helpers/formatTimeAgo'
import Image from '@/components/Image/Image'
import styles from './styles.module.css'
import NewsItem from '@/components/NewsItem/NewsItem'

const NewsList = ({ items }) => (
  <ul className={styles.list}>
    {items.map((item) => (
      <NewsItem key={item.id} item={item} />
    ))}
  </ul>
)

export default NewsList
