<template>
  <el-cascader @on-change="" size="small" :clearable="clearable" :options="map" placeholder=''></el-cascader>
</template>

<script type="text/ecmascript-6">
  import { province, city, area } from '../assets/resourceJs/map'
  export default {
    name: "cascadar",
    data(){
      return{
        map:[],
        clearable:true
      }
    },
    mounted(){
      this.map2mapNew()

    },
    methods:{
      map2mapNew(){
        let mapTemp = new Array()
        province.forEach(function(item,index){
          mapTemp.push(item)
        })
        city.forEach(function(item,index){
          mapTemp.push(item)
        })
        area.forEach(function(item,index){
          mapTemp.push(item)
        })

        let mapNew = new Array()

        mapTemp.forEach((item) => {
          let obj = {
            id: item["id"],
            value: item["id"],
            label: item["mapName"],
            parentId: item["mapParentId"]
          }
          mapNew.push(obj)
        })

        let map = this.json2tree(mapNew,'id','parentId','children')
        this.map = map
      },
      json2tree(a,id,parentId,children){
        let arrayR = []
        let arrayNew = []
        let arrayParent = []
        for (let i = 0;i< a.length;i++){
          arrayNew[a[i][id]] = a[i]
        }
        for (let j = 0;j< a.length;j++){
          arrayParent = arrayNew[a[j][parentId]]
          if (arrayParent){
            !arrayParent[children] && (arrayParent[children] = [])
            arrayParent[children].push(a[j])
          }else {
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
