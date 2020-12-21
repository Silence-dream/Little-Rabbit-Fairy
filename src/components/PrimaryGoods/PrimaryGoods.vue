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
  </el-main>
</template>

<script>
import LoginHeader from "@/components/LoginHeader/LoginHeader";
import { httpGet } from "@/utils/http";
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
        console.log(classifyGoodsData.value);
      })
      .catch(error => {
        console.log(error);
      });
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
</style>
