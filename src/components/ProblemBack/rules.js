import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

//#region 手机号正则表达式
export let patternRegular = /0?(13|14|15|17|18|19)[0-9]{9}/;
/* 自定义校验手机号 */
export let validateMobile = (rule, value, callback) => {
  if (value.trim() === "") {
    callback(new Error("请输入手机号"));
  } else if (!patternRegular.test(value)) {
    callback(new Error("手机号码格式不正确"));
  } else {
    callback();
  }
};
//#endregion

//#region 问题反馈表单校验规则
export const FeedBackRules = reactive({
  // 反馈类型
  FeedBackType: [
    {
      required: true,
      message: "反馈类型不能为空",
      trigger: "blur"
    }
  ],
  // 反馈内容
  FeedBackcContent: [
    {
      required: true,
      message: "反馈内容不能为空",
      trigger: "blur"
    }
  ],
  // 手机电话
  mobil: [
    {
      required: true,
      validator: validateMobile,
      trigger: "blur"
    }
  ],
  // 验证码
  VerificationCode: [
    {
      required: true,
      message: "验证码不能为空",
      trigger: "blur"
    },
    {
      min: 6,
      max: 6,
      message: "长度6个字符",
      trigger: "blur"
    }
  ]
});
//#endregion

//#region 问题反馈表单数据模型对象
export const AddFeedBack = () => {
  let FeedBackForm = reactive({
    FeedBackType: "", // 反馈类型
    FeedBackcContent: "", // 反馈内容
    mobil: "", // 手机号码
    VerificationCode: "", // 验证码
    Content: [
      "商品相关",
      "物流状况",
      "客户服务",
      "优惠活动",
      "功能异常",
      "产品建议",
      "其他"
    ]
  });

  const FeedBackRefs = ref(null);

  //#region 表单校验 跳转路由
  let router = useRouter();
  const verification = () => {
    FeedBackRefs.value.validate(valid => {
      if (valid) {
        router.push(`/feed-back/success`);
      } else {
        return false;
      }
    });
  };

  //#endregion

  return {
    FeedBackForm,
    FeedBackRefs,
    verification
  };
};
//#endregion
