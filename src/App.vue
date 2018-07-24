<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    /**
     * 游览器 返回按钮  永远清空历史路由 跳转至空白页
     */
    window.onpopstate = () => {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
}
p {
  display: block;
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  margin: 0;
}
/* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸  chrome生效  firefox无效 */
/* ::-webkit-scrollbar 
{ 
    width: 16px; 
    height: 16px; 
    background-color: #F5F5F5; 
}  */

/*定义滚动条轨道 内阴影+圆角*/
/* ::-webkit-scrollbar-track 
{   box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px; 
    background-color: #F5F5F5; 
}  */

/*定义滑块 内阴影+圆角*/
/* ::-webkit-scrollbar-thumb 
{ 
    border-radius: 10px; 
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); 
    background-color: #555; 
}  */
</style>
