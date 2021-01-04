<template>
  <div class="pageare">
    <!-- 头部组件 starte -->
    <LoginHeader />
    <!-- 头部组件 end -->

    <!-- 中间内容 starte -->
    <router-view></router-view>
    <!-- 中间内容 end -->

    <!-- 底部 starte -->
    <LoginFooter class="footer" color="#999" />
    <!-- 底部 end -->
  </div>
</template>

<script>
// 头部 logo和跳转
import LoginHeader from "@/components/LoginHeader/LoginHeader.vue";

// 底部
import LoginFooter from "@/components/LoginFooter/LoginFooter.vue";

export default {
  name: "FeedBack",
  // 引用组件
  components: {
    LoginHeader,
    LoginFooter
  }
};
</script>

<style lang="scss" scoped>
.pageare {
  width: 100%;
  background-color: #f0f0f0;
  @include clearfix();
}

.footer {
  background-color: #f0f0f0 !important; // 用于覆盖LoginFooter组件中的background-color
}
</style>
