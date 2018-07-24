<template>
  <div style='display:flex;flex-direction:column;align-items:center'>
    <div style='margin-bottom:20px;font-size:18px;font-weight:bold;color:#88B349;height:110px;width:110px;border:8px solid #88B349;border-radius:50%;display:flex;justify-content:center;align-items:center'>
      <slot name='content'></slot>
    </div>
    <slot name='title'></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pie-title'
}
</script>

