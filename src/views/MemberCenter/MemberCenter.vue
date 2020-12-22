<template>
  <el-container>
    <el-main>
      <!-- 顶栏 头像/会员 -->
      <div class="member-base">
        <div class="container">
          <el-row>
            <el-col :span="8" :offset="8">
              <div class="member-frame">
                <el-avatar :size="90"></el-avatar>
                <div class="checkin-btn">点击签到</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- // -->

      <div class="main-base">
        <div class="container">
          <!-- 特权中心 -->
          <div class="chunk-title">
            <span>我的特权</span>
            <router-link to="/" style="color: #1abc9c">
              会员特权详细介绍
            </router-link>
          </div>
          <!-- 会员权益 展示 -->
          <el-row :gutter="40" class="right-list">
            <el-col :span="12" v-for="(item, index) in rightList" :key="index">
              <div class="right-item">
                <img src="./assets/rights_01.svg" alt="" />
                <div>
                  <p class="right-title">{{ item.title }}</p>
                  <p class="right-desc">{{ item.desc }}</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- 任务中心 -->
          <div class="chunk-title">
            <span>任务中心</span>
            <router-link to="/">查看全部</router-link>
          </div>
          <TaskList />
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import TaskList from "@/components/TaskList/TaskList.vue";
// --
import { reactive } from "vue";
// --
export default {
  setup() {
    const rightList = reactive([
      {
        title: "满免运费",
        desc:
          "会员购买商品单笔订单总金额达到标准后可免运费，不同等级会员满免运费标准不同。"
      },
      {
        title: "签到奖励",
        desc:
          "会员每天最多可签到1次，签到后获得相应的奖励。连续签到多天可获得额外的奖励。"
      },
      {
        title: "评价奖励",
        desc:
          "会员成功提交评论即获得相应的成长值奖励，不同等级会员给予不同数量的成长值奖励。"
      },
      {
        title: "专享活动",
        desc:
          "黄金及以上会员专享活动，不定期福利优先享（看电影、烘焙课程、线下趴等）"
      }
    ]);

    // --
    return {
      rightList
    };
  },
  components: {
    TaskList: TaskList
  }
};
</script>

<style scoped>
.el-main {
  padding: 0;
}

.member-base {
  width: 100%;
  background-color: #e4e4e4;
}

.main-base {
  padding-top: 20px;
  background-color: #f5f5f5;
}

/* -- 头像 会员 栏位 -- */
.member-base .el-row,
.member-base .el-col {
  height: 500px;
}

.member-frame {
  position: relative;
  width: 100%;
  height: 272px;
  top: 124px;
  /* -- */
  display: flex;
  justify-content: center;
  /* -- */
  background-color: #ffffff;
  border-radius: 46px;
  font-size: 12px;
  font-family: "微软雅黑", "微软雅黑";
  font-weight: 400;
  line-height: 24px;
  /* -- */
}

.member-frame > .el-avatar {
  margin-top: -45px;
  background-color: #ffffff;
}

.checkin-btn {
  position: absolute;
  bottom: 30px;
  width: 150px;
  height: 40px;
  /* -- */
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  /* -- */
  border-radius: 145px;
  background-color: #1abc9c;
}

/* -- 会员权益 -- */

.chunk-title {
  margin: 10px 0;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}

.chunk-title a {
  float: right;
  font-size: 12px;
}

/* -- 权益详情 -- */

.right-item {
  height: 170px;
  margin: 10px 0;
  padding: 30px;
  background-color: #ffffff;
  /* -- */
  color: #999999;
}

.right-item img {
  float: left;
  width: 80px;
  height: 80px;
  margin: 15px 0;
  margin-right: 40px;
}

.right-item div {
  float: left;
  width: 370px;
  overflow: hidden;
}

.right-title {
  padding: 15px 0;
  font-size: 20px;
  font-weight: 700;
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
}

.right-desc {
  font-size: 14px;
  line-height: 24px;
}
</style>
