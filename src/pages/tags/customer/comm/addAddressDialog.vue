<template>
  <zdialog v-if="addressDialogVisible" width='660px' v-model="addressDialogVisible" :confirmTxt='confirmTxt' :title='dialogTitleName' :clickCancelEvent='()=>this.clickCancelEvent()' :clickConfirmEvent='()=>this.clickConfirmEvent()'>
    <el-form ref="addAddress" :rules="rules" :model="addAddress">
      <div style='padding:15px 100px 15px 100px;font-size:16px'>
        <div style='color:red;display:flex;margin-bottom:10px'>*
          <p style='color:black'>常用地名</p>
        </div>
        <el-form-item prop="key">
          <zinput v-model='addAddress.key' maxlength='30' height='40px' width="340px" fontSize="14px" placeholder="请输入常用地名"></zinput>
        </el-form-item>

        <div style='display:flex;margin-bottom:10px'>
          <p style='color:black'>地址</p>
        </div>
        <el-form-item>
          <zselectMap v-model='place' width='340px'></zselectMap>
        </el-form-item>
        <el-form-item>
          <zinput v-model='detailAddress' maxlength='20' height='40px' width="340px" fontSize="14px" placeholder="输入详细地址"></zinput>
        </el-form-item>
      </div>
    </el-form>
  </zdialog>
</template>

<script>
import zinput from '../../../../components/zinput'
import zdialog from '../../../../components/Dialog'
import zselectMap from '../../../../components/zselectMap'
import validate from '../../../../utils/validate'
export default {
  name: 'addAddress',
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
    defaultKey:{
       type:String,
       default:''
    },
    defaultPlace:{
       type:Array,
       default:[]
    },
    defaultDetailAddress:{
       type:String,
       default:''
    }
  },
  data() {
    return {
      addressDialogVisible: this.dialogVisible,
      addAddress: {
        key: this.defaultKey
      },
      place: this.defaultPlace.map(i=>{
        return JSON.stringify(i)
      }),
      detailAddress: this.defaultDetailAddress,
      rules: {
        key: validate.defaultNullValue('常用地名')
      }
    }
  },

  components: {
    zdialog,
    zinput,
    zselectMap
  },
  watch: {
    dialogVisible: function(val) {
      this.addressDialogVisible = val
    },
    addressDialogVisible: function(val) {
      this.$emit('changeVisible', val)
    },
    defaultKey(val) {
      this.key = val
    },
    defaultPlace(val) {
      this.place = val.map(i=>{
        return JSON.stringify(i);
      });
    },
    defaultDetailAddress(val) {
      this.detailAddress = val
    }
  },
  methods: {
    clearValue() {
      this.addAddress.key = ''
      this.place = []
      this.detailAddress = ''
    },
    clickConfirmEvent() {
      this.$refs['addAddress'].validate(valid => {
        if (valid) {
          this.addressDialogVisible = false
          this.confirm(this.addAddress.key, this.place.length===0?[]
          :this.place.map(i=>{return JSON.parse(i)}), this.detailAddress)
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
