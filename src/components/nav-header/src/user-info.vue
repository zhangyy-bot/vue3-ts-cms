<template>
  <div class="user-info">
    <div class="operation">
      <span class="el-icon-edit" @click="handleEditIcon">
        <el-icon size="20px"><edit /></el-icon>
      </span>
      <span class="el-icon-bell">
        <el-icon size="20px"><bell-filled /></el-icon>
      </span>
    </div>
    <div class="info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            size="small"
            src="https://img1.baidu.com/it/u=1164108415,2525898312&fm=26&fmt=auto"
            class="el-avatar"
          ></el-avatar>
          <span>{{ name }}</span>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick"
              ><el-icon><circle-close-filled /></el-icon
              >退出登录</el-dropdown-item
            >
            <el-dropdown-item divided
              ><el-icon><info-filled /></el-icon>个人信息</el-dropdown-item
            >
            <el-dropdown-item @click="handleReadIcon"
              ><el-icon><reading /></el-icon>故事列表</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'

import {
  ArrowDown,
  CircleCloseFilled,
  InfoFilled,
  Reading,
  Edit,
  BellFilled
} from '@element-plus/icons'

export default defineComponent({
  components: {
    ArrowDown,
    CircleCloseFilled,
    InfoFilled,
    Reading,
    Edit,
    BellFilled
  },
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)

    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }
    // 处理图标的点击
    const handleEditIcon = () => {
      router.push('/main/story/chat')
    }
    const handleReadIcon = () => {
      router.push('/main/story/list')
    }
    return {
      name,
      handleExitClick,
      handleEditIcon,
      handleReadIcon
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  align-items: center;

  .operation {
    .el-icon-edit,
    .el-icon-bell {
      display: inline-block;
      padding-right: 15px;
    }
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: 2;

    .el-avatar {
      margin-right: 10px;
    }
  }
}
</style>
