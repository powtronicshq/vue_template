<style>
.zbutton .el-button {
  padding: 0;
  width: 100%;
  height: 100%;
}
/* .zbutton .el-button--primary.is-disabled,
.zbutton .el-button--primary.is-disabled:hover,
.zbutton .el-button--primary.is-disabled:focus,
.zbutton .el-button--primary.is-disabled:active {
  color: #fff;
  background-color: #94bf4b;
  border-color: #94bf4b;
} */
</style>
<style scoped lang="scss">
.zbutton {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="zbutton">
    <el-button :disabled="disabled" type="primary" @click="click">{{this.txt}}</el-button>
  </div>
</template>

<script>
export default {
  // model:{
  //   prop:'txt',
  //   event:'cc'
  // },
  name: 'zcountButton',
  props: ['inittxt', 'time', 'callback'],
  data() {
    return {
      disabled: false,
      txt: this.inittxt
    }
  },

  created() {
    // this._txt=this.inittxt
  },
  methods: {
    // 辅助方法倒计时
    countDown(count) {
      count = Number(count)
      // debugger
      if (count <= 0) {
        this.txt = '重新获取'
        this.disabled = false
        return
      }
      this.txt = count + 'S'
      setTimeout(() => {
        this.countDown(--count)
        // console.dir(this.txt)
      }, 1000)
    },
    click() {
      this.callback().then(
        res => {
          this.disabled = true
          this.countDown(this.time)
        },
        err => {}
      )
    }
  }
}
</script>
