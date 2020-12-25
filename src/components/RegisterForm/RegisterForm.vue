<template>
  <!-- 注册表单 -->
  <el-form
    class="registerForm"
    :model="RegisterForm"
    status-icon
    :rules="registerRules"
    ref="registerForm"
  >
    <el-form-item prop="account">
      <el-input
        type=""
        placeholder="设置用户名称"
        autocomplete="off"
        prefix-icon="iconfont icon-user"
        v-model="RegisterForm.account"
      ></el-input>
    </el-form-item>
    <el-form-item prop="mobile">
      <el-input
        type=""
        placeholder="输入手机号"
        autocomplete="off"
        prefix-icon="iconfont icon-shouji"
        v-model="RegisterForm.mobile"
      ></el-input>
    </el-form-item>
    <el-form-item prop="code" class="register-code">
      <el-input
        type=""
        placeholder="短信验证码"
        autocomplete="off"
        prefix-icon="iconfont icon-xinxi"
        v-model="RegisterForm.code"
      ></el-input>
      <el-button class="send-code" :disabled="isCode" @click="getCode()">{{
        getCodeText
      }}</el-button>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        placeholder="设置6至20位字母,数字和符号组合"
        autocomplete="off"
        prefix-icon="iconfont icon-suo"
        v-model="RegisterForm.password"
      ></el-input>
    </el-form-item>
    <el-form-item prop="checkPassword">
      <el-input
        type="password"
        placeholder="请再次输入上面密码"
        autocomplete="off"
        prefix-icon="iconfont icon-suo"
        v-model="RegisterForm.checkPassword"
      ></el-input>
    </el-form-item>
    <el-form-item class="choose-protocol" prop="isTerms">
      <el-checkbox-group v-model="RegisterForm.isTerms">
        <el-checkbox name="type" label="true" checked>
          已阅读并同意
          <a href="javascript:;">《用户服务协议》</a>
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item @click="submitRegisterForm('registerForm')">
      <el-button class="next-to">下一步</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, getCurrentInstance, ref } from "vue";
import { validateMobile } from "@/views/Login/Login.vue";
import { httpPost } from "@/utils/http.js";
import { common } from "@/api/index.js";
import { Message } from "element3";

export default {
  name: "RegisterForm",
  setup() {
    /* 获取当前当前组件的实例 */
    let self = getCurrentInstance().ctx;

    //#region 校验注册数据验证

    // 注册数据
    const RegisterForm = reactive({
      account: "",
      mobile: "",
      code: "",
      password: "",
      checkPassword: "",
      isTerms: []
    });
    /* 自定义校验规则 */
    // 二次确认密码
    let validateCheckPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== self.RegisterForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    /* 校验规则 */
    let registerRules = reactive({
      account: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ],
      mobile: [
        { required: true, validator: validateMobile, trigger: "blur" },
        { min: 11, max: 11, message: "请输入11位手机号", trigger: "blur" }
      ],
      code: [
        { required: true, message: "请输入验证码", trigger: "blur" },
        { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
      ],
      checkPassword: [
        {
          required: true,
          validator: validateCheckPassword,
          trigger: "blur"
        },
        { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
      ],
      isTerms: [
        {
          required: true,
          type: "array",
          message: "请选择条款",
          trigger: "change"
        }
      ]
    });

    /**
     *
     * @param {string} formName 传入ref值
     */
    function submitRegisterForm(formName) {
      console.log(self.$refs[formName].model);
      self.$refs[formName].validate(valid => {
        if (valid) {
          /* 发送注册请求 */
          httpPost(common.Regiser, {
            account: RegisterForm.account,
            mobile: RegisterForm.mobile,
            code: RegisterForm.code,
            password: RegisterForm.password
          }).then(result => {
            /* 判断是否注册成功 */

            /* 注册成功 */
            Message({ type: "success", message: result.msg });
            /* 跳转路由 */
            self.$router.push("/register/success");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
    //#endregion

    //#region 发送验证码按钮
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
    //#endregion
    return {
      RegisterForm,
      registerRules,
      submitRegisterForm,
      isCode,
      getCodeText,
      getCode
    };
  }
};
</script>

<style lang="scss" scoped>
/* 覆盖element默认样式 */

.registerForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 选择协议 */
  .choose-protocol {
    a {
      color: #5eb69c;
    }
  }
  /* 发送验证码 */
  .register-code {
    position: relative;
    .el-button {
      border: none;
      background: transparent;
    }
    .send-code {
      position: absolute;
      top: 2px;
      right: 18px;
      color: #1abc9c;
      font-size: 12px;
    }
  }

  .next-to {
    width: 100%;
    color: #ffffff;
    background-color: #27ba9b;
  }
  :deep(.el-input__inner) {
    &:focus {
      border-color: #17bb9b;
    }
  }
  .el-form-item {
    width: 300px;
    height: 50px;
  }
  :deep(.el-checkbox__inner) {
    border-radius: 50%;
    background-color: #5eb69c;
  }
  :deep(.el-checkbox__label) {
    color: #999999;
  }
}
</style>
