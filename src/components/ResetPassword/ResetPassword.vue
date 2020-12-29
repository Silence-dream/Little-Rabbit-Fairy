<template>
  <div class="reset-password">
    <div class="container">
      <div class="reset-box">
        <h1 class="reset-title">重置密码</h1>
        <!-- 步骤条 -->
        <div class="reset-context">
          <el-steps :active="active" finish-status="success" align-center>
            <el-step title="填写账户名"></el-step>
            <el-step title="验证身份"></el-step>
            <el-step title="设置新密码"></el-step>
            <el-step title="完成"></el-step>
          </el-steps>
          <!-- 表单 -->
          <el-form label-position="left" :rules="rules">
            <div class="step-item" v-if="active === 0">
              <el-form-item label="用户名：" prop="">
                <el-input
                  autocomplete="off"
                  placeholder="输入用户名称"
                ></el-input>
              </el-form-item>
              <el-form-item label="验证码：" prop="">
                <el-input
                  autocomplete="off"
                  placeholder="输入图形验证码"
                ></el-input>
              </el-form-item>
              <!-- 验证码 -->
              <div class="security-code">
                <div class="code">
                  <img src="" alt="验证码没有出现呢" />
                </div>
                <div class="security-text">
                  <i>看不清?</i>
                  <span>换一张</span>
                </div>
              </div>
              <el-button class="next" @click="next">下一步</el-button>
            </div>
            <div class="step-item" v-else-if="active === 1">
              <el-form-item label="用户名：" prop="">
                <el-input
                  autocomplete="off"
                  placeholder="输入用户名称"
                ></el-input>
              </el-form-item>
              <el-form-item label="验证码：" prop="">
                <el-input
                  autocomplete="off"
                  placeholder="短信验证码"
                ></el-input>
              </el-form-item>
              <el-button class="next" @click="next">下一步</el-button>
            </div>
            <div class="step-item" v-else-if="active === 2">
              <el-form-item label="新的密码：" prop="">
                <el-input
                  autocomplete="off"
                  placeholder="设置6至20位字母、数字和符号组合"
                ></el-input>
              </el-form-item>
              <el-form-item label="重复密码：" prop="">
                <el-input
                  autocomplete="off"
                  placeholder="请再次输入上面密码"
                ></el-input>
              </el-form-item>
              <el-button class="next" @click="next">下一步</el-button>
            </div>
            <div class="step-item" v-else-if="active === 3">
              <el-button class="next" @click="next">下一步</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  name: "ResetPassword",
  setup() {
    //#region 选中控制
    // 步骤条
    let active = ref(0);
    /* 点击前往下一个选项 */
    function next() {
      active.value++;

      if (active.value > 3) {
        active.value = 0;
      }
    }
    //#endregion

    //#region 表单校验
    /**
     * 自定义用户名校验
     * @param {Object} rule
     * @param {string} value
     * @param {function} callback
     */
    let validateAccount = (rule, value, callback) => {
      // 用户名正则
      let accountReg = /^[a-zA-Z][a-zA-Z\d]/;
      console.log(accountReg.test(value));
      if (!accountReg.test(value)) {
        callback(new Error("用户名首位必须为字母"));
      }
      callback();
    };
    let rules = reactive({
      account: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur"
        },
        {
          min: 6,
          max: 20,
          message: "用户名必须为6至20位字母或字母和数字组合",
          trigger: "blur"
        },
        { validator: validateAccount }
      ]
    });
    //#endregion

    return {
      active,
      next,
      rules
    };
  }
};
</script>

<style lang="scss" scoped>
.reset-password {
  background-color: #f5f5f5;
}
.reset-box {
  height: 803px;
  margin: {
    top: 70px;
    bottom: 125px;
  }
  padding: {
    top: 70px;
    left: 51px;
  }
  font-size: 26px;
  color: #999999;
  background-color: #fff;

  .reset-context {
    margin: {
      top: 120px;
      left: 292px;
      right: 261px;
    }
  }
  // 步骤样式
  .step-item {
    & > div {
      width: 500px;
      margin: {
        top: 0;
        bottom: 24px;
        left: auto;
        right: auto;
      }
    }
  }
  // 验证码
  .security-code {
    display: flex;
    font-size: 16px;
    padding-left: 68px;
    padding-top: 20px;
    .code {
      width: 134px;
      height: 50px;
      background-color: skyblue;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .security-text {
      display: flex;
      align-items: center;
      margin-left: 20px;
    }
  }
}
/* 覆盖 element ui 样式 */
:deep(.reset-context) {
  .is-text {
    width: 48px;
    height: 48px;
  }
  .el-step__line {
    top: 24px;
  }
  .el-step__icon-inner {
    font-size: 28px;
  }
  .el-input {
    width: 300px;
    height: 50px;
  }
  .el-input.is-active .el-input__inner,
  .el-input__inner:focus {
    border-color: #1abc9c;
  }
  /* 下一步按钮 */
  .next {
    display: block;
    width: 300px;
    height: 50px;
    color: #ffffff;
    background: #27ba9b;
    margin: {
      top: 0;
      left: 134px;
      right: auto;
      bottom: 0px;
    }
  }
}
</style>
