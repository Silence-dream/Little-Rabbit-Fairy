<template>
  <!-- 轮播图 start -->
  <Carousel></Carousel>
  <!-- 轮播图 end -->

  <!-- 全部分类 start -->
  <el-row class="all-classify">
    <div class="container bgc">
      <!-- 分类设置--标题 -->
      <el-row class="all-classify-title"> <h4>全部分类</h4> </el-row>
      <!-- 分类设置--所有分类 -->
      <el-row class="all-calssif-list">
        <ul>
          <li
            class="all-calssif-single"
            v-for="item in classifyData"
            :key="item.id"
          >
            <router-link to="/Primary/Secondary" style="display: block">
              <div><img class="border-img" :src="item.picture" alt="" /></div>
              <p>{{ item.name }}</p></router-link
            >
          </li>
        </ul>
      </el-row>
    </div>
  </el-row>
  <!-- 全部分类 end -->

  <!-- 分类内容 start -->
  <el-row class="classify-content">
    <div class="container content-text">
      <el-row v-for="item1 in classifyGoodsData" :key="item1.id">
        <!-- 标题 -->
        <h1 class="classify-content-title">— {{ item1.name }} —</h1>
        <!-- 标语 -->
        <p class="classify-content-slogan">温暖柔软，品质之选</p>
        <!-- 商品 -->
        <div class="classify-content-list">
          <ul>
            <li
              class="classify-content-list-single"
              v-for="item2 in item1.goods"
              :key="item2.id"
            >
              <a href="#" style="display: block">
                <img :src="item2.picture" alt="" />
                <h1>{{ item2.name }}</h1>
                <p>{{ item2.desc }}</p>
                <span>￥{{ Math.round(item2.price) }}</span>
              </a>
            </li>
          </ul>
        </div>
      </el-row>
    </div>
  </el-row>
  <!-- 分类内容 end -->

  <!-- 相关分类 start -->
  <el-row class="related-categories">
    <div class="container">
      <!-- 相关分类的标题 -->
      <el-row class="related-categories-title"><h1>相关分类</h1></el-row>
      <!-- 相关分类的内容 -->
      <el-row class="related-categories-content">
        <ul>
          <li class="related-categories-single" v-for="item in 6" :key="item">
            <img
              src="./img/related-categories.png"
              alt=""
              class="related-categories-img"
            />
            <div class="related-box">
              <div class="box-top">
                <h1>5个给春天的生活新提案</h1>
                <p>餐厨起居洗护好物</p>
                <span>￥19起</span>
              </div>
              <div class="box-bottom">
                <span> <span class="iconfont icon-huifu"></span> 1000+ </span>
                <span> <span class="iconfont icon-xin"></span> 98% </span>
                <div class="total">共 <i>100</i> 见商品</div>
              </div>
            </div>
          </li>
        </ul>
      </el-row>
    </div>
  </el-row>
  <!-- 相关分类 end -->
</template>

<script>
import Carousel from "@/components/Carousel/Carousel.vue";
import { httpGet } from "@/utils/http.js";
import { onMounted, ref } from "vue";
export default {
  name: "Categories",
  setup() {
    //#region 1.获取分类数据
    // classifyData 用于获取分类的名称和图片
    const classifyData = ref([]);
    // 用于获取该分类下的商品数据
    const classifyGoodsData = ref([]);

    // 获取全部分类数据
    let getPrimaryGoods = httpGet("/category")
      .then(res => {
        // console.log(res);
        let { result } = res;
        // 将分类数据传入
        classifyData.value = result.children;
        // 将商品数据传入
        result.children.forEach(element => {
          // console.log(element)
          // 将获取到的数据直接push到设置好的空数组中
          classifyGoodsData.value.push(element);
        });
        // 用于接收随机数值
        let randomNum = ref("");
        // 进行判断数组长度是否大于3
        if (classifyGoodsData.value.length > 3) {
          // 随机数0-7
          // 循环5次从中选出5个随机数
          for (var i = 1; i <= 5; i++) {
            // 赋值
            randomNum.value = parseInt(
              Math.random() * classifyGoodsData.value.length
            );
            // console.log(randomNum.value);
            // 删除
            classifyGoodsData.value.splice(randomNum.value, 1);
          }
          // classifyGoodsData.value.splice(1, 5);
        }
        // console.log(goodsData);
        // console.log(classifyGoodsData.value);
      })
      .catch(error => {
        console.log(error);
      });
    //#endregion

    //#region 2.轮播图方法
    const getCarouselImg = ref([]);
    let getCarouselData = httpGet("/home/banner")
      .then(res => {
        // console.log(res);
        let { result } = res;
        getCarouselImg.value = result;
      })
      .catch(error => {
        console.log(error);
      });
    //#endregion

    onMounted(() => {
      getPrimaryGoods;
      getCarouselData;
    });

    return {
      classifyData,
      classifyGoodsData,
      getCarouselImg
    };
  },
  // 组件
  components: {
    Carousel
  }
};
</script>

<style lang="scss" scoped>
// 中间内容样式设置
::v-deep(.el-main) {
  padding: 0px;
  overflow: hidden;
}

