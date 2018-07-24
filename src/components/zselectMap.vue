<template>
  <el-cascader v-model="selectValue"  :style='{"width":width}' :size="size" :clearable="clearable" :options="map" placeholder='省/市/区'></el-cascader>
</template>

<script type="text/ecmascript-6">
import { province, city, area } from '../assets/resourceJs/map'
export default {
  name: 'cascadar',
  //  defalutValue:[JSON.stringify({"id":110000,"name":"北京"}),JSON.stringify({"id":110100,"name":"北京市"}),JSON.stringify({"id":110101,"name":"东城区"})],
  props: ['defalutValue','width','size'],
  model: {
    prop: 'defalutValue',
    event: 'changeValue'
  },
  data() {
    return {
      map: [],
      clearable: true,
      selectValue: this.defalutValue
    }
  },
  mounted() {
    this.map2mapNew()
  },
  watch: {
    defalutValue(val) {
      this.selectValue = val
    },
    selectValue(val) {
      this.$emit('changeValue', val)
    }
  },
  methods: {
    map2mapNew() {
      let mapTemp = new Array()
      province.forEach(function(item, index) {
        mapTemp.push(item)
      })
      city.forEach(function(item, index) {
        mapTemp.push(item)
      })
      area.forEach(function(item, index) {
        mapTemp.push(item)
      })

      let mapNew = new Array()

      mapTemp.forEach(item => {
        let obj = {
          id: item['id'],
          value: JSON.stringify({id:item['id'],name:item['mapName']}),
          label: item['mapName'],
          parentId: item['mapParentId']
        }
        mapNew.push(obj)
      })

      let map = this.json2tree(mapNew, 'id', 'parentId', 'children')
      this.map = map
    },
    json2tree(a, id, parentId, children) {
      let arrayR = []
      let arrayNew = []
      let arrayParent = []
      for (let i = 0; i < a.length; i++) {
        arrayNew[a[i][id]] = a[i]
      }
      for (let j = 0; j < a.length; j++) {
        arrayParent = arrayNew[a[j][parentId]]
        if (arrayParent) {
          !arrayParent[children] && (arrayParent[children] = [])
          arrayParent[children].push(a[j])
        } else {
          arrayR.push(a[j])
        }
      }
      return arrayR
    }
  }
}
</script>

<style scoped>
</style>
