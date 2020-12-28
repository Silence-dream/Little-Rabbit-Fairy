<template>
  <div class="container">
    <div v-for="item in GetProductBlock" :key="item.id">
      <!-- 产品区块标题 -->
      <div class="HomeProductBlock-title">
        <b>{{ item.name }}</b>
        <router-link to="#" class="look-all">
          查看全部
          <i class="iconfont icon-icon-xiangyou"></i>
        </router-link>
        <p>
          <router-link
            to="#"
            class="look-text"
            v-for="i in item.children"
            :key="i.id"
          >
            {{ i.name }}
          </router-link>
        </p>
      </div>

      <!-- 产品区块内容 -->
      <div class="HomeProductBlock-content">
        <!-- 左侧大图 -->
        <div class="content-big-picture">
          <img :src="item.picture" />
          <div class="text-location">
            <span class="left">{{ item.name }}馆</span>
            <span class="right">{{ item.saleInfo }}</span>
          </div>
        </div>

        <!-- 右侧八小图 -->
        <div class="content-small-picture">
          <ul>
            <li v-for="ele in item.goods" :key="ele.id">
              <router-link to="#">
                <img :src="ele.picture" />
                <p>
                  <span>{{ ele.name }}</span> <br />
                  <span class="price">
                    ¥
                    <b>{{ ele.price }}</b>
                  </span>
                </p>
                <div class="resemble">
                  <p>
                    <span>找相似</span>
                  </p>
                  <span>
                    发现更多宝贝
                    <i class="iconfont icon-arrow-right"></i>
                  </span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { httpGet } from "@/utils/http.js";
import { ref, onMounted } from "vue";
import { home } from "@/api";

export default {
  name: "HomeProductBlock",
  setup() {
    const GetProductBlock = ref([]);

    // 获取产品区块数据
    let getProduct = httpGet(home.GetProductBlock)
      .then(res => {
        // console.log(res);
        let { result } = res;

        GetProductBlock.value = result;
      })
      .catch(err => {
        console.log(err);
      });

    onMounted(() => {
      getProduct;
    });

    return {
      GetProductBlock
    };
  }
};
</script>

<style lang="scss" scoped>
// 产品区块标题
.HomeProductBlock-title {
  font-size: 16px;
  padding: 40px 0;
  margin-top: 7px;
  vertical-align: baseline;

  b {
    color: #333333;
    font-size: 29px;
    font-weight: 400;
  }

  p {
    float: right;
    line-height: 32px;
    margin-right: 65px;

    .look-text {
      text-align: center;
      padding: 0 4px;

      &:hover {
        color: #fefbfc;
        background-color: #27ba9b;
      }
    }
  }

  .look-all {
    float: right;
    color: #999999;
    line-height: 32px;
  }
}

// 产品区块内容
.HomeProductBlock-content {
  width: 100%;
  height: 610px;
  @include clearfix();

  .content-big-picture {
    position: relative;
    float: left;
    width: 240px;
    height: 100%;
    margin-right: 8px;

    img {
      width: 100%;
      height: 100%;
    }

    .text-location {
      position: absolute;
      bottom: 200px;
      left: 0;
      width: 187px;
      height: 66px;
    }
  }

  .content-small-picture {
    float: left;
    width: 992px;
    height: 100%;

    ul {
      height: 100%;
    }
  }
}

.text-location {
  span {
    display: inline-block;
    height: 100%;
    font-size: 16px;
    text-align: center;
    line-height: 66px;
    color: #ffffff;
    background-color: #000;
  }

  .left {
    width: 75px;
    opacity: 1;
  }

  .right {
    width: 112px;
    opacity: 0.8;
  }
}

.content-small-picture {
  li {
    position: relative;
    float: left;
    width: 242px;
    height: 304px;
    text-align: center;
    margin-right: 8px;
    margin-bottom: 3px;
    border: 2px solid transparent;
    overflow: hidden;

    img {
      width: 184px;
      height: 184px;
      margin-top: 8px;
    }

    p {
      color: #333333;
      font-size: 16px;
      text-align: left;
      line-height: 22px;
      padding-left: 29px;
      padding-right: 36px;
      margin-top: 12px;
    }

    .price {
      display: inline-block;
      color: #9a2e1f;
      text-align: left;
      margin-top: 7px;

      b {
        font-size: 22px;
        margin-left: 1px;
      }
    }

    &:nth-child(4),
    &:last-child {
      margin-right: 0;
    }

    .resemble {
      position: absolute;
      left: 0;
      bottom: -84px;
      width: 100%;
      height: 84px;
      text-align: center;
      background-color: #00be9a;
    }

    &:hover {
      transition: all 0.5s;
      border: 2px solid #27ba9b;

      .resemble {
        transition: all 0.5s;
        bottom: 0;
      }
    }
  }
}

.resemble {
  color: #ffffff;
  font-size: 13px;

  p {
    display: inline-block;
    border-bottom: 1px solid #a9dbcc;

    span {
      color: #ffffff;
      font-size: 18px;
      text-align: center;
      margin-bottom: 6px;
    }
  }

  span {
    display: block;
    overflow: hidden;
    margin-top: 4px;

    i {
      display: inline-block;
      margin-top: 2px;
    }
  }
}
</style>
