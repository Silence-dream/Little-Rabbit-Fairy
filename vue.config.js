const path = require("path");
console.log(__dirname);
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/mixnins/_mixnin.scss")]
    }
  }
};
