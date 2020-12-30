<template>
  <!-- 任务栏位 -->
  <div class="task-item" v-for="(item, index) in Task" :key="index">
    <p class="task-title">{{ item.taskTitle }}</p>
    <p class="task-desc">积分+{{ item.taskScore }}</p>
    <!-- // -->
    <el-button
      class="task-item-btn task-complete"
      v-if="item.isTaskComplete == true"
    >
      已完成
    </el-button>
    <el-button
      class="task-item-btn"
      v-else-if="item.isTaskComplete == false && index == 0"
      @click="getCheckIn"
    >
      领取奖励
    </el-button>
    <el-button class="task-item-btn" v-else>
      去做任务
    </el-button>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    Task: Array
  }
};
</script>

<style lang="scss" scoped>
// --- 任务组件样式
.task-item {
  width: 100%;
  height: 100px;
  padding: 27px 44px;
  margin: 10px 0;
  background-color: #ffffff;

  // 文字基本样式
  p {
    float: left;
    width: 100%;
    height: 23px;
    line-height: 23px;
  }

  // 任务按钮 样式
  .task-item-btn {
    position: absolute;
    right: 64px;
    width: 150px;
    height: 46px;
    background-color: #1abc9c;
    /* --- */
    text-align: center;
    color: #ffffff;
    font-size: 14px;
  }

  // 任务按钮 已完成 样式
  .task-complete {
    background-color: #f2f2f2;
    color: #999;
  }

  // --- 文字描述样式
  .task-title,
  .task-desc {
    text-align: left;
  }

  .task-title {
    font-size: 16px;
    color: #666;
    padding-bottom: 10px;
  }

  .task-desc {
    color: #999;
  }
}
</style>
