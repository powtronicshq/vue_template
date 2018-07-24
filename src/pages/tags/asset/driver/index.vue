<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.driver-warpper {
}

</style>

<style>
</style>


<template>
  <div class="driver-warpper">

    <zdriverType v-model="defaultType"></zdriverType>

    <div>

      <el-form style='display:flex;margin-top:34px' label-width="80px">
        <el-form-item label="司机" label-width="40px" style='font-size:16px;font-weight:bold'>
          <zremoteSelect v-model="customerValue" :reqPromise='reqPromise' width='200px' placeholder='请输入司机名字'></zremoteSelect>
        </el-form-item>
        <el-form-item label="状态" label-width="100px" style='font-size:16px;font-weight:bold'>
          <zlocalSelect v-model="statusValue" width='140px' :options='statusValueOptions'></zlocalSelect>
        </el-form-item>
        <zbutton :click='search' style='margin-left:30px;margin-right:10px' type='primary' color='white' width='95px' height='40px'>查询</zbutton>
        <zbutton :click='clear' width='95px' height='40px' color='#94BF4B'>清空</zbutton>
      </el-form>

      <zimageButton :click='addcustomerName' width='96px' height='30px' color='#94BF4B' imgType='plus'>新增客户</zimageButton>

      <div style="margin-top: 20px;">
        <ztable :tableData="tableData" headBackColor='#FAFAFA' :columns="columns"></ztable>
      </div>
    </div>
    <!-- <addDialog v-if='addDialogVisible' v-model="addDialogVisible" dialogTitleName='新增客户' confirmTxt='新增' titleName='客户' :confirm="(customerName,contact,contactStyle)=>{this.sureAdd(customerName,contact,contactStyle)}"> </addDialog> -->

    <div style='margin:10px 0 5px 0'>
      <zpagination :total="totalPages" v-model='page'></zpagination>
    </div>
  </div>
</template>

<script>
import zdriverType from './comm/driverType'
import zbutton from '../../../../components/zbutton'
import zimageButton from '../../../../components/zimgButton'
// import addDialog from '../comm/addDialog'
import ztable from '../../../../components/Table'
import zremoteSelect from '../../../../components/zremoteSelect'
import zlocalSelect from '../../../../components/zlocalSelect'
import zpagination from '../../../../components/Pagination'

export default {
  name: '',
  props: ['addTag', 'param'],

  data() {
    return {
      defaultType: '自有车辆'
    }
  },
  components: {
    zdriverType,
    ztable,
    zbutton,
    zimageButton,
    // addDialog,
    zremoteSelect,
    zlocalSelect,
    zpagination
  },
  mounted() {},
  methods: {}
}
</script>

