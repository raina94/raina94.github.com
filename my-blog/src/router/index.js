import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Study from '@/components/Study'
import MESDemo from '@/components/mes/MESDemo'
import TodoList from '@/components/todo/TodoList'
import WorkerList from '@/components/mes/WorkerList'

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
      path: '/mes-demo',
      name: 'MESDemo',
      component: MESDemo
    },
    {
      path: '/todo-example',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/worker-list',
      name: 'WorkerList',
      component: WorkerList
    }
  ]
})
