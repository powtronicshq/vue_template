<template>
  <zdialog v-if="editStaffDialogVisible" width='660px' v-model="editStaffDialogVisible" title='修改密码' :clickCancelEvent='()=>this.clickCancelEvent()' :clickConfirmEvent='()=>this.clickConfirmEvent()'>
    <el-form ref="model" :rules="rules" :model="model">
      <div style='padding:15px 100px 15px 100px;font-size:16px'>
        <div style='color:red;display:flex;margin-bottom:10px'>*
          <p style='color:black'>原密码</p>
        </div>
        <el-form-item prop="oldPassword">
          <zinput v-model='model.oldPassword' type="text" maxlength='20' height='40px' width="320px" fontSize="14px" placeholder="输入原密码"></zinput>
        </el-form-item>

        <div style='color:red;display:flex;margin-bottom:10px;margin-top:14px'>*
          <p style='color:black'>新密码</p>
        </div>
        <el-form-item prop="newPassword1">
          <zinput v-model='model.newPassword1' type="text" maxlength='20' height='40px' width="320px" fontSize="14px" placeholder="输入新密码"></zinput>
        </el-form-item>


        <div style='color:red;display:flex;margin-bottom:10px;margin-top:14px'>*
          <p style='color:black'>确认新密码</p>
        </div>
        <el-form-item prop="newPassword2">
          <zinput v-model='model.newPassword2' type="text" maxlength='20' height='40px' width="320px" fontSize="14px" placeholder="请确认密码"></zinput>
        </el-form-item>



      </div>
    </el-form>
  </zdialog>
</template>

<script>
import zinput from '../../../components/zinput'
import zdialog from '../../../components/Dialog'
import validate from '../../../utils/validate'
export default {
  name: 'editRossle',
  model: {
    prop: 'dialogVisible',
    event: 'changeVisible'
  },
  props: [
    'dialogVisible',
    'confirm',
  ],
  data() {
    return {
      editStaffDialogVisible: this.dialogVisible,
      model: {
        oldPassword:'',
        newPassword1: '',
        newPassword2: '',
      },
      rules: {
        oldPassword:validate.oldPassword,
        newPassword1: validate.password1,
        newPassword2: validate.password2,
      }
    }
  },

  components: {
    zdialog,
    zinput,
  },
  mounted() {
    this.rules.newPassword2.push({
      validator: (rule, value, callback) => {
        if (value !== this.model.newPassword1) {
          callback(new Error('两次密码输入不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    })
  },
  watch: {
    dialogVisible: function(val) {
      this.editStaffDialogVisible = val
    },
    editStaffDialogVisible: function(val) {
      this.$emit('changeVisible', val)
    },
    
  },
  methods: {
    
    clearValue() {
     
      this.model.oldPassword = ''
      this.model.newPassword1 = ''
      this.model.newPassword2 = ''
      
    },
    clickConfirmEvent() {
      
      this.$refs['model'].validate(valid => {
        if (valid) {
          this.editStaffDialogVisible = false
          // this.confirm(this.model, this.explain,this.roleId);
          this.clearValue();
        } else {
          return false
        }
      })
    },
    clickCancelEvent() {

      this.clearValue()
    }
  }
}
</script>

<style >
</style>

<style lang="scss" scoped>
.edit-role {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.auth-error {
  color: #f56c6c;
  font-size: 12px;
  height: 12px;
  line-height: 12px;
  margin-top: 4px;
}
</style>
