import { createStore } from "vuex";
import HomeLogo from "@/components/HomeLogo/HomeLogoStore.js";
import LoginBannerStore from "@/components/LoginBanner/LoginBannerStore.js";

export default createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  modules: {
    HomeLogo: HomeLogo,
    LoginBannerStore
  }
});
