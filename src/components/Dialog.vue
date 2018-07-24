<template>
  <div class="zdialog">
    <el-dialog :width='width' :close-on-click-modal="false" :title="title" :visible.sync="visible" @close="handleClose()" center>
      <slot></slot>
      <span slot="footer" class="dialog-footer" v-if="btnArray.length>0">
        <zButton :type="btnItem.type" :fontSize="btnItem.fontSize" :width="btnItem.width" :height="btnItem.height" :key="btnItem.title" v-for="btnItem in btnArray" @click="() => btnItem.func()">{{btnItem.title}}</zButton>
        <!--<el-button v-show="showConfirm" type="primary" @click="clickConfirm">确定</el-button>-->
      </span>
      <span slot="footer" class="dialog-footer" v-else>
        <!--<zButton :type="btnItem.type" :fontSize="btnItem.fontSize" :width="btnItem.width" :height="btnItem.height" :key="btnItem.title" v-for="btnItem in btnArray" @click="() => btnItem.func()">{{btnItem.title}}</zButton>-->
        <el-button type="primary" @click="clickConfirm">{{confirmTxt}}</el-button>
        <el-button @click="clickCancel">{{cancelTxt}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import zButton from './Button'

export default {
  name: 'my-dialog',
  model: {
    prop: 'dialogVisible',
    event: 'handleClose'
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '35%'
    },
    dialogVisible: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelTxt: {
      type: String,
      default: '取消'
    },
    confirmTxt: {
      type: String,
      default: '确认'
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    clickCancelEvent: {
      type: Function,
      default: () => {}
    },
    clickConfirmEvent: {
      type: Function,
      default: () => {}
    },
    btnArray: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // :false
      visible: this.dialogVisible
    }
  },
  mounted() {
    // this.dialogVisible = this.dialogFlag
    // console.log(this.dialogVisible)
    // console.log(this.visible)
    // console.dir(this.visible)
  },
  methods: {
    handleClose() {
      this.$emit('handleClose', false)
    },
    clickCancel() {
      this.handleClose()
      this.clickCancelEvent()
    },
    clickConfirm() {
      // this.handleClose()
      // this.$emit('clickConfirmEvent')
      this.clickConfirmEvent()
    }
  },
  watch: {
    dialogVisible(val) {
      this.visible = val
    }
  },

  components: {
    zButton
  }
  // watch: {
  // dialogVisible(val) {
  //   this.visible = val
  //   console.log(this.visible)
  // }
  // dialogFlag:function (val) {
  //   console.log(val)
  // }
  // },
  // computed: {
  // dialogVisible:function () {
  //   return this.dialogFlag
  // }
  // }
}
</script>

<style >
.zdialog .el-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0 !important;
}

.zdialog .el-dialog__header {
  padding: 0px;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  background-color: #efefef;
}
.zdialog .el-dialog__wrapper {
  overflow: hidden;
}
.zdialog .el-dialog--center .el-dialog__body {
  padding: 0px;
}
.zdialog .el-dialog__headerbtn {
  top: 17px;
}

.dialog-footer .el-button {
  width: 88px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
}
</style>

<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
