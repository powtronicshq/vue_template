<template>
  <div style="width:100%;height:60px">
    <zchoiceType v-model="defaultType" :types='types'></zchoiceType>
  </div>
</template>

<script>
import zchoiceType from '../../../../../components/zchoiceType'
export default {
  name: 'driverType',
  model: {
    prop: 'value',
    event: 'changeValue'
  },
  props: ['value'],
  data() {
    return {
      types: ['自有车辆', '外挂车辆'],
      defaultType: this.value
    }
  },
  components: {
    zchoiceType
  },
  watch: {
    defaultType(val) {
      this.$emit('changeValue', val)
    }
  }
}
</script>

