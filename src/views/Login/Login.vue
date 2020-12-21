<template>
  <!-- 公共头部组件 -->
  <LoginHeader></LoginHeader>
  <!-- 登录界面组件 -->
  <LoginBanner></LoginBanner>
</template>

<script>
import LoginHeader from "@/components/LoginHeader/LoginHeader";
import LoginBanner from "@/components/LoginBanner/LoginBanner.vue";
export default {
  name: "Login",
  setup() {},
  components: {
    LoginHeader,
    LoginBanner
  }
};
</script>

<style lang="scss" scoped></style>
