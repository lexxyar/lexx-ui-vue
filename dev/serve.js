import Vue from 'vue';
import Dev from './serve.vue';
import router from './router'
import LexxUi from '@/entry';

Vue.use(LexxUi)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(Dev),
}).$mount('#app');
