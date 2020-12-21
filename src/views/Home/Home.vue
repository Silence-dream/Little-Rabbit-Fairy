<template>
  <div id="Home">
    <el-container>
      <!-- 首页头部 -->
      <el-header>
        <!-- 顶部小链接 -->
        <HomeHeader />

        <!-- 顶部导航下拉 -->
        <HomeLogo />
      </el-header>

      <!-- 首页主要内容 -->
      <el-main>
        <div class="container">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">这是首页主要内容</div>
            </el-col>
          </el-row>
        </div>
      </el-main>

      <!-- 首页底部 -->
      <el-footer>这是首页底部</el-footer>
    </el-container>
  </div>
</template>

<script>
// 顶部小链接
import HomeHeader from "@/components/HomeHeader/HomeHeader.vue";
// 顶部导航下拉
import HomeLogo from "@/components/HomeLogo/HomeLogo.vue";

export default {
  name: "Home",
  components: { HomeHeader, HomeLogo }
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
      height: 182px !important;
      padding: 0;

      .el-row,
      .el-col {
        height: 100%;
      }
    }

    .el-header,
    .el-footer {
      text-align: center;
    }

    .el-main {
      text-align: center;
      line-height: 160px;

      .el-row {
        height: 100%;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        height: 100%;
        border-radius: 4px;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
    }
  }
}
</style>
