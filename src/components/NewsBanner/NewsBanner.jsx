import formatTimeAgo from '@/helpers/formatTimeAgo'
import styles from './styles.module.css'
import Image from '@/components/Image/Image'

const NewsBanner = ({ item }) => {
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
