<template>
  <div class="overview">
    <zyy-card title="关于">
      <div class="c-left">
        Vue3Admin是基于Vue3、Vuex、VueRouter、Webpack、ElementPlus、TypeScript、
        Echart5等的后台系统解决方案。
      </div>
    </zyy-card>
    <zyy-card title="技术栈">
      <zyy-text-link :textArrs="technologyStacks"></zyy-text-link>
      <zyy-descriptions
        title="生产环境依赖"
        :column="2"
        :tableDatas="dependencies"
      ></zyy-descriptions>
      <zyy-descriptions
        title="开发环境依赖"
        :column="2"
        :tableDatas="devDependencies"
      ></zyy-descriptions>
    </zyy-card>
    <zyy-card title="项目结构">
      <div class="c-left">
        <zyy-code language="bash" :code="projectDir"></zyy-code>
      </div>
    </zyy-card>
    <zyy-card title="项目规范">
      <zyy-descriptions
        title="文件命名规范"
        :column="1"
        :tableDatas="[
          {
            name: '文件夹',
            description: '统一小写,多个单词用-分割。Hooks类型文件例外'
          },
          {
            name: '文件(.ts .vue .json .d.ts)',
            description: '统一小写，单个单词使用-分割'
          }
        ]"
      ></zyy-descriptions>
      <zyy-descriptions
        class="margin-top"
        title="编写组件规范"
        :column="1"
        :table-datas="[
          { name: '组件的文件', description: '统一小写, 多个单词使用-分割' },
          {
            name: '组件的目录结构',
            description:
              '例如 button 组件：button/src/index.vue, 统一在button/index.ts导出'
          },
          {
            name: '组件导包顺序',
            description:
              '导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数'
          },
          { name: '组件的名称', description: '统一大写开头，驼峰命名' },
          {
            name: '组件属性顺序',
            description: 'name, components, props, emits, setup ...'
          },
          {
            name: 'template标签',
            description: '小写加 - ( 例如：<case-panel/> )'
          },
          {
            name: 'template标签属性顺序',
            description: 'v-if , v-for , ref, class, style, ... ,事件'
          },
          {
            name: '组件的props',
            description: '小写开头，驼峰命名，必须编写类型默认值'
          },
          {
            name: '组件的样式',
            description:
              '作用域：scoped, lang = scss / less  ; 类名：统一小写, 多个单词使用-分割'
          }
        ]"
      ></zyy-descriptions>
    </zyy-card>
    <zyy-card title="Git提交规范">
      <zyy-descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'yarn commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }
        ]"
      ></zyy-descriptions>
    </zyy-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ZyyCard from '@/base-ui/card'
import ZyyDescriptions from '@/base-ui/descriptions'
import ZyyTextLink from '@/base-ui/text-link'
import ZyyCode from '@/base-ui/code'
import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir
} from './config'

export default defineComponent({
  name: 'overview',
  components: {
    ZyyCard,
    ZyyDescriptions,
    ZyyTextLink,
    ZyyCode
  },
  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies,
      projectDir
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    //::v-deep重写element-plus样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span
      font-weight: 700;
    }
  }

  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }

  .margin-top {
    margin-top: 20px;
  }
}
</style>
