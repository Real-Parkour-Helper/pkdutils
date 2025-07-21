<script setup lang="ts">
import type { ColumnDef } from "@tanstack/vue-table"
import { h, computed, ref } from "vue"
import { Button } from "@/components/ui/button"
import DataTable from "@/components/ui/data-table.vue"
import { ArrowUpDown, Info, Share } from "lucide-vue-next"
import type { Run } from "../../../proxy/modules/RunStore"

import { useRunStore } from "@/stores/runStore"
import { LineChart } from "@/components/ui/chart-line"
import { ChartLine, ChartBar } from "lucide-vue-next"
import RunTooltip from "@/components/RunTooltip.vue"
import { BarChart } from "@/components/ui/chart-bar"

const runStore = useRunStore()

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short"
})

function msToTimeString(ms: number): string {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  const milliseconds = Math.floor((ms % 1000) / 100) // tenths
  return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds}`
}

function timeStringToMs(time: string): number {
  const [minSec, ms] = time.split(".")
  const [min, sec] = minSec.split(":").map(Number)
  const msInt = parseInt(ms.padEnd(3, "0")) || 0
  return min * 60_000 + sec * 1_000 + msInt
}

function sortableHeader(label: string, column: any) {
  return h(
      "div",
      { class: "flex items-center gap-1" },
      [
        label,
        h(
            Button,
            {
              variant: "ghost",
              size: "icon",
              class: "p-1",
              onClick: () =>
                  column.toggleSorting(column.getIsSorted() === "asc"),
            },
            () =>
                h(ArrowUpDown, {
                  class: "w-4 h-4",
                })
        )
      ]
  )
}

function capitalizeName(str: string): string {
  return str.split(" ").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join(" ")
}

const columns: ColumnDef<Run>[] = [
  {
    accessorKey: "timestamp",
    header: ({ column }) => sortableHeader("Date", column),
    cell: ({ row }) =>
        dateFormatter.format(row.original.timestamp),
    enableSorting: true,
  },
  {
    accessorKey: "totalTime",
    header: ({ column }) => sortableHeader("Time", column),
    cell: ({ row }) =>
        msToTimeString(row.original.totalTime),
    enableSorting: true,
  },
  {
    id: "calcTime",
    header: ({ column }) =>
        h(
            "div",
            { class: "flex items-center gap-1" },
            [
              "Calc",
              h(Button, {
                variant: "ghost",
                size: "icon",
                class: "p-1",
                onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
              }, () => h(ArrowUpDown, { class: "w-4 h-4" }))
            ]
        ),
    cell: ({ row }) => row.original.calc?.best?.boost_time ?? "N/A",
    accessorFn: row => {
      const str = row.calc?.best?.boost_time
      if (!str) return Infinity
      return timeStringToMs(str)
    },
    sortingFn: "basic",
    enableSorting: true,
  },
  {
    id: "calcTimeBoostless",
    header: ({ column }) =>
        h(
            "div",
            { class: "flex items-center gap-1" },
            [
              "Calc (Boostless)",
              h(Button, {
                variant: "ghost",
                size: "icon",
                class: "p-1",
                onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
              }, () => h(ArrowUpDown, { class: "w-4 h-4" }))
            ]
        ),
    cell: ({ row }) => row.original.calc?.best?.boostless_time ?? "N/A",
    accessorFn: row => {
      const str = row.calc?.best?.boostless_time
      if (!str) return Infinity
      return timeStringToMs(str)
    },
    sortingFn: "basic",
    enableSorting: true,
  },
  {
    accessorKey: "rooms",
    header: "Rooms",
    cell: ({ row }) =>
        row.original.rooms.map(r => capitalizeName(r)).join(" → "),
    enableSorting: false,
  },
  {
    accessorKey: "seed",
    header: "Seed",
    enableSorting: false,
  },
  {
    id: "details",
    header: "",
    cell: ({ row }) =>
        h(Button, {
          variant: "outline",
          size: "icon",
          onClick: () => {
            // Open your dialog/modal for details here
            console.log("Open details for", row.original)
          },
        }, () => [
          h(Info, { class: "w-4 h-4" })
        ]),
    enableSorting: false,
  },
  {
    id: "share",
    header: "",
    cell: ({ row }) =>
        h(Button, {
          variant: "outline",
          size: "icon",
          onClick: () => {
            // You decide what "share" means here
            console.log("Share run", row.original)
          },
        }, () => [
          h(Share, { class: "w-4 h-4" })
        ]),
    enableSorting: false,
  },
]

const chartData = computed(() => {
  if (!runStore.runs) return []

  const runsSorted = [...runStore.runs].sort((a, b) => a.timestamp - b.timestamp)

  let bestBoost: number | null = null
  let bestBoostless: number | null = null

  return runsSorted.map(run => {
    const hadBoost = run.splits.some(split => split.boostStrat !== null)
    const isBoostless = run.splits.every(split => split.boostStrat === null)

    const time = run.totalTime / 1000

    if (hadBoost) {
      if (bestBoost === null || time < bestBoost) {
        bestBoost = time
      }
    }

    if (isBoostless) {
      if (bestBoostless === null || time < bestBoostless) {
        bestBoostless = time
      }
    }

    return {
      date: new Date(run.timestamp).toLocaleDateString(),
      runTime: time,
      boostPB: bestBoost,
      boostlessPB: bestBoostless,
    }
  })
})

const chartCategories = ["runTime", "boostPB", "boostlessPB"]
const chartIndex = "date"
const chartColors = [
  "rgb(59, 130, 246)",   // blue for runTime
  "rgb(16, 185, 129)",   // green for boostPB
  "rgb(239, 68, 68)",    // red for boostlessPB
]

function secToBucketLabel(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `< ${m}:${s.toString().padStart(2, "0")}`
}

/** ceil to next multiple of 5 */
const ceilTo5 = (v: number) => Math.ceil(v / 5) * 5

/** Histogram buckets (grouped bar) */
const barChartData = computed(() => {
  if (!runStore.runs || runStore.runs.length === 0) return []

  // ----- collect raw times (in seconds) ---------------------------------- //
  const timesSec = runStore.runs.map(r => r.totalTime / 1000)

  // Lowest time → round UP to next 5 s ( e.g. 128.4 → 130 )
  const firstUpper = ceilTo5(Math.min(...timesSec))
  const lastUpper  = ceilTo5(Math.max(...timesSec))

  // Build bucket upper-bounds [firstUpper, firstUpper+5, …, lastUpper]
  const uppers: number[] = []
  for (let u = firstUpper; u <= lastUpper; u += 5) uppers.push(u)

  // Pre-initialise result objects
  const buckets = uppers.map(u => ({
    bucket: secToBucketLabel(u), // x-axis label
    Boost: 0,                    // boosted-run count
    Boostless: 0,                // boost-less-run count
  }))

  // ----- classify every run --------------------------------------------- //
  runStore.runs.forEach(run => {
    const t = run.totalTime / 1000
    const bucketIdx = uppers.findIndex(u => t <= u)
    if (bucketIdx === -1) return                                // shouldn’t happen

    const hadBoost = run.splits.some(s => s.boostStrat !== null)
    const isBoostless = run.splits.every(s => s.boostStrat === null)

    if (hadBoost)     buckets[bucketIdx].Boost     += 1
    if (isBoostless)  buckets[bucketIdx].Boostless += 1
  })

  return buckets
})

const barChartCategories = ["Boost", "Boostless"]
const barChartIndex      = "bucket"
const barChartColors     = [
  "rgb(16, 185, 129)", // green  – Boost
  "rgb(239, 68, 68)",  // red    – Boostless
]

const currentChart = ref("line")
</script>

<template>
  <h3 class="text-2xl font-semibold flex items-center gap-2 h-10 mb-2">
    Runs
  </h3>

  <div class="flex flex-row w-full">
    <LineChart
        v-if="currentChart === 'line'"
        :data="chartData"
        :categories="chartCategories"
        :index="chartIndex"
        :colors="chartColors"
        :custom-tooltip="RunTooltip"
    />
    <BarChart
        v-if="currentChart === 'bar'"
        :data="barChartData"
        :categories="barChartCategories"
        :index="barChartIndex"
        :colors="barChartColors"
        type="grouped"
    />
    <div class="p-2 flex flex-col bg-gray-950 border-1 border-gray-700 h-fit rounded-lg">
      <Button size="icon" :class="`m-1 bg-${currentChart === 'line' ? 'white' : 'transparent'} duration-200`"
              @click="currentChart = 'line'">
        <ChartLine :class="`w-4 h-4 text-${currentChart === 'line' ? 'black' : 'white'}`"/>
      </Button>
      <Button size="icon" :class="`m-1 bg-${currentChart === 'bar' ? 'white' : 'transparent'} duration-200`"
              @click="currentChart = 'bar'">
        <ChartBar :class="`w-4 h-4 text-${currentChart === 'bar' ? 'black' : 'white'}`"/>
      </Button>
    </div>
  </div>

  <DataTable v-if="runStore.runs" :columns="columns" :data="runStore.runs"/>
  <span v-else class="text-muted">No runs recorded.</span>
</template>