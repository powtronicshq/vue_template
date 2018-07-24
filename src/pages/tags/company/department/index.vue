<template>
  <div>
    <div style="font-size: 16px;color: #F5A623;line-height: 24px;">
      <div>部门可设置三个层级，高层级可看到第层级数据。</div>
      <div>角色后的数字表示该层级部门当前人数，有人使用的部门都无法删除，将部门人员移除方可删除。</div>
    </div>
    <div style="font-size: 20px;color: #94BF4B;">
      上海XXXXXXXX有限公司
    </div>
    <div style="width: 1000px;margin: 0 auto;display: flex;justify-content: space-between;">
      <div class="department-inner-wrapper">
        <div class="no-data" v-if="!dataTree">暂无数据</div>
        <div v-else v-for="(item,index) in dataTree" style="height: 65px;line-height: 65px;margin-bottom: 4px;cursor:pointer;display: flex;justify-content: space-between;">
          <div @click="spreadSecond(index)">
            <i style="position: relative;top: 8px;display: inline-block;width: 3px;height: 25px;background: #94BF4B;border-radius: 4px;"></i>
            <span style="color: #252525;margin-left: 5px;">{{item.label}}</span>
            <span style="color: #979797;margin-left: 12px;">{{item.number}}</span>人
          </div>
          <div>
            <zButton width="39px" @click="deleteDep(item)" height="19px" type="orange" fontSize="12px">删除</zButton>
            <zButton width="39px" @click="addDep(item)" height="19px" fontSize="12px">添加</zButton>
          </div>
        </div>
      </div>
      <div class="department-inner-wrapper">
        <div class="no-data" v-if="!dataTree[firstMenuId].children">暂无数据</div>
        <div v-else v-for="(item,index) in dataTree[firstMenuId].children" style="height: 65px;line-height: 65px;margin-bottom: 4px;cursor:pointer;display: flex;justify-content: space-between;">
          <div @click="spreadThird(index)">
            <i style="position: relative;top: 8px;display: inline-block;width: 3px;height: 25px;background: #94BF4B;border-radius: 4px;"></i>
            <span style="color: #252525;margin-left: 5px;">{{item.label}}</span>
            <span style="color: #979797;margin-left: 12px;">{{item.number}}</span>人
          </div>
          <div>
            <zButton width="39px" @click="deleteDep(item)" height="19px" type="orange" fontSize="12px">删除</zButton>
            <zButton width="39px" @click="addDep(item)" height="19px" fontSize="12px">添加</zButton>
          </div>
        </div>
      </div>
      <div class="department-inner-wrapper">
        <div class="no-data" v-if="!dataTree[firstMenuId].children[secondMenuId].children">暂无数据</div>
        <div v-else v-for="(item,index) in dataTree[firstMenuId].children[secondMenuId].children" style="height: 65px;line-height: 65px;margin-bottom: 4px;display: flex;justify-content: space-between;">
          <div>
            <i style="position: relative;top: 8px;display: inline-block;width: 3px;height: 25px;background: #D8D8D8;border-radius: 4px;"></i>
            <span style="color: #252525;margin-left: 5px;">{{item.label}}</span>
            <span style="color: #979797;margin-left: 12px;">{{item.number}}</span>人
          </div>
          <div>
            <zButton width="39px" @click="deleteDep(item)" height="19px" type="orange" fontSize="12px">删除</zButton>
            <zButton width="39px" @click="addDep(item)" height="19px" fontSize="12px">添加</zButton>
          </div>
        </div>
      </div>
    </div>
    <zDialog width="400px" title="添加部门" v-model="addDialogVisible">
      <div style="width: 100%;box-sizing: border-box;padding: 20px 40px;font-size: 16px;">
        <div style="display: flex;height: 40px;line-height: 40px">
          <div>上级部门</div>
          <div style="margin-left: 10px">财务部</div>
        </div>
        <div style="display: flex;height: 40px;line-height: 40px">
          <div>新增部门</div>
          <div style="margin-left: 10px">
            <zInput width="240px" height="40px"></zInput>
          </div>
        </div>
      </div>
    </zDialog>
    <zDialog width="400px" title="删除" @ v-model="deleteDialogVisible">
      <div style="font-size: 18px;color: #1C1C1C;text-align: center;padding: 40px 0;">
        <div>
          <span style="font-size: 18px;color: #F5A623;">采购一组</span>当前有<span style="font-size: 18px;color: #F5A623;">1</span>位用户，
        </div>
        <div>
          请移除后再进行删除。
        </div>
      </div>

    </zDialog>
  </div>
</template>

<script>
  import zButton from '../../../../components/Button'
  import zDialog from '../../../../components/Dialog'
  import zInput from '../../../../components/Input'

  export default {
    name: '',
    data () {
      return {
        firstMenuId:0,
        secondMenuId:0,
        input:'',
        addDialogVisible:false,
        deleteDialogVisible:false,
        dataTree: [{
          id: 1,
          label: '总管理部门',
          number: '2',
          children: [{
            id: 4,
            label: '采购部',
            number: '2',
            children: [{
              id: 9,
              label: '采购一组',
              number: '2'
            }, {
              id: 10,
              label: '采购二组',
              number: '2'
            }]
          }]
        }, {
          id: 2,
          label: '一级',
          number: '2',
          children: [{
            id: 5,
            label: '二级 2-1',
            number: '2'
          }, {
            id: 6,
            label: '二级 2-2',
            number: '2'
          }]
        }, {
          id: 3,
          label: '一级',
          number: '2',
          children: [{
            id: 7,
            label: '二级 3-1',
            number: '2'
          }, {
            id: 8,
            label: '二级 3-2',
            number: '2'
          }]
        }],
      }
    },
    methods:{
      spreadSecond(index){
        this.firstMenuId = index
        this.secondMenuId = 0
      },
      spreadThird(index){
        this.secondMenuId = index
      },
      deleteDep(row){
        this.deleteDialogVisible = true
      },
      addDep(row){
        this.addDialogVisible = true
      }
    },
    components:{
      zButton,
      zDialog,
      zInput
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .department-inner-wrapper{
    box-sizing: border-box;
    width: 30%;
    padding: 0 20px;
    height: 400px;
    background: #FFFFFF;
    box-shadow: 0 0 17px 0 rgba(0,0,0,0.10);
    border-radius: 4px;
    overflow: auto;
    font-size: 14px;
    color: #979797;

  }

  .department-inner-wrapper .z-button .el-button--orange{
    color: #E76F2F;
    border: 1px solid #E76F2F;
  }

  .no-data{
    text-align: center;
    margin-top: 30px;
  }
</style>
