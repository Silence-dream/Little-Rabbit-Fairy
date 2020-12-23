<template>
  <el-row style="height: 130px;">
    <div class="container">
      <el-col :span="24" style="height: 100%;">
        <!-- 顶部logo行 -->
        <div class="logo-nav">
          <!-- logo -->
          <div class="logo">
            <img src="./img/rabbitLogo.png" class="rabbit_logo" />
          </div>

          <!-- 头部导航栏 -->
          <ul>
            <li>
              <router-link to="/" class="active">首页</router-link>
            </li>
            <li v-for="item in oulData" :key="item.id">
              <router-link to="#">{{ item.name }}</router-link>
            </li>
          </ul>

          <!-- 搜索框 -->
          <div class="search">
            <div class="search-in" :class="{ active: active }">
              <i class="iconfont icon-sousuo1 searchIcon"></i>
              <el-input
                v-model="searchInput"
                placeholder="搜一搜"
                clearable
                style="display: inline-block; border:none;"
                @focus="focusSearchBorder()"
                @blur="focusSearchBorder()"
              />
            </div>
          </div>

          <!-- 购物车 -->
          <div class="shopping-cart">
            <el-badge :value="12" class="item">
              <i class="iconfont icon-gouwuchekong"></i>
            </el-badge>
          </div>
        </div>
      </el-col>
    </div>
  </el-row>
</template>

<script>
import { httpGet } from "@/utils/http";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { homeheader } from "@/api";

export default {
  setup() {
    const Store = useStore();
    // 搜索框文本
    const searchInput = ref("");
    // 搜索框样式
    let active = ref(false);
    // 头部导航栏数据
    let oulData = ref([]);

    let getoLiData = httpGet(homeheader.LogoNav + "/head")
      .then(res => {
        // console.log(res);
        const oLiData = res.result;
        // 存入vuex中
        Store.commit("liveCategory", oLiData);
        oulData.value = oLiData;
      })
      .catch(err => {
        console.log(err);
      });

    onMounted(() => {
      getoLiData;
    });

    // 点击搜索框边框效果
    const focusSearchBorder = function() {
      active.value = !active.value;
    };

    return {
      active,
      searchInput,
      focusSearchBorder,
      oulData
    };
  }
};
</script>

<style lang="scss" scoped>
// 顶部logo行
.logo-nav {
  height: 100%;
  overflow: hidden;

  // logo
  .logo {
    display: flex;
    float: left;
    width: 205px;
    height: 100%;
    align-items: center;

    .rabbit_logo {
      width: 100%;
      height: 70px;
    }
  }

  // 头部导航栏
  ul {
    display: flex;
    float: left;
    height: 100%;
    align-items: center;
    margin-left: 12px;
    margin-right: 34px;

    .active {
      color: #27ba9b;
    }

    li {
      font-size: 16px;
      font-weight: 700;
      color: #333;
      margin: 0 2px;

      a {
        display: inline-block;
        padding: 20px 14px;
      }

      &:hover {
        a {
          color: #27ba9b;
          border-bottom: 2px solid #27ba9b;
        }
      }
    }
  }

  // 搜索框
  .search {
    float: left;
    display: flex;
    height: 100%;
    align-items: center;

    .search-in {
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      padding-left: 10px;

      .searchIcon {
        position: absolute;
        top: 9px;
        left: -2px;
        font-size: 18px;
        // font-weight: 700;
        z-index: 1;
      }
    }

    .active {
      border-bottom: 1px solid #1abc9c;
    }
  }

  // 购物车
  .shopping-cart {
    float: left;
    display: flex;
    height: 100%;
    align-items: center;

    .item {
      margin-left: 24px;

      .icon-gouwuchekong {
        font-size: 22px;
      }
    }
  }
}
</style>
