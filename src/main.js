import Vue from 'vue'
import './plugins/vuetify'
import './plugins/number'
import './plugins/ckeditor'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'font-awesome/css/font-awesome.css'
import { sync } from "vuex-router-sync";
sync(store,router)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
