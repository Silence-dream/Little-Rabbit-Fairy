<template>
  <router-view />
</template>

<style lang="scss">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // color: $warning;
  // 请查看 styles 文件夹里面的 _mixnin.scss
  // 定义的方法 现在里面有 清除浮动 多行省略号 单行省略号 可以在全局引用
  @include clearfix();
}

// 首页弹出框
.el-popover {
  padding: 0 !important;
}
</style>
