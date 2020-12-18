const path = require("path");
module.exports = {
  /* 全局 sass 变量和方法引入 */
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/mixnins/_mixnin.scss")]
    }
  }
};
