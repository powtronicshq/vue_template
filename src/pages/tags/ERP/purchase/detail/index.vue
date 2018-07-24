<template>
  <div>
    <div style="display: flex;justify-content: space-between">
      <div>
        <zbutton width="96px" height="30px" fontSize="14px" size="mini" @click="uploadAgreement"><i class="z-icon z-icon-upload"></i>上传合同</zbutton>
        <zbutton width="96px" height="30px" fontSize="14px" size="mini" @click="uploadBill"><i class="z-icon z-icon-upload"></i>上传发票</zbutton>
        <zbutton width="96px" height="30px" fontSize="14px" size="mini" @click="confirmPay"><i class="z-icon z-icon-confirm"></i>确认打款</zbutton>
        <zbutton width="66px" height="30px" fontSize="14px" size="mini" @click="save"><i class="z-icon z-icon-save"></i>保存</zbutton>
      </div>
      <div>
        <zbutton width="122px" height="30px" fontSize="14px" size="mini" @click="templetDown"><i class="z-icon z-icon-download"></i>下载合同模板</zbutton>
      </div>
    </div>
    <div class="content">
      <el-form :disabled="true" label-width="100px">
        <el-form-item label="采购订单号">
          <el-input value="C1805290002（进行中）"></el-input>
        </el-form-item>
        <el-form-item label="采购地址">
          <el-input value="XXX（上海市-上海-宝山区  中山路100号）"></el-input>
        </el-form-item>
        <el-form-item label="采购合同号">
          <el-input value="- -"></el-input>
        </el-form-item>
        <el-form-item label="采购人员">
          <el-input value="李小双"></el-input>
        </el-form-item>
        <el-form-item label="采购时间">
          <el-input value="2018-06-12"></el-input>
        </el-form-item>
        <el-form-item label="供应商">
          <el-input value="上海路洋化工有限公司"></el-input>
        </el-form-item>
        <el-form-item label="打款金额">
          <el-input value="- -"></el-input>
        </el-form-item>
        <el-form-item label="采购户头">
          <el-input value="华翔"></el-input>
        </el-form-item>
        <el-form-item label="结算方式">
          <el-input value="承兑"></el-input>
        </el-form-item>
        <el-form-item label="品名">
          <el-input value="甲醛"></el-input>
        </el-form-item>
        <el-form-item label="单价">
          <el-input value="250.00元"></el-input>
        </el-form-item>
        <el-form-item label="总价">
          <el-input value="22877.68吨"></el-input>
        </el-form-item>
        <el-form-item style="width: 98%;" label="备注">
          <el-input value="备注"></el-input>
        </el-form-item>
        <el-form-item label="规格型号">
          <el-input value="- -"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input value="65.233吨"></el-input>
        </el-form-item>
        <el-form-item label="交提货期限">
          <el-input value="2018-06-02 至 2018-12-01"></el-input>
        </el-form-item>
        <el-form-item label="仓储费">
          <el-input value="20元/吨"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div style="display: flex;margin-top: 20px;">
      <div style="width: 50%;box-sizing: border-box;padding-right: 50px;">
        <div style="font-size: 16px;color: #4A4A4A;">操作记录</div>
        <div class="record">
          <ul>
            <li>
              <div>录入采购单</div>
              <div>李小双</div>
              <div>2018-05-04  12:09:23</div>
            </li>
            <li>
              <div>确认打款2000元</div>
              <div>李小双</div>
              <div>2018-05-04  12:09:23</div>
            </li>
            <li>
              <div>上传合同</div>
              <div>李小双</div>
              <div>2018-05-04  12:09:23</div>
            </li>
            <li>
              <div>编辑发票</div>
              <div>李小双</div>
              <div>2018-05-04  12:09:23</div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div style="font-size: 16px;color: #4A4A4A;">图片凭证</div>
        <div style="margin-top: 20px;">
          <el-upload :disabled="true" class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload :disabled="true" class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload :disabled="true" class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload :disabled="true" class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
    </div>
    <zdialog width="660px" v-model="agreeDialogVisible" title='上传合同' :clickCancelEvent='()=>this.clickCancel()' :clickConfirmEvent='()=>this.clickConfirm()'>
      <div style="width: 100%;box-sizing: border-box;padding: 0 100px;">
        <el-form :model="agreeFormItem" :rules="ruleValidate" ref="agreeFormItem">
          <el-form-item required label="合同号">
            <zinput width="240px" height="40px"></zinput>
          </el-form-item>
          <el-form-item label="合同签订时间">
            <zinput width="240px" height="40px"></zinput>
          </el-form-item>
          <el-form-item>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList2"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
    </zdialog>
    <zdialog width="660px" v-model="billDialogVisible" title='上传发票' :clickCancelEvent='()=>this.clickCancel()' :clickConfirmEvent='()=>this.clickConfirm()'>
      <div style="width: 100%;box-sizing: border-box;padding: 0 100px;">
        <el-form :model="billFormItem" :rules="ruleValidate" ref="billFormItem">
          <el-form-item>
            <zbutton type="primary" width="120px" height="32px">选择发票图片</zbutton>
          </el-form-item>
        </el-form>
      </div>
    </zdialog>
    <zdialog width="660px" v-model="confirmDialogVisible" title='上传合同' :clickCancelEvent='()=>this.clickCancel()' :clickConfirmEvent='()=>this.clickConfirm()'>
      <div style="width: 100%;box-sizing: border-box;padding: 0 100px;">
        <el-form :model="confirmFormItem" :rules="ruleValidate" ref="confirmFormItem">
          <el-form-item required label="打款金额">
            <zinput width="240px" height="40px"></zinput>
          </el-form-item>
          <el-form-item label="打款方式">
            <zselect width="240px" height="40px"></zselect>
          </el-form-item>
          <el-form-item>
            <zbutton type="primary" width="120px" height="32px">上传打款凭证</zbutton>
          </el-form-item>
          <el-form-item>
            <ztable
              border
              :columns = "columns"
              :data="tableData">
            </ztable>
            <div>
              合计：<span style="color: #D3112A;">10000</span>元
            </div>
          </el-form-item>
        </el-form>
      </div>
    </zdialog>
  </div>
