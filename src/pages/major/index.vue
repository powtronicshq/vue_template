<style>
.main-a .el-main {
  padding: 0px;
}
.main-a .el-menu {
  border-right: solid 1px #594f4e;
}
.main-d .el-tabs__header {
  margin: 0;
  width: 100%;
  height: 40px;
}

.main-d .el-tabs__header .el-tabs__item {
  font-size: 16px;
  border-left: 1px solid #dcdfe6;
}
.main-d .el-tabs__header .el-tabs__nav {
  border: 1px solid #dcdfe6;
  border-bottom: none;
}

.main-d .el-tabs__header {
  border-bottom: 1px solid #dcdfe6;
  margin-top: 20px;
}

.main-d .el-tabs__item:focus.is-active.is-focus:not(:active) {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.main-d .el-tabs__content {
  position: absolute;
  right: -155px;
  left: 0px;
  top: 61px;
  bottom: 0px;
  overflow-y: auto;
}
body .el-popover {
  border: 1px solid white;
  padding: 0px;
}
</style>

<style scoped lang="scss">
.main-f {
  position: absolute;
  right: 15px;
  left: 0px;
  bottom: 0px;
  top: 20px;
}

.main-a {
  width: 100%;
  height: 100%;
  top: 64px;
  min-width: 1216px;
  min-height: 500px;
}
.main-e {
  display: flex;
  position: absolute;
  top: 64px;
  right: 0px;
  left: 200px;
  bottom: 0px;
  min-width: 1018px;
  background-color: white;
}
.main-e .main-d {
  height: 100%;
  display: flex;
  flex-direction: column;
  right: 155px;
  left: 15px;
  position: absolute;
  background-color: white;
  margin-top: 20px;
  bottom: 0px;
}

.main-func {
  position: absolute;
  display: flex;
  top: 64px;
  left: 200px;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 1018px;
}
.tab-line {
  height: 40px;
  width: 15px;
  border-bottom: 1px solid #dcdfe6;
  margin-top: 20px;
}
.reflash-wrapper {
  padding-right: 15px;
  width: 140px;
  border-bottom: 1px solid rgb(220, 223, 230);
  margin-top: 20px;
  position: absolute;
  right: 0px;
}
.reflash-a {
  text-decoration: none;
  color: black;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 40px;
}
.reflash-p {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  text-decoration: none;
}
.stay {
  transition: all 0.5s;
  transform: rotate(0deg);
}
.rotate {
  transform: rotate(180deg);
  transition: all 0.5s;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 85px;
  padding: 0 15px 0 15px;
}
</style>


<template>
  <zwrapper>
    <zhead :logo='require("../../assets/img/logo.png")' :noticeToDetail='noticeToDetail' systemName='找罐车SAAS系统' :userName='username' :quit="quit" height='64' :changePassword='changePassword' />
    <el-container class='main-a'>
      <el-aside width="200px" style="background-color:#594f4e;height: 100%;color: #333;">
        <!-- 默认展开项  openeds ：展开数组 一维 二维 三维 递进式展开  active：只能展开单条目 不能选中目录  :default-openeds="defaultIndex"-->
        <el-menu text-color='white' :unique-opened="true" :default-active="defaultClick" @select="handleOpen" @close="handleClose">
          <zmenu :menu="menu" />
        </el-menu>
      </el-aside>
      <el-main style='display:flex;flex-direction:column;'>
        <div v-show="tabsMap.length!=0" class='main-e'>
          <div class='tab-line' />
          <el-tabs v-model="tabNameValue" class="main-d" type="card" :stretch='false' @tab-click='tabClick' closable @tab-remove="removeTab">
            <el-tab-pane class="main-f" v-for="(item, index) in tabsMap" :key="getTagKey(item)" :name='getTagKey(item)'>
              <el-popover @contextmenu.native.prevent="openPopper(tabsMap,item)" @click.native.prevent="hidenTags(item)" @hide='hidenTags(item)' slot="label" placement="right-start" v-model="item.visible">
                <el-button size="mini" style="width:100%;border: 1px solid white;border-color: white;" @click="closeAllTags">全部关闭</el-button>
                <el-button size="mini" style="width:100%;margin-left:0px;border: 1px solid white;border-color:white;" @click="closeOtherTags(item)">关闭非当前页</el-button>
                <span slot="reference">{{item.title}}</span>
              </el-popover>
              <component :param='item.data' :key="reflashFlag" :closeLocalTag='closeLocalTag' :addTag='addTag' :pageCode='pageCode' v-bind:is="item.name" />
            </el-tab-pane>
          </el-tabs>
          <div class='reflash-wrapper'>
            <a class='reflash-a' href="javascript:void(0)">
              <img src="../../assets/img/reflash.png" @click="reflash" width="16px" height="16px" :class="[reflashFlag?'stay':'rotate']" alt="">
              <p @click="reflash" class="reflash-p">刷新本页</p>
            </a>
          </div>
        </div>
        <!-- 主界面 入口 -->
        <div v-if="tabsMap.length==0" class='main-func'>
          <outline :addTag='addTag'></outline>
        </div>
      </el-main>
      <zeditPassword v-model='editPassword' />
    </el-container>
  </zwrapper>
</template>

<script>
import zhead from "../../components/zhead.vue";
import zwrapper from "../../components/zwrapper.vue";
import zmenu from "../../components/zmenu.vue";
import zeditPassword from "./editPassword/index";
import zremoteSelect from "../../components/zremoteSelect";
import outline from "./outline/index";

import { mapActions, mapGetters } from "vuex";
import * as menuComponents from "../../config/menus";

export default {
  data() {
    return {
      editPassword: false, // 修改密码
      reflashFlag: false, // 内容区刷新
      tabNameValue: "", // 选中的当前标签页
      tabsMap: [], // 标签页数组
      set: new Set(), // 标签页去重所用数据结构
      defaultClick: "", // 菜单栏当前点击项目
      menu: [], // 菜单栏 数组
      pageCode: [] // 每个页面 颗粒度 控制码
    };
  },
  computed: {
    ...mapGetters(["username", "token", "uuid", "role"])
  },

  mounted() {
    let menus = [
      {
        title: "进销存管理",
        icon: require("../../assets/img/inventory.png"),
        component: "",
        children: [
          {
            title: "采购管理",
            icon: "",
            component: "purchase",
            children: []
          },
          {
            title: "销售管理",
            icon: "",
            component: "sale",
            children: []
          },
          {
            title: "库存管理",
            icon: "",
            component: "",
            children: [
              {
                title: "销售库存管理",
                icon: "",
                component: "saleWarehouse",
                children: []
              },
              {
                title: "采购库存管理",
                icon: "",
                component: "purchaseWarehouse",

                children: []
              }
            ]
          }
        ]
      },
      {
        title: "采销客户管理",
        icon: require("../../assets/img/customer.png"),
        component: "",

        children: [
          {
            title: "客户管理",
            icon: "",
            component: "customer",

            children: []
          },
          {
            title: "供应商管理",
            icon: "",
            component: "supplier",

            children: []
          }
        ]
      },
      {
        title: "物流管理",
        icon: require("../../assets/img/logistics.png"),
        component: "",

        children: [
          {
            title: "物流调度",
            icon: "",
            component: "scheduling",

            children: []
          },
          {
            title: "物流跟踪",
            icon: "",
            component: "tracking",

            children: []
          }
        ]
      },
      {
        title: "资产管理",
        icon: require("../../assets/img/asset.png"),
        component: "",

        children: [
          {
            title: "车辆管理",
            icon: "",
            component: "cars",

            children: []
          },
          {
            title: "司机管理",
            icon: "",
            component: "driver",

            children: []
          }
        ]
      },
      {
        title: "结算管理",
        icon: require("../../assets/img/settle.png"),
        component: "",

        children: [
          {
            title: "结算管理内容",
            icon: "",
            component: "settlementIndex",

            children: []
          }
        ]
      },
      {
        title: "基础数据",
        icon: require("../../assets/img/base.png"),
        component: "",

        children: [
          {
            title: "SKU",
            icon: "",
            component: "SKU",

            children: []
          }
        ]
      },
      {
        title: "企业管理",
        icon: require("../../assets/img/company.png"),
        component: "",

        children: [
          {
            title: "公司管理",
            icon: "",
            component: "information",

            children: []
          },
          {
            title: "员工管理",
            icon: "",
            component: "staff",

            children: []
          },
          {
            title: "公司户头管理",
            icon: "",
            component: "companyName",

            children: []
          },
          {
            title: "部门管理",
            icon: "",
            component: "department",

            children: []
          },
          {
            title: "角色管理",
            icon: "",
            component: "role",

            children: []
          }
        ]
      }
    ];

    this.menu = this.getMenus(menus, this.$routesMap);
    this.pageCode = [];
  },
  components: {
    zhead,
    zwrapper,
    zmenu,
    zeditPassword,
    zremoteSelect,
    outline,
    ...menuComponents.tags
  },
  methods: {
    ...mapActions(["setUserName", "setUUID", "setToken", "setRole"]),
    openPopper(tabsMap, item) {
      tabsMap.forEach(i => {
        i.visible = false;
      });
      item.visible = true;
    },
    hidenTags(item) {
      item.visible = false;
    },
    closeAllTags() {
      this.defaultClick = "";
      this.tabNameValue = ""; // 选中的当前标签页
      this.tabsMap = []; // 标签页数组
      this.set = new Set(); // 标签页去重所用数据结构
    },
    closeOtherTags(item) {
      this.closeAllTags();
      let temp = JSON.stringify(item.title) + JSON.stringify(item.data);
      if (this.defaultClick !== temp) {
        this.defaultClick = "";
      }
      let key = JSON.stringify({
        name: item.title,
        component: item.name,
        data: item.data
      });
      this.set.add(key);
      this.insertTags();
      this.tabNameValue = item.title + JSON.stringify(item.data);
    },
    noticeToDetail(item) {
      console.dir(item);
    },
    getTagKey(item) {
      return item.title + JSON.stringify(item.data);
    },
    getMenus(net, o) {
      return net.map(i => {
        let obj = o.get(i.title);
        let children = [];
        if (i.children.length !== 0) {
          children = this.getMenus(i.children, o);
        }
        return {
          title: i.title,
          icon: i.icon,
          component: i.component,
          children: children,
          data: obj.data
        };
      });
    },
    quit() {
      this.$notice.warning(
        "您确认退出该账号?",
        "",
        "确认",
        "取消",
        () => {
          this.setUserName("");
          this.setUUID("");
          this.setToken("");
          this.setRole("");
          this.$router.replace({ path: "/login" });
        },
        () => {}
      );
    },
    /**
     * 关闭本标签
     */
    closeLocalTag() {
      this.removeTab(this.tabNameValue);
    },
    /**
     * 关闭本标签跳转到目标标签
     * @param {Object}  item  item.title 标签文字   item.component  标签对应的组件名称    item.data 传入的数据
     */
    addTag(item) {
      let key = JSON.stringify({
        name: item.title,
        component: item.component,
        data: item.data
      });
      if (!this.set.has(key)) {
        this.set.add(key);
        this.insertTags();
      }
      this.tabNameValue = item.title + JSON.stringify(item.data);
    },
    /**
     *刷新本标签
     */
    reflash() {
      this.reflashFlag = !this.reflashFlag;
    },
    /**
     * 点击标签页事件
     * @param { Object } tab 点击的标签页对象
     *
     */
    tabClick(tab) {
      // this.$router.replace({ path: tab.name }) // ...........
      // console.dir(tab)
    },
    /**
     * 添加标签页
     */
    insertTags() {
      this.tabsMap = [...this.set].map(i => {
        let obj = JSON.parse(i);
        return { title: obj.name, name: obj.component, data: obj.data };
      });
    },
    /**
     * 删除标签页事件
     * @param { Object } targetName 删除的标签页title
     *
     */
    removeTab(targetName) {
      let tabs = this.tabsMap;
      let activeName = this.tabNameValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.title + JSON.stringify(tab.data) === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.title + JSON.stringify(nextTab.data);
            }
          }
        });
      }

      this.tabNameValue = activeName;
      this.tabsMap = tabs.filter(tab => {
        let flag = tab.title + JSON.stringify(tab.data) !== targetName;
        if (!flag) {
          let obj = { name: tab.title, component: tab.name, data: tab.data };
          if (this.defaultClick === JSON.stringify(obj)) {
            this.defaultClick = "";
          }
          this.set.delete(JSON.stringify(obj));
        }
        return flag;
      });

      if (this.tabsMap.length === 0) {
        this.defaultClick = "";
        this.$router.replace({ path: "/main" });
      }
    },

    /**
     * 点击menu菜单
     * @param { Object } key 点击的menu回传的对象
     * @param { Array } keyPath 点击的menu回传的对象路径
     */
    handleOpen(key, keyPath) {
      this.defaultClick = key;
      if (!this.set.has(key)) {
        this.set.add(key);
        this.insertTags();
      }
      let name = JSON.parse(key).name + JSON.stringify(JSON.parse(key).data);
      this.tabNameValue = name;
    },
    /**
     * 关闭menu菜单
     * @param { Object } key 点击的menu回传的对象
     * @param { Array } keyPath 点击的menu回传的对象路径
     */
    handleClose(key, keyPath) {},
    // 修改密码
    changePassword() {
      this.editPassword = true;
    }
  }
};
</script>
