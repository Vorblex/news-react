import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './styles.module.css'
import NewsBanner from '@/components/NewsBanner/NewsBanner'
import { useEffect, useState } from 'react'
import api from '@/api'
import NewsList from '@/components/NewsList/NewsList'
import Skeleton from '@/components/Skeleton/Skeleton'

function Main() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  async function getNews() {
    setLoading(true)
    const { data } = await api.news.getAll()
    setNews(data.news)
    setLoading(false)
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <main>
      {!loading ? <NewsBanner item={news[0]} /> : <Skeleton type="banner" />}
      {!loading ? <NewsList items={news} /> : <Skeleton count={10} type="item" />}
    </main>
  )
}

export default Main
