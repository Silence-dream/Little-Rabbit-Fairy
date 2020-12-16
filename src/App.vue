<template>
  <router-view />
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // 请查看public文件夹里面的public/css/mixnins/_mixnin.scss
  // 定义的方法 现在里面有 清除浮动 多行省略号 单行省略号 可以在全局引用
  @include clearfix();
}
</style>
