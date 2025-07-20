<script setup lang="ts">
import type { ColumnDef } from "@tanstack/vue-table"
import { h } from "vue"
import { Button } from "@/components/ui/button"
import DataTable from "@/components/ui/data-table.vue"
import { ArrowUpDown, Info, Share } from "lucide-vue-next"
import type { Run } from "../../../proxy/modules/RunStore"

import { useRunStore } from "@/stores/runStore"

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
</script>

<template>
  <h3 class="text-2xl font-semibold flex items-center gap-2 h-10 mb-2">
    Runs
  </h3>

  <DataTable v-if="runStore.runs" :columns="columns" :data="runStore.runs"/>
  <span v-else class="text-muted">No runs recorded.</span>
</template>