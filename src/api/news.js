import http from '@/http'
import { DEFAULT_CATEGORY } from '@/constants'

export const get = async (page_number = 1, selectedCategory, page_size = 10) => {
  const category = selectedCategory !== DEFAULT_CATEGORY ? selectedCategory : null

  try {
    return await http.get('search', {
      params: {
        page_number,
        page_size,
        category,
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
