import Axios, { AxiosInstance } from 'axios'

const baseURL = 'https://api.github.com'

const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 1000 * 20,
})

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const { $message } = <any>window
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      $message.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      $message.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
