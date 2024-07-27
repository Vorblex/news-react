import http from '@/http'
import { DEFAULT_CATEGORY } from '@/constants'

export const get = async ({
  currentPage = 1,
  selectedCategory,
  pageSize = 10,
  keywords = null,
}) => {
  const category = selectedCategory !== DEFAULT_CATEGORY ? selectedCategory : null

  try {
    return await http.get('search', {
      params: {
        page_number: currentPage,
        page_size: pageSize,
        category,
        keywords,
      },
    })
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
