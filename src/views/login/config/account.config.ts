// 编写规则
const rules = {
  name: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9_]{4,15}$/,
      // message: '用户名只能包含字母、数字和下划线，长度在5~16之间,',
      message: '用户名不符合规范',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^\w{5,17}$/,
      // message: '密码只能包含字母、数字和下划线,长度在6~18之间,',
      message: '密码不符合规范',
      trigger: 'blur'
    }
  ]
}

export { rules }
