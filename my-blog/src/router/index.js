import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Study from '@/components/Study'
import MESDemo from '@/components/mes/MESDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/study',
      name: 'Study',
      component: Study
    },
    {
      path: '/study/mes-demo',
      name: 'MESDemo',
      component: MESDemo
    }
  ]
})
