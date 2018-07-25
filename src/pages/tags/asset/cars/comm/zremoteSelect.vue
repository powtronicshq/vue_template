<template>
    <el-select v-model="selectValue" @focus="remoteMethod" :style='{"width":width}' clearable filterable remote :placeholder="placeholder" :loading="loading">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
</template>

<script>
export default {
  props: ["reqPromise", "width", "placeholder", "value"],
  model: {
    prop: "value",
    event: "changeValue"
  },
  data() {
    return {
      options: [],
      selectValue: this.value,
      loading: false
    };
  },
  watch: {
    selectValue(val) {
      // this.clear()
      this.$emit("changeValue", val);
    },
    value(val) {
      this.selectValue = val;
    }
  },
  methods: {
    // clear(){
    //   console.dir('+this.options')
    //   console.dir(this.options)
    //   this.options=[];
    // },

    remoteMethod(query) {
      // this.options = []
      this.loading = true;
      this.reqPromise(query).then(
        res => {
          this.loading = false;
          this.options = res.map(i => {
            return { value: i, label: i };
          });
        },
        err => {
          this.options = [];
        }
      );
    }
  }
};
</script>