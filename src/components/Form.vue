<template>
  <el-form :label-width="label_width">
    <slot></slot>
  </el-form>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "my-form",
    props:{
      label_width:{
        type:String,
        default:''
      }
    }
  }
</script>

<style scoped>

</style>
