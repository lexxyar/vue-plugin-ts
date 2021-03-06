import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

// Import plugin
import myPlugin from './plugins/plugin';

// Use plugin
Vue.use(myPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
