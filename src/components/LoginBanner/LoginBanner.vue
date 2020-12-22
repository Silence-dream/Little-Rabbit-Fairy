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
                <el-checkbox name="type" label="true" checked
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
              </el-input>
              <el-button
                class="getQRcode"
                :disabled="isCode"
                @click="getCode"
                >{{ getCodeText }}</el-button
              >
            </el-form-item>
            <!-- 同意款项 -->
            <el-form-item class="terms" prop="isTerms">
              <el-checkbox-group v-model="mobileForm.isTerms">
                <el-checkbox name="type" label="true" checked
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
        <div class="choose-QRcode" v-if="isLoginChooseFlag">
          <el-image :src="QRcodeUrl"></el-image>
        </div>
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
    let getCodeText = ref(`发送验证码`);
    // 是否禁用按钮
    let isCode = ref(false);
    /* 发送验证码 重发验证码 60秒后重发 */
    function getCode() {
      clearInterval(timer);
      isCode.value = true;
      let reset = 60;
      let timer = setInterval(() => {
        reset -= 1;
        getCodeText.value = `${reset}秒后重发`;
        if (reset <= 0) {
          console.log(1);
          getCodeText.value = `重发验证码`;
          clearInterval(timer);
          isCode.value = false;
        }
      }, 1000);
    }
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

    //#endregion

    //#region 二维码登录
    let QRcodeUrl = ref(
      `data:image/gif;base64,R0lGODdhjACMAIAAAAAAAP///ywAAAAAjACMAAAC/4yPqcvtD6OctNqLs968+w+G4kiWB4Cm6sq2UAsDSEzLj8rU+prv/uuzGYK8W6pHpCGTMODvxBQ2cItobGmlOoizqFPazRYV2ko5LC03q0c2Cg2Hvi9nOXhSH7b1c/44kRegtidIGPi1hBE42FfIkuiWZjjZSLFIaIlpF+d3WbkJ6sdppilqt2baSSn5qfpEVurIehUKuIoqi8Y4ixUECduoMzoqXIu72/tq25p76lJLXBP9aBxr9bs8e2x9+5wqi4t96KwUqevdDKyNvhtuDh1ZrH5O/T1N+y0/tfqlf7/NrB27bvX2BYtFD1+2hMjeufoj8CCzf9wC8iMHseK6gv8ReRmR+GdYNZAA7+STNjLjxJSeTKZ7qa8lw4sPRc7DiO3eTJA58dBc+FGhzqCKNBbl6dCg0JSI6Bh1ivTmFpRSX/aUIBOqx6rJQjIlqrXrta8no8L82XGsOjFmG5bderYt25Zzh761GxfuXLps8brN65dgFhNccRouXBMe4RF8ST5d+3MxicYbXVK2KRnE5cNAIZtdnJZqNn8Yx1UNXQ6rYNIP3bVGmBT10qmOle30+nrl6dWim+aeDa53adi7a+/IpEy26+C6mau0PLBgP9HK0SWczlFjR+THWfqKR9z53+ucsSusLr08+OwW2eNWSj6xfOddMZum7z392+2cl5f/vDoaWsLtJ1h8+HkGF2YGyiZOdM/xh6B94f03XHsuGUiRhfdxQZZ4kSkWoIUYqocghQS6B+CIJ0KnX4jnCZiaVSCqmNdmtHV3V4UJzrgeizsidmCNAwopok8tjpfUgrwdWWCSQWVlj5PzoecjjfdZ+SGQJnrIpHH18RjlbxzeqKCUXPqIpJZ7NZcmfD3aKKOaa/oWp5slapdlZy6qZWedALJG5GBPWgeWmEMCmqGgNy7XoBhiTbhkEuZdmZ+kb0JqHJ+PNpfomHtiimOdntJZl44pXooiqu81quiZp96ZKqyrxtaXqWZu+hyulK7oKaC7iuogoma22et3YQLrnrBy//54JpUSahjpr1AiG2qxRUaoo7SPURuTsdSaR6euXgwbLKFA0limoUz8WW6L6Qb5arPjLstgoUptCOqa17p4G6nzfvoZuXJBGzCZ2ZrrKpjfdqgkp5X6Sh2orD6bq5GVQRwjvvsS62BmiyJM2a+sjuoxxmgizN1tjBJmMq4cUCnyBy2r+nK0KHc483zs2mZvzDn+NrLEqmpbcAR/5QyvwKH663BxF2+78rEkG3ws0xfSrDSWBJ+8L16Tbpvozu/5B3V4/WZNIrd4ds3woF1WmTacWsP9c5D6Aoc02WzCWJnKtcoaNNtOh32wo1g7Pe3ElfptOOC0vm11zcnd/HHRc/8rroG1s1bO7OWPX63a5O663XncZTd9b8Sjc/6u3nSr7aXCbQZebZ4cJ5un1z3/ezuzJc3eNtXyxrqw1O2WXrfVmr+rGeUJcw5hnz6HEPXzqeO+t+UlO6+s9dUDn9n3Q56t8+fclbrsl8bHXrfJ6OtJce8N63WovmKrX7zdfLv+PsX4T7ulep1rd1vbkrhW5z2wWSx+qgPd8DaXQMEZzXbe0piloEdB1OlOXch7oAUN+LD95Uto9OIdyCJFONbZi4HrMl2mRJg9CCaucC+CnK1WBK4Vguh9riNfoDrFvb/pSXwvHFjFOPg1nuGQgDXsWwgR2L/FMTGAHaNhEpcmReGMdYt9fcph+bD1Rek1EF0Km98HmxS6pxnRgudD4/WcmEYfRi9eZhwhF8O1wM8dzWbYO6KfbqXDJbbPhBnLHSCFl0LA0FCAioxjWPTIN8Y9qIpVG1oFTxgjSc6NkQes3dv410A4de9um8SkJ8d2vDM2LmlAs+Qd+zM+j8lylrSspS1victc6nKXvOxAAQAAOw==`
    );
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
      QRcodeUrl,
      getCode,
      getCodeText,
      isCode
    };
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 1920px;
  height: 488px;
  margin: 0 auto;
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
/* 二维码登录样式 */
.choose-QRcode {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .el-image {
    width: 256px;
    height: 252px;
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
    &:focus {
      border-color: #17bb9b;
    }
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
/* 验证码登录 */
/* 继承样式 */
::v-deep #mobile-form {
  @extend #login-form;
  .input-code {
    position: relative;

    .el-input-group__append {
      width: 86px;
      border-radius: 0;
      border-left: none;
      background-color: #f7f9fa;
    }
    .el-input__suffix {
      right: 90px;
    }
  }

  .getQRcode {
    position: absolute;
    top: 1px;
    right: 1px;
    width: 86px;
    padding: {
      top: 11px;
      bottom: 11px;
      left: 0;
      right: 0;
    }
    color: #333333;
    background-color: #f7f9fa;
    border-radius: 0;
  }
}
</style>
