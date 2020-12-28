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
/* 手机号正则表达式 */
export let patternRegular = /0?(13|14|15|17|18|19)[0-9]{9}/;
/* 自定义校验手机号 */
export let validateMobile = (rule, value, callback) => {
  if (value.trim() === "") {
    callback(new Error("请输入手机号"));
  } else if (!patternRegular.test(value)) {
    callback(new Error("手机号码格式不正确"));
  } else {
    callback();
  }
};
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
