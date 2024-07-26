import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './styles.module.css'
import NewsBanner from '@/components/NewsBanner/NewsBanner'
import { useEffect, useState } from 'react'
import api from '@/api'
import NewsList from '@/components/NewsList/NewsList'
import Skeleton from '@/components/Skeleton/Skeleton'
import Pagination from '@/components/Pagination/Pagination'
import { CATEGORIES_LIST, DEFAULT_CATEGORY } from '@/constants'
import Categories from '@/components/Categories/Categories'

function Main() {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const totalPages = 10

  async function getCategories() {
    // const { data } = await api.news.getCategories()
    // setCategories(data.categories)
    setCategories([DEFAULT_CATEGORY, ...CATEGORIES_LIST])
  }

  async function getNews() {
    setLoading(true)
    const { data } = await api.news.get(currentPage, selectedCategory)
    setNews(data.news)
    setLoading(false)
  }

  useEffect(() => {
    getNews()
  }, [currentPage, selectedCategory])

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <Categories
        categories={categories}
        onSelect={setSelectedCategory}
        selected={selectedCategory}
      />
      <main>
        <div className="container">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          {!loading ? <NewsBanner item={news[0]} /> : <Skeleton type="banner" />}
          {!loading ? <NewsList items={news} /> : <Skeleton count={10} type="item" />}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
    </>
  )
}

export default Main
