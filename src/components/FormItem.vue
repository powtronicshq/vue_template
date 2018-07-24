<template>
    <el-form-item required :label="label">
      <slot></slot>
    </el-form-item>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "form-item",
    props:{
      label:{
        type:String,
        default:''
      }
    }
  }
</script>

<style>

</style>
