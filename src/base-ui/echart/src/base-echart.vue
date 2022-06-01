<template>
  <div class="base-echart">
    <!-- echarts的展示需要有宽度和高度 -->
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
// import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

// 定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  // 默认值
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  // 解构
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
// 以下写法不对,因为执行下面代码时，也就是执行setup函数时，echartDivRef.value还未绑定，
// 所以在这种情况下的值是undefined，所以需要使用onMounted
// const echartInstance = echarts.init(echartDivRef.value)
</script>

<style lang="scss" scoped></style>
