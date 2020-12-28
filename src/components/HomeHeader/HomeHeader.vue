<template>
  <div style="background-color: #333">
    <el-row>
      <div class="container">
        <el-col :span="24">
          <!-- 首页头部 -->
          <div id="Top">
            <!-- 顶部之小链接 -->
            <div class="top-link">
              <div class="link">
                <div>
                  <p>
                    <router-link to="/login" class="sign" v-if="!GetToken">
                      请先登录
                    </router-link>
                    <router-link
                      to="#"
                      class="sign"
                      v-if="GetToken"
                      style="cursor: default;"
                    >
                      <span class="username">{{ GetToken.nickname }}</span>
                      <el-avatar :src="GetToken.avatar">
                        <img
                          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                        />
                      </el-avatar>
                    </router-link>
                    <span>|</span>
                    <router-link to="/register" title="免费注册"
                      >免费注册</router-link
                    >
                    <span>|</span>
                    <router-link to="#" title="我的订单">我的订单</router-link>
                    <span>|</span>
                    <router-link to="#" title="会员中心">会员中心</router-link>
                    <span>|</span>
                    <router-link to="#" title="帮助中心">帮助中心</router-link>
                    <span>|</span>
                    <router-link to="#" title="在线客服">在线客服</router-link>
                    <span>|</span>
                    <el-dropdown>
                      <a href="javascript:;" title="手机版">
                        <i class="iconfont icon-shouji"></i>
                        手机版
                      </a>
                      <el-dropdown-menu>
                        <div style="text-align:center">
                          <img
                            src="./img/downloadApp.png"
                            style="width:180px; height:180px; margin-bottom:6px"
                          />
                          <p
                            style="font-size:12px; margin-top: -12px; margin-bottom: 24px;"
                          >
                            扫描二维码 立马下载App
                          </p>
                        </div>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import { ref } from "vue";
// import { useStore } from "vuex";

export default {
  name: "HomeHeader",
  setup() {
    // const Store = useStore();
    // 判断是否存储着token
    const GetToken = ref(JSON.parse(window.localStorage.getItem("userData")));
    // console.log(GetToken.value);

    return {
      GetToken
    };
  }
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

          > span {
            color: #7b7b7b;
            margin: 0 8px;
          }
        }
      }
    }
  }

  .sign {
    position: relative;

    .el-avatar {
      position: absolute;
      top: -9px;
      left: 52px;
      width: 30px;
      height: 30px;
    }
  }

  .username {
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 59px;
    color: #e7e7e7 !important;
    margin-right: 22px;
    vertical-align: bottom;
  }
}
</style>
