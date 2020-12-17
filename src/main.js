import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Element3 from "element3";
import "element3/lib/theme-chalk/index.css";

// 引入样式清除
import "../public/css/common.scss";
createApp(App)
  .use(store)
  .use(router)
  .use(Element3)
  .mount("#app");
