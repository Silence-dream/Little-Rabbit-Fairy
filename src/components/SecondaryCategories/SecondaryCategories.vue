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
  <SecondaryFilter></SecondaryFilter>
  <!-- 分类筛选框 end -->

  <!-- 分类筛选商品展示 start -->
  <div class="commodity">
    <div class="container commodity-bgc">
      <!-- tab栏切换部分 start -->
      <div class="commodity-top">
        <div class="top-left">
          <span class="active" @click="change($event)">最新商品</span>
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
        <ul>
          <li v-for="item in getSecondaryData" :key="item.id">
            <img :src="item.picture" alt="" />
            <!-- <div class="discount">享 9折</div> -->
            <router-link to="#">
              <h1>{{ item.name }}</h1>
              <p>{{ item.tag }}</p>
              <span>￥{{ Math.round(item.price) }}</span>
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
import SecondaryFilter from "@/components/SecondayFilter/SecondayFilter.vue";
import { httpPost } from "@/utils/http.js";
import { onMounted, ref } from "vue";

export default {
  name: "SecondaryCategories",
  setup() {
    //#region 1.获取商品列表
    const getSecondaryData = ref([]);
    let getSecondaryGoods = httpPost(`/category/goods`, { onlyDiscount: true })
      .then(res => {
        console.log(res);
        let { items } = res;
        getSecondaryData.value = items;
      })
      .catch(error => {
        console.log(error);
      });
    //#endregion

    //#region 2.点击切换
    let change = function(event) {
      console.log(event);
      let arr = Array.from(event.target.parentNode.children);
      console.log(arr);
      arr.forEach(element => {
        element.classList.remove("active");
      });
      event.target.classList.add("active");
    };

    //#endregion

    //#region 3.筛选功能
    // 1.最新商品
    // 2.最高人气
    // 3.评论最多
    // 4.价格顺序
    //#endregion

    onMounted(() => {
      getSecondaryGoods;
    });

    return {
      getSecondaryData,
      change
    };
  },
  components: {
    SecondaryFilter
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

    &:nth-child(4),
    &:nth-child(8),
    &:nth-child(12),
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
