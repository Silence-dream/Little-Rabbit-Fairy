<template>
  <div class="container" style="position: relative;height: 500px;">
    <Carousel />
    <!-- 轮播图侧边栏 -->
    <div class="banner-aside">
      <ul>
        <li>
          <router-link to="#" class="aside-one">
            <router-link to="#" class="first-nav">生鲜</router-link>
            <router-link to="#" class="second-nav">水果</router-link>
            <router-link to="#" class="second-nav">蔬菜</router-link>
            <i class="iconfont icon-icon-xiangyou"></i>
          </router-link>
        </li>
        <li>
          <router-link to="#" class="aside-one">
            <router-link to="#" class="first-nav">美食</router-link>
            <router-link to="#" class="second-nav">面点</router-link>
            <router-link to="#" class="second-nav">干果</router-link>
            <i class="iconfont icon-icon-xiangyou"></i>
          </router-link>
        </li>
        <li>
          <router-link to="#" class="aside-one">
            <router-link to="#" class="first-nav">餐厨</router-link>
            <router-link to="#" class="second-nav">数码产品</router-link>
            <i class="iconfont icon-icon-xiangyou"></i>
          </router-link>
        </li>
        <li>
          <router-link to="#" class="aside-one">
            <router-link to="#" class="first-nav">电器</router-link>
            <router-link to="#" class="second-nav">床品</router-link>
            <router-link to="#" class="second-nav">四件套</router-link>
            <router-link to="#" class="second-nav">被枕</router-link>
            <i class="iconfont icon-icon-xiangyou"></i>
          </router-link>
        </li>
        <li>
          <router-link to="#" class="aside-one">
            <router-link to="#" class="first-nav">居家</router-link>
            <router-link to="#" class="second-nav">奶粉</router-link>
            <router-link to="#" class="second-nav">玩具</router-link>
            <router-link to="#" class="second-nav">辅食</router-link>
            <i class="iconfont icon-icon-xiangyou"></i>
          </router-link>
        </li>
        <li>
          <router-link to="#" class="aside-one">
            <router-link to="#" class="first-nav">洗护</router-link>
            <router-link to="#" class="second-nav">洗发</router-link>
            <router-link to="#" class="second-nav">洗护</router-link>
            <router-link to="#" class="second-nav">美妆</router-link>
            <i class="iconfont icon-icon-xiangyou"></i>
          </router-link>
        </li>
        <li>
          <router-link to="#" class="aside-one">
            <router-link to="#" class="first-nav">孕婴</router-link>
            <router-link to="#" class="second-nav">奶粉</router-link>
            <router-link to="#" class="second-nav">玩具</router-link>
            <i class="iconfont icon-icon-xiangyou"></i>
          </router-link>
        </li>
        <li>
          <router-link to="#" class="aside-one">
            <router-link to="#" class="first-nav">服饰</router-link>
            <router-link to="#" class="second-nav">女装</router-link>
            <router-link to="#" class="second-nav">男装</router-link>
            <i class="iconfont icon-icon-xiangyou"></i>
          </router-link>
        </li>
        <li>
          <router-link to="#" class="aside-one">
            <router-link to="#" class="first-nav">杂货</router-link>
            <router-link to="#" class="second-nav">户外</router-link>
            <router-link to="#" class="second-nav">图书</router-link>
            <i class="iconfont icon-icon-xiangyou"></i>
          </router-link>
        </li>
        <li>
          <router-link to="#" class="aside-one">
            <router-link to="#" class="first-nav">孕婴</router-link>
            <router-link to="#" class="second-nav">品牌制造</router-link>
            <i class="iconfont icon-icon-xiangyou"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel/Carousel.vue";

export default {
  name: "HomeBanner",
  components: {
    Carousel
  }
};
</script>

<style lang="scss" scoped>
// 轮播图
.carousel {
  height: auto;

  .carousel-bgc {
    height: 100%;
    background-color: #fff;
  }

  ::v-deep(.swiper-container) {
    position: relative;
    height: 100%;
  }

  ::v-deep(.swiper-pagination) {
    width: 990px;
    left: 250px;
  }

  ::v-deep(.swiper-pagination-bullets) {
    position: absolute;
    bottom: 20px;
  }

  ::v-deep(.swiper-pagination-bullet-active),
  ::v-deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
  }
  ::v-deep(.swiper-pagination-bullet-active) {
    background-color: #fff;
  }

  ::v-deep(.swiper-button-prev) {
    left: 260px;
  }

  ::v-deep(.swiper-button-prev),
  ::v-deep(.swiper-button-next) {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  ::v-deep(.swiper-button-prev)::after,
  ::v-deep(.swiper-button-next)::after {
    font-size: 18px;
    color: #fff;
  }
}

// 轮播图侧边栏
.banner-aside {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;

  ul {
    width: 100%;
    height: 100%;

    li {
      width: 100%;
      height: 50px;
      line-height: 50px;
    }
  }
}

.aside-one {
  display: block;
  text-align: left;
  font-size: 14px;
  padding-left: 30px;

  &:hover {
    background-color: #1abc9c;
  }

  a {
    color: #fff;
  }

  .first-nav {
    font-size: 16px;
    margin-right: 6px;
  }

  .second-nav {
    margin: 0 3px;

    &:hover {
      color: #e4e4e4;
    }
  }

  i {
    float: right;
    color: #fff;
    margin-right: 16px;
  }
}
</style>
