<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登录
          </span>
        </template>
        <!-- 账号登录组件 -->
        <login-account ref="accountRef"></login-account>
        <!-- 记住密码。。。 -->
        <div class="account-control">
          <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
          <el-link type="primary">忘记密码</el-link>
        </div>
        <!-- 登录按钮 -->
        <el-button
          type="primary"
          class="login-button"
          @click="handleLoadingClick"
          >立即登录</el-button
        >
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <!-- 手机登录组价 -->
        <login-phone ref="phoneRef"></login-phone>
        <!-- 登录按钮 -->
        <el-button
          type="primary"
          class="login-button"
          @click="handleLoadingClick"
          >立即登录</el-button
        >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { Avatar } from '@element-plus/icons'
import { Iphone } from '@element-plus/icons'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    Avatar,
    Iphone,
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 1.定义属性
    const isKeepPassword = ref(false)
    // 绑定组件
    // const accountRef = ref(null)
    // 不传其实是一个any类型
    // const accountRef = ref()
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    // 2.定义方法
    const handleLoadingClick = () => {
      console.log('立即登录')
      if (currentTab.value === 'account') {
        // ref通过.value取值 拿到了login-account组件 然后调用这个组件里面的方法 而且还给它传入了一个参数
        // console.log(accountRef.value)
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('phoneRef调用loginAction')
      }
    }

    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLoadingClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .login-button {
    width: 100%;
    height: 10px;
    margin-top: 10px;
  }
}
</style>
