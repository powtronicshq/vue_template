<template>
  <div class="">
    <div class="header">
      <el-form :inline="true">
        <el-form-item label="供应商">
          <zinput></zinput>
        </el-form-item>
        <el-form-item label="品名">
          <zinput></zinput>
        </el-form-item>
        <el-form-item label="合同号">
          <zinput></zinput>
        </el-form-item>
        <el-form-item>
          <zcheckbox>未上传采购合同</zcheckbox>
        </el-form-item>
        <el-form-item label="采购订单号">
          <zinput></zinput>
        </el-form-item>
        <el-form-item label="吨位">
          <zinput width="68px"></zinput>
          <div style="width: 20px;border: 1px solid #94BF4B;display: inline-block;margin: 0 10px;"></div>
          <zinput width="68px"></zinput>
        </el-form-item>
        <el-form-item label="吨位">
          <zdatePicker></zdatePicker>
          <div style="width: 20px;border: 1px solid #94BF4B;display: inline-block;margin: 0 10px;"></div>
          <zdatePicker></zdatePicker>
        </el-form-item>
        <el-form-item>
          <zbutton width="95px" height="40px" fontSize="14px" type="primary" @click="">查询</zbutton>
          <zbutton width="95px" height="40px" fontSize="14px">清空</zbutton>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <zbutton width="108px" height="30px" fontSize="14px" size="mini" @click="addOrder"><i class="z-icon z-icon-plus"></i>新增采购单</zbutton>
      <zbutton width="66px" height="30px" fontSize="14px" size="mini" @click="exportOrder"><i class="z-icon z-icon-export"></i>导出</zbutton>
    </div>
    <div style="margin-top: 20px">
      <ztable
        column-type="selection"
        :columns = 'columns'
        :data = 'tableData'
        :columns-handler="columnsHandler"
      ></ztable>
    </div>
  </div>
</template>

