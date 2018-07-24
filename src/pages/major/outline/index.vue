<style lang="scss" scoped>
@import "../../../styles/mixin";

.outline {
  position: absolute;
  color: #4a4a4a;
  right: 30px;
  top: 30px;
  left: 30px;
  bottom: 20px;
}
.staffs {
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
}
.staff {
  @include flex-column(center, center);
  height: 120px;
  width: 20%;
  &-p {
    margin-top: 20px;
    font-size: 14px;
    font-weight: bold;
  }
}
.purchase {
  @include flex-row(space-between, flex-end);
  &-wrapper {
    @include flex-column(center, space-between);
    margin-bottom: 40px;
  }
  &-item {
    @include flex-row(space-between, start);
    margin-top: 20px;
    &-wrapper {
      padding-left: 28px;
      @include flex-column(center, start);
      width: 280px;
      height: 150px;
      border: 1px solid #e5e5e5;
    }
    &-title {
      font-size: 18px;
      font-weight: bold;
    }
    &-contet {
      color: #94bf4b;
      font-size: 30px;
      font-weight: bold;
      margin-top: 25px;
    }
  }
}
.waybill {
  width: 310px;
  margin-top: 20px;
  &-wrapper {
    @include flex-row(space-between, start);
  }
  &-content {
    font-size: 30px;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
  }
}

.waybill-p,
.driver-wrapper-title,
.cars-wrapper-title,
.goods-left-ton {
  font-size: 16px;
  font-weight: bold;
}

.driver-cars {
  @include flex-row(space-between, start);
  width: 100%;
  margin-top: 50px;
  margin-bottom: 65px;
}

.driver,
.cars {
  width: 50%;
  @include flex-column(start, space-between);
}
.driver-wrapper,
.cars-wrapper {
  @include flex-row(space-around, start);
  padding-top: 40px;
}
.goods- {
  &wrapper {
    display: flex;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 60px;
  }
  &left {
    width: 200px;
    margin-top: 15px;
    &-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &-ton-wrapper {
      font-size: 16px;
      font-weight: bold;
      margin-top: 40px;
      margin-bottom: 10px;
    }
  }
}
.chart {
  width: 100%;
  height: 500px;
}

