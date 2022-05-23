import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/imprint',
    name: 'imprint',
    meta: {
      title: 'imprint • samuelhertrich'
    },
    component: () => import('../views/ImprintView.vue')
  },
  {
    path: '/data-protection',
    name: 'data-protection',
    meta: {
      title: 'data protection • samuelhertrich'
    },
    component: () => import('../views/DataProtectionView.vue')
  },
  {
    path: '/*',
    name: '404',
    meta: {
      title: '404 • samuelhertrich'
    },
    component: () => import('../views/404View.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const DEFAULT_TITLE = 'samuelhertrich';

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router