// 轮播图
.carousel {
  height: auto;
  margin-top: 20px;

  .carousel-bgc {
    height: 500px;
    background-color: #fff;
    @include clearfix();
  }

  ::v-deep(.swiper-container) {
    position: relative;
    height: 500px;
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
  ::v-deep(.swiper-button-prev),
  ::v-deep(.swiper-button-next) {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  ::v-deep(.swiper-button-prev)::after,
  ::v-deep(.swiper-button-next)::after {
    font-size: 18px;
    color: #fff;
  }
}

// 全部分类样式设置
.all-classify {
  height: auto;

  // 整体的白色背景
  .bgc {
    background-color: #ffffff;
    // height: 510px;
  }

  // 全部分类的标题样式
  .all-classify-title {
    height: auto;
    text-align: center;
    background-color: #f5f5f5;

    h4 {
      height: 85px;
      line-height: 85px;
      font-size: 22px;
      font-weight: 100;
      color: #666;
      padding-top: 15px;
    }
  }

  // 全部分类分类图片样式 285
  .all-calssif-list {
    height: 405px;
    margin-top: 17px;
    @include clearfix();

    ul {
      padding-left: 45px;
    }
    // 每个li的样式
    .all-calssif-single {
      height: 130px;
      width: 100px;
      margin-right: 70px;
      margin-bottom: 40px;
      float: left;
    }

    // 图片样式
    .border-img {
      border: 1px dashed #969798;
    }

    // 文字样式
    p {
      text-align: center;
      font-size: 16px;
      margin-top: 10px;
      line-height: 22px;
    }
  }
}

// 商品内容样式设置
.classify-content {
  height: auto;
  @include clearfix();

  .content-text {
    text-align: center;
    background-color: #ffffff;

    // 内容标题字体设置
    .classify-content-title {
      font-size: 28px;
      line-height: 40px;
      font-weight: 100;
      color: #969798;
      margin-bottom: 10px;
    }

    // 内容部分标语
    .classify-content-slogan {
      font-size: 28px;
      line-height: 40px;
      font-weight: 100;
      color: #969798;
      margin-bottom: 40px;
    }
  }

  // 商品数据样式设置
  .classify-content-list {
    height: auto;

    .classify-content-list-single {
      width: 232px;
      height: 320px;
      margin-right: 20px;
      float: left;

      &:last-child {
        margin: 0px;
      }
    }

    img {
      width: 152px;
      height: 145px;
      border: none;
    }

    h1 {
      margin-top: 12px;
      font-size: 16px;
      line-height: 22px;
      font-weight: normal;
      // 直接使用省略号代替
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }

    p {
      margin-top: 12px;
      font-size: 14px;
      line-height: 20px;
      color: #969798;
    }
    span {
      display: block;
      margin-top: 16px;
      font-size: 18px;
      line-height: 25px;
      color: #9a2e1f;
    }
  }
}

// 相关分类样式设置
.related-categories {
  margin-top: 37px;
  height: auto;

  // 头部标题样式设置
  .related-categories-title {
    height: 120px;
    background-color: #eeeff3;
    margin-bottom: 40px;

    h1 {
      font-size: 32px;
      line-height: 120px;
      font-weight: 600;
      padding-left: 53px;
    }
  }

  // 相关分类的内容样式设置
  .related-categories-content {
    height: auto;

    // 每个li的框的样式设置
    .related-categories-single {
      width: 400px;
      height: 320px;
      margin-right: 20px;
      margin-bottom: 20px;
      float: left;
      background-color: #fff;

      &:nth-child(3),
      &:last-child {
        margin: 0px;
      }
      &:nth-child(4),
      &:nth-child(5),
      &:last-child {
        margin-bottom: 80px;
      }
    }

    // 图片
    .related-categories-img {
      display: block;
      height: 190px;
      width: 400px;
    }
  }

  .related-box {
    height: 130px;
    padding-top: 21px;
    margin: 0px 18px;
  }
  .box-top {
    padding-bottom: 9px;
    border-bottom: 2px solid #e6e6e6;
    @include clearfix();

    h1 {
      font-size: 16px;
      line-height: 22px;
      font-family: PingFangSC;
    }
    p {
      float: left;
      margin-top: 7px;
      font-size: 14px;
      line-height: 20px;
      color: #999999;
    }
    span {
      float: right;
      font-size: 18px;
      line-height: 24px;
      color: #9a2e1f;
    }
  }
  .box-bottom {
    margin-top: 10px;

    span {
      float: left;
      font-size: 14px;
      line-height: 18px;

      &:first-child {
        color: #999999;
      }
      &:nth-child(2) {
        color: #9a2e1f;
        margin-left: 18px;
      }

      .icon-huifu {
        font-size: 16px;
        padding-right: 3px;
      }
      .icon-xin {
        color: #9a2e1f;
        padding-right: 5px;
      }
    }

    .total {
      float: right;
      font-size: 14px;
      line-height: 20px;
      color: #999999;

      i {
        color: #9a2e1f;
      }
    }
  }
}
</style>
