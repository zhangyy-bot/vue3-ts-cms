<template>
  <div class="line-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, withDefaults } from 'vue'
import BaseEchart from '@/base-ui/echart'

const props = withDefaults(
  defineProps<{
    title?: string
    xLabels: string[]
    values: any[]
  }>(),
  {
    title: ''
  }
)

const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    // 把鼠标放在图上是展示的东西
    tooltip: {
      // item适合于散点图 axis坐标
      trigger: 'axis',
      // 设置线
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    // 图例
    legend: {},
    // 工具
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    // 相对整理距离左右下的距离  要不要包括文本
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    // x坐标轴
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    // y坐标轴
    yAxis: [
      {
        type: 'value'
      }
    ],
    // 具体的数据
    series: [
      {
        name: '类别销量',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.values
      }
    ]
  }
})
</script>

<style lang="scss" scoped></style>
