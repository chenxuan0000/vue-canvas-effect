import Vue from 'vue'
import Router from 'vue-router'
import routerOne from '../components/router-one'
import routerTwo from '../components/router-two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/router_1'
    },
    {
      path: '/router_1',
      component: routerOne
    },
    {
      path: '/router_2',
      component: routerTwo
    }
  ]
})
