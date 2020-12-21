<template>
  <div class="banner">
    <div class="container">
      <!-- 登录框 -->
      <div class="user-login">
        <!-- 选择登录方式 -->
        <div class="login-choose">
          <div
            :class="{ current: !isLoginChooseFlag }"
            @click="selectLogin(false)"
          >
            账号登录
          </div>
          <span>|</span>
          <div
            :class="{ current: isLoginChooseFlag }"
            @click="selectLogin(true)"
          >
            二维码登录
          </div>
        </div>

        <!-- 账号登录 -->
        <div class="choose-account" v-if="!isLoginChooseFlag">
          <!-- 账号登录表单 -->
          <el-form
            status-icon
            id="login-form"
            ref="accountLogin"
            :rules="rules"
            :model="accountForm"
            v-if="!isAccountChooseFlag"
          >
            <!-- 手机验证码登录 -->
            <div class="mobile-login" @click="selectMobile(true)">
              手机验证码登录
            </div>
            <!-- 用户名称/手机号码 -->
            <el-form-item label="" prop="account">
              <el-input
                type="text"
                placeholder="请输入用户名称/手机号码"
                autocomplete="off"
                prefix-icon="iconfont icon-user"
                v-model="accountForm.account"
              ></el-input>
            </el-form-item>
            <!-- 请输入密码 -->
            <el-form-item label="" prop="password">
              <el-input
                type="password"
                placeholder="请输入密码"
                autocomplete="off"
                prefix-icon="iconfont icon-lock"
                v-model="accountForm.password"
              ></el-input>
            </el-form-item>
            <!-- 同意款项 -->
            <el-form-item class="terms" prop="isTerms">
              <el-checkbox-group v-model="accountForm.isTerms">
                <el-checkbox name="type" label="true"
                  >我已同意 <a href="javascript:;">《隐私条款》</a>和
                  <a href="javascript:;">《服务条款》</a>
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-form-item class="user-login-btn">
              <el-button @click="accountSubmitForm('accountLogin')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
          <!-- 验证码登录表单 -->
          <el-form
            status-icon
            id="mobile-form"
            ref="mobileLogin"
            :rules="rules"
            :model="mobileForm"
            v-if="isAccountChooseFlag"
          >
            <!-- 密码登录 -->
            <div class="mobile-login" @click="selectMobile(false)">
              密码登录
            </div>
            <!-- 手机号码 -->
            <el-form-item label="" prop="mobile">
              <el-input
                type="text"
                placeholder="请输入手机号"
                autocomplete="off"
                prefix-icon="iconfont icon-user"
                v-model="mobileForm.mobile"
              ></el-input>
            </el-form-item>
            <!-- 请输入验证码 -->
            <el-form-item label="" prop="code">
              <el-input
                type="text"
                placeholder="请输入验证码"
                autocomplete="off"
                prefix-icon="iconfont icon-lock"
                v-model="mobileForm.code"
                class="input-code"
              >
                <template v-slot:append>
                  <el-button
                    class="getQRcode"
                    :disabled="isQRcodeDisable"
                    @click="getQRcode"
                    >{{ QRcodeText }}</el-button
                  >
                </template>
              </el-input>
            </el-form-item>
            <!-- 同意款项 -->
            <el-form-item class="terms" prop="isTerms">
              <el-checkbox-group v-model="mobileForm.isTerms">
                <el-checkbox name="type" label="true"
                  >我已同意 <a href="javascript:;">《隐私条款》</a>和
                  <a href="javascript:;">《服务条款》</a>
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-form-item class="user-login-btn">
              <el-button @click="mobileSubmitForm('mobileLogin')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
          <!-- 忘记密码 免费注册 -->
          <div class="user-other">
            <a href="javascript:;">忘记密码?</a>
            <a href="javascript:;">免费注册</a>
          </div>
        </div>

        <!-- 二维码登录 -->
        <div class="choose-QRcode" v-if="isLoginChooseFlag">二维码登陆123</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance } from "vue";
