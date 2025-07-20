import { createWebHistory, createRouter } from "vue-router"

import ConfigView from "@/views/Config.vue"

const routes = [
  {
    path: "/",
    redirect: "/config"
  },
  {
    path: "/config",
    component: ConfigView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})