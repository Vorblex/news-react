import http from '@/http'
import { DEFAULT_CATEGORY, PAGE_SIZE } from '@/constants'

export const get = async ({ currentPage = 1, selectedCategory, keywords }) => {
  const category = selectedCategory !== DEFAULT_CATEGORY ? selectedCategory : null

  try {
    return await http.get('search', {
      params: {
        page_number: currentPage,
        page_size: PAGE_SIZE,
        category,
        keywords: keywords ? keywords : null,
      },
    })
  } catch (e) {
    console.log(e)
  }
}

export const getLatest = async () => {
  try {
    return await http.get('latest-news')
  } catch (e) {
    console.log(e)
  }
}

export const getCategories = async () => {
  try {
    return await http.get('available/category')
  } catch (e) {
    console.log(e)
  }
}
