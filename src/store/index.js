import { createStore } from "vuex";
import HomeLogo from "@/components/HomeLogo/HomeLogoStore.js";

export default createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  modules: {
    HomeLogo: HomeLogo
  }
});
