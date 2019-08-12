import axios from 'axios'
import Vue from '../../main'

const isProduction = process.env.NODE_ENV === 'production'
const baseURL = isProduction
  ? 'http://52.141.1.96:8080/'
  : 'http://52.141.1.96:8080/'

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
