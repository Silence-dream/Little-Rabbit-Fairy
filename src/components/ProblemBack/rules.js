import { reactive, ref } from "vue";

//#region 问题反馈表单校验规则
export const FeedBackRules = reactive({
  // 反馈类型
  FeedBackType: [
    {
      required: true,
      type: "array",
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
      message: "手机号码不能为空",
      trigger: "blur"
    }
  ],
  // 验证码
  VerificationCode: [
    {
      required: true,
      message: "验证码不能为空",
      trigger: "blur"
    }
  ]
});
//#endregion

//#region 问题反馈表单数据模型对象
export const AddFeedBack = () => {
  let FeedBackForm = reactive({
    FeedBackType: [],
    FeedBackcContent: "",
    mobil: "",
    VerificationCode: ""
  });

  const FeedBackRefs = ref(null);

  return {
    FeedBackForm,
    FeedBackRefs
  };
};
//#endregion
