import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import {
  routes
} from "./router.js"

const router = new VueRouter({
  mode: 'history',
  routes: routes
})
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')