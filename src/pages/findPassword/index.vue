<template>
  <div class="note">
    <div class="forget-container">
      <div class='title'>
        <div class='title-content'>
          <p class='title-content-txt'>忘记密码</p>
          <div class="back-login">
            <a href="javascript:void(0)" @click="toLogin">登录</a>
            <img src="../../assets/img/back.png" width="14px" height="14px" alt="">
          </div>
        </div>
      </div>

      <el-form ref="account" :rules="rules" :model="account">
        <el-form-item class='label' prop="mobile">
          <el-input type="text" maxlength="11" v-model="account.mobile" placeholder="请输入您的手机号" class="form-control-mobile"></el-input>
        </el-form-item>

        <div class='input-item'>
          <el-form-item class='label' prop="imgCode">
            <el-input type="text" maxlength="5" v-model="account.imgCode" placeholder="请输入图片验证码" class="form-control-code"></el-input>
          </el-form-item>
          <div style='height:40px;margin-left:10px;width:100px;'>
            <zcodeImage v-model="uuid" :url='this.$axios.getImgCodeUrl()'></zcodeImage>
          </div>
        </div>
        <div class='input-item'>
          <el-form-item class='label' prop="code">
            <el-input type="text" maxlength="7" v-model="account.code" placeholder="请输入验证码" class="form-control-code"></el-input>
          </el-form-item>

          <div style='height:40px;margin-left:10px;width:100px;'>
            <zcountButton inittxt='获取验证码' time="60" :callback='()=>{return this.$axios.getPhoneCode()}'></zcountButton>
          </div>
        </div>

        <div class='input-item'>
          <el-form-item class='label' prop="password1">
            <el-input type="password" maxlength="20" v-model="account.password1" placeholder="请输入新密码" class="form-control-password"></el-input>
          </el-form-item>
        </div>
        <div class='input-item'>
          <el-form-item class='label' prop="password2">
            <el-input type="password" maxlength="20" v-model="account.password2" placeholder="请确认新密码" class="form-control-password"></el-input>
          </el-form-item>
        </div>

        <div class="input-item">
          <el-form-item style="width:320px;height:40px">
            <el-button @click="loading('account')" type="primary" style="width:100%;height:40px">确认</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>

</template>  
  
<script>
import validate from '../../utils/validate.js'
import zcountButton from '../../components/zcountButton.vue'
import zcodeImage from '../../components/zcodeImage.vue'

export default {
  data() {
    return {
      uuid: '',
      account: {
        mobile: '',
        imgCode: '',
        code: '',
        password1: '',
        password2: ''
      },
      rules: {
        mobile: validate.phone,
        imgCode: validate.imgCode,
        code: validate.code,
        password1: validate.password1,
        password2: validate.password2
      }
    }
  },
  components: {
    zcountButton,
    zcodeImage
  },
  mounted() {
    this.rules.password2.push({
      validator: (rule, value, callback) => {
        if (value !== this.account.password1) {
          callback(new Error('两次密码输入不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    })
  },
  methods: {
    toLogin() {
      this.$router.replace({ path: '/login' })
    },
    loading(name) {
      // TODO 找回密码确认
      // this.$refs[name].validate(valid => {
      //   if (valid) {
      //  
      //   } else {
      //     return false
      //   }
      // })
    }
  }
}
</script>  

<style lang="scss" scoped>
.title {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 38px 0 28px 0;
}
.title-content {
  display: flex;
  width: 320px;
  justify-content: space-between;
  align-items: flex-end;
}
.title-content-txt {
  color: #417505;
  font-size: 20px;
  height: 20px;
  line-height: 20px;
}
.back-login {
  display: flex;
  align-items: center;
}
.note {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  // background: url('../../assets/back.png') no-repeat center;
  // background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  min-width: 1000px;
  min-height: 600px;
}

.forget-container {
  -webkit-border-radius: 5px;
  border-radius: 15px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  width: 458px;
  height: 458px;
  background-color: white;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.label {
  background-color: white;
  display: flex;
  justify-content: center;
}
.forgetPassword,
.input-item {
  display: flex;
  justify-content: center;
}

.label .form-control-password,
.label .form-control-mobile {
  width: 320px;
  height: 40px;
  font-size: 16px;
}

.label .form-control-code {
  width: 210px;
  height: 40px;
  font-size: 16px;
}
</style>


<style>
.forget-container .el-form-item {
  margin-bottom: 20px;
}
.label .el-input__inner {
  background-color: #fafafa;
}
.label .el-form-item__label {
  font-size: 16px;
  padding: 0 6px 0 0;
}
.back-login a {
  text-decoration: none;
  color: #94bf4b;
  font-size: 14px;
  height: 14px;
  line-height: 14px;
}
</style>