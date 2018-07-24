/* jshint esversion: 6 */

let checkChinease = (key) => {
  return {
    validator: (rule, value, callback) => {
      let reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
      if (reg.test(value)) {
        callback(new Error(key + '中不能有中文字符!'));
      }else{
        callback();
      }
    },
    trigger: 'blur'
  };
};

let phone = [{
  validator: (rule, value, callback) => {
    if (value === '') {
      callback(new Error('手机号不能为空!'));
      return;
    }
    let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(value)) {
      callback(new Error('请输入正确的11位手机号!'));
    } else {
      callback();
    }
  },
  trigger: 'blur'
}];


let imgCode = [{
  required: true,
  message: '图片验证码不能为空!',
  trigger: 'blur'
}];


let code = [{
  required: true,
  message: '手机验证码不能为空!',
  trigger: 'blur'
}];

let oldPassword = [{
    required: true,
    message: '原密码不能为空!',
    trigger: 'blur'
  },
  {
    min: 6,
    max: 20,
    message: '请输入6-20位密码!',
    trigger: 'blur'
  },
  checkChinease('密码')
];

let password1 = [{
    required: true,
    message: '新密码不能为空!',
    trigger: 'blur'
  },
  {
    min: 6,
    max: 20,
    message: '请输入6-20位新密码!',
    trigger: 'blur'
  },
  checkChinease('新密码')

];

let password2 = [{
    required: true,
    message: '确认密码不能为空!',
    trigger: 'blur'
  },
  {
    min: 6,
    max: 20,
    message: '请输入6-20位确认密码!',
    trigger: 'blur'
  },
  checkChinease('确认密码')
];

// 角色管理-- 新增角色.--------------------------------------------

let addRole = [{
    required: true,
    message: '角色名不能为空!',
    trigger: 'blur'
  },

];


let auth = (value) => {
  return value.getCheckedNodes().length !== 0;

};

let addCompanyName = [{
    required: true,
    message: '户头名称不能为空!',
    trigger: 'blur'
  },

];

let defaultNullValue = (key) => {
  return [{
      required: true,
      message: key + '不能为空!',
      trigger: 'blur'
    },

  ];
};









export default {
  phone: phone,
  imgCode: imgCode,
  code: code,
  oldPassword: oldPassword,
  password1: password1,
  password2: password2,
  addRole: addRole,
  auth: auth,
  addCompanyName: addCompanyName,
  defaultNullValue: defaultNullValue

};
