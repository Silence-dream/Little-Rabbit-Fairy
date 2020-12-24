<template>
  <div class="register-success">
    <div class="success-box">
      <img src="./img/right.png" alt="图片失效了" />
      <h1>恭喜注册成功</h1>
      <span>请妥善保管您的账户信息</span>
      <div class="btn">
        <el-button>
          <router-link to="/">查看购物车</router-link>
        </el-button>
        <el-button>
          <router-link to="/">进入首页</router-link>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterSuccess"
};
</script>

<style lang="scss" scoped>
.register-success {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  text-align: center;
  h1 {
    color: #333333;
    font-size: 18px;
    padding: {
      top: 20px;
    }
  }
  span {
    display: block;
    color: #999999;
    font-size: 16px;
    padding: 30px 0;
  }
}
/* 覆盖element样式 */
::v-deep .btn {
  .el-button {
    width: 180px;
    height: 50px;
    border: none;
    a {
      color: #ffffff;
    }
    &:nth-child(1) {
      background-color: #27ba9b;
    }
    &:nth-child(2) {
      background-color: #cccccc;
    }
  }
}
</style>
