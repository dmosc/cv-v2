import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/components/HomeMain")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;