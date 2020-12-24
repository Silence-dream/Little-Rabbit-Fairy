<template>
  <div id="footer" style="height: 645px;">
    <!-- 白色服务栏 -->
    <el-row>
      <div class="container">
        <el-col :span="24" class="foot-service" style="height: 302px;">
          <div id="all-service">
            <!-- 客户服务 -->
            <div>
              <div class="customer-service">
                <h2>客户服务</h2>
                <p>
                  <span>
                    <i class="iconfont icon-zaixiankefu"></i>
                    <b>在线客服</b>
                  </span>
                  <router-link to="/FeedBack">
                    <span>
                      <i class="iconfont icon-wentifankui"></i>
                      <b>问题反馈</b>
                    </span>
                  </router-link>
                </p>
              </div>
            </div>
            <!-- 关注我们 -->
            <div>
              <div class="customer-service">
                <h2>关注我们</h2>
                <p>
                  <span>
                    <i class="iconfont icon-weixin1"></i>
                    <b>公众号</b>
                  </span>
                  <span>
                    <i class="iconfont icon-weibo2"></i>
                    <b>微博</b>
                  </span>
                </p>
              </div>
            </div>
            <!-- 下载APP -->
            <div>
              <div class="customer-service">
                <h2>下载App</h2>
                <p class="download-app">
                  <span class="QRcode">
                    <img src="./img/QRcode.png" />
                  </span>
                  <b class="download">
                    <p>扫描二维码</p>
                    <p>立马下载App</p>
                    <el-button plain>下载页面</el-button>
                  </b>
                </p>
              </div>
            </div>
            <!-- 服务热线 -->
            <div>
              <div class="customer-service">
                <h2>服务热线</h2>
                <b class="hot-number">400-0000-000</b>
                <b class="hot-time">周一至周日 8:00-18:00</b>
              </div>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>

    <!-- 黑色底部优点栏目 -->
    <el-row
      class="foot-merit"
      style="height: 343px;
      background-color: #333;"
    >
      <div class="container">
        <!-- 上栏目 -->
        <el-col :span="24">
          <div id="all-merit">
            <!-- 价格亲民 -->
            <div class="merit">
              <p>
                <span class="price">
                  <img src="./img/price.png" />
                </span>
                <b class="merit-b">
                  <span>
                    <i>价格亲民</i>
                  </span>
                </b>
              </p>
            </div>

            <!-- 物流快捷 -->
            <div class="merit">
              <p>
                <span class="price">
                  <img src="./img/logistics-quan.svg" />
                  <img src="./img/logistics.svg" class="logistics" />
                </span>
                <b class="merit-b">
                  <span>
                    <i>物流快捷</i>
                  </span>
                </b>
              </p>
            </div>

            <!-- 品质新鲜 -->
            <div class="merit">
              <p>
                <span class="price">
                  <img src="./img/quality.png" />
                </span>
                <b class="merit-b">
                  <span>
                    <i>品质新鲜</i>
                  </span>
                </b>
              </p>
            </div>
          </div>
        </el-col>

        <!-- 下栏目 -->
        <el-col :span="24">
          <LoginFoot backgroundColor="#333333" color="#999999" height="120px" />
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
// 底部下栏目
import LoginFoot from "@/components/LoginFooter/LoginFooter.vue";

export default {
  name: "HomeFoot",
  components: { LoginFoot }
};
</script>

<style lang="scss" scoped>
// 白色服务栏
#all-service {
  width: 100%;
  height: 100%;
  overflow: hidden;

  div {
    float: left;
    display: flex;
    width: 300px;
    height: 100%;
    align-items: center;

    .customer-service {
      width: 100%;
      height: 164px;
      color: #666666;
      border-right: 1px solid #f2f2f2;
      flex-direction: column;
    }

    &:last-child {
      .customer-service {
        border: none;
      }
    }
  }
}

.customer-service {
  // 标题
  h2 {
    color: #999999;
    font-size: 16px;
    font-weight: 400;
  }

  span {
    display: inline-block;
    width: 80px;
    height: 80px;
    border: 1px solid #ededed;
    margin: 0 5px;
    margin-top: 35px;
    cursor: pointer;

    &:hover {
      i,
      b {
        color: #1abc9c;
      }
    }

    i {
      display: block;
      color: #666666;
      font-size: 30px;
      margin: 0 auto;
      margin-top: 14px;
    }

    b {
      display: inline-block;
      color: #999999;
      font-weight: 400;
      margin-top: 8px;
    }
  }

  // 下载APP
  .download-app {
    width: 100%;
    margin-top: 26px;
    overflow: hidden;
  }

  // 服务热线电话
  .hot-number {
    font-size: 20px;
    margin-top: 46px;
  }

  // 服务热线时间
  .hot-time {
    font-weight: 400;
    font-size: 14px;
    color: #999999;
    margin-top: 12px;
  }
}

// 下载APP分化样式
.download-app {
  .QRcode {
    float: left;
    width: 100px;
    height: 100px;
    cursor: default;
    margin-top: 0;
    margin-left: 36px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .download {
    float: left;
    width: 80px;
    height: 80px;
    color: #999999;
    font-weight: 400;
    border: none;
    text-align: left;
    line-height: 1.7;
    margin: 10px 20px;
  }

  .el-button {
    font-size: 12px;
    padding: 8px 18px;
    margin-top: 10px;

    &:hover {
      border-color: #1abc9c;
      color: #1abc9c;
    }
  }
}

// 黑色底部优点栏目
#all-merit {
  display: flex;
  width: 100%;
  height: 150px;
  color: #fff;
  border-bottom: 1px solid #434343;

  .merit {
    float: left;
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
  }
}

// 黑色底部优点栏目——三大优点
.merit {
  p {
    width: 100%;
    height: 58px;

    .price {
      position: relative;
      display: inline-block;
      width: 58px;
      height: 58px;
      vertical-align: middle;
    }

    .merit-b {
      display: inline-block;
      height: 100%;
      font-size: 24px;
      font-weight: 400;
      vertical-align: middle;
      margin-left: 14px;
    }
  }
}

// 黑色底部优点栏目——价格亲民
.price {
  img {
    width: 100%;
    height: 100%;
  }

  .logistics {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 22px;
    margin-top: calc(-22px / 2);
    margin-left: calc(-30px / 2);
  }
}

// 黑色底部优点栏目——三大优点文字
.merit-b {
  span {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

    i {
      width: 100%;
    }
  }
}
</style>
