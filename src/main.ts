import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
// css文件导入
import 'normalize.css'
import './assets/css/index.less'
import { globalRegister } from './global'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
// 注册全局属性
app.use(globalRegister)
// 每次运行代码都会调用setupStore 注册动态路由
app.use(store)
setupStore()
// 注册路由 会去执行router里面的install 获取当前的path
// 开始去router.routes里面匹配路径
app.use(router)

app.mount('#app')

app.use(ElementPlus, {
  locale: zhCn
})
