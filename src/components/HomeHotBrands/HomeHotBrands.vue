<template>
  <div class="container">
    <!-- 人气推荐标题 -->
    <div class="popularity-recommend-title">
      <b>人气推荐</b>
      <span>人气爆款 不容错过</span>
    </div>

    <!-- 人气推荐内容 -->
    <div class="popularity-recommend-content">
      <router-link
        to="#"
        class="popularity-recommend-content-one"
        v-for="item in getPopularityRecommend"
        :key="item.id"
      >
        <!-- 图片 -->
        <div class="div-picture">
          <img :src="item.picture" />
        </div>

        <!-- 价格 -->
        <div class="div-introduce">
          <p>{{ item.title }}</p>
          <span>{{ item.alt }}</span>
        </div>
      </router-link>
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
    const getPopularityRecommend = ref([]);

    // 获取人气推荐数据
    let getRecommend = httpGet(home.GetPopularityRecommend)
      .then(res => {
        // console.log(res);
        let { result } = res;

        getPopularityRecommend.value = result;
      })
      .catch(err => {
        console.log(err);
      });

    onMounted(() => {
      getRecommend;
    });

    return {
      getPopularityRecommend
    };
  }
};
</script>

<style lang="scss" scoped>
// 人气推荐标题
.popularity-recommend-title {
  font-size: 16px;
  padding: 40px 0;
  margin-top: 7px;
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

// 人气推荐内容
.popularity-recommend-content {
  @include clearfix();
  .popularity-recommend-content-one {
    float: left;
    width: 304px;
    height: 405px;
    margin-right: 8px;

    &:last-child {
      margin: 0;
    }

    .div-picture {
      width: 100%;
      height: 305px;
    }

    .div-introduce {
      width: 100%;
      height: 100px;
      color: #333333;
      font-size: 21px;
      text-align: center;
    }
  }
}

// 人气推荐内容之图片
.div-picture {
  img {
    width: 100%;
    height: 100%;
  }
}

// 人气推荐内容之介绍
.div-introduce {
  p {
    margin-top: 22px;
  }

  span {
    display: inline-block;
    color: #999999;
    font-size: 16px;
    margin-top: 19px;
  }
}
</style>
