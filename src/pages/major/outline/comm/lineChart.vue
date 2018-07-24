<template>
  <div id='lineChart' style='height:100%;width:100%;'></div>
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
  props: ['chartData'],
  data() {
    return {
      lineChart: {}
    }
  },

  components: {},
  mounted() {
    
    this.drawLine()
  },
  watch: {},
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.lineChart = echarts.init(document.getElementById('lineChart'))

      window.addEventListener('resize', () => {
        this.lineChart.resize()
      })

      let option = {
        dataset: {
          source: [
            ['周一', 120],
            ['周二', 132],
            ['周三', 101],
            ['周四', 134],
            ['周五', 230],
            ['周六', 120],
            ['周日', 90]
          ]
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: 'black'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            name: '7天'
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: { show: false },
            name: '单位(吨)'
          }
        ],
        series: [
          {
            type: 'line',
            smooth: true,
            label: {
              normal: {
                show: true,
                position: 'right',
                color: 'black'
              }
            },
            lineStyle: {
              color: '#6495ED'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'lightblue' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'lightblue' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            }
          }
        ]
      }
      // 绘制图表
      this.lineChart.setOption(option)
    }
  }
}
</script>

<style >
</style>

<style lang="scss" scoped>
</style>
