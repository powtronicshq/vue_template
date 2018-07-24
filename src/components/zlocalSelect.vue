<template>
  <!-- <el-select v-model="selectValue" @focus="remoteMethod" :style='{"width":width}' clearable filterable remote :placeholder="placeholder" :loading="loading">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select> -->
  <el-select v-model="selectValue" :style='{"width":width}' :placeholder="placeholder">
    <el-option
      v-for="item in options"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: [ 'width', 'placeholder', 'value','options'],
  model: {
    prop: 'value',
    event: 'changeValue'
  },
  data() {
    return {
      selectValue: this.value,
    }
  },
  watch: {
    selectValue(val) {
      this.$emit('changeValue', val)
    },
    value(val) {
      this.selectValue = val
    }
  }
}
</script>