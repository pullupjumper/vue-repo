import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import sidebar from './components/sidebar_store.js'

export default new Vuex.Store({
  modules: {
    sidebar: sidebar
  }
});

