import axios from "axios"

const createHTTP = (http) => {
  const instance = http.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    params: {
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
      language: import.meta.env.VITE_DEFAULT_LANGUAGE,
    }
  });
  
  return instance
}

export default createHTTP(axios)