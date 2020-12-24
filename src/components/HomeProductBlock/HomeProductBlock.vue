<template>
  <div class="container">
    <!-- 产品区块标题 -->
    <div class="HomeProductBlock-title">
      <b>生鲜</b>
      <router-link to="#" class="look-all">
        查看全部
        <i class="iconfont icon-icon-xiangyou"></i>
      </router-link>
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

  .look-all {
    float: right;
    color: #999999;
    line-height: 32px;
  }
}
</style>
