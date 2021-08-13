import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.filter("currency", (value) => {
  return value.toLocaleString() + '$'
})

Vue.http.options.root = "https://stock-trader-c0505-default-rtdb.firebaseio.com/"

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
