export default {
  state: {
    hide: false
  },
  mutations: {
    sidebarToggle(state) {
      state.hide = state.hide ? false : true;
    }
  }
}
