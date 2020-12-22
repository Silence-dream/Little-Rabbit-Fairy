<template>
  <div class="register">
    <div class="container">
      <!-- 标题 -->
      <div class="new-title">
        <h1>新用户注册</h1>
      </div>
      <!-- 注册表单 -->
      <el-form class="registerForm">
        <el-form-item prop="">
          <el-input
            type=""
            placeholder="设置用户名称"
            autocomplete="off"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="">
          <el-input
            type=""
            placeholder="输入手机号"
            autocomplete="off"
            prefix-icon="iconfont icon-shouji"
          ></el-input>
        </el-form-item>
        <el-form-item prop="">
          <el-input
            type=""
            placeholder="短信验证码"
            autocomplete="off"
            prefix-icon="iconfont icon-xinxi"
          ></el-input>
        </el-form-item>
        <el-form-item prop="">
          <el-input
            type=""
            placeholder="设置6至20位字母,数字和符号组合"
            autocomplete="off"
            prefix-icon="iconfont icon-suo"
          ></el-input>
        </el-form-item>
        <el-form-item prop="">
          <el-input
            type=""
            placeholder="请再次输入上面密码"
            autocomplete="off"
            prefix-icon="iconfont icon-suo"
          ></el-input>
        </el-form-item>
        <el-form-item class="choose-protocol">
          <el-checkbox-group>
            <el-checkbox name="type">
              已阅读并同意
              <a href="javascript:;">《用户服务协议》</a>
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register"
};
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  padding: {
    top: 72px;
    bottom: 126px;
  }
  background-color: #f5f5f5;
  .container {
    background-color: #fff;
    padding: {
      top: 76px;
      bottom: 76px;
      left: 50px;
      right: 50px;
    }
  }
  .new-title {
    text-align: left;
    font-size: 26px;
    color: #999999;
  }
  .choose-protocol {
    a {
      color: #5eb69c;
    }
  }
}
/* 覆盖element默认样式 */

::v-deep .registerForm {
  .el-input__inner {
    &:focus {
      border-color: #17bb9b;
    }
  }
  .el-form-item {
    width: 300px;
    height: 50px;
  }
  .el-checkbox__inner {
    border-radius: 50%;
    background-color: #5eb69c;
  }
  .el-checkbox__label {
    color: #999999;
  }
}
</style>
