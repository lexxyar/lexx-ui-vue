import Vue from 'vue';
import Dev from './serve.vue';
import router from './router'
import LexxUi from '@/entry';
import Clipboard from 'v-clipboard'
import Toasted from 'vue-toasted'

import './style.scss'

Vue.use(LexxUi)
Vue.use(Clipboard)
Vue.use(Toasted, {
    position: 'bottom-right',
    duration: 3000
})
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(Dev),
}).$mount('#app');
