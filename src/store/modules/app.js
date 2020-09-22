const state = {
  // 全局数据
  token: null,
  ctx: null
}
const mutations = {
  SET_TOKEN: (state, data) => {
    state.token = data
  },
  SET_CTX: (state, data) => {
    state.ctx = data
  }
}
const actions = {
  toggleToken({ commit }, data) {
    commit('SET_TOKEN', data)
  },
  setCtx({ commit }, data) {
    commit('SET_CTX', data)
  }
}
export default {
  state,
  mutations,
  actions
}
