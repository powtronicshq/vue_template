<template>
  <div>
    <div class="header">
      <el-form :inline="true" label-width="60px">
        <el-form-item label="部门">
          <zSelect style="width: 140px;"></zSelect>
        </el-form-item>
        <el-form-item label="角色">
          <zSelect style="width: 140px;"></zSelect>
        </el-form-item>
        <el-form-item label="员工">
          <zInput style="width: 140px;"></zInput>
        </el-form-item>
        <el-form-item label="状态">
          <zSelect style="width: 140px;"></zSelect>
        </el-form-item>
        <el-form-item prop="">
          <zButton width="95px" height="40px" fontSize="14px" type="primary" @click="">查询</zButton>
          <zButton width="95px" height="40px" fontSize="14px">清空</zButton>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <zButton width="96px" height="30px" fontSize="14px" size="mini" @click="addStaff"><i class="z-icon z-icon-plus"></i>添加员工</zButton>
      <zButton width="96px" height="30px" fontSize="14px" size="mini" @click=""><i class="z-icon z-icon-import"></i>批量导入</zButton>
      <zButton width="122px" height="30px" fontSize="14px" size="mini" @click=""><i class="z-icon z-icon-download"></i>下载导入模板</zButton>
      <zButton width="66px" height="30px" fontSize="14px" size="mini" @click=""><i class="z-icon z-icon-export"></i>导出</zButton>
      <zButton width="160px" height="30px" fontSize="14px" size="mini" @click=""><i class="z-icon z-icon-allocation"></i>批量分配角色/部门</zButton>
    </div>
    <div style="margin-top: 20px;">
      <zTable
        :columns = "columns"
        :data = "tableData"
        :columns-handler="columnsHandler"
        column-type="selection">
      </zTable>
    </div>
    <div style="margin-top: 20px;">
      <zPagination :total="800"></zPagination>
    </div>
    <zDialog width="660px" v-model="addDialogVisible" :btnArray="btnArrayAdd" >
      <div style="width: 100%;box-sizing: border-box;padding: 0 100px;">
        <el-form :model="addFormItem" :rules="ruleValidate" ref="addFormItem">
          <el-form-item required prop="name" label="姓名">
            <zInput width="240px"></zInput>
          </el-form-item>
          <el-form-item required prop="telephone" label="手机号">
            <zSelect width="240px"></zSelect>
          </el-form-item>
          <el-form-item required prop="role" label="角色">
            <zSelect width="240px"></zSelect>
          </el-form-item>
          <el-form-item required prop="department" label="部门">
            <zSelect width="240px"></zSelect>
          </el-form-item>
          <el-form-item>
            <zCheckbox>部门管理员</zCheckbox>
          </el-form-item>
        </el-form>
      </div>
    </zDialog>
    <zDialog width="660px" v-model="editDialogVisible" :btnArray="btnArrayEdit">
      <div style="width: 100%;box-sizing: border-box;padding: 0 100px;">
        <el-form :model="editFormItem" :rules="ruleValidate" ref="editFormItem">
          <el-form-item required prop="name" label="姓名">
            <zInput width="240px"></zInput>
          </el-form-item>
          <el-form-item required prop="telephone" label="手机号">
            <zSelect width="240px"></zSelect>
          </el-form-item>
          <el-form-item required prop="role" label="角色">
            <zSelect width="240px"></zSelect>
            <zButton width="108px" height="40px" fontSize="14px" size="mini" @click="addStaff"><i class="el-icon-plus"></i>添加员工</zButton>
            <div style="display: flex">
              <div style="width: 60px;font-size: 14px;color: #979797;">已有角色</div>
              <div style="width: 400px;">
                <zCheckbox style="margin-left: 30px;">部门管理员</zCheckbox>
                <zCheckbox>部门管理员</zCheckbox>
                <zCheckbox>部门管理员</zCheckbox>
                <zCheckbox>部门管理员</zCheckbox>
                <zCheckbox>部门管理员</zCheckbox>
                <zCheckbox>部门管理员</zCheckbox>
              </div>
            </div>
          </el-form-item>
          <el-form-item required prop="department" label="部门">
            <zSelect width="240px"></zSelect>
            <zButton width="108px" height="40px" fontSize="14px" size="mini" @click="addStaff"><i class="el-icon-plus"></i>添加员工</zButton>
            <div style="display: flex;">
              <div style="font-size: 14px;color: #979797;">所在部门</div>
              <div style="margin-left: 20px;font-size: 14px;color: #161616;">采购一组</div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </zDialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import zButton from '../../../../components/Button'
  import zCheckbox from '../../../../components/Checkbox'
  // import zRadio from '../../../../components/Radio'
  // import zCascadarMap from '../../../../components/CascadarMap'
  // import zDatePicker from '../../../../components/DatePicker'
  import zSelect from '../../../../components/Select'
  import zTable from '../../../../components/Table/Table2'
  import zPagination from '../../../../components/Pagination'
  import zTree from '../../../../components/Tree'
  import zInput from '../../../../components/Input'
  // import zUpload from '../../../../components/Upload'
  import zForm from '../../../../components/Form'
  import zFormInline from '../../../../components/FormInline'
  import zFormItem from '../../../../components/FormItem'
  import zDialog from '../../../../components/Dialog'
  // import {confirm} from '../../../../utils/confirm'
  import Btn from './comm/cell-btn.vue'

  var columns = [
    {prop: 'name',label: '姓名'},
    {prop: 'telephone',label: '手机号'},
    {prop: 'depertment',label: '部门'},
    {prop: 'role',label: '角色'},
    {prop: 'status',label: '状态'},
  ];

  var tableData = [
    {name: '王罐罐1',telephone: '15100000010',depertment: '采购一部（部门管理员）',role:'超级管理员',status:'启用中'},
    {name: '王罐罐2',telephone: '15100000000',depertment: '采购一部（部门管理员）',role:'超级管理员',status:'启用中'},
    {name: '王罐罐3',telephone: '15100000000',depertment: '采购一部（部门管理员）',role:'超级管理员',status:'启用中'},
    {name: '王罐罐4',telephone: '15100000200',depertment: '采购一部（部门管理员）',role:'超级管理员',status:'启用中'},
    {name: '王罐罐5',telephone: '15100000020',depertment: '采购一部（部门管理员）',role:'超级管理员',status:'启用中'},
    {name: '王罐罐8',telephone: '15100000000',depertment: '采购一部（部门管理员）',role:'超级管理员',status:'启用中'},
    {name: '王罐罐7',telephone: '15100000000',depertment: '采购一部（部门管理员）',role:'超级管理员',status:'启用中'},
    {name: '王罐罐9',telephone: '15100000030',depertment: '采购一部（部门管理员）',role:'超级管理员',status:'启用中'},
    {name: '王罐罐18',telephone: '15100000020',depertment: '采购一部（部门管理员）',role:'超级管理员',status:'启用中'},
    {name: '王罐罐10',telephone: '15100000000',depertment: '采购一部（部门管理员）',role:'超级管理员',status:'启用中'},
  ];

  export default {

    name: "staff-manage",
    data(){
      return{
        addFormItem:{

        },
        editFormItem:{

        },
        ruleValidate: {
          name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
          telephone: [{ required: true, message: '手机号不能为空', trigger: 'change' }],
          role: [{ required: true, message: '角色不能为空', trigger: 'change' }],
          department: [{ required: true, message: '部门不能为空', trigger: 'change' }]
        },
        addDialogVisible:false,
        editDialogVisible:false,
        columns:columns,
        tableData:tableData,
        columnsSchema:'',
        columnsProps:'',
        btnArrayAdd:[
          {
            type:'primary',
            width:'88px',
            height:'32px',
            title:'确认添加',
            func:()=>this.addConfirm()
          },
          {
            type:'primary',
            width:'156px',
            height:'32px',
            title:'确认添加并继续添加',
            func:()=>this.continueAddConfirm()
          },
          {
            type:'',
            width:'88px',
            height:'32px',
            title:'取消',
            func:()=>this.cancel()
          }
        ],
        btnArrayEdit:[
          {
            type:'primary',
            width:'88px',
            height:'32px',
            title:'保存',
            func:()=>this.updateConfirm()
          },
          {
            type:'',
            width:'88px',
            height:'32px',
            title:'取消',
            func:()=>this.cancel()
          }
        ]
      }
    },
    methods:{
      columnsHandler (cols) {
        return cols.concat({
          // fixed: 'right',
          label: '操作',
          align: 'center',
          component: Btn,
          // listeners 可用于监听自定义组件内部 $emit 出的事件
          listeners: {
            'row-edit' : (row) => {
              this.editDialogVisible = true
            },
            'row-start' : (row) => {
              this.$notice.warning('启用之后该成员将无法使用该系统。','启用','启用','取消',()=>{
                this.$message({
                  type: 'success',
                  message: '启用成功!'
                });
              },()=>{
                this.$message({
                  type: 'info',
                  message: '已取消启用'
                });
              })
            },
            'row-forbidden' : (row) => {
              this.$notice.warning('禁用之后该成员将无法使用该系统。','禁用','禁用','取消',()=>{
                this.$message({
                  type: 'success',
                  message: '禁用成功!'
                });
              },()=>{
                this.$message({
                  type: 'info',
                  message: '已取消禁用'
                });
              })
            },
            'row-delete' : (row) => {
              this.$notice.warning('删除之后该成员将无法使用该系统。','删除','删除','取消',()=>{
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              },()=>{
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });
              })
            },
          }
        })
      },
      formatterAdd(row, column, cellValue, index){
        // return '1111'
        // return (
        //   <div>
        //     <el-button type="text" size="small">编辑</el-button>
        //     <el-button type="text" onclick="clickTableDelete" size="small">禁用</el-button>
        //     <el-button type="text" size="small">删除</el-button>
        //   </div>
        // )
      },
      addStaff(){
        this.addDialogVisible = true
      },
      continueAddConfirm(){
        this.addDialogVisible = false
      },
      addConfirm(){
        this.addDialogVisible = false
      },
      updateConfirm(){
        this.editDialogVisible = false
      },
      cancel(){
        this.addDialogVisible = false
        this.editDialogVisible = false
      }
    },
    components:{
      // "my-radio" : radio,
      // "my-cascandar-map" : cascadarMap,
      // "my-datepicker" : datePicker,
      zSelect,
      zTable,
      zPagination,
      zTree,
      zInput,
      // "my-upload" : upload,
      zFormInline,
      zFormItem,
      zForm,
      zButton,
      zDialog,
      zCheckbox
    }
  }
</script>

<style>
  .zdialog .el-form-item__label{
    float: none;
    font-size: 16px;
    line-height: 28px;
  }

  .zdialog .z-button{
    margin: 0 5px;
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
