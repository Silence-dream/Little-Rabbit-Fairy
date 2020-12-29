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
            <el-badge :value="wareNum" class="item" style="cursor: pointer;">
              <i class="iconfont icon-gouwuchekong"></i>
            </el-badge>

            <!-- 购物车单 -->
            <div class="tag">
              <!-- 三角形 -->
              <div class="arrow">
                <em></em>
              </div>

              <!-- 内容 -->
              <div class="tag-content">
                <!-- 购物商品 -->
                <div class="content-wares">
                  <ul>
                    <li v-for="item in shopWares" :key="item.id">
                      <router-link to="#" style="float:left; height: 100%;">
                        <img :src="item.picture" />
                        <div>
                          <p class="wares-message">
                            小米电视4A 32英寸
                          </p>
                          <p class="wares-number">
                            {{ item.attrsText.color }}
                            {{ item.attrsText.size }}
                            &nbsp;&nbsp;&nbsp; x
                            {{ item.count }}
                          </p>
                        </div>
                        <span>¥{{ item.warePrice }}</span>
                      </router-link>
                      <i class="el-icon-close"></i>
                    </li>
                  </ul>
                </div>

                <!-- 底部价格 -->
                <div class="content-price">
                  <!-- 总共 -->
                  <div>
                    <em>共{{ wareNum }}件商品</em>
                    <span>¥{{ settlement }}</span>
                  </div>

                  <!-- 去购物车结算 -->
                  <router-link to="#">去购物车结算</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </div>

    <!-- 随滚动出现 -->
    <div :class="navBarFixed == true ? 'nav' : 'navBarFixed'">
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
import { home, shop } from "@/api";

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
    // 购物商品
    let shopWares = ref([]);
    // 商品结算金额
    let settlement = ref(0);
    // 总共商品
    let wareNum = ref(0);

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

    // 获取购物车单数据
    let getWares = httpGet(shop.wares)
      .then(res => {
        // console.log(res);
        let { result } = res;
        res.settlement = 0;

        shopWares.value = result;

        shopWares.value.forEach(ele => {
          // 商品金额
          ele.warePrice = ele.price * ele.count;
          // 结算金额
          res.settlement += ele.warePrice;

          // 商品简文本
          ele.attrsText = ele.attrsText.replace(/：/g, ":").split(" ");

          let arr = ref([]);

          ele.attrsText.forEach(key => {
            arr.value.push(key.split(":"));
          });

          ele.attrsText = {
            color: arr.value[0][1],
            size: parseInt(arr.value[1][1]),
            place: arr.value[2][1]
          };
        });

        settlement.value = res.settlement.toFixed(2);
        wareNum.value = shopWares.value.length;
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
      getWares;
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
      navBarFixed,
      shopWares,
      settlement,
      wareNum
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

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
  > ul {
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
    margin-top: 58px;
    margin-left: 24px;

    .item {
      .icon-gouwuchekong {
        font-size: 22px;
      }
    }

    &:hover {
      .tag {
        display: block;
        transition: all 1s;
      }
    }
  }

  // 购物车单
  .tag {
    display: none;
    position: absolute;
    top: 98px;
    right: 0;
    width: 409px;
    border: 1px solid#27b99b;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgba(221, 216, 216, 0.5),
      0px 2px 4px 0px rgba(221, 216, 216, 0.5);
    z-index: 100;

    .arrow {
      position: absolute;
      top: -19px;
      right: 78px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 18px solid#27b99b;

      em {
        position: absolute;
        top: 2px;
        left: -9px;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 17px solid #fff;
      }
    }

    .tag-content {
      height: 100%;
    }
  }
}

// 购物车单之购物商品
.content-wares {
  width: 100%;

  ul {
    margin-left: 18px;
  }

  li {
    height: 86px;
    text-align: left;
    margin-top: 25px;
    @include clearfix();

    > a {
      img {
        float: left;
        width: 86px;
        height: 86px;
      }

      > div {
        float: left;
        width: 165px;
        height: 100%;
        margin-left: 10px;
      }

      .wares-message {
        font-size: 16px;
        color: #575757;
        margin-bottom: 6px;
        @include text();
      }

      .wares-number {
        font-size: 14px;
        color: #9b9b9b;
        @include text();
      }

      > span {
        float: left;
        width: 58px;
        font-size: 16px;
        color: #cf4444;
        line-height: 30px;
        margin-right: 14px;
        @include text();
      }
    }

    i {
      float: right;
      color: #e4e4e4;
      font-size: 22px;
      cursor: pointer;
      margin-top: 5px;
      margin-right: 34px;
    }
  }
}

// 购物车单之底部价格
.content-price {
  width: 100%;
  height: 67px;
  border-radius: 0px 0px 4px 4px;
  background-color: #e3f9f4;
  margin-top: 37px;

  > div {
    display: flex;
    float: left;
    height: 100%;
    font-size: 16px;
    flex-direction: column;
    line-height: 23px;

    em {
      font-weight: 400;
      color: #333333;
      margin-top: 11px;
      margin-left: 24px;
    }

    span {
      color: #cf4444;
      margin-left: 20px;
    }
  }

  a {
    float: right;
    width: 150px;
    height: 46px;
    color: #ffffff;
    font-size: 16px;
    line-height: 46px;
    background-color: #27ba9b;
    border-radius: 4px;
    margin-top: 11px;
    margin-right: 14px;
  }
}

// 随滚动出现
.navBarFixed {
  opacity: 0;
}

.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;
  z-index: 999;
  border-bottom: 1px solid #e4e4e4;
  opacity: 1;
  transition: all 0.5s;
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
