<template>
  <!-- 面包屑导航栏 start -->
  <el-breadcrumb separator=">">
    <div class="container">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Primary' }"
        >电子产品</el-breadcrumb-item
      >
      <el-breadcrumb-item>手机</el-breadcrumb-item>
    </div>
  </el-breadcrumb>
  <!-- 面包屑导航栏 end -->

  <!-- 分类筛选框 start -->
  <div class="filter">
    <div class="container filter-bgc">
      <div class="filter-cover">
        <!-- 分类 -->
        <ul>
          <li>分类:</li>
          <li :class="Number(isCheck) !== getIndex ? 'active' : ''">全部</li>
          <li
            v-for="(item, index) in getBrandsData"
            :key="item.id"
            :class="{ active: index == Number(isCheck) }"
            @click="bindColor(index)"
          >
            {{ item.name }}
          </li>
          <!-- <li>二手手机</li> -->
        </ul>
        <!-- 品牌 -->
        <ul>
          <li>品牌:</li>
          <li class="active">全部</li>
          <li v-for="item in getCategories" :key="item.id">{{ item.name }}</li>
          <!-- <li>二手手机</li> -->
        </ul>
        <!-- 销售属性 -->
        <ul v-for="item1 in getSalePropertiesData" :key="item1.id">
          <li>{{ item1.name }}:</li>
          <li class="active">全部</li>
          <li v-for="item2 in item1.properties" :key="item2.id">
            {{ item2.name }}
          </li>
          <!-- <li>二手手机</li> -->
        </ul>
      </div>
    </div>
  </div>
  <!-- 分类筛选框 end -->

  <!-- 分类筛选商品展示 start -->
  <div class="commodity">
    <div class="container commodity-bgc">
      <!-- tab栏切换部分 start -->
      <div class="commodity-top">
        <div class="top-left">
          <span class="active">最新商品</span>
          <span>最高人气</span>
          <span>评论最多</span>
          <span>价格排序</span>
        </div>
        <div class="top-right">
          <el-checkbox-group>
            <el-checkbox label="仅显示有货商品"></el-checkbox>
            <el-checkbox label="仅显示优惠商品"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <!-- 内容部分 -->
      <div class="commodidy-content">
        <ul v-for="item in 4" :key="item">
          <li>
            <img src="./img/1.webp" alt="" />
            <div class="discount">享 9折</div>
            <router-link to="#">
              <h1>红米Note 5A 高配版</h1>
              <p>1600万像素柔和光自拍</p>
              <span>￥1899</span>
            </router-link>
          </li>
          <li>
            <img src="./img/2.webp" alt="" />
            <router-link to="#">
              <h1>红米Note 5A 高配版</h1>
              <p>1600万像素柔和光自拍</p>
              <span>￥1899</span>
            </router-link>
          </li>
          <li>
            <img src="./img/1.webp" alt="" />
            <div class="discount">享 9折</div>
            <router-link to="#">
              <h1>红米Note 5A 高配版</h1>
              <p>1600万像素柔和光自拍</p>
              <span>￥1899</span>
            </router-link>
          </li>
          <li>
            <img src="./img/2.webp" alt="" />
            <router-link to="#">
              <h1>红米Note 5A 高配版</h1>
              <p>1600万像素柔和光自拍</p>
              <span>￥1899</span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- tab栏切换部分 end -->
    </div>
  </div>
  <!-- 分类筛选商品展示 end -->
</template>

<script>
import { httpGet } from "@/utils/http.js";
import { onMounted, ref } from "vue";
export default {
  name: "SecondaryCategories",
  setup() {
    //#region  1. 获取二级商品分类总数据
    // 用于获取数据
    // 1. 获取品牌数据
    const getBrandsData = ref([]);
    // 2.获取分类数据
    const getCategories = ref([]);
    // 3.获取商品其他销售属性数据
    const getSalePropertiesData = ref([]);

    // 请求发起
    let getTotalData = httpGet("/category/sub/filter")
      .then(res => {
        // console.log(res);
        let { result } = res;
        // 品牌数据
        getBrandsData.value = result.brands;
        // 分类数据
        getCategories.value = result.categories;
        // 销售属性数据
        getSalePropertiesData.value = result.saleProperties;
        // console.log(getSalePropertiesData.value);
      })
      .catch(error => {
        console.log(error);
      });
    //#endregion

    //#region 2.点击后进行颜色变化
    const isCheck = ref("");
    const getIndex = ref();
    let bindColor = function(index) {
      isCheck.value = index;
      getIndex.value = index;
    };
    //#endregion

    onMounted(() => {
      getTotalData;
    });

    return {
      getBrandsData,
      getCategories,
      getSalePropertiesData,
      isCheck,
      bindColor,
      getIndex
    };
  }
};
</script>

<style lang="scss" scoped>
// 面包屑导航样式设置
.el-breadcrumb {
  height: 75px;
  line-height: 75px;
}
::v-deep(.is-link) {
  font-weight: normal;
}
::v-deep(.el-breadcrumb__inner) {
  color: #999999;
}

// 分类筛样式设置
.filter {
  margin-bottom: 20px;
}
.filter-bgc {
  background-color: #fff;
  height: auto;
}
.filter-cover {
  padding: 32px 0px 0px 23px;
  font-size: 14px;

  ul {
    float: left;
    width: 100%;
    padding-bottom: 20px;
  }

  li {
    float: left;
    padding-right: 32px;
    color: #333333;
    cursor: pointer;

    &:first-child {
      padding-right: 20px;
      color: #999999;
    }

    &:last-child {
      padding-right: 0px;
    }
  }

  .active {
    color: #5eb69c;
    opacity: 0.6;
  }
}

// 分类筛选商品展示
.commodity {
  height: auto;
  margin-bottom: 67px;
}
.commodity-bgc {
  background-color: #fff;

  .commodity-top {
    height: auto;
    padding: 22px 45px 40px 22px;
  }
}
.top-left {
  float: left;

  span {
    margin-right: 18px;
    border: 1px solid #e4e4e4;
    padding: 5px 12px 5px 13px;
    font-size: 14px;
    color: #999999;
    cursor: pointer;
  }

  .active {
    background-color: #5eb69c;
    border-color: #5eb69c;
    color: #ffffff;
  }
}
.top-right {
  float: right;
}

.commodidy-content {
  float: left;
  height: auto;
  margin-bottom: 33px;

  ul {
    float: left;
    margin: 0px 25px 40px;
  }

  li {
    float: left;
    position: relative;
    width: 278px;
    height: 370px;
    margin-right: 26px;
    transition: all 0.5s;

    &:hover {
      box-shadow: 10px 10px 5px #f5f5f5;
      // transform: scale(1.1);
    }
    &:last-child {
      margin-right: 0px;
    }

    img {
      width: 192px;
      height: 156px;
      margin-top: 40px;
      margin-left: 45px;
    }

    .discount {
      position: absolute;
      left: 11px;
      top: 16px;
      width: 28px;
      height: 80px;
      margin: 0 auto;
      line-height: 24px;
      font-size: 18px;
      padding-top: 5px;
      text-align: center;
      border: 1px solid #5eb69c;
      border-radius: 5px;
      color: #5eb69c;
      word-wrap: break-word;
    }

    a {
      text-align: center;
    }

    h1 {
      margin-top: 32px;
      color: #333333;
      font-size: 16px;
      font-weight: normal;
    }

    p {
      margin-top: 18px;
      color: #999999;
      font-size: 14px;
    }

    span {
      display: inline-block;
      margin-top: 24px;
      width: 100%;
      color: #9a2e1f;
      font-size: 18px;
    }
  }
}
</style>
