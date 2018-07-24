<template>
  <div style='display:flex;align-items:flex-end;margin-top:10px;margin-left:10px;font-size:16px;height:20px'>
    <div style='width:5px;height:100%;background-color:green;margin-right:5px'></div>
    <p style='font-weight:bold;height:fit-content;'>
      <slot></slot>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'lint-title'
}
</script>

