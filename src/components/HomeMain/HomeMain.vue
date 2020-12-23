<template>
  <el-row>
    <!-- 轮播图 -->
    <HomeBanner />
  </el-row>
</template>

<script>
import HomeBanner from "@/components/HomeBanner/HomeBanner.vue";

export default {
  name: "HomeMain",
  components: {
    HomeBanner
  }
};
</script>

<style lang="scss" scoped>
.el-main {
  background-color: #f5f5f5;
}
</style>
