<template>
  <div>
    <el-tree
      :data="data"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button v-for="btnItem in btnArray" :key="btnItem.title" type="text" size="mini" @click="() => btnItem.func(node,data)">
            {{btnItem.title}}
          </el-button>
          <!--<el-button-->
            <!--type="text"-->
            <!--size="mini"-->
            <!--@click="() => remove(node, data)">-->
            <!--Delete-->
          <!--</el-button>-->
        </span>
      </span>
    </el-tree>
    <my-dialog
      @clickCancelEvent="clickCancel"
      @clickConfirmEvent="clickConfirm"
      :dialogVisible.sync="dialogVisible">
      <div>1111</div>
    </my-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import dialog from './Dialog'

  let id = 1000;
  export default {
    name: "tree",
    props:{
      data:{
        type:Array,
        default:[]
      },
      btnArray:{
        type:Array,
        default:function () {
          return [
            {
              title:'添加',
              icon:'',
              func:(node, data) => this.append(node, data)
            },
            {
              title:'删除',
              icon:'',
              func:(node, data) => this.remove(node, data)
            }
          ]
        }
      }
    },
    data() {
      const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data4: JSON.parse(JSON.stringify(data)),
        dialogVisible:false
      }
    },
    methods: {
      clickCancel(){
        this.dialogVisible = false
      },
      clickConfirm(){
        this.dialogVisible = false
      },
      append(node, data) {
        this.dialogVisible = true
        // const newChild = { id: id++, label: 'testtest', children: [] };
        // if (!data.children) {
        //   this.$set(data, 'children', []);
        // }
        // data.children.push(newChild);
      },

      remove(node, data) {
        this.dialogVisible = false
        // const parent = node.parent;
        // const children = parent.data.children || parent.data;
        // const index = children.findIndex(d => d.id === data.id);
        // children.splice(index, 1);
      },

      // renderContent(h, { node, data, store }) {
        // return (
        //   <span class="custom-tree-node">
        //     <span>{node.label}</span>
        //     <span>
        //       <el-button size="mini" v-for="btnItem in btnArray" type="text">{btnItem.title}</el-button>
        //     </span>
        // </span>);
        // return (
        //   <span class="custom-tree-node">
        //     <span>{node.label}</span>
        //     <span>
        //       <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
        //       <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
        //     </span>
        //   </span>
        // );
      // }
    },
    components:{
      "my-dialog": dialog
    }
  }
</script>

<style>
  .custom-tree-node{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
