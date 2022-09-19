import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/benefits',
    name: 'Benefits',
    component: () => import('../views/Benefits.vue'),
  },
  {
    path: '/aware',
    name: 'Aware',
    component: () => import('../views/Aware.vue'),
  },
  {
    path: '/instruction',
    name: 'Instruction',
    component: () => import('../views/Instruction.vue'),
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('../views/Policy.vue'),
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
