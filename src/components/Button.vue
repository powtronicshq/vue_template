<template>
  <div style="display: inline-block" class="z-button">
    <el-button class="z-button" @click="handleClick" :style='{"width": width,"height": height,"font-size":fontSize}' :type="type"><slot></slot></el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "my-button",
    props:{
      type:{
        type:String,
        default:''
      },
      width:{
        type:String,
        default:''
      },
      height:{
        type:String,
        default:'32px'
      },
      fontSize:{
        type:String,
        default:'14px'
      },
      icon:{

      }
    },
    methods:{
      handleClick(){
        this.$emit('click')
      }

    }
  }
</script>

<style>

  .z-button .el-button{
    color: #94BF4B;
    border: 1px solid #94BF4B;
    padding:0;
  }

  .z-button .el-button--primary{
    color: #ffffff;
    background-color: #94BF4B;
    border-color: #94BF4B;
  }

  .z-button .el-button--text{
    border: none;
  }
</style>
