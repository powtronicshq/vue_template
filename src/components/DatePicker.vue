<template>
  <div class="z-datepicker">
    <el-date-picker
      v-model="value"
      @change="change"
      :style='{"width":width,"height":height}'
      :type="type"
      placeholder="选择日期"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>

</template>

<script>
  export default {
    name: "date-picker",
    props: {
      width:{
        type:String,
        default:'140px'
      },
      height:{
        type:String,
        default:'40px'
      },
      type:{
        type:String,
        default:'date'
      },

    },
    data(){
      return {
        value:''
      }
    },
    methods:{
      change(){
        this.$emit("change")
      }
    }
  }
</script>

<style>
  .z-datepicker{
    display: inline-block;
  }

  .z-datepicker .el-input__inner{
    border: 1px solid #94BF4B;
  }

</style>
