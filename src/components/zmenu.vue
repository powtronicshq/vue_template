<style>

.main-b .el-submenu__title {
  height: 35px;
  line-height: 35px;
  display: flex;
  align-items: center;
  background-color: #594f4e;
    
}
.main-c .el-submenu__title {
  height: 35px;
  line-height: 35px;
  /* margin-left: 25px; */
  display: flex;
  align-items: center;
  background-color: #605351;
  
}
.main-b .el-menu {
  background-color: #605351;
}

.main-b .el-menu-item {
  height: 35px;
  line-height: 35px;
  background-color: #605351;
  /* margin-left: 25px; */
}
.main-b .el-menu-item:hover,
.main-b .el-menu-item:after,
.main-b .el-menu-item:before,
.main-b .el-menu-item:focus {
  background-color: #605351;
}
</style>

<style lang="scss" scoped>
.main-b {
}
</style>


<template>

  <div class="navMenu">

    <label v-for="(item,index) in menu">
<!-- style='background-color: #605351' -->
      <el-menu-item v-if="item.children.length==0&&item.icon==''"  :index="JSON.stringify({name:item.title,component:item.component,data:item.data})" >{{item.title}}</el-menu-item>

      <el-submenu v-else :class='item.icon!=""?"main-b":"main-c"' :index="JSON.stringify({name:item.title,component:item.component,data:item.data})">
        <template slot="title" style='display:flex;align-items:center'>
          <img v-if="item.icon!=''" :src='item.icon' style='height:14px;width:14px;margin-right:3px;'></img>
          <p> {{item.title}}</p>

        </template>

        <zmenu :menu='item.children'></zmenu>
      </el-submenu>

    </label>
  </div>
</template>
 
<script>
export default {
  name: 'zmenu',
  props: ['menu'],
  data() {
    return {}
  },
  methods: {}
}
</script>
 
<style scoped>
</style>
