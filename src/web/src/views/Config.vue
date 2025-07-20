<script setup lang="ts">
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

import { useConfigStore } from '@/stores/configStore'

const configStore = useConfigStore()
</script>

<template>
  <h3 class="text-2xl font-semibold flex items-center gap-2 h-10">
    Configuration
  </h3>

  <div v-if="configStore.config" class="mt-4 h-full w-full">
    <div class="grid grid-cols-6 gap-4">
      <div class="bg-gray-950 p-2 px-4 rounded-lg border-1 border-gray-700 flex items-center justify-between">
        <Label class="font-semibold">Autosave</Label>
        <Switch :model-value="configStore.config.autosave"
                @update:modelValue="configStore.config.autosave = $event" />
      </div>

      <div class="bg-gray-950 p-2 px-4 rounded-lg border-1 border-gray-700 flex items-center justify-between">
        <Label class="font-semibold">Scoreboard</Label>
        <Select v-model="configStore.config.scoreboard" class="w-32">
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