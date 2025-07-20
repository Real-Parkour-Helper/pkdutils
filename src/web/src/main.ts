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

const configStore = useConfigStore()
const splitsStore = useSplitsStore()

configStore.init()
splitsStore.init()
