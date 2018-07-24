<template>
  <div style='height:100%;width:100%'>
    <el-form ref="account" :rules="rules" :model="account">
      <el-form-item class='label' prop="mobile">
        <el-input type="tel" maxlength="11" v-model="account.mobile" placeholder="请输入您的手机号" class="form-control-mobile"></el-input>
      </el-form-item>

      <div class='input-item'>
        <el-form-item class='label' prop="imgCode">
          <el-input maxlength="5" type="text" v-model="account.imgCode" placeholder="请输入图片验证码" class="form-control-code"></el-input>
        </el-form-item>

        <div style='height:40px;width:100px;margin-left:10px;'>
          <zcodeImage v-model="uuid" :url='this.$axios.getImgCodeUrl()'></zcodeImage>
        </div>
      </div>

      <div class='input-item'>
        <el-form-item class='label' prop="code">
          <el-input type="text" maxlength="6" v-model="account.code" placeholder="请输入验证码" class="form-control-code"></el-input>
        </el-form-item>

        <div style='height:40px;margin-left:10px;width:100px;'>
          <zcountButton inittxt='获取验证码' time="60" :callback='()=>{return this.$axios.getPhoneCode()}'></zcountButton>
        </div>

      </div>

      <div class="input-item">
        <el-form-item style="width:320px;height:40px">
          <el-button @click="loading('account')" type="primary" style="width:100%;height:40px">登录</el-button>
        </el-form-item>
      </div>

    </el-form>

  </div>

</template>  
  
<script>
import validate from "../../../utils/validate.js";
import zcountButton from "../../../components/zcountButton.vue";
import zcodeImage from "../../../components/zcodeImage.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      uuid: "",
      account: {
        mobile: "",
        imgCode: "",
        code: ""
      },
      rules: {
        mobile: validate.phone,
        imgCode: validate.imgCode,
        code: validate.code
      }
    };
  },
  components: {
    zcountButton,
    zcodeImage
  },
  methods: {
    ...mapActions(["setUserName", "setUUID", "setToken", "setRole"]),

    loading(name) {
      this.setUserName("施海泉");
      this.setUUID("1111");
      this.setToken("搜索token");
      this.setRole("权限");
      // this.$router.replace({ path: '/main' })
      // console.dir(this.$axios)
      // console.dir(this.$axios)
      this.$axios.codeLogin({ sdas: "adw", 22: 22 }).then(
        res => {
          console.dir(res);
        },
        err => {
          console.dir(err);
        }
      );

      // this.$refs[name].validate(valid => {
      //   if (valid) {
      // this.$router.replace({ path: '/main' })
      //   } else {
      //     return false
      //   }
      // })
    }
  }
};
</script>  

<style lang="scss" scoped>
@import "../../../styles/mixin";

.label {
  background-color: white;
  @include flex-row(center, start);
}
.forgetPassword,
.input-item {
  @include flex-row(center, start);
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
</style> 