<template>
  <div class="container">
    <!-- 最新专题标题 -->
    <div class="HomeLatestTopics-title">
      <b>最新专题</b>
      <router-link to="#" class="look-all">
        查看全部
        <i class="iconfont icon-icon-xiangyou"></i>
      </router-link>
    </div>

    <!-- 最新专题内容 -->
    <div class="HomeLatestTopics-content">
      <div class="content-one" v-for="item in GetLatestTopics" :key="item.id">
        <div class="comment">
          <img :src="item.cover" />
          <span class="price"><i>￥</i>{{ item.lowestPrice }}起</span>
          <div class="information">
            <p>{{ item.summary }}</p>
            <span>{{ item.title }}</span>
          </div>
        </div>
        <div class="fabulous">
          <span class="praise">
            <i class="iconfont icon-xinaixin"></i>
            {{ item.collectNum }}
          </span>
          <span class="eye">
            <i class="iconfont icon-yanjing1"></i>
            {{ item.viewNum }}
          </span>
          <span class="speech">
            <i class="iconfont icon-pinglun"></i>
            {{ item.replyNum }}
          </span>
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
  name: "HomeLatestTopics",
  setup() {
    const GetLatestTopics = ref([]);

    // 获取最新专题数据
    let getLatest = httpGet(home.GetLatestTopics)
      .then(res => {
        // console.log(res);
        let { result } = res;

        GetLatestTopics.value = result;
      })
      .catch(err => {
        console.log(err);
      });

    onMounted(() => {
      getLatest;
    });

    return {
      GetLatestTopics
    };
  }
};
</script>

<style lang="scss" scoped>
// 最新专题标题
.HomeLatestTopics-title {
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

// 最新专题内容
.HomeLatestTopics-content {
  width: 100%;
  height: 356px;
  margin-bottom: 42px;
  @include clearfix();

  .content-one {
    float: left;
    width: 404px;
    height: 100%;
    background-color: #fff;
    margin-right: 14px;

    &:last-child {
      margin-right: 0;
    }

    .comment {
      position: relative;
      width: 100%;
      height: 298px;
      background-color: skyblue;
    }

    .fabulous {
      width: 100%;
      height: 58px;
      line-height: 58px;

      i {
        font-size: 14px;
        font-weight: 700;
        vertical-align: bottom;
        cursor: pointer;
      }
    }
  }

  .comment {
    img {
      width: 100%;
      height: 100%;
    }

    .price {
      position: absolute;
      bottom: 24px;
      right: 15px;
      display: inline-block;
      width: 81px;
      height: 27px;
      color: #9a2e1f;
      font-size: 17px;
      text-align: center;
      line-height: 27px;
      background-color: #fff;
      z-index: 1;

      i {
        color: #9a2e1f;
        font-size: 14px;
      }
    }
  }

  .fabulous {
    .praise {
      margin-left: 17px;
    }

    .eye {
      position: relative;
      margin-left: 26px;

      i {
        position: absolute;
        top: -22px;
        left: -15px;
      }
    }

    .speech {
      float: right;
      margin-right: 18px;
    }
  }
}

.information {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.1) 66%,
    rgba(0, 0, 0, 0.8) 90%
  );

  p {
    width: 241px;
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-top: 238px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }

  span {
    display: inline-block;
    color: #999;
    font-size: 16px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
}
</style>
