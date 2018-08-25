import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

import GithubAuth from './components/GithubAuth.vue'
import GithubCallback from './components/GithubCallback.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: GithubAuth
    },
    {
      path: '/github/callback',
      component: GithubCallback
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
