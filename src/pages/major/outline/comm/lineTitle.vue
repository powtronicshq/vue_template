<template>
  <div style='display:flex;font-size:16px;height:17px'>
    <div style='width:4px;height:100%;background-color:#417505;margin-right:5px'></div>
    <div style='font-weight: bold;height: 100%;line-height: 100%;display: flex;align-items: flex-end;'>
       <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'line-title',
  props:['txt']
}
</script>

