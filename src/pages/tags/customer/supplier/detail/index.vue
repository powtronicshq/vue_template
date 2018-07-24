<template>

  <div class='supplier-detail'>
    <div>

      <div style='display:flex;font-size:16px;white-space: nowrap;max-width:970px'>
        <div style='display:flex;'>
          <p style='margin-right:20px;'>客户：</p>
          <p style='overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-width:470px'>{{supplierName}}</p>
        </div>
        <div style='display:flex;margin:0 40px 0 40px'>
          <p style='margin-right:20px;'>联系人：</p>
          <p style='overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-width:100px'>{{contact}}</p>
        </div>
        <div style='display:flex;'>
          <p style='margin-right:20px;'>联系方式：</p>
          <p style='overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-width:120px'>{{contactStyle}}</p>
        </div>
        <a style="text-decoration:none;margin-left:40px" @click="editCompanyInfo" href="javascript:void(0)">编辑公司信息 </a>

      </div>
      <div style='display:flex;justify-content:space-between;align-items:center;margin-top:50px'>
        <p>地址维护</p>
        <zbutton v-if="this.tableData.length<=20" :click='addAddress' width='96px' height='30px' color='#94BF4B'>
          <i class="el-icon-plus"></i>新增地址</zbutton>
      </div>

      <div style="margin-top: 20px;">
        <ztable :tableData="tableData" headBackColor='#FAFAFA' :columns="columns"></ztable>
      </div>
    </div>

    <editCompanyDialog v-if='editCompanyDialogVisible' dialogTitleName='编辑公司信息' titleName='客户' v-model="editCompanyDialogVisible" :defaultKey='supplierName' :defaultContact='contact' :defaultContactStyle='contactStyle' :confirm="(supplierName,contact,contactStyle)=>{this.sureAddEditCompany(supplierName,contact,contactStyle)}"> </editCompanyDialog>
    <addAddressDialog v-if='editAddressDialogVisible' :dialogTitleName='addressDialogTitleName' v-model="editAddressDialogVisible" :defaultKey='defaultAddress' :defaultPlace='defaultPlace' :defaultDetailAddress='defaultDetailAddress' :confirm="(address,place,detail)=>{this.sureAddEditAddress(address,place,detail)}"> </addAddressDialog>

  </div>
</template>

<script>
import zbutton from '../../../../../components/zbutton'
import editCompanyDialog from '../../comm/addDialog'
import addAddressDialog from '../../comm/addAddressDialog'
import ztable from '../../../../../components/Table'
import zremoteSelect from '../../../../../components/zremoteSelect'
import zlocalSelect from '../../../../../components/zlocalSelect'

export default {
  name: 'customer-detail',
  // param 被传入的参数
  props: ['addTag', 'param'],
  data() {
    return {
      // 添加 编辑 公司地址 开关
      editAddressDialogVisible: false,
      // 编辑公司信息 开关
      editCompanyDialogVisible: false,
      supplierName: '上海路洋化工有限公司', // 公司名字
      contact: '王先生', // 公司联系人
      contactStyle: '12332223223', // 公司联系人 联系方式
      addressDialogTitleName: '',
      defaultAddress: '', // 默认常用地址
      defaultPlace: [
        {
          id: 110000,
          name: '北京'
        },
        {
          id: 110100,
          name: '北京市'
        },
        {
          id: 110101,
          name: '东城区'
        }
      ], // 默认省市区
      defaultDetailAddress: '', // 默认详细地址

      columns: [
        {
          prop: 'localAddress',
          type: '',
          label: '常用地名',
          width: '',
          //  width: '',
          fixed: ''
        },
        {
          prop: 'address',
          type: '',
          label: '地址',
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
          localAddress: '天龙库',
          address: '河北省-石家庄市-长安区 中山路 100号',
          detail: '中山路 100号',
          place: [
            { id: 130000, name: '河北省' },
            { id: 130100, name: '石家庄市' },
            { id: 130102, name: '长安区' }
          ],
          btnItems: [
            {
              btnTitle: '删除',
              color: 'red',
              func: row => this.clickTableBan(row)
            },
            {
              btnTitle: '修改',
              func: row => this.clickTableEdit(row)
            }
          ]
        },
        {
          localAddress: '江苏德胜',
          address: '江苏省-无锡市-锡山区 西林东路 1092号',
          detail: '西林东路 1092号',
          place: [
            { id: 320000, name: '江苏省' },
            { id: 320200, name: '无锡市' },
            { id: 320205, name: '锡山区' }
          ],
          btnItems: [
            {
              btnTitle: '删除',
              color: 'red',
              func: row => this.clickTableBan(row)
            },
            {
              btnTitle: '修改',
              func: row => this.clickTableEdit(row)
            }
          ]
        },
        {
          localAddress: '上海嘉定',
          address: '上海-上海市-嘉定区 城中路 100号',
          detail: '城中路 100号',
          place: [
            { id: 310000, name: '上海' },
            { id: 310100, name: '上海市' },
            { id: 310114, name: '嘉定区' }
          ],
          btnItems: [
            {
              btnTitle: '删除',
              color: 'red',
              func: row => this.clickTableBan(row)
            },
            {
              btnTitle: '修改',
              func: row => this.clickTableEdit(row)
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

    // 编辑公司信息  再请求一次网络获取公司信息
    sureAddEditCompany(supplierName, contact, contactStyle) {
      this.supplierName = supplierName // 公司名字
      this.contact = contact // 公司联系人
      this.contactStyle = contactStyle // 公司联系人 联系方式
    },
    // 编辑新建地址
    sureAddEditAddress(address, place, detail) {
      // console.dir(place)
      // this.defaultAddress = address // 常用地址
      // this.defaultPlace = place // 省市区 Array
      // this.defaultDetailAddress = detail // 详细地址
     
    
      this.tableData.push({
        localAddress: address,
        address:
          place.length === 0
            ? ' '
            : `${place[0].name}-${place[1].name}-${place[2].name} ${detail}`,
        detail: detail,
        place: place,
        btnItems: [
          {
            btnTitle: '删除',
            color: 'red',
            func: row => this.clickTableBan(row)
          },
          {
            btnTitle: '修改',
            func: row => this.clickTableEdit(row)
          }
        ]
      })
    },
    // 编辑公司信息
    editCompanyInfo() {
      this.editCompanyDialogVisible = true
    },
    // 添加地址按钮
    addAddress() {
      this.defaultAddress = '' // 常用地址
      this.defaultPlace = [] // 省市区 Array
      this.defaultDetailAddress = '' // 详细地址
      this.editAddressDialogVisible = true
      this.addressDialogTitleName = '新增地址'
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
      this.editAddressDialogVisible = true
      this.addressDialogTitleName = '修改地址'
      this.defaultAddress = row.localAddress // 常用地址
      this.defaultPlace = row.place // 省市区 Array  Json压缩的字符串
      this.defaultDetailAddress = row.detail // 详细地址
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
      console.log(row)
    }
  },
  components: {
    ztable,
    zbutton,
    editCompanyDialog,
    zremoteSelect,
    zlocalSelect,
    addAddressDialog
  }
}
</script>

<style scoped>
</style>

<style lang="scss" scoped>
.supplier-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>

