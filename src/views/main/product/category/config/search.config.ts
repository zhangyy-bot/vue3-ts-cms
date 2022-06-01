import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '类别名称',
      placeholder: '请输入商品类别名称'
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
