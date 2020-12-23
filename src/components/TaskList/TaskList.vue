<template>
  <!-- 任务栏位 -->
  <div class="task-item">
    <p class="task-title">新手欢迎奖励</p>
    <p class="task-desc">积分+5</p>
    <div class="task-item-btn">领取福利</div>
  </div>
</template>

<script>
export default {
  name: "TaskList"
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

  // 图标样式
  .task-item-btn {
    position: absolute;
    right: 64px;
    width: 150px;
    height: 46px;
    line-height: 46px;
    background-color: #1abc9c;
    /* --- */
    text-align: center;
    color: #ffffff;
    font-size: 14px;
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
