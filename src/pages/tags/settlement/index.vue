<template>
  <div class="hello">
     <el-input v-model="input" placeholder="结算管理-结算管理"></el-input>
  </div>
</template>

<script>
export default {
  name: '',
       props: ['addTags','jumpToPath',"param"],

  data () {
    return {
      input:''
    }
  },
  mounted(){

    console.dir(this.param)
    console.dir(this.param)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
