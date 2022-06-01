import { App } from 'vue'
import registerProperties from './register-propertise'

export function globalRegister(app: App): void {
  app.use(registerProperties)
}
