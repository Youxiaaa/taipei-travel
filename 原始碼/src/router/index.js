import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/Detail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
