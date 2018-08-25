import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false

// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,OPTIONS'
Vue.http.headers.common['Access-Control-Allow-Credentials'] = true

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
