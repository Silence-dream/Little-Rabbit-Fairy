<template>
  <div class="register">
    <div class="container">
      <!-- 标题 -->
      <div class="new-title">
        <h1>新用户注册</h1>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register"
};
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  padding: {
    top: 72px;
    bottom: 126px;
  }
  background-color: #f5f5f5;
  .container {
    background-color: #fff;
    padding: {
      top: 76px;
      bottom: 76px;
      left: 50px;
      right: 50px;
    }
  }
  .new-title {
    text-align: left;
    font-size: 26px;
    color: #999999;
  }
}
</style>
