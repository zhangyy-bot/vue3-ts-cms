<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  // flex弹性布局 当父盒子为flex布局 子元素的float、clear、vertical-align属性都将失效
  // 补充：vertical-align属性常用于设置图片或表单和文字垂直对齐
  display: flex;
  // 设置主轴上的子元素排列方式
  justify-content: center;
  // 设置侧轴上的子元素的排列方式（单行），多行是align-content
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
