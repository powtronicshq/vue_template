<template>
  <div style='height:100%;width:100%;display:flex;flex-direction:column;align-items:flex-end;'>
    <el-radio-group size="mini" v-model="radio" style='margin-right:45px'>
      <el-radio-button label="5">前5名</el-radio-button>
      <el-radio-button label="7">前7名</el-radio-button>
      <el-radio-button label="10">前10名</el-radio-button>
    </el-radio-group>
    <div id='barChart' style='height:100%;width:100%;'>

    </div>

  </div>

</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入饼图组件
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
// 引入提示框和图例组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
require('echarts/lib/component/title')
require('echarts/lib/component/dataset')
export default {
  name: '',
  model: {
    prop: '',
    event: ''
  },
  props: ['',''],
  data() {
    return {
      barChart: {},
      radio: '10',
      data:[]
    }
  },

  components: {},
  mounted() {
    this.drawBar()
  },

  watch: {
    radio(val) {

      let option = this.barChart.getOption()

      option.dataset[0].source = this.filterBar()
      console.dir(option)
      this.barChart.setOption(option)
    }
  },
  methods: {
    filterBar() {
      switch (this.radio) {
        case '5':
          return [
            ['product', '销售吨位', '待运吨位'],
            ['销售21', '999.3', '235.8'],
            ['销售32', '4323.3', '132.8'],
            ['销售31', '453.3', '325.8'],
            ['销售4', '413.3', '185.8'],
            ['销售5', '243.3', '425.8']
          ]
          break
        case '7':
          return [
            ['product', '销售吨位', '待运吨位'],
            ['销售t1', '999.3', '235.8'],
            ['销售w2', '4323.3', '132.8'],
            ['销售3', '453.3', '325.8'],
            ['销售4as', '413.3', '185.8'],
            ['销售5', '243.3', '425.8'],
            ['销售6', '143.3', '285.8'],
            ['销售7', '43.3', '135.8']
          ]
          break
        case '10':
          return [
            ['product', '销售吨位', '待运吨位'],
            ['销售1', '999.3', '235.8'],
            ['销售2', '4323.3', '132.8'],
            ['销售s3', '453.3', '325.8'],
            ['销售4', '413.3', '185.8'],
            ['销售5', '243.3', '425.8'],
            ['销售sd6', '143.3', '285.8'],
            ['销售7', '43.3', '135.8'],
            ['销售8', '433.3', '15.8'],
            ['销售9', '243.3', '235.8'],
            ['销售10', '453.3', '135.8']
          ]
          break
        default:
          return[ ['product', '销售吨位', '待运吨位']]
      }
    },
    drawBar() {
      // 基于准备好的dom，初始化echarts实例
      this.barChart = echarts.init(document.getElementById('barChart'))

      window.addEventListener('resize', () => {
        this.barChart.resize()
      })

      let option = {
        noDataLoadingOption: {
          effect: 'bubble',
          text: '暂无数据'
        },
        // title: { text: '待提货吨位统计' },
        legend: {},
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            return (
              params.name +
              '<br/>' +
              params.seriesName +
              ':\n\n' +
              params.value[params.seriesIndex + 1] +
              '吨'
            )
          }
        },
        dataset: {
          source: this.filterBar()
        },
        xAxis: { type: 'category', name: '客户名称' },
        yAxis: {
          name: '单位(吨)',
          axisLine: { show: false }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: 'bar',
            color: 'lightgreen',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: 'black'
              }
            }
          },
          {
            type: 'bar',
            color: 'pink',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: 'black'
              }
            }
          }
        ]
      }
      // 绘制图表
      this.barChart.setOption(option)
    }
  }
}
</script>

<style >
</style>

<style lang="scss" scoped>
</style>
