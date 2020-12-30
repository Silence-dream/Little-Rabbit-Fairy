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
          <!-- 表单 start -->
          <el-form
            class="reset-form"
            ref="resetRef"
            label-position="left"
            :model="ResetForm"
            :rules="rules"
            :hide-required-asterisk="true"
          >
            <div class="step-item" v-if="active === 0">
              <el-form-item label="用户名：" prop="account">
                <el-input
                  autocomplete="off"
                  placeholder="输入用户名称"
                  v-model="account"
                ></el-input>
              </el-form-item>
              <el-form-item label="验证码：" prop="code">
                <el-input
                  autocomplete="off"
                  placeholder="输入图形验证码"
                  v-model="code"
                ></el-input>
              </el-form-item>
              <!-- 验证码 -->
              <div class="security-code">
                <div class="code">
                  <img src="" alt="验证码没有出现呢" />
                </div>
                <div class="security-text">
                  <i>看不清?</i>
                  <span class="change-code">换一张</span>
                </div>
              </div>
              <el-button class="next" @click="next">下一步</el-button>
            </div>
            <div class="step-item" v-else-if="active === 1">
              <el-form-item label="用户名：" prop="mobile">
                <el-input
                  autocomplete="off"
                  placeholder="输入用户名称(手机号)"
                  v-model="mobile"
                ></el-input>
              </el-form-item>
              <el-form-item label="验证码：" prop="mobileCode">
                <el-input
                  autocomplete="off"
                  placeholder="短信验证码"
                  v-model="mobileCode"
                ></el-input>
              </el-form-item>
              <el-button class="next" @click="next">下一步</el-button>
            </div>
            <div class="step-item" v-else-if="active === 2">
              <el-form-item label="新的密码：" prop="password">
                <el-input
                  autocomplete="off"
                  placeholder="设置6至20位字母、数字和符号组合"
                  v-model="password"
                ></el-input>
              </el-form-item>
              <el-form-item label="重复密码：" prop="checkPassword">
                <el-input
                  autocomplete="off"
                  placeholder="请再次输入上面密码"
                  v-model="checkPassword"
                ></el-input>
              </el-form-item>
              <el-button class="next" @click="next">下一步</el-button>
            </div>
            <div class="step-item" v-else-if="active === 3">
              <el-button class="next" @click="next">下一步</el-button>
            </div>
          </el-form>
          <!-- 表单 end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, reactive, ref, toRefs } from "vue";
import { validateMobile } from "@/views/Login/Login.vue";

export default {
  name: "ResetPassword",
  setup() {
    let self = getCurrentInstance().ctx;
    //#region 选中控制
    // 步骤条
    let active = ref(0);
    /* 点击前往下一个选项 */
    function next() {
      self.$refs["resetRef"].validate(valid => {
        console.log(valid);
        // 表单填写完整就下一步
        if (valid) {
          active.value++;
        }
      });
      if (active.value > 3) {
        active.value = 0;
      }
    }
    //#endregion

    //#region 表单校验

    // 用户输入数据
    const ResetForm = reactive({
      account: "",
      code: "",
      mobile: "",
      mobileCode: "",
      password: "",
      checkPassword: ""
    });
    /**
     * 自定义用户名校验
     * @param {Object} rule
     * @param {string} value
     * @param {function} callback
     */
    let validateAccount = (rule, value, callback) => {
      // 用户名正则
      let accountReg = /^[a-zA-Z][a-zA-Z\d]/;
      // console.log(accountReg.test(value));
      if (!accountReg.test(value)) {
        callback(new Error("用户名首位必须为字母"));
      }
      callback();
    };
    /**
     * 自定义二次密码校验
     * @param {Object} rule
     * @param {string} value
     * @param {function} callback
     */
    let validateCheckPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== self.ResetForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
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
      ],
      code: [
        { required: true, message: "请输入验证码", trigger: "blur" },
        { max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ],
      mobile: [
        { required: true, validator: validateMobile, trigger: "blur" },
        { min: 11, max: 11, message: "请输入11位手机号", trigger: "blur" }
      ],
      mobileCode: [
        { required: true, message: "请输入验证码", trigger: "blur" },
        { max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 20, message: "长度在 6 到 16 个字符", trigger: "blur" }
      ],
      checkPassword: [
        {
          required: true,
          validator: validateCheckPassword,
          trigger: "blur"
        },
        { min: 6, max: 20, message: "长度在 6 到 16 个字符", trigger: "blur" }
      ]
    });
    //#endregion

    return {
      active,
      next,
      rules,
      ResetForm,
      ...toRefs(ResetForm)
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
  // 表单
  .reset-form {
    margin-top: 100px;
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
    .change-code {
      margin-left: 10px;
      color: #27ba9b;
      cursor: pointer;
    }
  }
}
/* 覆盖 element ui 样式 */
:deep(.reset-context) {
  $inputWidth: 300px;
  $inputHeight: 50px;
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
    width: $inputWidth;
    height: $inputHeight;
    .el-input__inner {
      width: 100%;
      height: 100%;
    }
  }
  .el-form-item__error {
    margin-left: 68px;
  }
  .el-form-item__label {
    line-height: $inputHeight;
  }
  .el-input.is-active .el-input__inner,
  .el-input__inner:focus {
    border-color: #1abc9c;
  }
  /* 下一步按钮 */
  .next {
    display: block;
    width: $inputWidth;
    height: $inputHeight;
    color: #ffffff;
    background: #27ba9b;
    margin: {
      top: 0;
      left: 134px;
      right: auto;
      bottom: 0;
    }
  }
}
</style>
