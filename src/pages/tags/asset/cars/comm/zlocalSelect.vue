<style>
.el-select .el-input__inner {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.z-input{
  
}
</style>

<template>
  <div class='z-input'>
    <el-select v-model="selectValue" :style='{"width":width}' :placeholder="placeholder">
      <el-option v-for="item in options" :key="item" :label="item" :value="item">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: ["width", "placeholder", "value", "options"],
  model: {
    prop: "value",
    event: "changeValue"
  },
  data() {
    return {
      selectValue: this.value
    };
  },
  watch: {
    selectValue(val) {
      this.$emit("changeValue", val);
    },
    value(val) {
      this.selectValue = val;
    }
  }
};
</script>

