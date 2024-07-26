import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './styles.module.css'
import NewsBanner from '@/components/NewsBanner/NewsBanner'
import { useEffect, useState } from 'react'
import api from '@/api'
import NewsList from '@/components/NewsList/NewsList'
import Skeleton from '@/components/Skeleton/Skeleton'
import Pagination from '@/components/Pagination/Pagination'

function Main() {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const totalPages = 10

  async function getCategories() {
    const { data } = await api.news.getCategories()
    setCategories(data.categories)
  }

  async function getNews() {
    setLoading(true)
    const { data } = await api.news.get(currentPage)
    setNews(data.news)
    setLoading(false)
  }

  useEffect(() => {
    getNews()
  }, [currentPage])

  // useEffect(() => {
  //   getCategories()
  // }, [])

  return (
    <main>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      {!loading ? <NewsBanner item={news[0]} /> : <Skeleton type="banner" />}
      {!loading ? <NewsList items={news} /> : <Skeleton count={10} type="item" />}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </main>
  )
}

export default Main
