<template>
  <div style='display:flex;font-size:16px;height:60px'>
    <div style='width:4px;height:100%;background-color:#88B349;margin-right:5px'></div>
    <div style='height: 100%;line-height: 100%;display: flex;padding-left:20px;flex-direction:column;justify-content: space-between;'>
       <slot name='title' ></slot>
       <slot name='content'></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'waybill-title',
 
}
</script>

