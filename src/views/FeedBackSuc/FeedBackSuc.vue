<template>
  <div class="pageare">
    <!-- 头部组件 starte -->
    <LoginHeader />
    <!-- 头部组件 end -->

    <!-- 中间文字 starte -->
    <div class="container main">
      <div class="center">
        <p>
          <span class="frame"></span>
        </p>
        <p class="yes">反馈提交成功</p>
        <p class="thank">感谢您对小兔鲜儿的支持</p>
        <p>
          <el-button>
            <router-link to="/">
              <span>进入首页</span>
            </router-link>
          </el-button>
        </p>
      </div>
    </div>
    <!-- 中间文字 end -->

    <!-- 底部 starte -->
    <LoginFooter class="footer" />
    <!-- 底部 end -->
  </div>
</template>

<script>
// 头部 logo和跳转
import LoginHeader from "../../components/LoginHeader/LoginHeader.vue";

// 底部
import LoginFooter from "../../components/LoginFooter/LoginFooter.vue";

export default {
  name: "FeedBackSuc",
  // 引用组件
  components: {
    LoginHeader,
    LoginFooter
  }
};
</script>

<style lang="scss" scoped>
.pageare {
  width: 100%;
  background-color: #f0f0f0;
  @include clearfix();
}

// 头部logo starte

// 中间表单 starte
.main {
  margin-top: 30px !important; // 用来覆盖(添加)contain的margin（即相当于：margin:30px auto;）
  background-color: #ffffff;
  text-align: center;
  height: 650px;

  .center {
    padding-top: 190px;

    // 绿框
    .frame {
      font-size: 100px;
      font-family: auto;
      color: #0fce96;
    }

    // 反馈提交成功
    .yes {
      font-size: 24px;
      color: #666666;
      margin-top: 20px;
    }

    // 感谢您对小兔鲜儿的支持
    .thank {
      font-size: 16px;
      color: #999999;
      margin-top: 20px;
    }

    // 进入首页按钮
    .el-button {
      background-color: #1abc9c;
      width: 200px;
      height: 45px;
      margin-top: 30px;

      span {
        font-size: 14px;
        color: #ffffff;
      }
    }
  }
}
// 中间表单 end

// 底部
.footer {
  background-color: #f0f0f0 !important; // 用于覆盖LoginFooter组件中的background-color
}
</style>
