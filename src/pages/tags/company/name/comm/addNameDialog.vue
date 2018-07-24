<template>
  <zdialog v-if="isVisible" width='402px' v-model="isVisible" confirmTxt='保存' title='新增户头' :clickCancelEvent='()=>this.clickCancelEvent()' :clickConfirmEvent='()=>this.clickConfirmEvent()'>
    <el-form ref="editCompanyName" :rules="rules" :model="editCompanyName">
      <div style='padding:15px 40px 0 40px;font-size:16px;'>
        <div style='display:flex;align-items:center;justify-content:flex-end'>
          <p style='color:black;margin:0 10px 22px 0;height:40px;line-height:40px'>简称</p>
          <el-form-item >
            <zinput v-model='simpleName' maxlength='10' height='40px' width="240px" fontSize="14px" placeholder="输入简称"> </zinput>
          </el-form-item>
        </div>


        <div style='display:flex;align-items:center;'>
          <p style='color:black;margin-bottom:22px;height:40px;line-height:40px'>户头名称</p>
          <p style='color:red;height:40px;line-height:40px;margin-bottom:22px;margin-right:10px'>*</p>

          <el-form-item prop="name">
            <zinput v-model='editCompanyName.name' maxlength='10' height='40px' width="240px" fontSize="14px" placeholder="输入户头名称"> </zinput>
          </el-form-item>
        </div>

        
      </div>
    </el-form>
  </zdialog>
</template>

<script>
import zinput from '../../../../../components/zinput'

import zdialog from '../../../../../components/Dialog'
import validate from '../../../../../utils/validate'
export default {
  name: 'editRole',
  model: {
    prop: 'dialogVisible',
    event: 'changeVisible'
  },
  props: ['dialogVisible', 'confirm'],
  data() {
    return {
      isVisible: this.dialogVisible,
      editCompanyName: {
        name: ''
      },
      simpleName:'',
      rules: {
        name: validate.addCompanyName
      }
    }
  },

  components: {
    zdialog,
    zinput,
  },
  watch: {
    dialogVisible: function(val) {
      this.isVisible = val
    },
    isVisible: function(val) {
      this.$emit('changeVisible', val)
    },
  },
  methods: {
    clearValue() {
      this.editCompanyName.name='';
      this.simpleName='';
    },
    clickConfirmEvent() {
      this.$refs['editCompanyName'].validate(valid => {
        if (valid ) {
          this.isVisible = false
          this.confirm(this.editCompanyName.name,this.simpleName)
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

<style lang="scss" scoped>

</style>
