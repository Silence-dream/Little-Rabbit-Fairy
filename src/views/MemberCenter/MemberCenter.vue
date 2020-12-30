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
                <div class="member-name">{{ memberName }}</div>
                <div class="member-level">
                  <el-steps :active="2" align-center>
                    <el-step title="步骤1" description="这是一段" status="wait">
                    </el-step>
                    <el-step
                      title="步骤2"
                      description="这是一段"
                      status="success"
                    >
                    </el-step>
                    <el-step title="步骤3" description="这是一段" status="wait">
                    </el-step>
                    <el-step title="步骤4" description="这是一段" status="wait">
                    </el-step>
                  </el-steps>
                </div>
                <el-button
                  class="checkin-btn"
                  @click="checkinDialog.visible = true"
                >
                  点击签到
                </el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 内容介绍 主体 -->
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
          <el-row :gutter="40">
            <el-col :span="12" v-for="(item, index) in rightList" :key="index">
              <div class="right-item">
                <img src="./img/Rights01.svg" alt="" />
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
            <router-link to="/task-center">查看全部</router-link>
          </div>
          <TaskList :Task="Tasks" />
        </div>
      </div>
      <!-- 模态框 -->
      <el-dialog
        v-model:visible="checkinDialog.visible"
        title="每日签到"
        :center="true"
        width="600px"
        top="9vh"
      >
        <div class="checkin-dialog-header">
          <div class="checkin-dialog-btn">
            <span
              v-if="
                checkinRecord.record[checkinRecord.current].isCheckin == false
              "
              @click="getCheckin()"
            >
              点击签到
            </span>
            <span v-else>今日已签</span>
          </div>
          <p class="checkin-dialog-btn-tip">
            坚持每天连续签到可以获多重奖励哦
          </p>
        </div>
        <div class="checkin-dialog-body">
          <!-- 签到记录 -->
          <div class="checkin-dialog-record-frame">
            <!-- 签到记录 每日记录 -->
            <div
              class="checkin-dialog-record-item"
              v-for="(item, index) in checkinRecord.record"
              :key="index"
            >
              <div
                class="checkin-dialog-record-icon"
                :class="item.isCheckin == true ? 'checked-in' : ''"
              >
                <img src="./img/CheckMark.svg" />
              </div>
              <div class="checkin-dialog-record-desc">
                <p>{{ item.date }}</p>
              </div>
            </div>
            <!-- // -->
          </div>
          <!-- 签到提示 -->
          <div class="checkin-dialog-tip">
            <p>温馨提示：</p>
            <p>
              每日签到可获得10积分的奖励，连续完成8天签到可上额外获得奖励，连续签到满8天后将会重置签到记录
            </p>
          </div>
        </div>
        <!-- // -->
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
import TaskList from "@/components/TaskList/TaskList.vue";
// --
import { reactive, ref } from "vue";
// --
export default {
  setup() {
    // 用户名 数据
    const memberName = ref("Violet");
    // 权限列表
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
    // 任务列表 数据
    const Tasks = reactive([
      {
        taskTitle: "新手欢迎奖励",
        taskScore: 5,
        isTaskComplete: true
      },
      {
        taskTitle: "设置头像",
        taskScore: 10,
        isTaskComplete: false
      },
      {
        taskTitle: "完善个人信息",
        taskScore: 10,
        isTaskComplete: false
      },
      {
        taskTitle: "设置兴趣分类",
        taskScore: 10,
        isTaskComplete: false
      }
    ]);
    // ---

    // 显示模态框
    const checkinDialog = reactive({
      visible: false
    });

    // 签到完成情况
    const checkinRecord = {
      current: 0,
      record: [
        { date: "第一天", isCheckin: false },
        { date: "第二天", isCheckin: false },
        { date: "第三天", isCheckin: false },
        { date: "第四天", isCheckin: false },
        { date: "第五天", isCheckin: false },
        { date: "第六天", isCheckin: false },
        { date: "第七天", isCheckin: false },
        { date: "第八天", isCheckin: false }
      ]
    };
    // 点击签到事件
    const getCheckin = () => {
      checkinRecord.record[checkinRecord.current].isCheckin = true;
    };
    // ---

    return {
      memberName,
      rightList,
      Tasks,
      checkinDialog,
      // ---
      checkinRecord,
      getCheckin
    };
  },
  components: {
    TaskList: TaskList
  }
};
</script>

