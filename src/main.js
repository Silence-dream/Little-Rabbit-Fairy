import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Element3 from "element3";
import "element3/lib/theme-chalk/index.css";

// 引入样式清除
import "@/assets/styles/common.scss";
// 引入字体图标
// import "@/assets/styles/fonts/iconfont.css";

// 全局使用swiper
// import "swiper/swiper-bundle.min.css";
//这里需要说明一下swiper6做了一些调整，在版本6当中，它把一些属性封装成了组件的形式，
//可以按需引入，如果你需要用到分页，则需要引入Pagination（如 import import  { Swiper, Pagination } from 'swiper'）
// import { Swiper, Navigation } from "swiper";

createApp(App)
  .use(store)
  .use(router)
  .use(Element3)
  // .use(Swiper)
  // .use(Navigation)
  .mount("#app");
