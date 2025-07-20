<script setup lang="ts">
import { Label } from "@/components/ui/label"
import { useSplitsStore } from "@/stores/splitsStore"

const splitsStore = useSplitsStore()

function capitalizeName(str: string): string {
  return str.split(" ").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join(" ")
}
</script>

<template>
  <h3 class="text-2xl font-semibold flex items-center gap-2 h-10">
    Splits
  </h3>

  <div v-if="splitsStore.splits" class="mt-4 h-full w-full">
    <div class="grid grid-cols-5 gap-4">
      <template v-for="(split, name) in splitsStore.splits" :key="name">
        <div
            class="bg-gray-950 p-2 px-4 rounded-lg border border-gray-700 flex flex-col gap-2"
        >
          <div class="flex justify-between">
            <Label class="font-semibold">{{ capitalizeName(name) }}</Label>
            <span class="text-sm text-muted-foreground">
              Boostless:
              <template v-if="split.boostless_time < 600000">
                {{ (split.boostless_time / 1000).toFixed(2) }}s
              </template>
              <template v-else>
                No time recorded
              </template>
            </span>
          </div>

          <div
              v-for="(strat, i) in split.boost_strats"
              :key="i"
              class="flex justify-between pl-2 text-sm"
          >
            <span>{{ strat.name }}</span>
            <span>
              <template v-if="strat.time < 600000">
                {{ (strat.time / 1000).toFixed(2) }}s
                <span class="text-muted-foreground text-xs ml-1">
                  (boost @ {{ (strat.boost_time / 1000).toFixed(2) }}s)
                </span>
              </template>
              <template v-else>
                No time recorded
              </template>
            </span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>