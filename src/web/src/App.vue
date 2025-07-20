<script setup lang="ts">
import { Separator } from "@/components/ui/separator"
import { Settings, Timer } from "lucide-vue-next"

import { useColorMode } from "@vueuse/core"

const mode = useColorMode()
mode.value = "auto"
</script>

<template>
  <main class="flex h-screen w-screen flex-row">
    <div class="flex w-64 flex-col border-r p-4">
      <h3 class="text-2xl font-semibold flex items-center gap-2">
        <img src="/pkd.png" class="w-10 inline rounded-lg "/>
        Parkour John
      </h3>

      <nav class="flex flex-col gap-1 mt-4">
        <RouterLink
            to="/config"
            class="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-muted"
            active-class="bg-muted"
        >
          <Settings class="w-4 h-4"/>
          Config
        </RouterLink>

        <RouterLink
            to="/splits"
            class="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-muted"
            active-class="bg-muted"
        >
          <Timer class="w-4 h-4"/>
          Splits
        </RouterLink>
      </nav>
    </div>
    <Separator orientation="vertical"/>
    <div class="h-full w-full p-4">
      <RouterView/>
    </div>
  </main>
</template>

<style scoped>
</style>
