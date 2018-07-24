<template>
  <el-table ref="multipleTable" :cell-style='cellStyle' :data="tableData" :header-cell-style="getRowClass" tooltip-effect="dark" style="width: 100%;min-width:970px" border>
    <el-table-column v-if="isSelection" align="center" type="selection" width="55">

    </el-table-column>

    <el-table-column v-if="isIndex" align="center" type="index" width="55">

    </el-table-column>

    <el-table-column label-class-name='mark' :show-overflow-tooltip="tooltip" align="center" :key="column.prop" v-for="column in columns" v-if="!column.btnItems" :prop="column.prop" :type="column.type" :width="column.width" :label="column.label">

      <!-- <template slot-scope="scope"> 
       <el-popover v-if="!tooltip" placement="top-start" width="200" trigger="hover" content="..das">
          <p  :style='setUnitColor(scope.row,column.prop)' v-if="!tooltip" slot="reference">{{scope.row[column.prop]}}</p>
        </el-popover>

        <p style="color:green" v-else slot="reference">{{scope.row[column.prop]}}</p> 
     </template> -->

    </el-table-column>

    <el-table-column align="center" :key="column.label" v-for="column in columns" v-if="column.btnItems" :prop="column.prop" :type="column.type" :width="column.width" :label="column.label" :fixed='column.fixed'>
      <template slot-scope="scope">
        <el-button @click="() => btnItem.func(scope.row)" :key="btnItem.btnTitle" v-for="btnItem in scope.row.btnItems" type="text" :style='{"color":btnItem.color}' size="small">{{btnItem.btnTitle}}</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'my-table',
  props: {
    tableData: {
      type: Array,
      default: []
    },
    columns: {
      type: Array,
      default: []
    },
    headBackColor: {
      type: String,
      default: 'white'
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    isSelection: {
      type: Boolean,
      default: false
    },
    isIndex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    // cellMouseEnter(row, column, cell, event) {
    //   console.dir(row)
    //   console.dir(column)
    //   console.dir(cell)
    //   console.dir(event)
    // },
    cellStyle({ row, column, rowIndex, columnIndex }){
      // console.dir(row)
      // console.dir(column)
      // console.dir(rowIndex)
      // console.dir(columnIndex)
      return  row.number==='110'&&columnIndex===0?{'color':"red"}:{}

     


    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'backgroundColor:' + this.headBackColor
      } else {
        return ''
      }
    },
    setUnitColor(row,pop){
      console.dir("row")
      console.dir(row)
      console.dir("pop")
      console.dir(pop)
      if(pop==='simpleName'){

      }
    }
  }
}
</script>



<style >
</style>
