<template>

  <div class='company'>
    <div>

      <p style='font-size:16px;margin-bottom:15px'>证件信息:</p>
      <zbutton :click='addCompanyName' width='96px' height='30px' color='#94BF4B'>
        <i class="el-icon-plus"></i>新增户头</zbutton>

      <div style="margin-top: 20px;">
        <ztable :tooltip='false' :tableData="tableData" headBackColor='#FAFAFA' :columns="columns"></ztable>
      </div>
    </div>

  

      <addNameDialog v-if='addNameDialogVisible' v-model="addNameDialogVisible"  :confirm="(name,simpleName)=>{this.sureAdd(name,simpleName)}"> </addNameDialog>


  </div>
</template>

<script>
import zbutton from '../../../../components/zbutton'
import addNameDialog from './comm/addNameDialog'
import ztable from '../../../../components/Table'

export default {
  name: 'company-name',
  // param 被传入的参数
  props: ['addTags', 'param'],
  data() {
    return {
      // 添加员工|| 详情 一个入口
      addNameDialogVisible: false,
    
      // ......
      columns: [
        {
          prop: 'companyName',
          type: '',
          label: '公司户头名称',
          width: '200',
          fixed: ''
        },
        {
          prop: 'simpleName',
          type: '',
          label: '简称',
          width: '150',
          //  width: '',
          fixed: ''
        },
        {
          prop: 'operator',
          type: '',
          label: '操作人',
          width: '110',
         
          fixed: ''
        },
        {
          prop: 'operatorTime',
          type: '',
          label: '操作时间',
          width: '',
         
          fixed: ''
        },
        {
          prop: 'finalOperator',
          type: '',
          label: '最后操作人',
          // width: '535',
          width: '110',
          fixed: ''
        },
        {
          prop: 'finalOperatorTime',
          type: '',
          label: '最后操作时间',
          // width: '535',
          width: '',
          fixed: ''
        },
        {
          prop: '',
          type: '',
          label: '操作',
          width: '100',
          fixed: 'right',
          btnItems: []
        }
      ],
      tableData: [
        {
          companyName: '华翔', // 公司户头名称
          simpleName: 'hx', // 公司简称
          operator: '东亚', // 操作人
          operatorTime: '2017-10-01 12:20:21', // 操作时间
          finalOperator: '剑锋', // 最后操作人
          isPopp:[{label:"finalOperator",value:'剑锋'}],
          finalOperatorTime: '2017-10-03 11:11:00', // 最后操作人
          btnItems: [
             {
              btnTitle: '启用',
              func: row => this.clickTableUse(row)
            },
            {
              btnTitle: '禁止',
              func: row => this.clickTableBan(row)
            },
          ] 
        },
        {
          companyName: '嘉联', // 公司户头名称
          simpleName: 'hx', // 公司简称
          operator: '东亚', // 操作人
          operatorTime: '2017-10-01 12:20:21', // 操作时间
          finalOperator: '剑锋', // 最后操作人
          finalOperatorTime: '2017-10-03 11:11:00', // 最后操作人
          btnItems: [
             {
              btnTitle: '启用',
              func: row => this.clickTableUse(row)
            },
            {
              btnTitle: '禁止',
              func: row => this.clickTableBan(row)
            },
          ] 
        },
        {
          companyName: '华翔22', // 公司户头名称
          simpleName: 'hx', // 公司简称
          operator: '东亚', // 操作人
          operatorTime: '2017-10-01 12:20:21', // 操作时间
          finalOperator: '剑锋', // 最后操作人
          finalOperatorTime: '2017-10-03 11:11:00', // 最后操作人
          btnItems: [
             {
              btnTitle: '启用',
              func: row => this.clickTableUse(row)
            },
            {
              btnTitle: '禁止',
              func: row => this.clickTableBan(row)
            },
          ] 
        },
        {
          companyName: '华翔333', // 公司户头名称
          simpleName: 'hx', // 公司简称
          operator: '东亚', // 操作人
          operatorTime: '2017-10-01 12:20:21', // 操作时间
          finalOperator: '剑锋', // 最后操作人
          finalOperatorTime: '2017-10-03 11:11:00', // 最后操作人
          btnItems: [
             {
              btnTitle: '启用',
              func: row => this.clickTableUse(row)
            },
            {
              btnTitle: '禁止',
              func: row => this.clickTableBan(row)
            },
          ] 
        },
        
        
      ]
    }
  },

  methods: {
    // 添加台头 或者 详情  修改后的回调
    sureAdd(name,simpleName) {
     
      this.tableData.push({
          companyName: name, // 公司户头名称
          simpleName: simpleName, // 公司简称
          operator: '东亚2', // 操作人
          operatorTime: '2017-10-01 12:20:21', // 操作时间
          finalOperator: '剑锋2', // 最后操作人
          finalOperatorTime: '2017-10-03 11:11:00', // 最后操作人
          btnItems: [
            {
              btnTitle: '禁止',
              func: row => this.clickTableBan(row)
            },
          ] 
      })
    },
    // 添加台头按钮
    addCompanyName() {
      this.addNameDialogVisible = true
    },
   

    clickTableBan(row) {
      this.$notice.warning(
        '是否确认禁用?',
        '禁用',
        '确认',
        '取消',
        () => {
          alert('确认')
        },
        () => {}
      )
      console.log(row)
    },
    clickTableUse(row) {
      this.$notice.warning(
        '是否确认启用?',
        '启用',
        '确认',
        '取消',
        () => {
          alert('确认')
        },
        () => {}
      )

      console.log(row)
    },
   
  },
  components: {
    ztable,
    zbutton,
    addNameDialog
  }
}
</script>

<style scoped>
</style>

<style lang="scss" scoped>
.company {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

</style>

