const state = {
  homeCategory: []
};
const mutations = {
  liveCategory(state, val) {
    state.homeCategory = val;
    // console.log(state.homeCategory);
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
