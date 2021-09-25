import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const PATHS = {
  Home: '/',
  Privacy: '/privacy',
  TermsAndConditions: '/terms-and-conditions',
  Support: '/support',
};

const routes: Array<RouteRecordRaw> = [
  {
    path: PATHS.Home,
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: PATHS.Privacy,
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "privacy" */ '@/views/Privacy.vue'),
  },
  {
    path: PATHS.TermsAndConditions,
    name: 'TermsAndConditions',
    component: () => import(/* webpackChunkName: "terms-and-conditions" */ '@/views/TermsAndConditions.vue'),
  },
  {
    path: PATHS.Support,
    name: 'Support',
    component: () => import(/* webpackChunkName: "support" */ '@/views/Support.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
