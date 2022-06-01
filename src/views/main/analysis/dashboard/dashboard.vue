<template>
  <div class="dashboard">
    <!-- 顶层数据统计 -->
    <!-- gutter表示el-col之间的间距 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item"></statistical-panel>
        </el-col>
      </template>
    </el-row>
    <!-- 中间图表 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <zyy-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </zyy-card>
      </el-col>
      <el-col :span="10">
        <zyy-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </zyy-card>
      </el-col>
      <el-col :span="7">
        <zyy-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </zyy-card>
      </el-col>
    </el-row>
    <!-- 底部图表 -->
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <zyy-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </zyy-card>
      </el-col>
      <el-col :span="12">
        <zyy-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </zyy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import ZyyCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    ZyyCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取顶部数据
    const topPanelData = computed(() => store.state.dashboard.topPanelData)

    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    // 这里老师给的数据有问题 addressgoodssale 和 categorygoodssale弄反了
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const addressGoodsSale = store.state.dashboard.addressGoodsSale
      for (const item of addressGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }

      return { xLabels, values }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }

      return { xLabels, values }
    })

    // 这里老师给的数据有问题 addressgoodssale 和 categorygoodssale弄反了
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.categoryGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      topPanelData,
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  background-color: #f5f5f5;

  .content-row {
    margin-top: 20px;
  }
}
</style>
