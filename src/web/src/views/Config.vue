<script setup lang="ts">
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { ref } from "vue"
import { WsHandler } from "../WsHandler.ts"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

type Config = {
  autosave: boolean
  scoreboard: string
}

const config = ref<Config | null>(null)

WsHandler.getInstance().addEventListener("config", (e) => {
  const evt = e as CustomEvent<Config>
  config.value = { ...evt.detail }
  console.log("Received config:", config.value)
})

function saveConfig() {
  if (config.value) {
    console.log("Saving config:", config.value)
  }
}
</script>

<template>
  <h3 class="text-2xl font-semibold flex items-center gap-2 h-10">
    Configuration
  </h3>

  <div v-if="config" class="mt-4 h-full w-full">
    <div class="grid grid-cols-6 gap-4">
      <div class="bg-gray-950 p-2 px-4 rounded-lg border-1 border-gray-700 flex items-center justify-between">
        <Label class="font-semibold">Autosave</Label>
        <Switch :model-value="config.autosave" />
      </div>

      <div class="bg-gray-950 p-2 px-4 rounded-lg border-1 border-gray-700 flex items-center justify-between">
        <Label class="font-semibold">Scoreboard</Label>
        <Select v-model="config.scoreboard" class="w-32">
          <SelectTrigger>
            <SelectValue placeholder="Select…" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="allplayers">All Players</SelectItem>
            <SelectItem value="splits">Splits</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>