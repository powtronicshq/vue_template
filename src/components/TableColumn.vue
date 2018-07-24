<template>
  <el-table-column
    :type="type"
    :label="label"
    :prop="prop"
    :width="width">
    <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
    <slot name="date" slot-scope="scope.row"></slot>
  </el-table-column>
</template>

<script>
  export default {
    name: "table-column",
    props:{
      type:{
        type:String,
        default:''
      },
      label:{
        type:String,
        default:''
      },
      prop:{
        type:String,
        default:''
      },
      width:{
        type:String,
        default:''
      }
    }
  }
</script>

<style scoped>

</style>
