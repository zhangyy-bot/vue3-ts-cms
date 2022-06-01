// service统一出口
import ZYYRequest from './request'
// baseURL这些也不要写死，这里用第二种方式配置环境变量
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'

const zyyRequest = new ZYYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      // config.hearders可能为undefined
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功')
      return res
    }
  }
})

export default zyyRequest
