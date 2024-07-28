import styles from './styles.module.css'
import NewsItem from '@/components/NewsItem/NewsItem'
import withSceleton from '@/components/hoc/withSceleton'

const NewsList = ({ items = [] }) => (
  <ul className={styles.list}>
    {items.map((item) => (
      <NewsItem key={item.id} item={item} />
    ))}
  </ul>
)

const NewsListWithSceleton = withSceleton(NewsList, 'item', 10)

export default NewsListWithSceleton
