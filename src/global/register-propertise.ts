import { App } from 'vue'
import { formatUtcString } from '@/utils/data-format'

export default function registerProperties(app: App) {
  // $全局属性的命名习惯
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