.customer- {
  &wrapper {
    @include flex-row(start, center);
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &title {
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    margin-right: 10px;
  }

  &ton {
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    &-title {
      height: 40px;
      line-height: 40px;
      font-weight: bold;
      margin-right: 20px;
      margin-left: 100px;
    }
  }
}
</style>

<template>
  <div class="outline">
    <!-- 员工管理 -->
    <tilte>员工管理</tilte>
    <div class="staffs">
      <div v-for="(staff,index) in staffInfo" :key="index" class="staff">
        <img :src="staff.img" width="80px" @click="addTags(staff.path)" height="80px" alt="">
        <p class='staff-p'>
          {{staff.title}}{{staff.content}}
        </p>
      </div>
    </div>
    <!-- 采销管理 -->
    <div class='purchase'>
      <tilte>采销管理</tilte>
      <el-date-picker style='width:150px' :picker-options="pickerOptions" v-model="date" type="date" size='medium' placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class='purchase-wrapper'>
      <div class="purchase-item">
        <el-card v-for="(purchase,index) in erpInfo.purchase" :key='index' class="purchase-item-wrapper">
          <div @click="addTags(purchase.path)">
            <p class='purchase-item-title'>{{purchase.title}}</p>
            <p class="purchase-item-contet">{{purchase.content}}吨</p>
          </div>
        </el-card>
      </div>
      <div class="purchase-item">
        <el-card v-for="(sale,index) in erpInfo.sale" :key='index' class="purchase-item-wrapper">
          <div @click="addTags(sale.path)">
            <p class='purchase-item-title'>{{sale.title}}</p>
            <p class="purchase-item-contet">{{sale.content}}吨</p>
          </div>
        </el-card>
      </div>
    </div>
    <!-- 运单管理 -->
    <tilte>运单管理</tilte>
    <div class="waybill-wrapper">
      <waybill class='waybill' v-for="(before,index) in waybillInfo.before" :key="index">
        <p slot="title" class='waybill-p'>{{before.title}}</p>
        <p slot="content" class='waybill-content'>{{before.content}}单</p>
      </waybill>
    </div>
    <div class='waybill-wrapper' style="margin-bottom:20px;">
      <waybill class='waybill' v-for="(after,index) in waybillInfo.after" :key="index">
        <p slot="title" class='waybill-p'>{{after.title}}</p>
        <p slot="content" class='waybill-content'>{{after.content}}单</p>
      </waybill>
    </div>
    <!-- 车辆管理 -->
    <div class='driver-cars'>
      <div class='driver'>
        <tilte>车辆管理</tilte>
        <div class='driver-wrapper'>
          <el-card v-for="(car,index) in carsInfo" :key='index'>
            <pie>
              <p slot="content">{{car.content}}辆</p>
              <p slot="title" class='driver-wrapper-title'>{{car.title}}</p>
            </pie>
          </el-card>
        </div>
      </div>
      <!-- 司机管理 -->
      <div class='cars'>
        <tilte>司机管理</tilte>
        <div class='cars-wrapper'>
          <el-card v-for="(driver,index) in driverInfo" :key='index'>
            <pie>
              <p slot="content">{{driver.content}}人</p>
              <p slot="title" class='cars-wrapper-title'>{{driver.title}}</p>
            </pie>
          </el-card>
        </div>
      </div>
    </div>
    <!-- 各品类库存统计 -->
    <tilte>各品类库存统计</tilte>
    <div class="goods-wrapper">
      <div class='goods-left'>
        <p class='goods-left-title'>品类</p>
        <zlocalSelect v-model="lineChartInfo.category" width='160px' :options='lineChartInfo.categoryOptions'></zlocalSelect>
        <p class='goods-left-ton-wrapper'> 当天库存（吨）</p>
        <p class='goods-left-ton'>{{lineChartInfo.ton}}</p>
      </div>
      <div class="chart">
        <lineChart></lineChart>
      </div>
    </div>
    <!-- 待提货吨位统计 -->
    <tilte>待提货吨位统计</tilte>
    <div class='customer-wrapper'>
      <p class='customer-title'>销售客户</p>
      <zlocalSelect v-model="pickUpInfo.category" width='160px' :options='pickUpInfo.categoryOptions'></zlocalSelect>
      <p class='customer-ton-title'>待送吨位（吨）:</p>
      <p class='customer-ton'>{{pickUpInfo.ton}}吨</p>
    </div>
    <!-- 待提货客户排名 -->
    <tilte>待提货客户排名</tilte>
    <div class="chart">
      <bar-chart></bar-chart>
    </div>
  </div>
</template>

<script>
import tilte from "./comm/lineTitle";
import waybill from "./comm/waybillTitle";
import lineChart from "./comm/lineChart";
import barChart from "./comm/barChart";
import pie from "./comm/pieTitle";
import zlocalSelect from "../../../components/zlocalSelect";

export default {
  name: "",
  model: {
    prop: "",
    event: ""
  },
  props: ["addTag"],
  data() {
    return {
      carsInfo: [
        { title: "车辆合计", content: "132" },
        { title: "在途车辆", content: "132" }
      ],
      driverInfo: [
        { title: "司机合计", content: "33" },
        { title: "在途司机", content: "1" }
      ],
      waybillInfo: {
        before: [
          { title: "合计", content: "1232" },
          { title: "待提货", content: "32" },
          { title: "待卸货", content: "132" }
        ],
        after: [
          { title: "已签收", content: "13432" },
          { title: "已完成", content: "12" },
          { title: "已取消", content: "132" }
        ]
      },

      pickUpInfo: {
        categoryOptions: ["客户1", "客户2", "客户3"],
        category: "客户2",
        ton: "10000"
      },
      barChartInfo: {
        ranking: "10",
        data: []
      },
      lineChartInfo: {
        categoryOptions: ["物品2", "物品1", "物品3"],
        category: "物品1",
        ton: "100",
        data: []
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e7;
        }
      },
      date: new Date() - 8.64e7,
      staffInfo: [
        {
          img: require("../../../assets/img/outline-depart.png"),
          path: "部门管理",
          title: "部门数:",
          content: "4"
        },
        {
          img: require("../../../assets/img/outline-staff.png"),
          path: "员工管理",
          title: "企业人数:",
          content: "2"
        },
        {
          img: require("../../../assets/img/outline-users.png"),
          path: "员工管理",
          title: "昨日使用人数:",
          content: "11"
        },
        {
          img: require("../../../assets/img/outline-permission.png"),
          path: "员工管理",
          title: "待开通权限:",
          content: "3"
        },
        {
          img: require("../../../assets/img/outline-stop.png"),
          path: "员工管理",
          title: "已禁用:",
          content: "4"
        }
      ],
      erpInfo: {
        purchase: [
          { title: "采购合计", content: "132", path: "采购库存管理" },
          { title: "采购库存", content: "12312", path: "采购库存管理" },
          { title: "当日采购", content: "12321", path: "采购库存管理" }
        ],
        sale: [
          { title: "销售合计", content: "31312", path: "销售库存管理" },
          { title: "销售库存", content: "331", path: "销售库存管理" },
          { title: "当日销售", content: "13123", path: "销售库存管理" }
        ]
      }
    };
  },

  components: {
    tilte,
    waybill,
    pie,
    zlocalSelect,
    lineChart,
    barChart
  },
  mounted() {},
  watch: {},
  methods: {
    addTags(name) {
      let obj = this.$routesMap.get(name);
      this.addTag({
        title: name,
        component: obj.component,
        data: {}
      });
    }
  }
};
</script>
