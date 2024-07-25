import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './styles.module.css'
import NewsBanner from '@/components/NewsBanner/NewsBanner'
import { useEffect, useState } from 'react'
import api from '@/api'
import NewsList from '@/components/NewsList/NewsList'

function Main() {
  const [news, setNews] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await api.news.getAll()
      setNews(data.news)
    })()
  }, [])

  return (
    <main>
      {news.length > 0 && <NewsBanner item={news[0]} />}
      <NewsList items={news} />
    </main>
  )
}

export default Main
