import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  // 先取反再取反 转换为boolean类型
  return !!permissions.find((item) => item === verifyPermission)
  // return Boolean(permissions.find((item) => item === verifyPermission))
}
