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

<style scoped>
/* -- 背景板 颜色 -- */
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
  color: #1abc9c;
  font-size: 20px;
  font-family: "微软雅黑", "微软雅黑"-400;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}

.score-container > .el-row,
.score-container .el-col {
  height: 100%;
}

.score-container img {
  margin-top: 75px;
}

.score-container .left-tip {
  padding: 12px 0 80px;
}

.score-display-container {
  width: 100%;
  height: 100%;
  padding: 50px 150px;
}

.score-display-container > div {
  float: left;
  width: 200px;
  height: 100%;
  padding: 25px 0;
}

.score-display-container p {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: #999999;
}

.score-display-container p.score-count {
  color: #1abc9c;
  font-size: 36px;
  font-weight: 700;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
}

/* -- 题头 -- */
.chunk-title {
  height: 50px;
  line-height: 50px;
}
</style>
