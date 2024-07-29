import formatTimeAgo from '@/helpers/formatTimeAgo'
import styles from './styles.module.css'
import Image from '@/components/Image/Image'
import { INews } from '@/interfaces'

interface Props {
  item: INews
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Image src={item.image} />
      <h4 className={styles.title}>{item.title}</h4>
      <div className={styles.caption}>
        {formatTimeAgo(item.published)} by {item.author}
      </div>
    </div>
  )
}

export default NewsBanner
