import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '商品原价',
      placeholder: '请输入商品原价'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '商品现价',
      placeholder: '请输入商品现价'
    },
    {
      field: 'status',
      type: 'select',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        { title: '启用', value: '启用' },
        { title: '禁用', value: '禁用' }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时期',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        // 可以选择时间范围
        type: 'daterange'
      }
    }
  ],
  itemStyle: {
    padding: '10px'
  }
}
