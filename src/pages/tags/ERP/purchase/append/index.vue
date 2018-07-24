<template>
  <div class="addContent">
    <el-form label-width="100px">
      <el-form-item required label="供应商">
        <zselect width="310px"></zselect>
      </el-form-item>
      <el-form-item required label="采购户头">
        <zselect width="310px"></zselect>
      </el-form-item>
      <el-form-item required style="width:100%" label="合同号">
        <zinput width="310px"></zinput>
        <zcheckbox style="margin-left: 70px">内部合同</zcheckbox>
      </el-form-item>
      <el-form-item required label="品名">
        <zinput width="310px"></zinput>
      </el-form-item>
      <el-form-item label="规格型号">
        <zinput width="310px"></zinput>
      </el-form-item>
      <el-form-item required style="width: 30%;" label="单价">
        <zinput width="150px"></zinput>元/吨
      </el-form-item>
      <el-form-item required style="width: 30%;" label="数量">
        <zinput width="150px"></zinput>吨
      </el-form-item>
      <el-form-item required style="width: 30%;" label="总价">
        <zinput width="150px"></zinput>元
      </el-form-item>
      <el-form-item label="交提货期限">
        <zdatepicker type="daterange" width="310px"></zdatepicker>
      </el-form-item>
      <el-form-item label="仓储费">
        <zinput width="310px"></zinput>
      </el-form-item>
      <el-form-item style="width: 100%;" label="结算方式">
        <zselect width="310px"></zselect>
      </el-form-item>
      <el-form-item style="width: 100%;" label="采购地">
        <zselect width="310px"></zselect>
        <zbutton style="margin-left: 70px" width="88px" height="40px">添加地址</zbutton>
      </el-form-item>
      <el-form-item label="采购人员">
        <zinput width="310px"></zinput>
      </el-form-item>
      <el-form-item label="采购时间">
        <zinput width="310px"></zinput>
      </el-form-item>
      <el-form-item style="width: 100%;" label="备注">
        <zinput width="791px" type="textarea"></zinput>
      </el-form-item>
    </el-form>
    <div style="text-align: center;margin: 30px 0;">
      <zbutton width="88px" height="32px" type="primary">确认新增</zbutton>
      <zbutton width="88px" height="32px">重置</zbutton>
    </div>
  </div>
</template>

<script>
  import zinput from '../../../../../components/Input'
  import zbutton from '../../../../../components/Button'
  import zdialog from '../../../../../components/Dialog'
  import zselect from '../../../../../components/Select'
  import ztable from '../../../../../components/Table/Table2'
  import zcheckbox from '../../../../../components/Checkbox'
  import zdatepicker from '../../../../../components/DatePicker'

  export default {
    name: "index",
    components:{
      zinput,
      zbutton,
      zdialog,
      zselect,
      ztable,
      zcheckbox,
      zdatepicker
    }
  }
</script>

<style>




  .addContent .el-form-item{
    width: 49%;
    display: inline-block;
  }

</style>
