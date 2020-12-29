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
            <!-- 遮罩图 -->
            <div class="cover" ref="cover">
              <div class="player" ref="plotPlay" @click="isHide()">
                <span class="iconfont icon-bofang"></span>
              </div>
              <img ref="mainImg" src="./img/main.jpg" alt="" />
            </div>
            <!-- 视频 -->
            <video
              ref="getVideo"
              :src="getMainVideo"
              autoplay
              controls
              preload
            />
          </div>
          <!-- 列表展示 -->
          <div class="product-list">
            <ul style="width:68px">
              <li
                v-for="(item, index) in getMainImg"
                :key="item"
                :class="index == 0 ? 'active' : ''"
                @click="showPic($event)"
              >
                <img ref="imgSrc" :data-index="index" :src="item" alt="" />
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
import { onMounted, ref, getCurrentInstance } from "vue";
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
    //#endregion
    getCurrentInstance().ctx.$refs;
    //#region 2.点击后隐藏
    const cover = ref(null);
    const getVideo = ref(null);
    function isHide() {
      // console.log(cover.value.style);
      // 遮罩图消失
      cover.value.style.display = "none";
      // 视频出现
      getVideo.value.style.display = "block";
      // 自动播放
      getVideo.value.play();
    }
    //#endregion

    //#region 3.鼠标移入li中左侧框显示对应图片 + 黄框并放大
    // 获取图片的src
    const imgSrc = ref(null);
    const mainImg = ref(null);
    const plotPlay = ref(null);
    function showPic(event) {
      // console.log(event.target.getAttribute("data-index"));
      if (event.target.getAttribute("data-index") == 0) {
        plotPlay.value.style.display = "block";
      } else {
        plotPlay.value.style.display = "none";
      }
      mainImg.value.src = event.target.src;
      // console.log(event.target.parentNode.children);
      let arr = Array.from(event.currentTarget.parentNode.children);
      // 循环遍历li
      arr.forEach(element => {
        // 删除这一个ul里面li 的 类名`
        element.classList.remove("active");
      });
      // 给点击的那个li添加类名
      event.currentTarget.classList.add("active");
    }
    //#endregion

    onMounted(() => {
      getGoods;
    });

    return {
      getMainImg,
      getMainVideo,
      isHide,
      // 视频处理部分
      cover,
      getVideo,
      showPic,
      // 切换图片处理部分
      imgSrc,
      mainImg,
      plotPlay
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
  position: relative;

  video {
    position: absolute;
    float: left;
    width: 400px;
    height: 400px;
    display: none;
    // margin-top: 100px;
  }

  .cover {
    position: absolute;
    height: auto;
    z-index: 10;

    img {
      width: 400px;
      height: 400px;
    }

    .player {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      cursor: pointer;
      // background-color: black;
    }
    .icon-bofang {
      color: white;
      position: absolute;
      font-size: 46px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
// 右侧的图片栏
.product-list {
  float: left;
  width: 108px;
  height: 400px;
  ul {
    width: 108px;
    height: 400px;
  }

  li {
    float: left;
    width: 68px;
    height: 68px;
    margin: 10px 20px 0px 20px;
    cursor: pointer;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 7px;
  }

  .active {
    border: 2px solid #5eb69c;
  }
}
// 左侧视频下方文字部分
.show-bottom {
}
</style>
