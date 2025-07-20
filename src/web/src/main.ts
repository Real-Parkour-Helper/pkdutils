import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

import { router } from "@/router"
import { createPinia } from "pinia"

createApp(App)
  .use(router)
  .use(createPinia())
  .mount("#app")

import { useConfigStore } from "@/stores/configStore"
import { useSplitsStore } from "@/stores/splitsStore"
import { useRunStore } from "@/stores/runStore.ts"

const configStore = useConfigStore()
const splitsStore = useSplitsStore()
const runStore = useRunStore()

configStore.init()
splitsStore.init()
runStore.init()
