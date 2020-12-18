import { createStore } from "vuex";
import Demo from "@/components/Demo/DemoStore";

export default createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  modules: {
    Demo: Demo
  }
});

// 在store文件夹下的index.js文件中导入

// import { createStore } from "vuex";
// import login from './loginStore'
// import Liu from './liuzhiyan'

// export default createStore({
//   modules: {
//     login: login,
//     Liu: Liu
//   }
// });
