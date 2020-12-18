import { createApp } from "vue";
import Login from "./Login.vue";
import router from "./router/index.js";
import store from "@/store";
import Element3 from "element3";
import "element3/lib/theme-chalk/index.css";

// 引入样式清除
import "@/styles/common.scss";
// 引入字体图标
import "@/fonts/iconfont.css";
createApp(Login)
  .use(store)
  .use(router)
  .use(Element3)
  .mount("#app");
