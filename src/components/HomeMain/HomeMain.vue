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

    <!-- 首页人气推荐组件 -->
    <el-row style="background-color: #fff;">
      <HomePopularityRecommend />
    </el-row>

    <!-- 首页热门品牌组件 -->
    <el-row>
      <HomeHotBrands />
    </el-row>

    <!-- 首页产品区块组件 -->
    <el-row style="background-color: #fff;">
      <HomeProductBlock />
    </el-row>
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner/HomeBanner.vue";
import HomeFreshGood from "@/components/HomeFreshGood/HomeFreshGood.vue";
import HomePopularityRecommend from "@/components/HomePopularityRecommend/HomePopularityRecommend.vue";
import HomeHotBrands from "@/components/HomeHotBrands/HomeHotBrands.vue";
import HomeProductBlock from "@/components/HomeProductBlock/HomeProductBlock.vue";

export default {
  name: "HomeMain",
  components: {
    HomeBanner,
    HomeFreshGood,
    HomePopularityRecommend,
    HomeHotBrands,
    HomeProductBlock
  }
};
</script>

<style lang="scss" scoped></style>
