<template>
  <!-- <div class="pageare"> -->
  <!-- 中间表单 starte -->
  <div class="contain main">
    <p class="top">问题反馈</p>
    <!-- 问题反馈表单 -->
    <el-form
      ref="FeedBackRefs"
      v-model:model="FeedBackForm"
      :rules="FeedBackRules"
    >
      <el-row>
        <el-col :span="10" :offset="7">
          <!-- 反馈类型 -->
          <el-row class="coupback">
            <el-col :span="4" class="heig"> 反馈类型： </el-col>
            <el-col :span="20">
              <el-select placeholder="请选择">
                <el-option> </el-option>
              </el-select>
            </el-col>
          </el-row>
          <!-- 反馈内容 -->
          <el-row class="coupback">
            <el-col :span="4"> 反馈内容： </el-col>
            <el-col :span="20">
              <el-form-item>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="对我们网站、商品、服务，您有什么建议吗？你还希望我们为您提供哪些商品？请告诉我们..."
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 上传图片 -->
          <el-row class="coupback">
            <el-col :span="4"> 相关图片： </el-col>
            <el-col :span="20" style="height:100px">
              <el-upload
                action="https://mock.boxuegu.com/mock/1175/"
                list-type="picture-card"
                class="phonce"
              >
                <i class="el-icon-plus">
                  <p>选择图片</p>
                </i>
                <!-- <span class="photo">选择图片</span> -->
              </el-upload>
              <span>共0张，还能上传3张</span>
            </el-col>
          </el-row>
          <!-- 手机号码 -->
          <el-row class="coupback">
            <el-col :span="4" class="heig"> 手机号码： </el-col>
            <el-col :span="20">
              <el-input
                size="medium"
                placeholder="方便我们与您进行联系"
              ></el-input>
            </el-col>
          </el-row>
          <!-- 图片验证码 -->
          <el-row class="coupback">
            <el-col :span="4" class="heig"> 验证码： </el-col>
            <el-col :span="20">
              <el-input size="medium" placeholder="请输入图形验证码"></el-input>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>

    <!-- 验证码图片 -->
    <div class="captcha">
      <img src="" alt="" />
      <span><span>看不清？</span><a> 换一张 </a></span>
    </div>
    <!-- 提交反馈按钮 -->
    <div class="buttongo">
      <router-link to="#">
        <el-button>提交反馈</el-button>
      </router-link>
    </div>
  </div>
  <!-- 中间表单 end -->
  <!-- </div> -->
</template>

<script>
// 引入校验规则
import { FeedBackRules, AddFeedBack } from "./rules.js";

export default {
  name: "ProblemBack",
  setup() {
    let { FeedBackForm, FeedBackRefs } = AddFeedBack();

    return {
      FeedBackRules,
      FeedBackForm,
      FeedBackRefs
    };
  }
};
</script>

<style lang="scss" scoped>
// 中间表单 starte
.main {
  margin-top: 30px !important; // 用来覆盖(添加)contain的margin（即相当于：margin:30px auto;）
  background-color: #ffffff;

  .top {
    font-size: 18px;
    color: #000000;
    padding: 30px 20px;
  }

  .el-col-4 {
    font-size: 16px;
    color: #999999;
  }

  .coupback {
    margin: 20px 0;
  }
}
// 中间表单 end

// 提交反馈按钮
.buttongo {
  text-align: center;
  margin: 30px 0;

  button {
    width: 300px;
    height: 45px;
    color: #ffffff;
    font-size: 14px;
    background-color: #1abc9c;
  }
}

// 图片验证码
.captcha {
  text-align: center;
  margin-top: 30px;

  span {
    font-size: 16px;
    color: #999999;

    a {
      font-size: 16px;
      color: #1abc9c;
    }
  }
}

.photo {
  font-size: 12px;
  color: #cccccc;
  position: absolute;
  left: 136px;
  top: 20px;
}

.contain {
  position: relative;
  width: 1240px;
  margin: auto;
  @include clearfix();
}

.heig {
  line-height: 36px;
}

// 修改相关图片的样式
:deep(.el-upload--picture-card) {
  width: 100px;
  height: 100px;
  display: inline-block;
}

// 相关图片显示
:deep(.is-success) {
  width: 100px;
  height: 100px;
}

.el-icon-plus {
  p {
    font-size: 12px;
    color: #cccccc;
  }
}
</style>
