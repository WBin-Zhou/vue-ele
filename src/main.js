// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import fastClick from 'fastclick'
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
fastClick.attach(document.body);
import './common/css/index.scss'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
