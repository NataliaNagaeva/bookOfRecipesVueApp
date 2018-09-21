import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/registration',
      name: 'registration',
      // route level code-splitting
      // this generates a separate chunk (registration.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "registration" */ './views/Registration.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      // route level code-splitting
      // this generates a separate chunk (signIn.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "signIn" */ './views/SignIn.vue')
    }
  ]
})
