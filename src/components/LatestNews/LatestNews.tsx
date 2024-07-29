import BannersList from '@/components/BannersList /BannersList'
import styles from './styles.module.css'
import useFetch from '@/hooks/useFetch'
import api from '@/api'
import { NewsApiResponse } from '@/interfaces'

const LatestNews = () => {
  const { data, loading, error } = useFetch<NewsApiResponse, null>(api.news.getLatest)
  const news = data?.news

  return (
    <section className={styles.section}>
      {!error && <BannersList banners={news} loading={loading} />}
    </section>
  )
}

export default LatestNews
