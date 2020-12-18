const path = require("path");
console.log(__dirname);
module.exports = {
  /* 多页面配置 */
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      fileName: "index.html",
      title: "index"
    },
    login: {
      entry: "src/pages/Login/main.js",
      template: "public/index.html",
      fileName: "login.html",
      title: "登录页面"
    }
  },
  /* 全局 sass 变量和方法引入 */
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/mixnins/_mixnin.scss")]
    }
  }
};
