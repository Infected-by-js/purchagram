import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';

import setIconsGlobally from '@/plugins/setIconsGlobally';

import './assets/styles/main.scss';

Vue.config.productionTip = false;

setIconsGlobally(Vue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
