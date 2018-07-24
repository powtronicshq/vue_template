<template>
  <zdialog v-if="editStaffDialogVisible" width='660px' v-model="editStaffDialogVisible" title='新增/修改角色' :clickCancelEvent='()=>this.clickCancelEvent()' :clickConfirmEvent='()=>this.clickConfirmEvent()'>
    <el-form ref="editRole" :rules="rules" :model="editRole">
      <div style='padding:15px 100px 15px 100px;font-size:16px'>
        <div style='color:red;display:flex;margin-bottom:10px'>*
          <p style='color:black'>角色名称</p>
        </div>
        <el-form-item prop="name">
          <zinput v-model='editRole.name' maxlength='10' height='40px' width="240px" fontSize="14px" placeholder="输入内容"></zinput>
        </el-form-item>

        <div style='color:red;display:flex;margin:5px 0 5px 0'>*
          <p style='color:black'>权限</p>
        </div>
        <div style='height:100px;'>
          <ztree :data='treeData' v-model='editRole.tree' :checkedBox='()=>{this.checkedBox()}' :checkedKeys='checkedValue'></ztree>

        </div>
        <div class='auth-error'>{{!authError?'权限不能为空!':''}}</div>
        <div style='color:red;display:flex;margin-top:10px'>
          <p style='color:black'>角色说明</p>
        </div>
        <div style='margin-top:10px;'>
          <ztextarea v-model='explain' maxlength='200' height='100px' width="455px" fontSize="14px" placeholder="请输入角色说明"></ztextarea>
        </div>

      </div>
    </el-form>
  </zdialog>
</template>

<script>
import zinput from '../../../../../components/zinput'
import ztextarea from '../../../../../components/ztextarea'
import ztree from '../../../../../components/ztree'
import zdialog from '../../../../../components/Dialog'
import validate from '../../../../../utils/validate'
export default {
  name: 'editRole',
  model: {
    prop: 'dialogVisible',
    event: 'changeVisible'
  },
  props: [
    'dialogVisible',
    'username',
    'roles',
    'checkedKeys',
    'remark',
    'confirm',
    'roleId'
  ],
  data() {
    return {
      authError: true,
      editStaffDialogVisible: this.dialogVisible,
      treeData: this.roles,
      checkedValue: this.checkedKeys,
      explain: this.remark,
      editRole: {
        name: this.username,
        tree: {}
      },
      rules: {
        name: validate.addRole
      }
    }
  },

  components: {
    zdialog,
    zinput,
    ztree,
    ztextarea
  },
  watch: {
    dialogVisible: function(val) {
      this.editStaffDialogVisible = val
    },
    editStaffDialogVisible: function(val) {
      this.$emit('changeVisible', val)
    },
    'username': function(val) {
      this. editRole.name = val
    },
    'roles': function(val) {
      this.treeData = val
    },
    'checkedKeys': function(val) {
      this.checkedValue = val
    },
    'remark': function(val) {
      this.explain = val
    },
  },
  
  methods: {
    validateAuth() {
      return (this.authError = validate.auth(this.editRole.tree))
    },
    checkedBox() {
      this.validateAuth()
    },
    clearValue() {
      this.checkedValue = []
      this.editRole.name = ''
      this.explain = ''
      this.authError=true
    },
    clickConfirmEvent() {
      let flag=this.validateAuth();
      this.$refs['editRole'].validate(valid => {
        if (valid && flag) {
          this.editStaffDialogVisible = false
          this.confirm(this.editRole, this.explain,this.roleId);
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
