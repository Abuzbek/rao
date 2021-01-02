import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/checkout.vue')
  },
  {
    path:'/women/Complete_skin_care',
    name:'women_Complete_skin_care',
    component: () => import(/* webpackChunkName: "about" */ '../views/woman/Complete_skin_care.vue')
  },
  {
    path:'/women/cosmetic',
    name:'women_cosmetic',
    component: () => import(/* webpackChunkName: "about" */ '../views/woman/cosmetics.vue')
  },
  {
    path:'/women/pack_of_masks',
    name:'women_pack_of_masks',
    component: () => import(/* webpackChunkName: "about" */ '../views/woman/Pack_of_masks.vue')
  },
  {
    path:'/women/hair_care',
    name:'women_hair_care',
    component: () => import(/* webpackChunkName: "about" */ '../views/woman/Hair_care.vue')
  },
  {
    path:'/women/depilatory',
    name:'women_depilatory',
    component: () => import(/* webpackChunkName: "about" */ '../views/woman/depilatory.vue')
  },
  {
    path:'/man/Complete_skin_care',
    name:'man_Complete_skin_care',
    component: () => import(/* webpackChunkName: "about" */ '../views/man/Complete_skin_care.vue')
  },
  {
    path:'/man/cosmetic',
    name:'man_cosmetic',
    component: () => import(/* webpackChunkName: "about" */ '../views/man/cosmetics.vue')
  },
  {
    path:'/man/pack_of_masks',
    name:'man_pack_of_masks',
    component: () => import(/* webpackChunkName: "about" */ '../views/man/Pack_of_masks.vue')
  },
  {
    path:'/man/hair_care',
    name:'man_hair_care',
    component: () => import(/* webpackChunkName: "about" */ '../views/man/Hair_care.vue')
  },
  {
    path:'/man/depilatory',
    name:'man_depilatory',
    component: () => import(/* webpackChunkName: "about" */ '../views/man/depilatory.vue')
  },
  {
    path:'/history',
    name:'history',
    component: () => import(/* webpackChunkName: "about" */ '../views/brend/history.vue')
  },
  {
    path:'/brend',
    name:'brend',
    component: () => import(/* webpackChunkName: "about" */ '../views/brend/brend.vue')
  },
  {
    path:'/community',
    name:'community',
    component: () => import(/* webpackChunkName: "about" */ '../views/community.vue')
  },
  {
    path:'/women/all',
    name:'WomenAll',
    component: () => import(/* webpackChunkName: "about" */ '../views/woman/all.vue')
  },
  {
    path:'/man/all',
    name:'ManAll',
    component: () => import(/* webpackChunkName: "about" */ '../views/man/all.vue')
  },
  {
    path:'/product/:id',
    name:'productId',
    component: () => import(/* webpackChunkName: "about" */ '../views/productId/_id.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
