import styles from './styles.module.css'
import withSceleton from '@/components/hoc/withSceleton'
import NewsBanner from '@/components/NewsBanner/NewsBanner'
import { INews } from '@/interfaces'

interface Props {
  banners?: INews[]
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  )
}

const BannersListWithSkeleton = withSceleton<Props>(BannersList, 'banner', 10, 'row')

export default BannersListWithSkeleton
