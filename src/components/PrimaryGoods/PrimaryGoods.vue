<template>
  <LoginHeader></LoginHeader>
  <el-main style="background-color: #f5f5f5">
    <!-- 面包屑导航 start -->
    <el-breadcrumb separator=">">
      <div class="container" style="@include clearfix();">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>服装</el-breadcrumb-item>
      </div>
    </el-breadcrumb>
    <!-- 面包屑导航 end -->

    <!-- 轮播图 start -->

    <!-- 轮播图 end -->
  </el-main>
</template>

<script>
import LoginHeader from "@/components/LoginHeader/LoginHeader";
import { httpGet } from "@/utils/http";
import { onMounted } from "vue";
export default {
  setup() {
    let getPrimaryGoods = httpGet("/category")
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    onMounted(() => {
      getPrimaryGoods;
    });
  },
  components: {
    LoginHeader
  }
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
