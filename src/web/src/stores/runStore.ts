import { defineStore } from "pinia"
import { WsHandler } from "@/WsHandler.ts"
import type { Run } from "../../../proxy/modules/RunStore.ts"

export const useRunStore = defineStore("runs", {
  state: () => ({
    runs: null as Run[] | null,
  }),
  actions: {
    setRuns(newRuns: Run[]) {
      this.runs = newRuns
    },
    init() {
      WsHandler.getInstance().addEventListener("runs", (e) => {
        const evt = e as CustomEvent<Run[]>
        this.setRuns(evt.detail)
      })
    },
  },
})