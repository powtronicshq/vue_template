<template>
  <zdialog v-if="editDialogVisible" width='660px' v-model="editDialogVisible" :confirmTxt='confirmTxt' :title='dialogTitleName' :clickCancelEvent='()=>this.clickCancelEvent()' :clickConfirmEvent='()=>this.clickConfirmEvent()'>
    <el-form ref="editCustomer" :rules="rules" :model="editCustomer">
      <div style='padding:15px 100px 15px 100px;font-size:16px'>
        <div style='color:red;display:flex;margin-bottom:10px'>*
          <p style='color:black'>{{titleName}}</p>
        </div>
        <el-form-item prop="key">
          <zinput v-model='editCustomer.key' maxlength='30' height='40px' width="340px" fontSize="14px" :placeholder="'请输入'+titleName"></zinput>
        </el-form-item>

        <div style='display:flex;margin-bottom:10px'>
          <p style='color:black'>联系人</p>
        </div>
        <el-form-item>
          <zinput v-model='contact' maxlength='20' height='40px' width="340px" fontSize="14px" placeholder="输入联系人"></zinput>
        </el-form-item>
        <div style='display:flex;margin-bottom:10px'>
          <p style='color:black'>联系方式</p>
        </div>
        <el-form-item>
          <zinput v-model='contactStyle' maxlength='20' height='40px' width="340px" fontSize="14px" placeholder="输入联系方式"></zinput>
        </el-form-item>

      </div>
    </el-form>
  </zdialog>
</template>

<script>
import zinput from '../../../../components/zinput'
import zdialog from '../../../../components/Dialog'
import validate from '../../../../utils/validate'
export default {
  name: 'editCustomer',
  model: {
    prop: 'dialogVisible',
    event: 'changeVisible'
  },
  props: {
    dialogVisible:{
       type:Boolean,
       default:false
    },
    confirm:{
       type:Function,
       default:()=>{}
    },
    confirmTxt:{
       type:String,
       default:'确认'
    },
    dialogTitleName:{
       type:String,
       default:'标题'
    },
    titleName:{
       type:String,
       default:''
    },
    defaultKey:{
       type:String,
       default:''
    },
    defaultContact:{
       type:String,
       default:''
    },
    defaultContactStyle:{
       type:String,
       default:''
    }
  },
  data() {
    return {
      editDialogVisible: this.dialogVisible,
      editCustomer: {
        key: this.defaultKey
      },
      contact: this.defaultContact,
      contactStyle: this.defaultContactStyle,
      rules: {
        key: validate.defaultNullValue(this.titleName)
      }
    }
  },

  components: {
    zdialog,
    zinput
  },
  watch: {
    dialogVisible: function(val) {
      this.editDialogVisible = val
    },
    editDialogVisible: function(val) {
      this.$emit('changeVisible', val)
    },
    defaultKey(val) {
      this.key = val
    },
    defaultContact(val) {
      this.contact = val
    },
    defaultContactStyle(val) {
      this.contactStyle = val
    }
  },
  methods: {
    clearValue() {
      this.editCustomer.key = ''
      this.contact = ''
      this.contactStyle = ''
    },
    clickConfirmEvent() {
      this.$refs['editCustomer'].validate(valid => {
        if (valid) {
          this.editDialogVisible = false
          this.confirm(this.editCustomer.key, this.contact, this.contactStyle)
          this.clearValue()
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
