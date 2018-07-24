<template>

  <div class="note">

    <div ref="account" class="login-container">
      <div class='login'>
        {{'找罐车SAAS系统'}}
      </div>

      <div class="exchange">
        <a href="javascript:void(0)" @click="changeLoginStyle(false)" :class='flag?"exchange-a-none":"exchange-a-select"' style="">验证码登录</a>
        <div style="height:21px;width:1px;background-color:#D8D8D8;margin:0 20px 0 30px"></div>
        <a href="javascript:void(0)" @click="changeLoginStyle(true)" :class='flag?"exchange-a-select":"exchange-a-none"'>密码登录</a>
      </div>

      <router-view style="height:290px;width:100%"></router-view>

    </div>

  </div>

</template>  
  
<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  mounted() {
    this.loginType(this.flag);
  },
  methods: {
    loginType(flag) {
      if (flag) {
        this.$router.replace({ path: "/login/password" });
      } else {
        this.$router.replace({ path: "/login/code" });
      }
    },
    changeLoginStyle(flag) {
      this.flag = flag;
      this.loginType(this.flag);
    }
  }
};
</script>  

<style lang="scss" scoped>
@import "../../styles/mixin";

.exchange-a-select {
  color: #417505;
  width: 100px;
  text-align: center;
  border-bottom: 2px solid #94bf4b;
  padding-bottom: 1px;
}

.exchange-a-none {
  color: #979797;
  width: 100px;
  text-align: center;
}
.exchange {
  @include flex-row;
  font-size: 20px;
  margin-bottom: 20px;
  height: 40px;
  line-height: 40px;
}

.note {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  // background: url('../../assets/back.png') no-repeat center;
  // background-size: 100% 100%;
  @include flex-row;
  background-color: white;
  min-width: 1000px;
  min-height: 600px;
}
.login {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 53px;
  font-size: 24px;
}
.login-container {
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
</style>
  
<style>
.exchange a {
  text-decoration: none;
}
</style> 