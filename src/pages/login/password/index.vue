<template>
  <!--背景图-->
  
  <div style='height:100%;width:100%'>
    <el-form ref="account" :rules="rules" :model="account">
      <el-form-item class='label' prop="mobile">
        <el-input type="text" maxlength="11" v-model="account.mobile" placeholder="请输入您的手机号" class="form-control-mobile"></el-input>
      </el-form-item>

      <div class='input-item'>
        <el-form-item class='label' prop="password">
          <el-input type="password" maxlength="20" minlength="6" v-model="account.password" placeholder="请输入您的密码" class="form-control-password"></el-input>
        </el-form-item>
      </div>

      <div class='input-item'>
        <el-form-item class='label' prop="imgCode">
          <el-input maxlength="5" type="text" v-model="account.imgCode" placeholder="请输入图片验证码" class="form-control-code"></el-input>
        </el-form-item>

        <div style='height:40px;width:100px;margin-left:10px;'>
          <zcodeImage v-model="uuid" :url='this.$axios.getImgCodeUrl()'></zcodeImage>
        </div>
      </div>

      <div class="input-item">
        <el-form-item style="width:320px;height:40px">
          <el-button @click="loading('account')" type="primary" style="width:100%;height:40px">登录</el-button>
        </el-form-item>
      </div>

      <div class="forgetPassword ">
        <a style='width:320px;text-align:end;font-size:12px' @click="findPassword" href="javascript:void(0)">忘记密码</a>
      </div>
    </el-form>

  </div>
  <!-- </div> -->

</template>  
  
<script>
import validate from '../../../utils/validate.js'
import zcodeImage from '../../../components/zcodeImage.vue'
import zbutton from '../../../components/Button.vue'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      uuid: '',
      account: {
        mobile: '',
        password: '',
        imgCode: ''
      },
      rules: {
        mobile: validate.phone,
        password: validate.password1,
        imgCode: validate.imgCode
      }
      // ,methods:{
    }
  },

  components: {
    zcodeImage,
    zbutton
  },
  methods: {
    ...mapActions(['setUserName', 'setUUID', 'setToken']),
    loading(name) {
      // this.setUserName('2321')
      // this.setUUID('2321')
      // this.setToken('2321')
      this.$axios.passwordLogin('/api/登录url', { "参数": '参数' }).then(res => {
        console.dir(res)
      },err=>{})

      // this.$refs[name].validate(valid => {
      //   if (valid) {
      //     this.$router.replace({ path: '/main' })
      //   } else {
      //     return false
      //   }
      // })
    },
    findPassword() {
      this.$router.replace({ path: '/findPassword' })
    }
  }
}
</script>  

<style lang="scss" scoped>
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
.login-container .el-form-item {
  margin-bottom: 20px;
}
.label .el-input__inner {
  background-color: #fafafa;
}
.label .el-form-item__label {
  font-size: 16px;
  padding: 0 6px 0 0;
}
.forgetPassword a,
.exchange a {
  text-decoration: none;
  color: #4a90e2;
}
</style> 