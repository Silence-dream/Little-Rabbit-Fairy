<template>
  <div style="background-color: #333">
    <div class="container">
      <el-row>
        <el-col :span="24">
          <!-- 首页头部 -->
          <div id="Top">
            <!-- 顶部之小链接 -->
            <div class="top-link">
              <div class="link">
                <div>
                  <p>
                    <a href="javascript:;" title="请先登录" class="sign">
                      请先登录
                    </a>
                    <!-- <router-link to="/login">请先登录</router-link> -->
                    <span>|</span>
                    <a href="javascript:;" title="免费注册">免费注册</a>
                    <span>|</span>
                    <a href="javascript:;" title="我的订单">我的订单</a>
                    <span>|</span>
                    <a href="javascript:;" title="会员中心">会员中心</a>
                    <span>|</span>
                    <a href="javascript:;" title="帮助中心">帮助中心</a>
                    <span>|</span>
                    <a href="javascript:;" title="在线客服">在线客服</a>
                    <span>|</span>
                    <el-popover
                      placement="top-start"
                      trigger="hover"
                      style="padding: 0"
                    >
                      <div class="popover-content" style="text-align:center">
                        <img
                          src="./img/downloadApp.png"
                          style="width:180px;height:180px"
                        />
                        <p
                          style="font-size:12px; margin-top: -12px; margin-bottom: 24px;"
                        >
                          扫描二维码 立马下载App
                        </p>
                      </div>
                      <template #reference>
                        <a href="javascript:;" title="手机版">
                          <i class="iconfont icon-shouji"></i>
                          手机版
                        </a>
                      </template>
                    </el-popover>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import { httpGet } from "@/utils/http";
// import { useStore } from "vuex";
// import { ref } from "vue";

export default {
  setup() {}
};
</script>

<style lang="scss" scoped>
#Top {
  height: 52px !important;

  // 顶部之小链接
  .top-link {
    position: relative;
    height: 100%;

    .link {
      position: absolute;
      right: 0px;
      top: 0px;
      display: flex;
      height: 100%;

      div {
        // position: absolute;
        // left: 650px;
        // top: 0px;
        align-self: center;

        p {
          .sign {
            color: #5db39a;
          }

          a {
            color: #e7e7e7;

            &:hover {
              color: #fff;
            }

            i {
              color: #fff;
            }
          }

          span {
            color: #7b7b7b;
            margin: 0 8px;
          }
        }
      }
    }
  }
}
</style>
