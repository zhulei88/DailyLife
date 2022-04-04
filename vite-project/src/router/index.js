

import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/haha:id',
      name: 'haha',
      component: () => import('../components/haha.vue'),
      props:true,
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('../components/parent.vue'),
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router