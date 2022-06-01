<template>
  <div class="zyy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.key">
          <!-- v-bind:span="8" 给的是数字 没有v-bind就是字符串 -->
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <!-- 注意这个v-bind用法哦！ -->
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      require: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      // 数组和对象的默认类型要写成箭头函数 因为箭头函数不绑定this 可以使用上下文的this
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ref({ padding: '10px 40px' })
    },
    // 响应式布局
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, //>1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  //默认情况下的v-model其实是绑定了modelValue属性 和 @update:modelValue事件 这点不懂！！！！
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // page-search通过v-model传过来的formdata其实就是props里面的modelValue
    // 下面的update:modelValue就是v-model绑定的事件
    // 展开运算符 浅拷贝
    // const formData = ref({ ...props.modelValue })

    // watch(formData, (newValue) => emit('update:modelValue', newValue), {
    //   deep: true
    // })

    const handleValueChange = (value: any, field: string) => {
      // 因为field是一个变量 所以[]
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }

    return {
      handleValueChange
      // formData
    }
  }
})
</script>

<style scoped lang="less">
.zyy-form {
  padding-top: 22px;
}
</style>
