<template>
  <div id="Home">
    <el-container>
      <!-- 首页头部 -->
      <el-header height="182px">
        <!-- 顶部小链接 -->
        <HomeHeader />

        <!-- 顶部导航下拉 -->
        <HomeLogo />
      </el-header>

      <!-- 首页主要内容 -->
      <router-view />

      <!-- 首页底部 -->
      <el-footer height="0">
        <HomeFoot />
      </el-footer>
    </el-container>
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
#Home {
  height: 100%;

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

    .el-main {
      width: 100%;
      text-align: center;
      // line-height: 160px;
      overflow: visible;

      .el-row {
        height: 100%;
        margin-bottom: 20px;

        .el-col {
          height: 100%;
        }
      }
    }
  }
}
</style>
