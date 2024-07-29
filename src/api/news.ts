import http from '@/http'
import { DEFAULT_CATEGORY, PAGE_SIZE } from '@/constants'
import { CategoriesApiResponse, NewsApiResponse, ParamsType } from '@/interfaces'

export const get = async (params?: ParamsType): Promise<NewsApiResponse> => {
  const { currentPage = 1, selectedCategory, keywords } = params || {}
  const category = selectedCategory !== DEFAULT_CATEGORY ? selectedCategory : null

  try {
    const response = await http.get<NewsApiResponse>('search', {
      params: {
        page_number: currentPage,
        page_size: PAGE_SIZE,
        category,
        keywords: keywords ? keywords : null,
      },
    })
    return response.data
  } catch (e) {
    console.log(e)
    return { news: [], page: 1, status: 'error' }
  }
}

export const getLatest = async (): Promise<NewsApiResponse> => {
  try {
    const response = await http.get<NewsApiResponse>('latest-news')
    return response.data
  } catch (e) {
    console.log(e)
    return { news: [], page: 1, status: 'error' }
  }
}

export const getCategories = async (): Promise<CategoriesApiResponse> => {
  try {
    const response = await http.get<CategoriesApiResponse>('available/category')
    return response.data
  } catch (e) {
    console.log(e)
    return { categories: [], description: '', status: 'error' }
  }
}
