import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '类别名称',
      placeholder: '请输入商品类别名称'
    }
  ],
  itemStyle: {},
  colLayout: { span: 24 }
}
