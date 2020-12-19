<template>
  <div class="login-header">
    <div class="container">
      <!-- Login -->
      <div class="logo">
        <img src="./img/logo.png" alt="图片没有了" />
      </div>
      <!-- 跳转到网站首页 -->
      <div class="goto-home">
        <router-link class="goto-home-btn" to="/">
          进入网站首页
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginHeader"
};
</script>

<style lang="scss" scoped>
.login-header {
  height: 178px;
  background-color: #ffffff;
  @include clearfix();
  .container {
    height: 100%;
  }
  .logo {
    float: left;
    width: 160px;
    height: 141px;
    margin-top: 18px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goto-home {
    float: right;
    text-align: right;
    margin-top: 92px;
    .goto-home-btn {
      font-size: 16px;
      font-weight: 400;
      color: #1abc9c;
      line-height: 36px;
      &::after {
        content: "";
        display: inline-block;
        width: 16px;
        height: 14px;
        background-image: url("./img/right-arrow.png");
      }
    }
  }
}
</style>
