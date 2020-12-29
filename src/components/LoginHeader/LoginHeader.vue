<template>
  <div class="login-header">
    <div class="container">
      <!-- Login -->
      <div class="logo">
        <img src="./img/logo.png" alt="图片没有了" />
      </div>
      <!-- 跳转到网站首页 -->
      <div class="goto-home">
        <router-link class="goto-home-btn" :to="{ path: router }">
          {{ text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @param {string} text   头部文字设置
 * @param {string} router 头部路由设置
 */
export default {
  name: "LoginHeader",
  props: {
    text: {
      type: String,
      default: "进入网站首页"
    },
    router: {
      type: String,
      default: "/"
    }
  }
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
