<template>
  <div class="z-input">
    <el-input :style='{"width":width,"height":height}' :type="type" placeholder="请输入内容"></el-input>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "my-input",
    // props:["label","size","label_width","type"],
    props:{
      width:{
        type:String,
        default:'100%'
      },
      height:{
        type:String,
        default:'40px'
      },
      type:{
        type:String,
        default:''
      }
    },
    created(){
    },
    computed:{
      // labelWidth(){
      //   return 'width:'+this.label_width
      // },
      // labelMargin(){
      //   return 'margin-left:'+this.label_width
      // }
    }
  }
</script>

<style>
  .z-input{
    display: inline-block;
  }

  .z-input .el-input__inner{
    border: 1px solid #94BF4B;
  }

</style>
