import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/components/HomeMain")
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: () => import("@/components/HomeExperience")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;