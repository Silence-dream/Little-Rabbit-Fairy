<template>
  <div id="Home" style="height: 100%;">
    <el-container>
      <!-- 首页头部 -->
      <el-header height="182px">
        <!-- 顶部小链接 -->
        <HomeHeader />

        <!-- 顶部导航下拉 -->
        <HomeLogo />
      </el-header>

      <!-- 首页主要内容 -->
      <el-main
        style="padding: 0px; background-color: #f5f5f5"
        class="home-main"
      >
        <router-view />
      </el-main>

      <!-- 首页底部 -->
      <el-footer height="645">
        <HomeFoot />
      </el-footer>
    </el-container>

    <!-- 返回顶部控件 -->
    <div class="rightBottom">
      <el-backtop
        :right="14"
        :bottom="184"
        style="width: 80px;
        height: 80px;"
      >
        <span>
          <i class="iconfont icon-top"></i>
          返回顶部
        </span>
      </el-backtop>
      <el-dropdown placement="left">
        <span style="font-size: 12px">
          <i class="iconfont icon-xiazaiapp"></i>
          下载APP
        </span>
        <el-dropdown-menu>
          <div style="text-align:center">
            <img
              src="./img/QRcode.png"
              style="width:180px; height:180px; margin-bottom:6px"
            />
            <p style="font-size:12px; margin-top: -12px; margin-bottom: 24px;">
              扫描二维码 立马下载App
            </p>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
      <span>
        <i class="iconfont icon-weixin1"></i>
        在线客服
      </span>
    </div>
  </div>
</template>

<script>
// 顶部小链接
import HomeHeader from "@/components/HomeHeader/HomeHeader.vue";
// 顶部导航下拉
import HomeLogo from "@/components/HomeLogo/HomeLogo.vue";
// 底部链接美化
import HomeFoot from "@/components/HomeFoot/HomeFoot.vue";

export default {
  name: "Home",
  components: { HomeHeader, HomeLogo, HomeFoot }
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  margin-bottom: 40px;

  .el-header {
    width: 100%;
    padding: 0;

    .el-row,
    .el-col {
      height: 100%;
    }
  }

  .el-footer {
    width: 100%;
    padding: 0;
  }

  .el-header,
  .el-footer {
    text-align: center;
  }
}

.home-main {
  width: 100%;
  text-align: center;
  overflow: visible;

  .el-row {
    height: 100%;
    margin-bottom: 20px;

    .el-col {
      height: 100%;
    }
  }
}

// 返回顶部控件
.rightBottom {
  position: fixed;
  _position: absolute;
  right: 10px;
  bottom: 0;
  padding: 4px;

  span {
    display: flex;
    width: 80px;
    height: 80px;
    color: #999999;
    border: 1px solid #f2f2f2;
    font-size: 12px;
    background-color: #fff;
    text-align: center;
    margin: 4px 0;
    cursor: pointer;
    flex-direction: column;

    &:hover {
      color: #1abc9c;
    }

    i {
      font-size: 26px;
      margin-top: 14px;
      margin-bottom: 10px;
    }
  }
}
</style>
