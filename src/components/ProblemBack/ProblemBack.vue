<template>
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
            <el-col :span="3" class="heig"> 反馈类型： </el-col>
            <el-col :span="21">
              <el-form-item prop="FeedBackType">
                <el-select
                  placeholder="请选择"
                  v-model="FeedBackForm.FeedBackType"
                >
                  <el-option
                    v-for="(item, index) in FeedBackForm.Content"
                    :key="index"
                    :value="index"
                    :label="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 反馈类型 end -->

          <!-- 反馈内容 -->
          <el-row class="coupback">
            <el-col :span="3"> 反馈内容： </el-col>
            <el-col :span="21">
              <el-form-item prop="FeedBackcContent">
                <el-input
                  type="textarea"
                  :rows="4"
                  v-model="FeedBackForm.FeedBackcContent"
                  placeholder="对我们网站、商品、服务，您有什么建议吗？你还希望我们为您提供哪些商品？请告诉我们..."
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 反馈内容 end -->

          <!-- 上传图片 -->
          <el-row class="coupback">
            <el-col :span="3"> 相关图片： </el-col>
            <el-col :span="21" style="height:100px">
              <el-upload
                action="https://mock.boxuegu.com/mock/1175/"
                list-type="picture-card"
                class="phonce"
                :disabled="UploadForm.types"
                :on-success="Uploads"
                :on-remove="Remove"
              >
                <i class="el-icon-plus">
                  <p>选择图片</p>
                </i>
              </el-upload>
              <span class="numb">
                共{{ UploadForm.uploading }}张，还能上传{{
                  UploadForm.surplus
                }}张
              </span>
            </el-col>
          </el-row>
          <!-- 上传图片 end -->

          <!-- 手机号码 -->
          <el-row class="coupback">
            <el-col :span="3" class="heig"> 手机号码： </el-col>
            <el-col :span="21">
              <el-form-item prop="mobil">
                <el-input
                  size="medium"
                  v-model="FeedBackForm.mobil"
                  placeholder="方便我们与您进行联系"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 手机号码 end -->

          <!-- 图片验证码 -->
          <el-row class="coupback">
            <el-col :span="3" class="heig"> 验证码： </el-col>
            <el-col :span="21">
              <el-form-item prop="VerificationCode">
                <el-input
                  size="medium"
                  v-model="FeedBackForm.VerificationCode"
                  placeholder="请输入图形验证码"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 图片验证码 end -->
        </el-col>
      </el-row>
    </el-form>
    <!-- 问题反馈表单 end -->

    <!-- 验证码图片 -->
    <div class="captcha">
      <img src="" alt="" />
      <span><span>看不清？</span><a> 换一张 </a></span>
    </div>
    <!-- 提交反馈按钮 -->
    <div class="buttongo">
      <el-button @click="verification">提交反馈</el-button>
    </div>
  </div>
  <!-- 中间表单 end -->
</template>

<script>
// 引入校验规则
import { FeedBackRules, AddFeedBack } from "./rules.js";

// 引入相关图片事件
import { Uploadimg } from "./Upload";

export default {
  name: "ProblemBack",
  setup() {
    // 导入表单校验方法
    let { FeedBackForm, FeedBackRefs, verification } = AddFeedBack();

    // 导入上传图片方法
    let { UploadForm, Uploads, Remove } = Uploadimg();
    return {
      FeedBackRules, // 表单校验规则
      FeedBackForm, // 表单校验数据模型对象
      FeedBackRefs, // 表单校验ref
      verification, // 表单校验成功跳转路由
      Uploads, // 图片上传成功
      Remove, // 删除图片成功
      UploadForm
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

    .phonce {
      // display: inline-flex;
      height: 100%;
    }

    .numb {
      position: absolute;
      bottom: -17px;
    }
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
:deep(.el-upload-list__item) {
  width: 100px;
  height: 100px;
}

:deep(.is-required) {
  margin: 0;
  width: 430px;
}

.el-icon-plus {
  p {
    font-size: 12px;
    color: #cccccc;
  }
}
</style>
