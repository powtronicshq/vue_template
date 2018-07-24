<template>
  <div class="wrapper">
    <div class="company-name">
      <p style='font-size:20px;'>{{companyName}}</p>
      <div class="company-name-mobile">
        <p style='color:black'>如有问题请联系：</p> {{phoneNumber}} </div>
    </div>
    <div class="admin">
      <p style='color:black'>超级管理员：</p>
      <p>{{superAdmin}}</p>
    </div>
    <div class="aptitude-title">
      证件信息：
    </div>

    <div class="aptitude-info">
      <div class="aptitude-info-content">
        <p>营业执照</p>
        <el-popover placement="right" width="500" trigger="hover">
          <img :src="licenceImg" width="500px" height="500px" alt="">
          <img slot="reference" class="aptitude-img" :src='licenceImg' alt="">
        </el-popover>
        <div class="date-range">
          <p>有效期：
            <p>{{licenceDateRange}}</p>
          </p>
        </div>
      </div>

      <div class="aptitude-info-content">
        <p>授权书</p>
        <el-popover placement="right" width="500" trigger="hover">
          <img :src="authImg" width="500px" height="500px" alt="">
          <img slot="reference" class="aptitude-img" :src='authImg' alt="">
        </el-popover>
        
        <!-- <div class="date-range">
          <p>有效期：
            <p>{{authDateRange}}</p>
          </p>
        </div> -->
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'company-information',
  data() {
    return {
      companyName: '上海XXXXXXXX有限公司',
      phoneNumber: '021-55889051',
      superAdmin: '小A（121****8888）',
      licenceImg:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531041504067&di=de28161ba9d8b0f17720257beda12b15&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21bb051f8198618358224ad41ed2e738ad4e6d6.jpg',
      licenceDateRange: '2023-02-03',
      authImg:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531041504067&di=de28161ba9d8b0f17720257beda12b15&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21bb051f8198618358224ad41ed2e738ad4e6d6.jpg',
      authDateRange: '2010-02-03'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // background-color: yellow
}
.company-name {
  display: flex;
  justify-content: space-between;
  color: #94bf4b;
}

.company-name-mobile {
  display: flex;
  align-items: flex-end;
  font-size: 14px;
}

.admin,
.aptitude-title {
  display: flex;
  margin-top: 24px;
  font-size: 16px;
}

.wrapper .aptitude-title {
  margin-top: 20px;
}

.aptitude-info {
  display: flex;
  margin-top: 20px;
  font-size: 16px;
}

.aptitude-info-content {
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-right: 40px;
}

.aptitude-img {
  width: 270px;
  height: 160px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.date-range {
  color: #ff979797;
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