<style lang="scss" scoped>
.el-main {
  padding: 0;
}

.member-base {
  width: 100%;
  background-color: #e4e4e4;

  .el-row,
  .el-col {
    height: 500px;
  }
}

.main-base {
  padding-top: 20px;
  background-color: #f5f5f5;
}

/* -- 头像 会员 栏位 -- */
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

  // --- 头像样式
  .el-avatar {
    margin-top: -45px;
    background-color: #ffffff;
  }

  .member-name {
    position: absolute;
    top: 45px;
    width: 100%;
    height: 24px;
    color: #999;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
  }

  // --- 用户组样式

  .member-level {
    position: absolute;
    top: 90px;
    width: 100%;
    height: 70px;
    padding: 0 44px;
  }
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
  /* -- */
  border-radius: 145px;
  background-color: #1abc9c;
}

// --- 权限等级
:deep(.el-steps) {
  .el-step__icon {
    width: 40px;
    height: 40px;
  }

  .el-step__line {
    top: 20px;
  }
}

/* -- 会员权益 -- */

.chunk-title {
  margin: 10px 0;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  text-align: left;

  // 右侧链接
  a {
    float: right;
    font-size: 12px;
  }
}

/* -- 权益详情 -- */

.right-item {
  height: 170px;
  margin: 10px 0;
  padding: 30px;
  background-color: #ffffff;
  /* -- */
  color: #999999;

  // 图表样式
  img {
    float: left;
    width: 80px;
    height: 80px;
    margin: 15px 0;
    margin-right: 40px;
  }

  // 文字容器样式
  .right-item div {
    float: left;
    width: 370px;
    overflow: hidden;
  }

  // 文字样式
  .right-title,
  .right-desc {
    text-align: left;
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
}

// --- 模态框

:deep(.el-dialog__wrapper) {
  // 模态框头部
  .el-dialog__header,
  .el-dialog__body {
    background-color: #1abc9c;
  }

  // 标题样式
  .el-dialog__title {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
  }

  // 内容高度
  .el-dialog__body {
    height: 600px;
    padding: 0;
  }

  // 关闭按钮
  & .el-dialog__headerbtn .el-dialog__close {
    color: #ffffff;
    font-weight: 900;
  }
}

// 模态框结构
.checkin-dialog-header {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 200px;
}

.checkin-dialog-body {
  height: 400px;
  background-color: #ffffff;
}

// 签到按钮
.checkin-dialog-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 100px;
  height: 100px;
  background-image: url(./img/CheckinDialogBtn.svg);

  span {
    height: 18px;
    line-height: 18px;
    color: #1abc9c;
  }
}

.checkin-dialog-btn-tip {
  width: 100%;
  height: 24px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
}

// 签到记录
.checkin-dialog-record-frame {
  padding: 0 90px;
  padding-top: 40px;
  width: 100%;
  height: 270px;
  // ---
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.checkin-dialog-record-item {
  width: 75px;
  height: 100px;
  margin: 15px;
  margin-top: 0;
}

.checkin-dialog-record-icon {
  width: 100%;
  height: 70px;
  background-color: #cccccc;
  border-radius: 6px 6px 0 0;

  img {
    margin: 19px 22px;
    width: 32px;
    height: 32px;
  }
}

.checkin-dialog-record-icon.checked-in {
  background-color: #1abc9c;
}

.checkin-dialog-record-desc {
  width: 100%;
  height: 30px;
  background-color: #f2f2f2;
  border-radius: 0 0 6px 6px;

  p {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    color: #999999;
  }
}

// 提示栏位
.checkin-dialog-tip {
  margin-top: 20px;
  padding: 0 40px;
  width: 100%;
  height: 80px;

  p {
    line-height: 24px;
    color: #999999;
  }
}
</style>
