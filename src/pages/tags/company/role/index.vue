<template>

  <div class='role'>
    <div>
      <zbutton :click='addStaff' width='96px' height='30px' color='#94BF4B'>
        <i class="el-icon-plus"></i>添加角色</zbutton>

      <div style="margin-top: 20px;">
        <ztable :tableData="tableData" headBackColor='#FAFAFA' :columns="columns"></ztable>
      </div>
    </div>

    <div class="role-footer">
      <p style="font-size:20px;color:#404040">默认添加的角色：</p>
      <p style="font-weight:bold;margin:20px 0 10px 0">超级管理员</p>
      <p style="color:#979797;margin-bottom:12px">可以维护个人中心，可以对全公司人员、部门进行管理，权限设置； 超级管理员有1人，如需变更管理人员请联系罐罐支持人员。
      </p>

      <editRoleDialog v-if='editStaffDialogVisible' v-model="editStaffDialogVisible" :roleId='roleId' :username='defalutName' :roles='defaultRoles' :checkedKeys='defaulTreeIndex' :remark='defalutRemark' :confirm="(roleEidt,remark,roleId)=>{this.sureAdd(roleEidt,remark,roleId)}"> </editRoleDialog>

    </div>

  </div>
</template>

<script>
import zbutton from '../../../../components/zbutton'
import zinput from '../../../../components/zinput'
import ztextarea from '../../../../components/ztextarea'
import ztree from '../../../../components/ztree'
import editRoleDialog from './comm/editRoleDialog'
import ztable from '../../../../components/Table'
import zdialog from '../../../../components/Dialog'

export default {
  name: 'staff-manage',
  // addTags({title,component,data}) 方法  新增标签
  // title,    新建标签页   不能有重名 字符串
  // component,标签对应的组件名 字符串 
  // data      传入新标签的 入参  Object

  // param 被传入的参数
  props: ['addTags', 'param'],
  data() {
    return {
      // 添加员工|| 详情 一个入口
      editStaffDialogVisible: false,
      defalutName: '',
      defalutRemark: '',
      defaulTreeIndex: [],
      roleId: '', // 空字符串是新增角色   有值就是角色的id
      defaultRoles: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      // ......
      columns: [
        {
          prop: 'role',
          type: '',
          label: '角色',
          width: '120',
          fixed: ''
        },
        {
          prop: 'number',
          type: '',
          label: '使用人数',
          width: '120',
          //  width: '',
          fixed: ''
        },
        {
          prop: 'status',
          type: '',
          label: '状态',
          width: '120',
          //  width: '',
          fixed: ''
        },
        {
          prop: 'remark',
          type: '',
          label: '备注',
          // width: '535',
          width: '',
          fixed: ''
        },
        {
          prop: '',
          type: '',
          label: '操作',
          width: '200',
          fixed: 'right',
          btnItems: []
        }
      ],
      tableData: [
        {
          role: '超级管理员', // 角色名
          roleCode: '1', // 角色代码
          number: '1', // 使用人数
          status: '启用中', // 使用状态
          statusCode: true, // 使用状态码
          auth: [], // 拥有权限码id数组
          remark: '上海市普陀区金沙江路 1518 弄', // 备注信息
          btnItems: [
            {
              btnTitle: '',
              func: () => {}
            }
          ] // 操作数组r
        },
        {
          role: '普通员工', // 角色名
          roleCode: '2', // 角色代码
          number: '10', // 使用人数
          status: '启用中', // 使用状态
          statusCode: true, // 使用状态码
          auth: [], // 拥有权限码id数组
          remark: '上海市普陀区金沙江路 www1518 弄', // 备注信息
          btnItems: [
            {
              btnTitle: '详情',
              color:'',
              func: row => this.clickTableEdit(row)
            },
            {
              btnTitle: '禁止',
               color:'green',
              func: row => this.clickTableBan(row)
            },
            {
              btnTitle: '删除',
              color:'red',
              func: row => this.clickTableDelete(row)
            }
          ]
        },
        {
          role: '普通员工2', // 角色名
          roleCode: '3', // 角色代码
          number: '110', // 使用人数
          status: '禁止中', // 使用状态
          statusCode: true, // 使用状态码
          auth: [], // 拥有权限码id数组
          remark: '上海市普陀区金沙江路 1518 弄', // 备注信息
          btnItems: [
            {
              btnTitle: '详情',
              func: row => this.clickTableEdit(row)
            },
            {
              btnTitle: '启用',
              func: row => this.clickTableUse(row)
            },
            {
              btnTitle: '删除',
              func: row => this.clickTableDelete(row)
            }
          ]
        }
      ]
    }
  },
  mounted() {
    console.dir('role-mounted')
  },
  destroyed() {
    console.dir('role-destroyed')
  },
  deactivated() {
    console.dir('role-deactivated')
  },
  activated() {
    console.dir('role-activated')
  },
  methods: {
    // 添加员工 或者 详情  修改后的回调
    sureAdd(editRole, remark, roleId) {
      console.dir(editRole.tree.getCheckedNodes())
      console.dir(editRole.name)
      console.dir(remark)
      this.tableData.push({
        role: editRole.name,
        number: '2',
        status: '启用中',
        remark: remark,
        isShow: true
      })
    },
    // 添加员工按钮
    addStaff() {
      this.roleId = ''
      this.defalutName = ''
      this.defalutRemark = ''
      this.defaulTreeIndex = []
      this.defaultRoles = this.defaultRoles

      this.editStaffDialogVisible = true
    },
    editRole() {},
    clickTableEdit(row) {
      // auth: Array(0)
      // btnItems: Array(3)
      // number: '10'
      // remark: '上海市普陀区金沙江路 1518 弄'
      // role: '普通员工'
      // roleCode: '2'
      // status: '启用中'
      // statusCode: true
      this.roleId = row.roleCode
      this.defalutName = row.role
      this.defalutRemark = row.remark
      this.defaulTreeIndex = row.auth
      this.defaultRoles = this.defaultRoles
      console.log(row)
      this.editStaffDialogVisible = true
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
    clickTableDelete(row) {
      if (Number(row.number) > 0) {
        this.$notice.error(
          '请将使用人移除方可删除!',
          '警告',
          '确认',
          '取消',
          () => {},
          () => {}
        )
      } else {
        this.$notice.warning(
          '是否确认删除?',
          '删除',
          '删除',
          '取消',
          () => {
            alert('删除')
          },
          () => {}
        )
      }

      console.log(row)
    }
  },
  components: {
    ztable,
    zdialog,
    zinput,
    ztree,
    ztextarea,
    editRoleDialog,
    zbutton
  }
}
</script>

<style scoped>
</style>

<style lang="scss" scoped>
.role {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.role-footer {
  display: flex;
  flex-direction: column;
  width: 480px;
  font-size: 16px;
  margin-top: 30px;
}
</style>

