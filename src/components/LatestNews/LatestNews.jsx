import BannersList from '@/components/BannersList /BannersList'
import styles from './styles.module.css'

const LatestNews = ({ banners = [], loading }) => {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} loading={loading} />
    </section>
  )
}

export default LatestNews
