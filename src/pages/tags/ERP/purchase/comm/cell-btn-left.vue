<template>
  <div>
    <!--<el-button type="text" @click="todoEdit">{{ row._edit ? 'Done' : '编辑' }}</el-button>-->
    <!--<el-button type="text" v-if="row.name=='王罐罐1'" @click="todoStart">{{ row._edit ? 'Done' : '启用' }}</el-button>-->
    <!--<el-button type="text" v-else @click="todoForbidden">{{ row._edit ? 'Done' : '禁用' }}</el-button>-->
    <!--<el-button type="text" @click="todoDelete">{{ row._edit ? 'Done' : '删除' }}</el-button>-->
    <el-button type="text" @click="todoCheck">{{row.orderNum}}</el-button>
  </div>
</template>

<script>
  export default {
    props: ['row', 'column'],
    methods: {
      todoCheck () {
        this.$emit('row-check', this.row)
        // this.$set(this.row, '_edit', !this.row._edit)
      },
    }
  }
</script>

