<template>
  <div class="zbutton">
    <el-button @click="click" :type="type" :style='{"width":width,"height":height,"font-size":fontSize,"color": color, "border": type===""?("1px solid "+color):""}'>
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'zbutton',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    color: {
      type: String,
      default: 'black'
    },
    type: {
      type: String,
      default: ''
    },
    click: {
      type: Function,
      default: ()=>{}
    }
  }
}
</script>

<style >
.zbutton .el-button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
}
</style>
