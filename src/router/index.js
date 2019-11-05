import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Random from '../views/Random.vue'
import Categories from '../views/Categories.vue'
import Alphabet from '../views/Alphabet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/random',
    name: 'random',
    component: Random
  },
  {
    path: '/category',
    name: 'categories',
    component: Categories
  },
   {
    path: '/filterAlph',
    name: 'alphabet',
    component: Alphabet
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
