<template>

  <div class='customer'>
    <div>

      <el-form style='display:flex' label-width="80px">
        <el-form-item label="客户" label-width="40px" style='font-size:16px;font-weight:bold'>
          <zremoteSelect v-model="customerValue" :reqPromise='reqPromise' width='210px' placeholder='请输入客户名称'></zremoteSelect>
        </el-form-item>
        <el-form-item label="使用状态" label-width="100px" style='font-size:16px;font-weight:bold'>
          <zlocalSelect v-model="statusValue" width='140px' :options='statusValueOptions'></zlocalSelect>
        </el-form-item>
        <zbutton :click='search' style='margin-left:30px;margin-right:10px' type='primary' color='white' width='95px' height='40px'>查询</zbutton>
        <zbutton :click='clear' width='95px' height='40px' color='#94BF4B'>清空</zbutton>
      </el-form>

      <zbutton :click='addcustomerName' width='96px' height='30px' color='#94BF4B'>
        <i class="el-icon-plus"></i>新增客户</zbutton>

      <div style="margin-top: 20px;">
        <ztable :tableData="tableData" headBackColor='#FAFAFA' :columns="columns"></ztable>
      </div>
    </div>
    <addDialog v-if='addDialogVisible' v-model="addDialogVisible" dialogTitleName='新增客户' confirmTxt='新增' titleName='客户' :confirm="(customerName,contact,contactStyle)=>{this.sureAdd(customerName,contact,contactStyle)}"> </addDialog>

    <div style='margin:10px 0 5px 0'>
      <zpagination :total="totalPages" v-model='page'></zpagination>
    </div>


  </div>
</template>

<script>
import zbutton from '../../../../components/zbutton'
import addDialog from '../comm/addDialog'
import ztable from '../../../../components/Table'
import zremoteSelect from '../../../../components/zremoteSelect'
import zpagination from '../../../../components/Pagination'
import zlocalSelect from '../../../../components/zlocalSelect'

export default {
  name: 'customer',
  // param 被传入的参数
  props: ['addTag', 'param'],
  data() {
    return {
      totalPages:100,
      page:1,
      customerValue: '',
      statusValue: '全部',
      statusValueOptions: ['全部', '启用', '禁用'],
      // 添加员工|| 详情 一个入口
      addDialogVisible: false,
      // ......
      columns: [
        {
          prop: 'num',
          type: '',
          label: '',
          width: '50',
          fixed: ''
        },
        {
          prop: 'status',
          type: '',
          label: '使用状态',
          width: '100',
          //  width: '',
          fixed: ''
        },
        {
          prop: 'customer',
          type: '',
          label: '客户',
          width: '200',

          fixed: ''
        },
        {
          prop: 'contact',
          type: '',
          label: '联系人',
          width: '200',

          fixed: ''
        },
        {
          prop: 'guardian',
          type: '',
          label: '维护人',
          // width: '535',
          width: '80',
          fixed: ''
        },
        {
          prop: 'addTime',
          type: '',
          label: '添加时间',
          // width: '535',
          width: '',
          fixed: ''
        },
        {
          prop: 'finalOperator',
          type: '',
          label: '最后操作人',
          // width: '535',
          width: '',
          fixed: ''
        },
        {
          prop: 'finalOperatorTime',
          type: '',
          label: '最后修改时间',
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
          num: '1',
          status: '正常',
          customer: '上海路洋化工有限公司',
          contact: '王先生-12333333333',
          guardian: '王罐罐',
          addTime: '2018-06-07  13:45',
          finalOperator: '王尼玛',
          finalOperatorTime: '2018-06-07  13:45',
          btnItems: [
            {
              btnTitle: '启用',
              func: row => this.clickTableUse(row)
            },
            {
              btnTitle: '编辑',
              func: row => this.clickTableEdit(row)
            }
          ]
        },

        {
          num: '3',
          status: '正常',
          customer: '上海路洋化工有限公司',
          contact: '王先生-12333333333',
          guardian: '王罐罐',
          addTime: '2018-06-07  13:45',
          finalOperator: '王尼玛',
          finalOperatorTime: '2018-06-07  13:45',
          btnItems: [
            {
              btnTitle: '启用',
              func: row => this.clickTableUse(row)
            },
            {
              btnTitle: '编辑',
              func: row => this.clickTableEdit(row)
            }
          ]
        },
        {
          num: '2',
          status: '正常',
          customer: '上海路洋化工有限公司',
          contact: '王先生-12333333333',
          guardian: '王罐罐',
          addTime: '2018-06-07  13:45',
          finalOperator: '王尼玛',
          finalOperatorTime: '2018-06-07  13:45',
          btnItems: [
            {
              btnTitle: '编辑',
              func: row => this.clickTableEdit(row)
            },
            {
              btnTitle: '禁止',
              func: row => this.clickTableBan(row)
            }
          ]
        }
      ]
    }
  },
  mounted() {},

  methods: {
    /**
     * 网络请求下拉列表
     */
    reqPromise(query) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
          ])
        }, 5000)
      })
    },

    // 添加台头 或者 详情  修改后的回调
    sureAdd(customerName, contact, contactStyle) {
      console.dir('contact')
      console.dir(contact)
      console.dir(contactStyle)
      this.tableData.push({
        num: '4',
        status: '正常',
        customer: customerName,
        contact: contact + contactStyle,
        guardian: '王罐罐',
        addTime: '2018-06-07  13:45',
        finalOperator: '王尼玛',
        finalOperatorTime: '2018-06-07  13:45',
        btnItems: [
          {
            btnTitle: '禁止',
            func: row => this.clickTableBan(row)
          },
          {
            btnTitle: '编辑',
            func: row => this.clickTableEdit(row)
          }
        ]
      })
    },
    // 添加台头按钮
    addcustomerName() {
      this.addDialogVisible = true
    },

    clear() {
      this.customerValue = ''
      this.statusValue = '全部'
    },
    search() {
      //   this.customerValue
      //    this.statusValue
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
    clickTableEdit(row) {
      // this.$notice.warning(
      //   '是否确认禁用?',
      //   '禁用',
      //   '确认',
      //   '取消',
      //   () => {
      //     alert('确认')
      //   },
      //   () => {}
      // )
      let obj = this.$routesMap.get('客户管理-详情')
      console.dir('obj')
      console.dir(obj)
      this.addTag({
        title: '客户管理-详情',
        component: obj.component,
        data: { id: row.num }
      })

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
    }
  },
  components: {
    ztable,
    zbutton,
    addDialog,
    zremoteSelect,
    zlocalSelect,
    zpagination
  }
}
</script>

<style scoped>
</style>

<style lang="scss" scoped>
.customer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>

