import http from '@/http'

export const get = async (page_number = 1, page_size = 10) => {
  try {
    return await http.get('search', {
      params: {
        page_number,
        page_size,
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
