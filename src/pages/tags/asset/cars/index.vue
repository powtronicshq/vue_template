<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  // display: flex;
  width: 100%;
}
</style>

<template>
  <div class="wrapper">
    <el-form style='display:flex;margin-top:0px;width:100%;flex-wrap:wrap;;' label-width="80px">
      <el-form-item label="状态" label-width="40px" style='font-size:16px;font-weight:bold;margin-right:20px'>
        <localSelect width='100px' v-model="statusDefault" :options='statusOptions'></localSelect>
      </el-form-item>
      <el-form-item label="入库仓库" label-width="70px" style='font-size:16px;font-weight:bold;margin-right:20px'>
        <remoteSelect v-model="stoneName" :reqPromise='reqStoneNamePromise' width='200px' placeholder='请输入仓库名称'></remoteSelect>
      </el-form-item>
      <el-form-item label="计划创建时间" label-width="100px" style='font-size:16px;font-weight:bold;margin-right:20px'>
        <el-date-picker style='width:250px' v-model="createDate" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="入库类型" label-width="70px" style='font-size:16px;font-weight:bold;margin-right:20px'>
        <localSelect width='140px' v-model="typeDefault" :options='typeOptions'></localSelect>
      </el-form-item>

      <el-form-item label="车牌号" label-width="55px" style='font-size:16px;font-weight:bold;margin-right:20px'>
        <remoteSelect v-model="plate" :reqPromise='reqPlatePromise' width='150px'></remoteSelect>
      </el-form-item>

      <el-form-item label-width="0px" style='font-size:16px;font-weight:bold'>
        <el-button type="primary" @click="">查询</el-button>
      </el-form-item>

      <el-form-item label-width="10px" style='font-size:16px;font-weight:bold'>
        <el-button  @click="">清空</el-button>
      </el-form-item>
    </el-form>
    <div style='display:flex'>
      <el-button type="primary" @click="">生成采购入库计划</el-button>
      <el-button type="primary" @click="">导出</el-button>
    </div>
   
  </div>
</template>

<script>
import remoteSelect from "./comm/zremoteSelect";
import localSelect from "./comm/zlocalSelect";

export default {
  name: "",
  props: ["addTags", "closeLocalTag", "param"],

  data() {
    return {
      statusOptions: ["全部", "待入库", "已入库", "已取消"],
      statusDefault: "全部",
      stoneName: "",
      createDate: "",
      typeOptions: ["全部采购入库", "调拨入库", "回收入库"],
      typeDefault: "全部采购入库",
      plate: "沪dada"
    };
  },
  mounted() {},
  components: {
    remoteSelect,
    localSelect
  },
  methods: {
    reqStoneNamePromise(query) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            "Alabamasssssssssssssssssssssssszzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzsssssssssss",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
          ]);
        }, 5000);
      });
    },
    reqPlatePromise(query) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            "Alabamasssssssssssssssssssssssszzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzsssssssssss",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
          ]);
        }, 5000);
      });
    }
  }
};
</script>

