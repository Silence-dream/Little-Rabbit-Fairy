import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 公共样式
import "../public/css/common.scss";

const app = createApp(App)

app
  .use(store)
  .use(router)
  .mount("#app");
