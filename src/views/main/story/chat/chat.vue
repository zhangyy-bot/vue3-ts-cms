<template>
  <div class="chat">
    <zyy-editor v-model:value="htmlString"></zyy-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ZyyEditor from '@/base-ui/editor'

export default defineComponent({
  name: 'chat',
  components: {
    ZyyEditor
  },
  setup() {
    const htmlString = ref<string>('试试写出你的故事~')
    return {
      htmlString
    }
  }
})
</script>

<style scoped></style>
