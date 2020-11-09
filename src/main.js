import '@babel/polyfill'
import Vue from 'vue'
import 'mutationobserver-shim'
import './Utils/fliter'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import './registerServiceWorker'
import './directives'
import Toasted from 'vue-toasted';

Vue.config.productionTip = false
Vue.use(Toasted)

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.vm = vm
