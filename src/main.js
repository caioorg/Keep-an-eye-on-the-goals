import './assets/scss/index.scss'
import Vue from 'vue'

// Routers
import VueRouter from 'vue-router'
import { routes } from './routers';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

// Render
const app = new Vue({
  router
}).$mount('#app')
