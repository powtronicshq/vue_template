<style scoped lang="scss">
.head-a {
  display: flex;
  align-items: center;
}
.z-header {
  // height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #94bf4b;
  font-size: 14px;
  color: white;
}
// .notice {
//   // margin-right: 30px;
//   margin-bottom: 1px;
// }
</style>
<style>
.head-a a,
.popover a {
  text-decoration: none;
}

/* body .el-popover{
  height: 480px;
  overflow: hidden;
  overflow-y: auto;
} */
</style>

<template>
  <el-header :style="{'height':height+'px'}" class="z-header">
    <div style="display:flex;align-items:center; font-size: 20px;height:25px;line-height:25px;color:white">
      <img  :src="logo" :style='{"width":"20px","height":"20px","margin-right":"0px"}' alt="">
      <p>{{systemName}}</p>
    </div>

    <div class='head-a' style='font-size:16px;'>
      <znotice :noticeToDetail='(item)=>{this.toDetail(item)}'></znotice>

      <div style="width:27px"></div>

      <span style='color:white;'>
        {{userName}}
      </span>
      <a style='color:white;margin-left:20px' @click='changePassword' href="javascript:void(0)">修改密码</a>
      <a style='color:white;margin-left:20px' @click='quit' href="javascript:void(0)">安全退出</a>
    </div>

  </el-header>
</template>
<script>
import znotice from './znotice'
export default {
  props: [
    'logo',
    'systemName',
    'userName',
    'quit',
    'funArr',
    'height',
    'changePassword',
    'noticeToDetail'
  ],

  data() {
    return {
      // noticeData: [
      //   {
      //     type: "1",
      //     mark: 'C180529001',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290001还有三天就到库存截止日期了，请及时派车运货！'
      //   },
      //   {
      //     type: "1",
      //     mark: 'C180529002',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290002还有三天就到库存截止日期了，请及时派车运货！'
      //   },
      //   {
      //     type: "1",
      //     mark: 'C180529003',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
      //   },
      //   {
      //     type: "1",
      //     mark: 'C180529003',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
      //   },
      //   {
      //     type: "1",
      //     mark: 'C180529003',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
      //   },
      //   {
      //     type: "1",
      //     mark: 'C180529003',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
      //   },
      //   {
      //     type: "1",
      //     mark: 'C180529003',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
      //   },
      //   {
      //     type: "1",
      //     mark: 'C180529003',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
      //   },
      //   {
      //     type: "1",
      //     mark: 'C180529003',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
      //   },
      //   {
      //     type: "1",
      //     mark: 'C180529003',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
      //   },
      //   {
      //     type: "1",
      //     mark: 'C180529003',
      //     typeTxt: '库存提醒',
      //     content:
      //       '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
      //   }
      // ],
      // visible: false,
      // showDot: true
    }
  },
  components: {
    znotice
  },
  mounted() {
    // this.websocket()
  },
  methods: {
    //  websocket () {
    //    console.dir('websocket....')
    //  let ws = new WebSocket(this.$axios.webSocket())
    //  ws.onopen = () => {
    //     // Web Socket 已连接上，使用 send() 方法发送数据
    //       ws.send('Holle')
    //       console.log('数据发送中...')
    //   }
    //   ws.onmessage = evt => {
    //     console.log('数据已接收...')
    //     console.dir(evt)
    //   }
    //   ws.onclose = function () {
    //     // 关闭 websocket
    //     console.log('连接已关闭...')
    //   }
    //   // 路由跳转时结束websocket链接
    //   this.$router.afterEach(function () {
    //     ws.close()
    //   })
    // },

    toDetail(item) {
      // this.visible = false
      this.noticeToDetail(item)
    }
    // hide() {
    //   this.showDot = false
    // },
    // add() {
    //   this.showDot = true
    // }
  }
}
</script>
