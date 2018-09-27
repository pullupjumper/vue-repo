export default {
  state: {
    hide: false,
    navItems: [
      {
        id: 1001,
        iconClz: 'icon-grid',
        isActive: false,
        activeClz: 'active',
        iconContent: 'Tables',
      },
      {
        id: 1002,
        iconClz: 'icon-puzzle',
        isActive: false,
        activeClz: 'active',
        iconContent: 'Forms',
      },
      {
        id: 1003,
        iconClz: 'icon-speedometer',
        isActive: false,
        activeClz: 'active',
        iconContent: 'Dashboard',
      }
    ]
  },
  mutations: {
    sidebarToggle(state) {
      state.hide = state.hide ? false : true;
    },

    selectNavItem(state, id) {
      state.navItems.forEach(item => {
        item.isActive = item.id === id;
      });
    }
  }
}