</template>

<script>
  import zinput from '../../../../../components/Input'
  import zbutton from '../../../../../components/Button'
  import zdialog from '../../../../../components/Dialog'
  import zselect from '../../../../../components/Select'
  import ztable from '../../../../../components/Table/Table2'

  const columns = [
    {prop: 'money',label: '打款金额'},
    {prop: 'time',label: '打款时间'},
    {prop: 'person',label: '操作人'}
  ];

  const tableData = [
    {money:'200',time:'2018-09-09 12:12',person:'李小双'},
    {money:'200',time:'2018-09-09 12:12',person:'李小双'}
  ]

  export default {
    name: "index",
    prop: ["id"],
    data(){
      return{
        agreeDialogVisible:false,
        billDialogVisible:false,
        confirmDialogVisible:false,
        columns:columns,
        tableData:tableData
      }
    },
    methods:{
      uploadAgreement(){
        this.agreeDialogVisible = true
      },
      uploadBill(){
        this.billDialogVisible = true
      },
      confirmPay(){
        this.confirmDialogVisible = true
      },
      save(){

      },
      templetDown(){

      },
      clickCancel(){

      },
      clickConfirm(){

      }
    },
    components:{
      zinput,
      zbutton,
      zdialog,
      zselect,
      ztable
    }
  }
</script>

<style>
  .content{
    margin-top: 20px;
  }

  .content .el-form-item{
    width: 49%;
    display: inline-block;
  }

  .record{
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .record ul{
    padding: 0;
    margin: 0;
  }

  .record ul li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 10px;
    color: #4A4A4A;
  }
  .record ul li div{
    width: 30%;
  }

  .avatar-uploader{
    display: inline-block;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 94px;
    height: 90px;
    line-height: 90px;
    text-align: center;
  }
  .avatar {
    width: 94px;
    height: 90px;
    display: block;
  }

  .z-icon{
    display: inline-block;
    width: 14px;
    height: 14px;
    position: relative;
    top: 1px;
    right: 2px;
  }

  .z-icon-upload{
    background: url("../../../../../assets/img/upload.png");
  }

  .z-icon-confirm{
    background: url("../../../../../assets/img/confirm.png");
  }

  .z-icon-save{
    background: url("../../../../../assets/img/save.png");
  }

  .z-icon-download{
    background: url("../../../../../assets/img/download.png");
  }

  .zdialog .el-form-item__label{
    float: none;
    font-size: 16px;
    line-height: 28px;
  }

  /*.content .el-form--inline .el-form-item__label{*/
    /*float: left;*/
  /*}*/
</style>
