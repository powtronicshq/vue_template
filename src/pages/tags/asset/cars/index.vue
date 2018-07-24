<template>
  <div class="hello">
     <el-input v-model="input" placeholder="资产管理-车辆管理">sssssssssssssss</el-input>
     <el-button type="text" @click="push">dd</el-button>

  </div>
</template>

<script>


export default {
  name: '',
     props: ['addTags','closeLocalTag',"param"],

  data () {
    return {
      input:''
    }
  },
  mounted(){
     console.dir("this.param")
     console.dir(this.param)
  },
  methods:{
     push(){
     this.closeLocalTag()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
