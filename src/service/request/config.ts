// 第二种方式修改环境变量
// 根据process.env.NODE_ENV
// 开发环境：development
// 生成环境：production
// 测试环境：test

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://zyy.org/prod'
} else {
  BASE_URL = 'http://zyy.org/test'
}

export { BASE_URL, TIME_OUT }
