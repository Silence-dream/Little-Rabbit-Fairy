<template>
  <div class="base">
    <div class="container">
      <el-container>
        <el-main>
          <!-- 面包屑导航 起始 -->
          <el-row>
            <el-col :span="6">
              <!-- // -->
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                  <router-link to="/">首页</router-link>
                </el-breadcrumb-item>
                <el-breadcrumb-item>会员中心</el-breadcrumb-item>
                <el-breadcrumb-item>任务中心</el-breadcrumb-item>
              </el-breadcrumb>
              <!-- // -->
            </el-col>
          </el-row>
          <!-- 面包屑导航 结束 -->

          <!-- 积分栏位 起始 -->
          <div class="score-container">
            <el-row>
              <!-- 积分栏左侧 -->
              <el-col :span="9">
                <img src="./assets/Task.svg" />
                <p class="left-tip">做任务 领福利</p>
              </el-col>
              <!-- 积分栏右侧 -->
              <el-col :span="15">
                <div class="score-display-container">
                  <div>
                    <p>我的积分</p>
                    <p class="score-count">1000</p>
                  </div>
                  <!-- // -->
                  <div>
                    <p>我的积分</p>
                    <p class="score-count">1000</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 积分栏位 结束 -->

          <!-- 新手任务 组件 起始 -->
          <div class="chunk-title">新手任务</div>
          <TaskList />
          <!-- 新手任务 组件 结束 -->

          <!-- 日常任务 组件 起始 -->
          <div class="chunk-title">日常任务</div>
          <TaskList />
          <!-- 日常任务 组件 结束 -->
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList/TaskList.vue";
export default {
  components: {
    TaskList: TaskList
  }
};
</script>

<style lang="scss" scoped>
// ---
$main-color: #1abc9c;

// --- 背景色
.base {
  background-color: #f5f5f5;
  height: 100%;
  overflow: hidden;
}

/* -- 积分栏位 样式 -- */
.score-container {
  width: 100%;
  height: 250px;
  background-color: #ffffff;
  margin: 15px 0;
  margin-bottom: 20px;
  /* 字体样式 */
  color: $main-color;
  font-size: 20px;
  font-family: "微软雅黑", "微软雅黑";
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  // --- 行列宽高
  .el-row,
  .el-col {
    height: 100%;
  }

  // --- 图标样式
  img {
    margin-top: 75px;
  }

  // --- 文字样式
  .left-tip {
    padding: 12px 0 80px;
  }
}

.score-display-container {
  width: 100%;
  height: 100%;
  padding: 50px 150px;

  // --- 积分栏容器
  div {
    float: left;
    width: 200px;
    height: 100%;
    padding: 25px 0;
  }

  // --- 积分栏 文字基础样式
  p {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #999999;
  }

  // --- 积分栏 积分样式
  p.score-count {
    color: $main-color;
    font-size: 36px;
    font-weight: 700;
    font-family: "Arial Negreta", "Arial Normal", "Arial";
  }
}

/* -- 题头 -- */
.chunk-title {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  text-align: left;
}
</style>
