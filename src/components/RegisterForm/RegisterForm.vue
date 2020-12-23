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
    <el-form-item prop="code">
      <el-input
        type=""
        placeholder="短信验证码"
        autocomplete="off"
        prefix-icon="iconfont icon-xinxi"
        v-model="RegisterForm.code"
      ></el-input>
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
      <el-button>下一步</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, getCurrentInstance } from "vue";

import { validateMobile } from "@/views/Login/Login.vue";

export default {
  name: "RegisterForm",
  setup() {
    /* 获取当前当前组件的实例 */
    let self = getCurrentInstance().ctx;

    //#region 定义数据验证

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
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
    //#endregion
    return {
      RegisterForm,
      registerRules,
      submitRegisterForm
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
  .choose-protocol {
    a {
      color: #5eb69c;
    }
  }
  .el-button {
    width: 100%;
    color: #ffffff;
    background-color: #27ba9b;
  }
  ::v-deep .el-input__inner {
    &:focus {
      border-color: #17bb9b;
    }
  }
  .el-form-item {
    width: 300px;
    height: 50px;
  }
  ::v-deep .el-checkbox__inner {
    border-radius: 50%;
    background-color: #5eb69c;
  }
  ::v-deep .el-checkbox__label {
    color: #999999;
  }
}
</style>
