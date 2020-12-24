<template>
  <div class="container">
    <!-- 新鲜好物标题 -->
    <div class="fresh-good-title">
      <b>新鲜好物</b>
      <span>新鲜出炉 品质靠谱</span>
      <router-link to="#">
        查看全部
        <i class="iconfont icon-icon-xiangyou"></i>
      </router-link>
    </div>

    <!-- 新鲜好物内容 -->
    <div class="fresh-good-content">
      <router-link
        to="#"
        class="fresh-good-content-one"
        v-for="item in getFreshGood"
        :key="item.id"
      >
        <!-- 图片 -->
        <div class="div-picture">
          <img :src="item.picture" />
          <span style="writing-mode: tb-rl;">新品</span>
        </div>

        <!-- 价格 -->
        <div class="div-price">
          <p>{{ item.name }}</p>
          <span>￥{{ item.price }}</span>
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
    const getFreshGood = ref([]);

    // 获取新鲜好物数据
    let getGoods = httpGet(home.GetFreshGood)
      .then(res => {
        let { result } = res;

        getFreshGood.value = result;
      })
      .catch(err => {
        console.log(err);
      });

    onMounted(() => {
      getGoods;
    });

    return {
      getFreshGood
    };
  }
};
</script>

<style lang="scss" scoped>
// 新鲜好物标题
.fresh-good-title {
  font-size: 16px;
  padding: 37px 0;
  margin-top: 11px;
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

  a {
    float: right;
    color: #999999;
    line-height: 32px;
  }
}

// 新鲜好物内容
.fresh-good-content {
  @include clearfix();
  .fresh-good-content-one {
    float: left;
    width: 304px;
    height: 405px;
    background-color: #f0f9f4;
    margin-right: 8px;

    &:last-child {
      margin: 0;
    }

    .div-picture {
      width: 100%;
      height: 305px;
    }

    .div-price {
      width: 100%;
      height: 100px;
      color: #333333;
      font-size: 20px;
      text-align: center;
    }
  }
}

// 新鲜好物内容之图片
.div-picture {
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    top: 25px;
    left: 21px;
    display: inline-block;
    width: 28px;
    height: 51px;
    color: #27ba9b;
    font-size: 18px;
    text-align: center;
    line-height: 28px;
    border: 1px solid #0ec6a6;
    border-radius: 4px;
  }
}

// 新鲜好物内容之价格
.div-price {
  p {
    margin-top: 22px;
  }

  span {
    display: inline-block;
    margin-top: 19px;
  }
}
</style>
