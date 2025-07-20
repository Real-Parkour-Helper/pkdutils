import { defineStore } from "pinia"
import { WsHandler } from "@/WsHandler.ts"
import type { SplitsData } from "../../../proxy/data/defaultSplits.ts"

export const useSplitsStore = defineStore("splits", {
  state: () => ({
    splits: null as SplitsData | null,
  }),
  actions: {
    setSplits(newSplits: SplitsData) {
      this.splits = newSplits
    },
    init() {
      WsHandler.getInstance().addEventListener("splits", (e) => {
        const evt = e as CustomEvent<SplitsData>
        this.setSplits(evt.detail)
      })
    },
  },
})