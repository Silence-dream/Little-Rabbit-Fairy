<template>
  <!-- 面包屑导航 start -->
  <el-breadcrumb separator=">">
    <div class="container">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Primary' }"
        >电子产品</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/Primary/Secondary' }"
        >手机</el-breadcrumb-item
      >
      <el-breadcrumb-item>产品xxx</el-breadcrumb-item>
    </div>
  </el-breadcrumb>
  <!-- 面包屑导航 end -->

  <!-- 商品展示部分 start -->
  <div class="exhibition">
    <div class="container exhibition-bgc">
      <div class="exhibition-left">
        <div class="show-top">
          <!-- 视频+图片展示 -->
          <div class="product-video" v-for="item in getMainVideo" :key="item">
            <div class="cover"></div>
            <video :src="getMainVideo" controls preload />
          </div>
          <!-- 列表展示 -->
          <div class="product-list">
            <ul style="width:68px">
              <li v-for="item in getMainImg" :key="item">
                <img :src="item" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div class="show-bottom"></div>
      </div>
      <div class="exhibition-right"></div>
    </div>
  </div>
  <!-- 商品展示部分 end -->
</template>

<script>
import { httpGet } from "@/utils/http.js";
import { onMounted, ref } from "vue";
export default {
  name: "SecondaryDetails",
  setup() {
    //#region 1.获取goods中所有数据
    // 获取图片数据
    const getMainImg = ref([]);
    // 获取时评数据
    const getMainVideo = ref([]);
    const getGoods = httpGet("/goods")
      .then(res => {
        console.log(res);
        let { result } = res;
        // 传入主要图片内容
        getMainImg.value = result.mainPictures;
        getMainVideo.value = result.mainVideos;
        // console.log(getMainImg.value);
      })
      .catch(error => {
        console.log(error);
      });

    onMounted(() => {
      getGoods;
    });

    return {
      getMainImg,
      getMainVideo
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped>
// 面包屑导航样式设置
.el-breadcrumb {
  height: 75px;
  line-height: 75px;
}
:deep(.is-link) {
  font-weight: normal;
}
:deep(.el-breadcrumb__inner) {
  color: #999999;
}

// 商品展示部分样式
.exhibition {
  margin-bottom: 20px;
}
.exhibition-bgc {
  height: 580px;
  background-color: #fff;

  .exhibition-left {
    float: left;
    margin-top: 30px;
    margin-left: 50px;
  }
  .show-top {
    height: auto;
  }
}
// 视频部分
.product-video {
  float: left;
  width: 400px;
  height: 400px;
  background-color: #000;

  video {
    width: 400px;
    height: 400px;
    // margin-top: 100px;
  }
}
// 右侧的图片栏
.product-list {
  float: left;
  width: 108px;
  height: 400px;

  li {
    float: left;
    width: 68px;
    height: 68px;
    margin: 10px 20px 0px 20px;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
