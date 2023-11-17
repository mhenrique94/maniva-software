// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog.vue'),
      },
      {
        path: 'chat',
        name: 'Chat',
        component: () => import(/* webpackChunkName: "chat" */ '@/views/Chat.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
