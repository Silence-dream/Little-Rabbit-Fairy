<template>
  <LoginHeader></LoginHeader>
  <el-main style="background-color: #f5f5f5">
    <!-- 轮播图 start -->
    <el-row class="carousel">
      <div class="container carousel-bgc">轮播图部分</div>
    </el-row>
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
              <div><img class="border-img" :src="item.picture" alt="" /></div>
              <p>{{ item.name }}</p>
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
                <img :src="item2.picture" alt="" />
                <h1>{{ item2.name }}</h1>
                <p>{{ item2.desc }}</p>
                <span>￥{{ Math.round(item2.price) }}</span>
              </li>
            </ul>
          </div>
        </el-row>
      </div>
      <el-row></el-row>
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
              <h4 class="related-categories-title">5个给春天的生活新提案</h4>
              <p class="related-categories-slogan">餐厨器具洗护好物</p>
              <div class="related-categories-about">
                <div style="flaot:left">
                  <span class="iconfont icon-huifu"> </span>
                  <span class="number">1000+</span>
                </div>
                <span></span>
              </div>
            </li>
          </ul>
        </el-row>
      </div>
    </el-row>
    <!-- 相关分类 end -->
  </el-main>
</template>

<script>
import LoginHeader from "@/components/LoginHeader/LoginHeader.vue";
import { httpGet } from "@/utils/http.js";
import { onMounted, ref } from "vue";
// 轮播图使用
// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";
export default {
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
        // console.log(goodsData);
        // console.log(classifyGoodsData.value);
      })
      .catch(error => {
        console.log(error);
      });
    //#endregion

    //#region 2.获取相关分类数据 未找到相关数据分类
    //#endregion

    // 轮播图方法

    onMounted(() => {
      getPrimaryGoods;
    });

    return {
      classifyData,
      classifyGoodsData
    };
  },
  components: {
    LoginHeader
  }
};
</script>

<style lang="scss" scoped>
// 中间内容样式设置
.el-main {
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
    text-align: center;
    line-height: 500px;
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
      height: 189px;
      width: 400px;
    }

    // 标题
    .related-categories-title {
      height: auto;
      padding: 21px 0px 0px 18px;
      font-size: 16px;
      line-height: 22px;
      margin: 0px;
      background-color: #fff;
    }

    // 标语
    .related-categories-slogan {
      font-size: 14px;
      line-height: 20px;
      color: #999999;
      padding: 7px 0px 0px 18px;
    }

    .related-categories-about {
      padding-top: 12px;
      margin: 9px 18px;
      border-top: 2px solid #ccc;
    }

    // 消息
    .icon-huifu {
      float: left;
      font-size: 20px;
      color: #999999;
    }
    .number {
      float: left;
      font-size: 14px;
      // margin-bottom: 5px;
      color: #999999;
      line-height: 20px;
    }

    // 爱心

    // 总数

    // 价格
  }
}
</style>
