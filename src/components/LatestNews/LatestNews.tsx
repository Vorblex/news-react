import BannersList from '@/components/BannersList /BannersList'
import styles from './styles.module.css'
import useFetch from '@/hooks/useFetch'
import api from '@/api'

const LatestNews = () => {
  const { data, loading, error } = useFetch(api.news.getLatest)

  const news = data?.news

  return (
    <section className={styles.section}>
      {!error && <BannersList banners={news} loading={loading} />}
    </section>
  )
}

export default LatestNews
