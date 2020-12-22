<template>
  <!-- 公共头部组件 -->
  <LoginHeader></LoginHeader>
  <!-- 登录界面组件 -->
  <LoginBanner></LoginBanner>
  <!-- 公共底部组件  -->
  <LoginFooter></LoginFooter>
</template>

<script>
import LoginHeader from "@/components/LoginHeader/LoginHeader";
import LoginBanner from "@/components/LoginBanner/LoginBanner.vue";
import LoginFooter from "@/components/LoginFooter/LoginFooter.vue";
export default {
  name: "Login",
  setup() {},
  components: {
    LoginHeader,
    LoginBanner,
    LoginFooter
  }
};
</script>

<style lang="scss" scoped></style>
