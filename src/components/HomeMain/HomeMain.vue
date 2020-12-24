<template>
  <div>
    <!-- 首页轮播图组件 -->
    <el-row>
      <div class="container">
        <HomeBanner />
      </div>
    </el-row>

    <!-- 首页新鲜好物组件 -->
    <el-row style="background-color: #fff;">
      <HomeFreshGood />
    </el-row>
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner/HomeBanner.vue";
import HomeFreshGood from "@/components/HomeFreshGood/HomeFreshGood.vue";

export default {
  name: "HomeMain",
  components: {
    HomeBanner,
    HomeFreshGood
  }
};
</script>

<style lang="scss" scoped></style>
