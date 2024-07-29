import styles from './styles.module.css'
import NewsItem from '@/components/NewsItem/NewsItem'
import withSceleton from '@/components/hoc/withSceleton'
import { INews } from '@/interfaces'

interface Props {
  items?: INews[]
}

const NewsList = ({ items }: Props) => (
  <ul className={styles.list}>
    {items?.map((item) => (
      <NewsItem key={item.id} item={item} />
    ))}
  </ul>
)

const NewsListWithSceleton = withSceleton<Props>(NewsList, 'item', 10)

export default NewsListWithSceleton
