import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from '@/App.vue'
import router from '@/router'

Vue.config.productionTip = false

const vm = new Vue({
  router,
  render: h => h(App)
});
vm.$mount('#app');

export default vm;
