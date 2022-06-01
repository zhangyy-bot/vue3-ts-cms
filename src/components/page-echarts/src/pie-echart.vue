<template>
  <div class="pie-echart">
    <base-echart :options="options" :height="height"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IDataType } from '../types'

const props = defineProps<{
  pieData: IDataType[]
}>()

const height = 300 + 'px'

// computed才会手机props的依赖，当props传过来内容时，options才会更新，从而导致template重新渲染，
// 然后到base-echart中要重新调setOptions，但是onMounted只调了一次，那怎么办呢？watchEffect！
const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
