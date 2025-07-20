import { createWebHistory, createRouter } from "vue-router"

import ConfigView from "@/views/Config.vue"
import SplitsView from "@/views/Splits.vue"
import RunsView from "@/views/Runs.vue"

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
  },
  {
    path: "/runs",
    component: RunsView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})