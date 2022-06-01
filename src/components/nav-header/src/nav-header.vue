<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <template v-if="isFold">
        <folder-opened />
      </template>
      <template v-else>
        <folder-remove />
      </template>
    </el-icon>
    <div class="content">
      <zyy-breadcrumb :breadcrumbs="breadcrumbs"></zyy-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { FolderRemove, FolderOpened } from '@element-plus/icons'
import UserInfo from './user-info.vue'
import ZyyBreadcrumb from '../../../base-ui/breadcrumb'
import { pathMapToBreadcrumbs } from '../../../utils/map-menus'
import { useStore } from '../../../store'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    FolderRemove,
    FolderOpened,
    UserInfo,
    ZyyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    // 面包屑数据[{name: , path?: }] 使用computed属性 实现动态变化
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapToBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 24px;
    cursor: pointer;
    margin-top: 3px;
  }

  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }
}
</style>