export default {
  name: "LoginBanner",
  setup() {
    const self = getCurrentInstance().ctx;
    /* 账号登录和二维码登录切换  */
    let isLoginChooseFlag = ref(false);
    /* 账号登录和验证码登录切换 */
    let isAccountChooseFlag = ref(false);
    /* 切换账号登录和二维码登录 */
    /**
     *
     * @param {boolean} flag 为 false 显示账号登陆
     */
    function selectLogin(flag) {
      if (flag) {
        isLoginChooseFlag.value = flag;
      } else {
        isLoginChooseFlag.value = flag;
      }
    }
    /* 切换账号登录和验证码登录 */
    /**
     *
     * @param {boolean} flag 为 false 显示账号登陆
     */
    function selectMobile(flag) {
      if (flag) {
        isAccountChooseFlag.value = flag;
      } else {
        isAccountChooseFlag.value = flag;
      }
    }

    //#region 账号登录功能
    // 表单 用户名称/手机号码 和 密码
    let accountForm = reactive({
      account: "",
      password: "",
      isTerms: []
    });
    /* 自定义校验规则 */
    // 校验手机号
    let pattern = /0?(13|14|15|17|18|19)[0-9]{9}/;
    let validateMobile = (rule, value, callback) => {
      if (value.trim() === "") {
        callback(new Error("请输入手机号"));
      } else if (!pattern.test(value)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    /* 校验规则 */
    let rules = reactive({
      account: [
        { required: true, message: "请输入用户名称/手机号码", trigger: "blur" },
        { min: 3, max: 16, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 3, max: 16, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ],
      isTerms: [
        {
          required: true,
          type: "array",
          message: "请选择条款",
          trigger: "change"
        }
      ],
      mobile: [
        {
          required: true,
          trigger: "blur",
          validator: validateMobile
        },
        { min: 3, max: 16, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ],
      code: [
        { required: true, message: "请输入验证码", trigger: "blur" },
        { min: 3, max: 16, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ]
    });

    /**
     * 校验 账号登录
     * @param {string} formName
     */
    function accountSubmitForm(formName) {
      console.log(accountForm);
      self.$refs[formName].validate(valid => {
        if (valid) {
          alert("账号登录验证通过!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
    //#endregion

    //#region 验证码登录
    let mobileForm = reactive({
      mobile: "",
      code: "",
      isTerms: []
    });

    /**
     * 校验 验证码登录
     * @param {string} formName
     */
    function mobileSubmitForm(formName) {
      self.$refs[formName].validate(valid => {
        if (valid) {
          alert("验证码登录验证通过!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
    //#endregion

    //#region 发送验证码按钮
    let isQRcodeDisable = ref(false);
    let QRcodeText = ref(`发送验证码`);
    function getQRcode() {
      // 倒计时
      // let countDown = 60;
      QRcodeText.value = "11";
      isQRcodeDisable.value = false;
      setTimeout(() => {}, 1000);
    }
    //#endregion
    return {
      isLoginChooseFlag,
      selectLogin,
      accountForm,
      rules,
      accountSubmitForm,
      isAccountChooseFlag,
      selectMobile,
      mobileForm,
      mobileSubmitForm,
      isQRcodeDisable,
      getQRcode,
      QRcodeText
    };
  }
};
</script>

<style lang="scss" scoped>
.banner {
  height: 488px;
  background: {
    image: url("./img/banner.png");
    repeat: no-repeat;
  }
}
.user-login {
  position: absolute;
  top: 61px;
  right: 100px;
  width: 380px;
  height: 364px;
  padding: 24px 38px;
  font-size: 18px;
  background-color: #fff;
  /* 选择登录方式 */
  .login-choose {
    display: flex;
    justify-content: space-between;
    color: #999999;
    div {
      padding-bottom: 8px;
      cursor: pointer;
    }
    span {
      color: #ededed;
    }
  }
  /* 选中的样式 */
  .current {
    color: #333333;
    border-bottom: 2px solid #17bb9b;
  }
  /* 手机登录 */
  .mobile-login {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #17bb9b;
    text-align: right;
    padding: 10px 0;
    cursor: pointer;
  }
  /*  忘记密码 免费注册 */
  .user-other {
    display: flex;
    justify-content: space-between;
    a {
      font-size: 14px;
      text-align: left;
      color: #333333;
    }
  }
}

#login-form,
#mobile-form {
  a {
    color: #0673b1;
  }
  ::v-deep .terms {
    margin-bottom: 20px;
  }
  ::v-deep .user-login-btn {
    margin-bottom: 18px;
  }
}

/* 覆盖element ui 默认样式 */
::v-deep #login-form {
  /* input修改 */
  .el-input__inner {
    padding-left: 50px;
    border-radius: 0;
  }
  /* input前置图标修改 */
  .el-input__prefix {
    width: 38px;
    height: 38px;
    top: 1px;
    left: 1px;
    color: #fff;
    background-color: #cfcdcd;
  }
  /* 复选框选中修改 */
  .el-checkbox__input.is-checked + .el-checkbox__label,
  .el-checkbox__label {
    color: #b3b3b3;
  }
  /* 按钮修改 */
  .el-button {
    width: 100%;
    color: #fff;
    background-color: #17bb9b;
  }
}
/* 继承样式 */
::v-deep #mobile-form {
  @extend #login-form;
  .input-code {
    position: relative;

    .el-input-group__append {
      position: absolute;
      top: 0;
      right: 75px;
      transform: translateY(50%);
      background: transparent;
      border-radius: 0;
      border-left: none;
    }
  }

  .getQRcode {
    color: #17bb9b;
    background-color: transparent;
  }
}
</style>
