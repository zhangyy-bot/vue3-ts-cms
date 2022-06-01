<template>
  <span ref="countupRef"></span>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
// http://inorganik.github.io/countUp.js/
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'
const defaultOptions: CountUpOptions = {
  decimalPlaces: 2, //保留两位
  duration: 2, //动画时长
  separator: ',', //千位分割
  decimal: '.', //小数分割
  prefix: '￥' //单位
}

export default defineComponent({
  props: {
    number: {
      type: Number,
      default: 0
    },
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props) {
    const countupRef = ref<HTMLDivElement | null>(null)
    const instance = ref<CountUp | null>(null)
    watch(
      () => props.number,
      () => {
        update(props.number)
      }
    )
    onMounted(() => {
      createCounter()
    })

    const createCounter = () => {
      if (!countupRef.value) return
      const opts: CountUpOptions = Object.assign(defaultOptions, props.option)
      instance.value = new CountUp(countupRef?.value, props.number, opts)
      start()
    }

    const start = () => {
      if (!instance.value) return
      instance?.value.start()
    }
    const update = (number: number) => {
      if (!instance.value) return
      instance?.value.update(number)
    }
    return {
      countupRef
    }
  }
})
</script>

<style scoped></style>
