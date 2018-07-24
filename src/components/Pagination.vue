<template>
  <!--<el-pagination-->
  <!--layout="prev, pager, next"-->
  <!--page-size=10-->
  <!--:total="total">-->
  <!--</el-pagination>-->
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[25, 50, 100]" :page-size="25" layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
  </el-pagination>
</template>

<script>
export default {
  name: 'pagination',
  model: {
    prop: 'page',
    event: 'changePage'
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentPage: this.page,
      totalPage:this.total
    }
  },
  watch: {
    currentPage(val) {
      this.$emit('changePage',val)
    }
    ,
    total(val){
       this.totalPage=val
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    }
  }
}
</script>

<style scoped>
</style>
