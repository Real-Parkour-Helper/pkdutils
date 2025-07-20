import { createWebHistory, createRouter } from "vue-router"

import ConfigView from "@/views/Config.vue"
import SplitsView from "@/views/Splits.vue"

const routes = [
  {
    path: "/",
    redirect: "/config"
  },
  {
    path: "/config",
    component: ConfigView
  },
  {
    path: "/splits",
    component: SplitsView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})