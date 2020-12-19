module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-implicit-coercion": "error", //禁止隐式转换,
    camelcase: "error", //强制驼峰法命名
    "no-else-return": 2, //如果if语句里面有return,后面不能跟else语句
  }
};
