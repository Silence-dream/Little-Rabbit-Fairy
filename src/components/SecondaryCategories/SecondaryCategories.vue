<template>
  <!-- 面包屑导航栏 start -->
  <el-breadcrumb separator=">">
    <div class="container">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/PrimaryCategories' }"
        >电子产品</el-breadcrumb-item
      >
      <el-breadcrumb-item>手机</el-breadcrumb-item>
    </div>
  </el-breadcrumb>
  <!-- 面包屑导航栏 end -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 面包屑导航样式设置
.el-breadcrumb {
  height: 75px;
  line-height: 75px;
}
::v-deep(.is-link) {
  font-weight: normal;
}
::v-deep(.el-breadcrumb__inner) {
  color: #999999;
}
</style>
