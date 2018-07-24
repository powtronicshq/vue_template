<template>
  <div class="z-select">
    <el-select v-model="value" :style='{"width":width,"height":height}' placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "my-select",
    props:{
      options:{
        type:Array,
        default:() => [{
          label:'',
          value:''
        }]
      },
      value:{
        type:String,
        value:''
      },
      width:{
        type:String,
        default:'100%'
      },
      height:{
        type:String,
        default:'40px'
      },

    }
  }
</script>

<style>

  .z-select{
    display: inline-block;
  }
  .z-select .el-input__inner{
    border: 1px solid #94BF4B;
  }
</style>
