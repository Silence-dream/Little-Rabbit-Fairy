import { createStore } from "vuex";
import Demo from "@/components/Demo/DemoStore.js";
// import HomeHeader from "@/components/HomeHeader/HomeHeaderStore.js";
import HomeLogo from "@/components/HomeLogo/HomeLogoStore.js";

export default createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  modules: {
    Demo: Demo,
    HomeHearer: HomeLogo
  }
});
