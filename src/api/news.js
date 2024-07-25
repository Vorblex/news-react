import http from '@/http'

export const getAll = async () => {
  try {
    return await http.get('latest-news')
  } catch (e) {
    console.log(e)
  }
}
