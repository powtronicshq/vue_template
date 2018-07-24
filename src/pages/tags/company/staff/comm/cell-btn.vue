<template>
  <div>
    <!--<el-button type="text" @click="todoEdit">{{ row._edit ? 'Done' : '编辑' }}</el-button>-->
    <!--<el-button type="text" v-if="row.name=='王罐罐1'" @click="todoStart">{{ row._edit ? 'Done' : '启用' }}</el-button>-->
    <!--<el-button type="text" v-else @click="todoForbidden">{{ row._edit ? 'Done' : '禁用' }}</el-button>-->
    <!--<el-button type="text" @click="todoDelete">{{ row._edit ? 'Done' : '删除' }}</el-button>-->
    <el-button type="text" @click="todoEdit">编辑</el-button>
    <el-button type="text" v-if="row.name=='王罐罐1'" @click="todoStart">启用</el-button>
    <el-button type="text" v-else @click="todoForbidden">禁用</el-button>
    <el-button type="text" @click="todoDelete">删除</el-button>
  </div>
</template>

<script>
  export default {
    props: ['row', 'column'],

    created(){
      console.log(this.row._edit)
    },
    methods: {
      todoEdit () {
        this.$emit('row-edit', this.row)
        // this.$set(this.row, '_edit', !this.row._edit)
      },
      todoStart () {
        this.$emit('row-start', this.row)
        // this.$set(this.row, '_edit', !this.row._edit)
      },
      todoForbidden () {
        this.$emit('row-forbidden', this.row)
        // this.$set(this.row, '_edit', !this.row._edit)
      },
      todoDelete () {
        this.$emit('row-delete', this.row)
        // this.$set(this.row, '_edit', !this.row._edit)
      }
    }
  }
</script>

