import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false

import GithubAuth from './components/GithubAuth.vue'
import GithubCallback from './components/GithubCallback.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'GithubAuth',
      path: '/',
      component: GithubAuth
    },
    {
      name: 'GithubCallback',
      path: '/github/callback',
      component: GithubCallback
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
