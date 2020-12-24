<template>
  <div class="filter">
    <div class="container filter-bgc">
      <div class="filter-cover">
        <!-- 分类 -->
        <ul>
          <li>分类:</li>
          <li class="active" @click="bindColor($event)">全部</li>
          <li
            v-for="item in getBrandsData"
            :key="item.id"
            @click="bindColor($event)"
          >
            {{ item.name }}
          </li>
          <!-- <li>二手手机</li> -->
        </ul>
        <!-- 品牌 -->
        <ul>
          <li>品牌:</li>
          <li class="active" @click="bindColor($event)">全部</li>
          <li
            v-for="item in getCategories"
            :key="item.id"
            @click="bindColor($event)"
          >
            {{ item.name }}
          </li>
          <!-- <li>二手手机</li> -->
        </ul>
        <!-- 销售属性 -->
        <ul v-for="item1 in getSalePropertiesData" :key="item1.id">
          <li>{{ item1.name }}:</li>
          <li class="active" @click="bindColor($event)">全部</li>
          <li
            v-for="item2 in item1.properties"
            :key="item2.id"
            @click="bindColor($event)"
          >
            {{ item2.name }}
          </li>
          <!-- <li>二手手机</li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { httpGet } from "@/utils/http.js";
import { ref, onMounted } from "vue";
export default {
  name: "SecondaryFilter",
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
    let bindColor = function(event) {
      // console.log(event, id);
      // console.log(event.target.parentNode.children);
      let arr = Array.from(event.target.parentNode.children);
      // console.log(arr);
      arr.forEach(element => {
        element.classList.remove("active");
      });
      event.target.classList.add("active");
    };
    //#endregion

    onMounted(() => {
      getTotalData;
    });

    return {
      getBrandsData,
      getCategories,
      getSalePropertiesData,
      bindColor
    };
  }
};
</script>

<style lang="scss" scoped>
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
</style>
