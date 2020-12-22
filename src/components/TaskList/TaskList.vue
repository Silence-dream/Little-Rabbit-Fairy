<template>
  <!-- 任务栏位 -->
  <div class="task-item">
    <p class="task-title">新手欢迎奖励</p>
    <p class="task-desc">积分+5</p>
    <div class="task-item-btn">领取福利</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.task-item {
  width: 100%;
  height: 100px;
  padding: 27px 44px;
  margin: 10px 0;
  background-color: #ffffff;
}

.task-item > p {
  float: left;
  width: 100%;
  height: 23px;
  line-height: 23px;
}

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

.task-title {
  font-size: 16px;
  color: #666;
  padding-bottom: 10px;
}

.task-desc {
  color: #999;
}
</style>
