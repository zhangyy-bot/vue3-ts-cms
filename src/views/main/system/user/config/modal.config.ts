import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号码',
      placeholder: '请输入手机号码'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '所属部门',
      placeholder: '请选择所属部门',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '用户角色',
      placeholder: '请选择用户角色·',
      options: []
    }
  ],
  itemStyle: {},
  colLayout: { span: 24 }
}
