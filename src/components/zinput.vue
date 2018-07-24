<style>
.zinput .el-input__inner {
  height: 100%;
  line-height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.zinput .el-input {
  height: 100%;
  line-height: 100%;
}
</style>
<style scoped lang="scss">
.zinput {
  width: 100%;
  height: 100%;
}
.zinputwraper {
  display: flex;
  align-items: center;
}
</style>

<template>
  <div class="zinputwraper" :style='{"height":height}'>
    <slot></slot>
    <div class='zinput' :style='{"height":height,"width":width}'>
      <el-input :type="type" :maxlength='maxlength' :minlength='minlength' v-model="value" @change="handleInput" :placeholder="placeholder" :style='{"fontSize":fontSize}'></el-input>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'inputValue',
    event: 'changeValue'
  },
  props: [
    'inputValue',
    'height',
    'type',
    'width',
    'maxlength',
    'minlength',
    'placeholder',
    'fontSize',
    'backgroundColor'
  ],

  data() {
    return {
      value: this.inputValue
    }
  },

  methods: {
    handleInput(event) {
      this.$emit('changeValue', event)
    }
  },
  watch:{
    inputValue: function(val) {
      this.value = val
    }
  }
}
</script>
