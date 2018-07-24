<style>
.choiceType .el-radio-group {
  width: 100%;
  height: 100%;
  display: flex;
}
.choiceType .el-radio-group .el-radio-button {
  height: 100%;
  width: 100%;
}
.choiceType .el-radio-group  .el-radio-button__inner {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

</style>

<template>
  <div style='height:100%;width:100%' class="choiceType">
    <el-radio-group size='medium' v-model="radio">
      <el-radio-button v-for='(type,index) in types' :key='index' :label="type"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'choiceType',
  model:{
    prop:'choiceType',
    event:'changeChoiceType'
  },
  props: ['types','choiceType'],

  data() {
    return {
      radio: this.choiceType
    }
  },
  watch:{
     radio(val){
        this.$emit('changeChoiceType',val)
     }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
