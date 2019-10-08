import axios from 'axios'
// import Vue from '../../main'

const isProduction = process.env.NODE_ENV === 'production'
const baseURL = isProduction
  ? 'https://api.YOURDOMAIN/'
  : 'http://127.0.0.1:3000/'

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*'
  }
})
instance.defaults.errorHandle = true

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err)
  }
)

export default instance
