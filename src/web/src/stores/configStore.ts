import { defineStore } from "pinia"
import type { Config } from "@/types"
import { WsHandler } from "@/WsHandler.ts"

export const useConfigStore = defineStore("config", {
  state: () => ({
    config: null as Config | null,
  }),
  actions: {
    setConfig(newConfig: Config) {
      this.config = newConfig
    },
    init() {
      WsHandler.getInstance().addEventListener("config", (e) => {
        const evt = e as CustomEvent<Config>
        this.setConfig(evt.detail)
      })
    },
  },
})