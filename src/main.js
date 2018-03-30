import Vue from 'vue';
import VueFullpage from 'vue-fullpage';
import 'vue-fullpage/vue-fullpage.css';
import 'animate.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueFullpage);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
