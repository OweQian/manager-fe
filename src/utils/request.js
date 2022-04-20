/**
 * axios二次封装
 * */
import axios from 'axios';
import config from '../config'
import { ELMessage }from 'element-plus'
import router from '../router'

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

service.interceptors.request.use(req => {
  const headers = req.headers
  if (!headers.Authorization) headers.Authorization = 'Bear Jack'
  return req
})

service.interceptors.response.use(res => {
  const { code, data, msg } = res.data
  if (code === 200) {
    return data
  } else if (code === 400001) {
    ELMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 15000)
    return Promise.reject(TOKEN_INVALID)
  } else {
    ELMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})