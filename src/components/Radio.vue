<template>
  <el-radio label="1">{{title}}</el-radio>
</template>

<script>
  export default {
    name: "radio",
    props:{
      title:{
        type:String,
        default:'备选项'
      }
    }
  }
</script>

<style scoped>

</style>
