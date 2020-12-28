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
              <router-link to="/" class="active">
                首页
              </router-link>
            </li>
            <li v-for="item in oulData" :key="item.id">
              <router-link to="/Primary">
                {{ item.name }}
              </router-link>
            </li>
          </ul>

          <!-- 搜索框 -->
          <div class="search">
            <div class="search-in" :class="{ active: searchActive }">
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

    <!-- 随滚动出现 -->
    <div class="navBarFixed" :class="navBarFixed == true ? 'nav' : ''">
      <div class="container">
        <ul>
          <li>
            <router-link to="/">
              首页
            </router-link>
          </li>
          <li v-for="item in oulData" :key="item.id">
            <router-link to="/Primary">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
        <i class="iconfont icon-double-arro-right arrow"></i>
        <div class="nav-search">
          <div style="border-bottom:1px solid #27bb9a">
            <el-input
              placeholder="搜一搜"
              v-model="searchInput"
              style="display: inline-block;border:none;height:100%"
            >
            </el-input>
          </div>
        </div>
        <i class="iconfont icon-sousuo1 sousuo"></i>
        <i class="iconfont icon-gouwuche gouwuche"></i>
      </div>
    </div>
  </el-row>
</template>

<script>
import { httpGet } from "@/utils/http.js";
import { useStore } from "vuex";
import { ref, onMounted, onUnmounted } from "vue";
import { home } from "@/api";

export default {
  name: "HomeLogo",
  setup() {
    const Store = useStore();
    // 搜索框文本
    const searchInput = ref("");
    // 搜索框样式
    let searchActive = ref(false);
    // 导航栏吸顶
    let navBarFixed = ref(false);

    // 头部导航栏数据
    let oulData = ref([]);

    // 获取logo导航栏数据
    let getoLiData = httpGet(home.GetLogoNav + "/head")
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

    // 随着鼠标滚动显示顶部第二种导航栏
    let handleScroll = () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 182) {
        navBarFixed.value = true;
      } else {
        navBarFixed.value = false;
      }
    };

    onMounted(() => {
      getoLiData;
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    // 点击搜索框边框效果
    const focusSearchBorder = function() {
      searchActive.value = !searchActive.value;
    };

    return {
      searchActive,
      searchInput,
      focusSearchBorder,
      oulData,
      navBarFixed
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
        border-bottom: 2px solid transparent;
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

// 随滚动出现
.navBarFixed {
  display: none;
}

.nav {
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;
  z-index: 999;
  border-bottom: 1px solid #e4e4e4;
  @include clearfix();

  ul {
    float: left;
    line-height: 70px;
    @include clearfix();

    li {
      float: left;
      color: #333333;
      font-size: 16px;
      margin-right: 66px;

      a {
        &:hover {
          color: #27ba9b;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  i {
    float: left;
    line-height: 70px;
  }

  .arrow {
    margin-left: 6px;
  }

  .sousuo {
    color: #2dbd9d;
    margin-left: -26px;
  }

  .gouwuche {
    color: #2dbd9d;
  }

  .nav-search {
    float: left;
    width: 209px;
    height: 100%;

    > div {
      height: 24px;
    }
  }

  .nav-search {
    float: left;
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: 4px;

    > div {
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      padding-left: 10px;

      .el-input {
        :deep(.el-input__inner) {
          padding: 0;
        }
      }
    }
  }
}
</style>
