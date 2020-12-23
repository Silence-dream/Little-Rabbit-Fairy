<template>
  <el-row>
    <div class="container">
      <HomeBanner />
    </div>
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
  height: 500px;
  background-color: #f5f5f5;
}
</style>
