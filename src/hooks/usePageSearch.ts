import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  // 通过在组件上写ref="..."获取page-content组件
  // 再通过ref拿到这个组件
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    // 因为使用了ref，所以通过.value拿到这个组件内的方法
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}