<script>
  import zbutton from '../../../../components/Button'
  import zcheckbox from '../../../../components/Checkbox'
  // import zRadio from '../../../../components/Radio'
  // import zCascadarMap from '../../../../components/CascadarMap'
  import zdatePicker from '../../../../components/DatePicker'
  import zselect from '../../../../components/Select'
  import ztable from '../../../../components/Table/Table2'
  import zpagination from '../../../../components/Pagination'
  import ztree from '../../../../components/Tree'
  import zinput from '../../../../components/Input'
  // import zUpload from '../../../../components/Upload'
  import zform from '../../../../components/Form'
  import zformInline from '../../../../components/FormInline'
  import zformItem from '../../../../components/FormItem'
  import zdialog from '../../../../components/Dialog'
  // import {confirm} from '../../../../utils/confirm'
  import BtnL from './comm/cell-btn-left'
  import BtnR from './comm/cell-btn-right'

  const columns = [
    { label: '采购合同号', prop: 'agreementNum' },
    { label: '供应商', prop: 'supplier' },
    { label: '品名', prop: 'goodName' },
    { label: '合同单价（元/吨）', prop: 'unitPrice' },
    { label: '合同数量（吨）', prop: 'number' },
    { label: '合同金额（元）', prop: 'sum' },
    { label: '录入时间', prop: 'time' }
  ]

  const tableData = [
    {orderNum: 'G1805290001',agreementNum: 'G1805290001',supplier: '上海路洋化工有限公司',goodName:'甲醛',unitPrice:'200',number:'43.340',sum:'40000',time:'2018-06-07  13:45'},
    {orderNum: 'G1805290001',agreementNum: 'G1805290001',supplier: '上海路洋化工有限公司',goodName:'甲醛',unitPrice:'200',number:'43.340',sum:'40000',time:'2018-06-07  13:45'},
    {orderNum: 'G1805290001',agreementNum: 'G1805290001',supplier: '上海路洋化工有限公司',goodName:'甲醛',unitPrice:'200',number:'43.340',sum:'40000',time:'2018-06-07  13:45'},
    {orderNum: 'G1805290001',agreementNum: 'G1805290001',supplier: '上海路洋化工有限公司',goodName:'甲醛',unitPrice:'200',number:'43.340',sum:'40000',time:'2018-06-07  13:45'},
    {orderNum: 'G1805290001',agreementNum: 'G1805290001',supplier: '上海路洋化工有限公司',goodName:'甲醛',unitPrice:'200',number:'43.340',sum:'40000',time:'2018-06-07  13:45'},
    {orderNum: 'G1805290001',agreementNum: 'G1805290001',supplier: '上海路洋化工有限公司',goodName:'甲醛',unitPrice:'200',number:'43.340',sum:'40000',time:'2018-06-07  13:45'},
    {orderNum: 'G1805290001',agreementNum: 'G1805290001',supplier: '上海路洋化工有限公司',goodName:'甲醛',unitPrice:'200',number:'43.340',sum:'40000',time:'2018-06-07  13:45'},
    {orderNum: 'G1805290001',agreementNum: 'G1805290001',supplier: '上海路洋化工有限公司',goodName:'甲醛',unitPrice:'200',number:'43.340',sum:'40000',time:'2018-06-07  13:45'},
    {orderNum: 'G1805290001',agreementNum: 'G1805290001',supplier: '上海路洋化工有限公司',goodName:'甲醛',unitPrice:'200',number:'43.340',sum:'40000',time:'2018-06-07  13:45'},
    {orderNum: 'G1805290001',agreementNum: 'G1805290001',supplier: '上海路洋化工有限公司',goodName:'甲醛',unitPrice:'200',number:'43.340',sum:'40000',time:'2018-06-07  13:45'}
  ]


  export default {
    name: '',
    props: ['addTag', 'param'],

    data() {
      return {
        input: '',
        columns:columns,
        tableData:tableData
      }
    },
    methods:{
      addOrder(){
        let obj = this.$routesMap.get('新增采购单')
        this.addTag({title:'新增采购单',component:obj.component,data: {}})
      },
      exportOrder(){

      },
      handleCheck(row){
        let obj = this.$routesMap.get('采购单详情')
        this.addTag({title:'采购单详情',component:obj.component,data: { id: row.num }})
      },
      columnsHandler(cols){
        return cols.concat({
          fixed: 'left',
          label: '采购订单号',
          align: 'center',
          component: BtnL,
          // listeners 可用于监听自定义组件内部 $emit 出的事件
          listeners: {
            'row-check': (row) => this.handleCheck(row)
          }
        },{
          fixed: 'right',
          label: '操作',
          align: 'center',
          component: BtnR,
          // listeners 可用于监听自定义组件内部 $emit 出的事件
          listeners: {
            'row-check': (row) => this.handleCheck(row)
          }
        })
      }
    },
    components:{
      // "my-radio" : radio,
      // "my-cascandar-map" : cascadarMap,
      // "my-datepicker" : datePicker,
      zselect,
      ztable,
      zpagination,
      ztree,
      zinput,
      zdatePicker,
      // "my-upload" : upload,
      zformInline,
      zformItem,
      zform,
      zbutton,
      zdialog,
      zcheckbox
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .header .el-form--inline .el-form-item{
    margin-right: 40px;
  }

  .z-icon{
    display: inline-block;
    width: 14px;
    height: 14px;
    position: relative;
    top: 1px;
    right: 2px;
  }

  .z-icon-plus{
    background: url("../../../../assets/img/plus.png");
  }

  .z-icon-import{
    background: url("../../../../assets/img/imports.png");
  }

  .z-icon-download{
    background: url("../../../../assets/img/download.png");
  }

  .z-icon-export{
    background: url("../../../../assets/img/export.png");
  }

  .z-icon-allocation{
    background: url("../../../../assets/img/allocation.png");
  }
</style>
