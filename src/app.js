import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';

import Antd from 'ant-design-vue';


import App from './App';
import router from './router';
import store from './store';
import filters from './filters';
import directives from './directives';

import '@/assets/scss'
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

Vue.use(filters)
Vue.use(directives)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})