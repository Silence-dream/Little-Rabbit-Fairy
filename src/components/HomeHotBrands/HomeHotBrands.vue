<template>
  <div class="container">
    <!-- 热门品牌标题 -->
    <div class="hot-brands-title">
      <b>热门品牌</b>
      <span>国际经典 品质保证</span>
    </div>

    <!-- 热门品牌轮播图 -->
    <div class="hot-brands-banner">
      <swiper :slides-per-view="1" :space-between="0" navigation>
        <swiper-slide v-for="ele in HotBrandsNum" :key="ele">
          <div
            class="banner-picture"
            v-for="item in GetHotBrands"
            :key="item.id"
          >
            <img :src="item.picture" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { httpGet } from "@/utils/http.js";
import { ref, onMounted } from "vue";
import { home } from "@/api";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {
  name: "HomeHotBrands",
  setup() {
    // 存储热门品牌数据
    const GetHotBrands = ref([]);
    // 计算热门品牌数据能放置多少页
    const HotBrandsNum = ref(0);

    // 获取热门品牌数据
    let getBrands = httpGet(home.GetHotBrands)
      .then(res => {
        // console.log(res);
        let { result } = res;

        GetHotBrands.value = result;
        HotBrandsNum.value = Math.ceil(GetHotBrands.value.length / 5);
      })
      .catch(err => {
        console.log(err);
      });

    onMounted(() => {
      getBrands;
    });

    return {
      GetHotBrands,
      HotBrandsNum
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style lang="scss" scoped>
// 热门品牌标题
.hot-brands-title {
  font-size: 16px;
  padding-top: 42px;
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
  position: relative;
  width: 100%;
  height: 351px;
  overflow: hidden;
  padding-top: 45px;
  margin-bottom: 45px;

  :deep(.swiper-container) {
    overflow: visible;
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    position: absolute;
    top: 0;
    right: 0;
    width: 19px;
    height: 19px;
    text-align: center;
    background-color: #00be9a;
    cursor: pointer;
    z-index: 100;
  }

  :deep(.swiper-button-next) {
    top: -10px;
  }

  :deep(.swiper-button-prev) {
    top: -10px;
    left: 1190px;
  }

  :deep(.swiper-button-prev)::after,
  :deep(.swiper-button-next)::after {
    width: 19px;
    height: 19px;
    color: #f6f6f6;
    font-size: 12px;
    font-weight: 700;
    line-height: 19px;
  }

  .hot-brandsBtn-prev {
    top: -36px;
    right: 38px;
  }

  .hot-brandsBtn-next {
    top: -36px;
  }

  .active {
    background-color: #27ba9b;
  }
}

.banner-picture {
  float: left;
  width: 244px !important;
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
</style>
