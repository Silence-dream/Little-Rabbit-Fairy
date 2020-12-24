<template>
  <div class="container">
    <!-- 热门品牌标题 -->
    <div class="hot-brands-title">
      <b>热门品牌</b>
      <span>国际经典 品质保证</span>
    </div>

    <!-- 热门品牌轮播图 -->
    <div class="hot-brands-banner" v-if="getHotBrands.length > 0">
      <el-carousel arrow="always" :autoplay="false" :loop="HotBrandsJudge">
        <el-carousel-item v-for="item in HotBrandsNum" :key="item">
          <div
            class="banner-picture"
            v-for="item in getHotBrands"
            :key="item.id"
          >
            <img :src="item.picture" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { httpGet } from "@/utils/http.js";
import { ref, onMounted } from "vue";
import { home } from "@/api";

export default {
  name: "HomeFreshGood",
  setup() {
    // 存储热门品牌数据
    const getHotBrands = ref([]);
    // 计算热门品牌数据能放置多少页
    const HotBrandsNum = ref("");
    // 判断是否循环
    const HotBrandsJudge = ref(true);

    // 获取热门品牌数据
    let getBrands = httpGet(home.GetHotBrands)
      .then(res => {
        // console.log(res);
        let { result } = res;

        getHotBrands.value = result;
        HotBrandsNum.value = Math.ceil(getHotBrands.value.length / 5);

        if (HotBrandsNum.value == 1) {
          return HotBrandsJudge.value;
        }
        return (HotBrandsJudge.value = false);
      })
      .catch(err => {
        console.log(err);
      });

    onMounted(() => {
      getBrands;
    });

    return {
      getHotBrands,
      HotBrandsNum,
      HotBrandsJudge
    };
  }
};
</script>

<style lang="scss" scoped>
// 热门品牌标题
.hot-brands-title {
  font-size: 16px;
  padding-top: 42px;
  margin-bottom: 9px;
  vertical-align: baseline;

  span {
    color: #999999;
    margin-left: 34px;
  }

  b {
    color: #333333;
    font-size: 29px;
    font-weight: 400;
  }
}

// 热门品牌轮播图
.hot-brands-banner {
  width: 100%;
  height: 342px;
  margin-bottom: 45px;

  .el-carousel {
    position: relative;
    height: 100%;
  }

  ::v-deep(.el-carousel__container) {
    height: 306px;
    margin-top: 36px;
  }

  ::v-deep(.el-carousel__arrow) {
    position: absolute;
    width: 19px;
    height: 19px;
    border-radius: 0px;

    &:hover {
      background-color: #27ba9b;
    }
  }

  ::v-deep(.el-carousel__arrow--left) {
    top: -17px;
    left: 1189px;
  }

  ::v-deep(.el-carousel__arrow--right) {
    top: -17px;
    right: 0;
  }

  ::v-deep(.el-carousel__indicators) {
    display: none;
  }

  .banner-picture {
    float: left;
    width: 244px;
    height: 306px;
    margin-right: 5px;

    img {
      width: 100%;
      height: 100%;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
