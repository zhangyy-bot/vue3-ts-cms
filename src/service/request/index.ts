import axios from 'axios'
// 这些都是type
import type { AxiosInstance } from 'axios'
import type { ZYYRequestInterceptors, ZYYRequestConfig } from './type'

import { ElLoading, ILoadingInstance } from 'element-plus'
// 按道理这里是不需要导入样式的 不知道问题出在哪
import 'element-plus/theme-chalk/el-loading.css'

class ZyyRequest {
  instance: AxiosInstance
  interceptors?: ZYYRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: ZYYRequestConfig) {
    // 如果有多个不同的base_url 需要创建多个实例
    // 之前使用的axios就是使用这种方式创建的，现在要使用this.instance
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? true
    this.interceptors = config.interceptors

    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器 已经添加了 不需要再调用了
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器：请求成功拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)',
            fullscreen: true
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器：响应成功拦截')
        // 将loading移除
        setTimeout(() => {
          this.loading?.close()
        }, 100)
        const data = res.data
        // 例子：判断不同的HttpErrorCode显示不同的错误信息
        if (data.returnCode === '-1001') {
          console.log('请求失败~ 错误信息')
        } else {
          return data
        }
      },
      (err) => {
        console.log('所有的实例都有的拦截器：响应失败拦截')
        // 将loading移除
        this.loading?.close()
        // 例子：判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404错误~')
        }
        return err
      }
    )
  }

  request<T = any>(config: ZYYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果有请求成功拦截 就把返回的config赋值给新的config
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 判断是否需要显示loading 本来默认就是true 所以这一步可以省略
      // if (config.showLoading === true) {
      //   this.showLoading = config.showLoading
      // }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      // 单独请求的拦截器
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 为了不影响下次请求
          this.showLoading = true
          // 将结果通过resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 为了不影响下次请求
          this.showLoading = false
          // 将错误结果通过reject返回出去
          reject(err)
          return err
        })
    })
  }

  // 记住我们是封装！封装！封装！
  get<T = any>(config: ZYYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: ZYYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: ZYYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: ZYYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default ZyyRequest
