// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

// // import $ from '../static/vendor/jquery/jquery.min.js'
// import '../static/vendor/popper.js/popper.min.js'
// import '../static/vendor/bootstrap/js/bootstrap.min.js'
// import '../static/vendor/chart.js/chart.min.js'
// import '../static/js/carbon.js'
// import '../static/js/demo.js'
// import '../static/vendor/simple-line-icons/css/simple-line-icons.css'
// import '../static/vendor/font-awesome/css/fontawesome-all.min.css'
// import '../static/css/styles.css'


Vue.config.productionTip = false;

Vue.use(axios, VueAxios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
