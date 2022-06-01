// import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosRequestConfig } from 'axios'

// 拦截器 包括请求拦截、响应拦截
export interface ZYYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface ZYYRequestConfig extends AxiosRequestConfig {
  interceptors?: ZYYRequestInterceptors
  showLoading?: boolean
}
