const state = {
  homeCategory: []
};
const mutations = {
  // 将首页logo导航栏分类存写
  liveCategory(state, val) {
    state.homeCategory = val;
  }
};
const actions = {};
const getters = {};

// 不要忘记把state, mutations等暴露出去。
export default {
  state,
  mutations,
  actions,
  getters
};
