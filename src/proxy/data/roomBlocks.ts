import { RoomName } from "./roomData"

export interface RoomBlockData {
  name: string,
  columns: Record<string, Record<string, string>> // "x,z" -> "y" -> block (all numbers are STRINGS make sure to parse them)
}

export const roomBlocks: Record<RoomName, RoomBlockData> = {
  "around pillars": {
    "name": "around pillars",
    "columns": {
      "-13,22": {
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks"
      },
      "-13,28": {
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "-12,18": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-12,19": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-12,25": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks"
      },
      "-11,18": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-11,19": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-10,15": {
        "8": "spruce_fence",
        "9": "spruce_fence"
      },
      "-10,18": {
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-10,23": {
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks"
      },
      "-10,29": {
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "-9,42": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-9,43": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-8,13": {
        "7": "spruce_fence",
        "8": "spruce_fence"
      },
      "-8,41": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-8,42": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-8,43": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-7,37": {
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay"
      },
      "-7,38": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-7,41": {
        "8": "stained_hardened_clay"
      },
      "-7,42": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-6,18": {
        "4": "stone_slab"
      },
      "-6,37": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-6,38": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay"
      },
      "-5,16": {
        "5": "stone_slab"
      },
      "-5,17": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-5,18": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-5,19": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-5,20": {
        "3": "stone_slab"
      },
      "-5,37": {
        "8": "stained_hardened_clay"
      },
      "-5,38": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-5,42": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-5,43": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-5,44": {
        "6": "stained_hardened_clay"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,12": {
        "7": "spruce_fence",
        "8": "spruce_fence"
      },
      "-4,17": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-4,18": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-4,19": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-4,42": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-4,43": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-4,44": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,17": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-3,18": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-3,19": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-3,20": {
        "2": "stone_slab"
      },
      "-3,32": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "-3,33": {
        "0": "leaves",
        "2": "slime"
      },
      "-3,34": {
        "1": "leaves",
        "2": "slime"
      },
      "-3,43": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,16": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "-2,17": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "-2,18": {
        "1": "stone_slab"
      },
      "-2,32": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime",
        "-1": "leaves"
      },
      "-2,33": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-2,34": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime",
        "-1": "leaves"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,9": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,10": {
        "0": "stained_hardened_clay",
        "7": "stonebrick",
        "8": "stone",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-1,11": {
        "7": "stonebrick",
        "8": "stone"
      },
      "-1,12": {
        "7": "stonebrick",
        "8": "stone"
      },
      "-1,13": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-1,14": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-1,15": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "-1,16": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "-1,17": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "-1,18": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "-1,21": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "-1,22": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "-1,23": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "-1,32": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "-1,33": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime",
        "-1": "leaves"
      },
      "-1,34": {
        "2": "slime"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,8": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,9": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "0,10": {
        "0": "stained_hardened_clay",
        "7": "stonebrick",
        "8": "stone",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "0,11": {
        "7": "stonebrick",
        "8": "stone",
        "9": "light_weighted_pressure_plate"
      },
      "0,12": {
        "7": "stonebrick",
        "8": "stone"
      },
      "0,13": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,14": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "0,15": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "-1": "stained_hardened_clay"
      },
      "0,16": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "0,17": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "0,18": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "0,21": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "0,22": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "0,23": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,9": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,10": {
        "0": "stained_hardened_clay",
        "7": "stonebrick",
        "8": "stone",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,11": {
        "7": "stonebrick",
        "8": "stone"
      },
      "1,12": {
        "7": "stonebrick",
        "8": "stone"
      },
      "1,13": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "1,14": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "1,15": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "1,16": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "1,17": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "1,18": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "1,21": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "1,22": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "1,23": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,16": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "2,17": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "2,18": {
        "1": "stone_slab"
      },
      "2,35": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "2,36": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,17": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "3,18": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "3,19": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "3,20": {
        "2": "stone_slab"
      },
      "3,34": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "3,35": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "3,36": {
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,17": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "4,18": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "4,19": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "4,29": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "4,30": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "4,34": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "4,35": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "4,36": {
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,16": {
        "5": "stone_slab"
      },
      "5,17": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "5,18": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "5,19": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "5,20": {
        "3": "stone_slab"
      },
      "5,29": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "5,30": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "5,31": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "5,35": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "5,36": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "6,18": {
        "4": "stone_slab"
      },
      "6,30": {
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "6,31": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "7,36": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "7,37": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "8,31": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "8,32": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "8,35": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "8,36": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "8,37": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "9,31": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "9,32": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "9,33": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "9,36": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "9,37": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "10,29": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "10,30": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "10,32": {
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "10,33": {
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "11,29": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "11,30": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "11,31": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "11,35": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "11,36": {
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "12,30": {
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "12,31": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "12,34": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "12,35": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "12,36": {
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "13,34": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "13,35": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      }
    }
  },
  "blocks": {
    "name": "blocks",
    "columns": {
      "-14,20": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick"
      },
      "-14,21": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick"
      },
      "-13,20": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick"
      },
      "-13,21": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick"
      },
      "-11,16": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "9": "stonebrick"
      },
      "-11,17": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "9": "stonebrick"
      },
      "-11,32": {
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-11,33": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-11,34": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-10,16": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "9": "stonebrick"
      },
      "-10,17": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "9": "stonebrick"
      },
      "-10,27": {
        "11": "stonebrick",
        "12": "stone",
        "13": "stone",
        "14": "stonebrick"
      },
      "-10,28": {
        "11": "stonebrick",
        "12": "stone",
        "13": "stone",
        "14": "stonebrick"
      },
      "-10,32": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-10,33": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-10,34": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-9,23": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "-9,24": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "-9,27": {
        "11": "stonebrick",
        "12": "stone",
        "13": "stone",
        "14": "stonebrick"
      },
      "-9,28": {
        "11": "stonebrick",
        "12": "stone",
        "13": "stone",
        "14": "stonebrick"
      },
      "-9,33": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-9,34": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-8,23": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "-8,24": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "-8,25": {
        "9": "cobblestone_wall"
      },
      "-8,26": {
        "9": "cobblestone_wall"
      },
      "-7,24": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick"
      },
      "-7,25": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick"
      },
      "-7,26": {
        "8": "cobblestone_wall"
      },
      "-6,8": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-6,9": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-6,15": {
        "7": "stonebrick",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick"
      },
      "-6,16": {
        "7": "stonebrick",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick"
      },
      "-6,23": {
        "15": "cobblestone_wall"
      },
      "-6,24": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "11": "light_weighted_pressure_plate"
      },
      "-6,25": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick"
      },
      "-6,36": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-6,37": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-6,38": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-5,8": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-5,9": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-5,11": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-1": "stonebrick"
      },
      "-5,12": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-1": "stonebrick"
      },
      "-5,15": {
        "7": "stonebrick",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick"
      },
      "-5,16": {
        "7": "stonebrick",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick"
      },
      "-5,24": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "-5,25": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "-5,26": {
        "7": "cobblestone_wall"
      },
      "-5,36": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-5,37": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-5,38": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,11": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-1": "stonebrick"
      },
      "-4,12": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-1": "stonebrick"
      },
      "-4,20": {
        "12": "stonebrick",
        "13": "stone",
        "14": "stone",
        "15": "stonebrick"
      },
      "-4,21": {
        "12": "stonebrick",
        "13": "stone",
        "14": "stone",
        "15": "stonebrick"
      },
      "-4,24": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "-4,25": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "-4,26": {
        "7": "stonebrick"
      },
      "-4,36": {
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-4,37": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,8": {
        "0": "stonebrick",
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-3,9": {
        "0": "stonebrick",
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-3,20": {
        "12": "stonebrick",
        "13": "stone",
        "14": "stone",
        "15": "stonebrick"
      },
      "-3,21": {
        "12": "stonebrick",
        "13": "stone",
        "14": "stone",
        "15": "stonebrick"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,8": {
        "0": "stonebrick",
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,9": {
        "0": "stonebrick",
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,11": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "-2,12": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "-2,14": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "9": "stonebrick"
      },
      "-2,15": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "9": "stonebrick"
      },
      "-2,26": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stonebrick"
      },
      "-2,27": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stonebrick"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,11": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "-1,12": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "-1,14": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "9": "stonebrick"
      },
      "-1,15": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "9": "stonebrick"
      },
      "-1,26": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stonebrick"
      },
      "-1,27": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stonebrick"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,19": {
        "11": "stonebrick",
        "12": "stone",
        "13": "stone",
        "14": "stonebrick"
      },
      "0,20": {
        "11": "stonebrick",
        "12": "stone",
        "13": "stone",
        "14": "stonebrick"
      },
      "0,34": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "0,35": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,19": {
        "11": "stonebrick",
        "12": "stone",
        "13": "stone",
        "14": "stonebrick"
      },
      "1,20": {
        "11": "stonebrick",
        "12": "stone",
        "13": "stone",
        "14": "stonebrick"
      },
      "1,34": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "1,35": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "1,36": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "1,39": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "1,40": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,9": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "2,10": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "2,12": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick"
      },
      "2,13": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick"
      },
      "2,25": {
        "9": "stonebrick",
        "10": "stone",
        "11": "stone",
        "12": "stonebrick"
      },
      "2,26": {
        "9": "stonebrick",
        "10": "stone",
        "11": "stone",
        "12": "stonebrick"
      },
      "2,34": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "2,35": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "2,36": {
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "2,39": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "2,40": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "2,41": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,9": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "3,10": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "3,12": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick"
      },
      "3,13": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick"
      },
      "3,25": {
        "9": "stonebrick",
        "10": "stone",
        "11": "stone",
        "12": "stonebrick"
      },
      "3,26": {
        "9": "stonebrick",
        "10": "stone",
        "11": "stone",
        "12": "stonebrick"
      },
      "3,39": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "3,40": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "3,41": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,22": {
        "10": "stonebrick",
        "11": "stone",
        "12": "stone",
        "13": "stonebrick"
      },
      "4,23": {
        "10": "stonebrick",
        "11": "stone",
        "12": "stone",
        "13": "stonebrick"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,7": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick"
      },
      "5,8": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick"
      },
      "5,22": {
        "10": "stonebrick",
        "11": "stone",
        "12": "stone",
        "13": "stonebrick"
      },
      "5,23": {
        "10": "stonebrick",
        "11": "stone",
        "12": "stone",
        "13": "stonebrick"
      },
      "5,34": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "5,35": {
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "6,7": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick"
      },
      "6,8": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick"
      },
      "6,13": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "6,14": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "6,33": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "6,34": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "6,35": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "7,13": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "7,14": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "7": "stonebrick"
      },
      "7,18": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "7,19": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "7,33": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "7,34": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "7,35": {
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "7,40": {
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "7,41": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay"
      },
      "7,42": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "8,18": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "8,19": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "8,40": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay"
      },
      "8,41": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay"
      },
      "8,42": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "9,7": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "9,8": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "9,40": {
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "9,41": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "10,7": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "10,8": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stonebrick"
      },
      "10,14": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone",
        "6": "stonebrick"
      },
      "10,15": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone",
        "6": "stonebrick"
      },
      "11,14": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone",
        "6": "stonebrick"
      },
      "11,15": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone",
        "6": "stonebrick"
      },
      "11,17": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "11,18": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "11,19": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stonebrick"
      },
      "11,21": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick"
      },
      "11,22": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick"
      },
      "11,35": {
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "11,36": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "11,37": {
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "12,17": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "12,18": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "12,19": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stonebrick"
      },
      "12,21": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick"
      },
      "12,22": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick"
      },
      "12,35": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "12,36": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "12,37": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "13,10": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "13,11": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "13,36": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "13,37": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "14,10": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "14,11": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone",
        "3": "stonebrick"
      },
      "14,14": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-1": "stonebrick"
      },
      "14,15": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-1": "stonebrick"
      },
      "15,14": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-1": "stonebrick"
      },
      "15,15": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-1": "stonebrick"
      }
    }
  },
  "castle wall": {
    "name": "castle wall",
    "columns": {
      "-15,15": {
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "-15,16": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "-2": "planks",
        "-1": "planks"
      },
      "-15,17": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "-4": "planks",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "-15,18": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stone",
        "11": "stone",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "-15,19": {
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "-15,23": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-15,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-15,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-15,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-15,27": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-14,15": {
        "11": "stone_brick_stairs"
      },
      "-14,16": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "-14,17": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "-4": "planks",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "-14,18": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "-14,19": {
        "11": "stone_brick_stairs"
      },
      "-14,23": {
        "10": "stone_brick_stairs"
      },
      "-14,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-14,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-14,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-14,27": {
        "10": "stone_brick_stairs"
      },
      "-13,15": {
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "-13,16": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "-1": "planks"
      },
      "-13,17": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "-2": "planks",
        "-1": "planks"
      },
      "-13,18": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "-1": "planks"
      },
      "-13,19": {
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "-13,23": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-13,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-13,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-13,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-13,27": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-12,15": {
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "-12,16": {
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "-12,17": {
        "11": "stone_brick_stairs"
      },
      "-12,18": {
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "-12,19": {
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "-12,23": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-12,24": {
        "7": "stone_brick_stairs",
        "10": "stone_brick_stairs"
      },
      "-12,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "10": "stone_brick_stairs",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-12,26": {
        "7": "stone_brick_stairs",
        "10": "stone_brick_stairs"
      },
      "-12,27": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-11,24": {
        "7": "stone_brick_stairs"
      },
      "-11,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "spruce_fence",
        "-4": "spruce_fence",
        "-3": "dark_oak_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "-11,26": {
        "7": "stone_brick_stairs"
      },
      "-10,24": {
        "7": "stone_brick_stairs"
      },
      "-10,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "spruce_fence",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "dark_oak_fence",
        "-4": "dark_oak_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "-10,26": {
        "7": "stone_brick_stairs"
      },
      "-9,12": {
        "8": "spruce_fence",
        "9": "spruce_fence",
        "10": "planks",
        "11": "planks",
        "12": "planks"
      },
      "-9,24": {
        "7": "stone_brick_stairs"
      },
      "-9,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "spruce_fence",
        "9": "planks",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "dark_oak_fence",
        "-4": "spruce_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "-9,26": {
        "7": "stone_brick_stairs"
      },
      "-8,24": {
        "7": "stone_brick_stairs"
      },
      "-8,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "spruce_fence",
        "9": "planks",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "cobblestone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-8,26": {
        "7": "stone_brick_stairs"
      },
      "-7,24": {
        "7": "stone_brick_stairs"
      },
      "-7,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "spruce_fence",
        "9": "planks",
        "10": "log",
        "11": "log",
        "12": "wooden_slab",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-7,26": {
        "7": "stone_brick_stairs"
      },
      "-6,11": {
        "11": "spruce_fence",
        "12": "planks",
        "13": "planks"
      },
      "-6,24": {
        "7": "stone_brick_stairs"
      },
      "-6,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "spruce_fence",
        "9": "planks",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "spruce_fence",
        "-4": "spruce_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "-6,26": {
        "7": "stone_brick_stairs"
      },
      "-5,14": {
        "9": "spruce_fence",
        "10": "spruce_fence",
        "11": "spruce_fence",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "-5,24": {
        "7": "stone_brick_stairs"
      },
      "-5,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "spruce_fence",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "spruce_fence",
        "9": "planks",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "dark_oak_fence",
        "-4": "spruce_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "-5,26": {
        "7": "stone_brick_stairs"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,24": {
        "7": "stone_brick_stairs"
      },
      "-4,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "dark_oak_fence",
        "-6": "spruce_fence",
        "-5": "spruce_fence",
        "-4": "dark_oak_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "-4,26": {
        "7": "stone_brick_stairs"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,24": {
        "7": "stone_brick_stairs"
      },
      "-3,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-3,26": {
        "7": "stone_brick_stairs"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,4": {
        "0": "log"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,13": {
        "12": "spruce_fence",
        "13": "spruce_fence",
        "14": "planks",
        "15": "planks"
      },
      "-2,23": {
        "15": "stone_brick_stairs",
        "16": "stone"
      },
      "-2,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "15": "stone_brick_stairs",
        "16": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "15": "stone_brick_stairs",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "15": "stone_brick_stairs",
        "16": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,27": {
        "15": "stone_brick_stairs",
        "16": "stone"
      },
      "-2,39": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-2,40": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-2,41": {
        "7": "stone_brick_stairs"
      },
      "-2,42": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-2,43": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,1": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,2": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,3": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,7": {
        "0": "spruce_fence"
      },
      "-1,10": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,11": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "cobblestone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,12": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "stone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,13": {
        "0": "stone",
        "1": "stone_slab",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,14": {
        "-2": "stone_brick_stairs"
      },
      "-1,15": {
        "-2": "stone_brick_stairs"
      },
      "-1,16": {
        "-2": "stone_brick_stairs"
      },
      "-1,17": {
        "-2": "stone_brick_stairs"
      },
      "-1,18": {
        "-2": "stone_brick_stairs"
      },
      "-1,19": {
        "-2": "stone_brick_stairs"
      },
      "-1,20": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,21": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,22": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "cobblestone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,23": {
        "15": "stone_brick_stairs",
        "16": "stone"
      },
      "-1,24": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone"
      },
      "-1,25": {
        "0": "stone",
        "1": "stone_slab",
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "13": "stone_brick_stairs",
        "14": "stone",
        "15": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,26": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone"
      },
      "-1,27": {
        "15": "stone_brick_stairs",
        "-2": "stone_brick_stairs"
      },
      "-1,28": {
        "0": "stonebrick",
        "1": "stone_slab",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone",
        "-3": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-1,29": {
        "0": "stonebrick",
        "1": "stone_slab",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stonebrick"
      },
      "-1,30": {
        "0": "stonebrick",
        "1": "stone_slab",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,31": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "-1,32": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "-1,33": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "-1,34": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "-1,35": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "-1,36": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "-1,37": {
        "0": "stonebrick",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-1,38": {
        "0": "stonebrick",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stonebrick"
      },
      "-1,39": {
        "0": "stonebrick",
        "7": "stone_brick_stairs",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stonebrick"
      },
      "-1,40": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,41": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,42": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,43": {
        "7": "stone_brick_stairs"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,1": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,2": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,3": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,4": {
        "0": "planks"
      },
      "0,7": {
        "0": "spruce_fence"
      },
      "0,10": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,11": {
        "0": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,12": {
        "0": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,13": {
        "0": "stone",
        "1": "stone_slab",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,14": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,15": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,16": {
        "14": "spruce_fence",
        "15": "planks",
        "16": "planks",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,17": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,18": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,19": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,20": {
        "0": "stone",
        "11": "spruce_fence",
        "12": "spruce_fence",
        "13": "planks",
        "14": "planks",
        "15": "planks",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,21": {
        "0": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,22": {
        "0": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,23": {
        "15": "stone_brick_stairs",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone"
      },
      "0,24": {
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone"
      },
      "0,25": {
        "0": "stone",
        "1": "stone_slab",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,26": {
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone"
      },
      "0,27": {
        "15": "stone_brick_stairs",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone"
      },
      "0,28": {
        "0": "stonebrick",
        "1": "stone_slab",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,29": {
        "0": "stonebrick",
        "1": "stone_slab",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,30": {
        "0": "stonebrick",
        "1": "stone_slab",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,31": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,32": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,33": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,34": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,35": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,36": {
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "slime"
      },
      "0,37": {
        "0": "stonebrick",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,38": {
        "0": "stonebrick",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,39": {
        "0": "stonebrick",
        "7": "stone_brick_stairs",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,40": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,41": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,42": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,43": {
        "7": "stone_brick_stairs"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,1": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,2": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,3": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,7": {
        "0": "spruce_fence"
      },
      "1,10": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,11": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "stone",
        "-5": "stone",
        "-4": "cobblestone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,12": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,13": {
        "0": "stone",
        "1": "stone_slab",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,14": {
        "-2": "stone_brick_stairs"
      },
      "1,15": {
        "-2": "stone_brick_stairs"
      },
      "1,16": {
        "-2": "stone_brick_stairs"
      },
      "1,17": {
        "-2": "stone_brick_stairs"
      },
      "1,18": {
        "-2": "stone_brick_stairs"
      },
      "1,19": {
        "-2": "stone_brick_stairs"
      },
      "1,20": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,21": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,22": {
        "0": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "cobblestone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,23": {
        "15": "stone_brick_stairs",
        "16": "stone"
      },
      "1,24": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone"
      },
      "1,25": {
        "0": "stone",
        "1": "stone_slab",
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,26": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone"
      },
      "1,27": {
        "15": "stone_brick_stairs",
        "-2": "stone_brick_stairs"
      },
      "1,28": {
        "0": "stonebrick",
        "1": "stone_slab",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "1,29": {
        "0": "stonebrick",
        "1": "stone_slab",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,30": {
        "0": "stonebrick",
        "1": "stone_slab",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stonebrick"
      },
      "1,31": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "1,32": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "1,33": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "1,34": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "1,35": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "1,36": {
        "-3": "stone_brick_stairs",
        "-2": "slime"
      },
      "1,37": {
        "0": "stonebrick",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stonebrick"
      },
      "1,38": {
        "0": "stonebrick",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stonebrick"
      },
      "1,39": {
        "0": "stonebrick",
        "7": "stone_brick_stairs",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "1,40": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,41": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,42": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,43": {
        "7": "stone_brick_stairs"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,4": {
        "0": "log"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,23": {
        "15": "stone_brick_stairs",
        "16": "stone"
      },
      "2,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "15": "stone_brick_stairs",
        "16": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "2,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "15": "stone_brick_stairs",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "2,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "15": "stone_brick_stairs",
        "16": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "2,27": {
        "15": "stone_brick_stairs",
        "16": "stone"
      },
      "2,39": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "2,40": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "2,41": {
        "7": "stone_brick_stairs"
      },
      "2,42": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "2,43": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,24": {
        "7": "stone_brick_stairs"
      },
      "3,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "3,26": {
        "7": "stone_brick_stairs"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,24": {
        "7": "stone_brick_stairs",
        "10": "stained_glass_pane"
      },
      "4,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "spruce_fence",
        "9": "spruce_fence",
        "10": "stained_glass_pane",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "spruce_fence",
        "-4": "spruce_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "4,26": {
        "7": "stone_brick_stairs",
        "10": "stained_glass_pane"
      },
      "4,38": {
        "0": "spruce_fence",
        "1": "planks",
        "-1": "spruce_fence"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,24": {
        "7": "stone_brick_stairs"
      },
      "5,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "spruce_fence",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "dark_oak_fence",
        "-4": "dark_oak_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "5,26": {
        "7": "stone_brick_stairs"
      },
      "5,38": {
        "0": "spruce_fence",
        "1": "planks",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "6,24": {
        "7": "stone_brick_stairs"
      },
      "6,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "spruce_fence",
        "-4": "spruce_fence",
        "-3": "dark_oak_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "6,26": {
        "7": "stone_brick_stairs"
      },
      "7,24": {
        "7": "stone_brick_stairs"
      },
      "7,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "7,26": {
        "7": "stone_brick_stairs"
      },
      "8,24": {
        "7": "stone_brick_stairs"
      },
      "8,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "spruce_fence",
        "9": "spruce_fence",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "cobblestone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "8,26": {
        "7": "stone_brick_stairs"
      },
      "8,36": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "8,37": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "8,38": {
        "2": "stone_brick_stairs"
      },
      "8,39": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "8,40": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "9,24": {
        "7": "stone_brick_stairs"
      },
      "9,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "dark_oak_fence",
        "-4": "dark_oak_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "9,26": {
        "7": "stone_brick_stairs"
      },
      "9,36": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "9,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "9,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "9,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "9,40": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "10,24": {
        "7": "stone_brick_stairs"
      },
      "10,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "spruce_fence",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "dark_oak_fence",
        "-4": "spruce_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "10,26": {
        "7": "stone_brick_stairs"
      },
      "10,36": {
        "2": "stone_brick_stairs"
      },
      "10,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "10,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "10,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "10,40": {
        "2": "stone_brick_stairs"
      },
      "11,24": {
        "7": "stone_brick_stairs"
      },
      "11,25": {
        "0": "spruce_fence",
        "1": "spruce_fence",
        "2": "spruce_fence",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "dark_oak_fence",
        "-6": "dark_oak_fence",
        "-5": "spruce_fence",
        "-4": "spruce_fence",
        "-3": "dark_oak_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "11,26": {
        "7": "stone_brick_stairs"
      },
      "11,36": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "11,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "11,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "11,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "11,40": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "12,23": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "12,24": {
        "7": "stone_brick_stairs",
        "10": "stone_brick_stairs"
      },
      "12,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "10": "stone_brick_stairs",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "12,26": {
        "7": "stone_brick_stairs",
        "10": "stone_brick_stairs"
      },
      "12,27": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "12,36": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "12,37": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "12,38": {
        "2": "stone_brick_stairs"
      },
      "12,39": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "12,40": {
        "2": "stone_brick_stairs",
        "3": "stone"
      },
      "13,23": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "13,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "13,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "light_weighted_pressure_plate",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "13,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "13,27": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "14,23": {
        "10": "stone_brick_stairs"
      },
      "14,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "14,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "ladder",
        "8": "ladder",
        "9": "ladder",
        "10": "ladder",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "14,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "14,27": {
        "10": "stone_brick_stairs"
      },
      "14,29": {
        "5": "planks"
      },
      "14,30": {
        "4": "planks",
        "5": "planks"
      },
      "14,33": {
        "3": "planks",
        "4": "planks"
      },
      "14,34": {
        "4": "planks"
      },
      "15,23": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "15,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "15,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "15,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "15,27": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "15,29": {
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "15,30": {
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "15,33": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "15,34": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      }
    }
  },
  "early 3+1": {
    "name": "early 3+1",
    "columns": {
      "-12,16": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-12,17": {
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-12,18": {
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-12,21": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "-12,22": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "-11,16": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-11,17": {
        "12": "stained_hardened_clay",
        "13": "dirt",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-11,18": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay"
      },
      "-11,21": {
        "13": "dirt",
        "14": "stained_hardened_clay"
      },
      "-11,22": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "-10,16": {
        "15": "stained_hardened_clay"
      },
      "-10,17": {
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-10,31": {
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay",
        "22": "dirt",
        "23": "stained_hardened_clay"
      },
      "-10,32": {
        "21": "dirt",
        "22": "dirt",
        "23": "stained_hardened_clay"
      },
      "-9,23": {
        "13": "stained_hardened_clay"
      },
      "-9,24": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-9,25": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-9,30": {
        "20": "stained_hardened_clay",
        "21": "dirt",
        "22": "dirt",
        "23": "stained_hardened_clay"
      },
      "-9,31": {
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay",
        "23": "stained_hardened_clay"
      },
      "-9,32": {
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay",
        "23": "stained_hardened_clay"
      },
      "-8,23": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-8,24": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-8,25": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-8,28": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-8,29": {
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-8,30": {
        "22": "dirt",
        "23": "dirt",
        "24": "stained_hardened_clay"
      },
      "-8,31": {
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay",
        "22": "dirt",
        "23": "stained_hardened_clay",
        "24": "stained_hardened_clay"
      },
      "-8,32": {
        "22": "stained_hardened_clay",
        "23": "dirt",
        "24": "stained_hardened_clay"
      },
      "-7,14": {
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-7,15": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay"
      },
      "-7,16": {
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-7,27": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-7,28": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "-7,29": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "-7,30": {
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay",
        "23": "stained_hardened_clay",
        "24": "stained_hardened_clay"
      },
      "-7,31": {
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay",
        "23": "stained_hardened_clay",
        "24": "stained_hardened_clay"
      },
      "-7,32": {
        "21": "stained_hardened_clay",
        "22": "dirt",
        "23": "dirt",
        "24": "stained_hardened_clay"
      },
      "-7,33": {
        "21": "dirt",
        "22": "stained_hardened_clay"
      },
      "-6,14": {
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay"
      },
      "-6,15": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay"
      },
      "-6,16": {
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-6,27": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-6,28": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "-6,29": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-6,30": {
        "22": "dirt",
        "23": "dirt",
        "24": "stained_hardened_clay"
      },
      "-6,31": {
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay",
        "23": "dirt",
        "24": "stained_hardened_clay"
      },
      "-6,33": {
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "dirt",
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay"
      },
      "-6,34": {
        "20": "stained_hardened_clay",
        "21": "dirt",
        "22": "stained_hardened_clay"
      },
      "-5,14": {
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-5,15": {
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-5,32": {
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay"
      },
      "-5,33": {
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay"
      },
      "-5,34": {
        "19": "stained_hardened_clay",
        "20": "dirt",
        "21": "dirt",
        "22": "stained_hardened_clay"
      },
      "-5,36": {
        "21": "stained_hardened_clay",
        "22": "dirt",
        "23": "stained_hardened_clay",
        "24": "stained_hardened_clay"
      },
      "-5,37": {
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay",
        "22": "dirt",
        "23": "dirt",
        "24": "stained_hardened_clay"
      },
      "-5,40": {
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "dirt",
        "22": "stained_hardened_clay"
      },
      "-5,41": {
        "20": "dirt",
        "21": "dirt",
        "22": "stained_hardened_clay"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,32": {
        "20": "dirt",
        "21": "dirt",
        "22": "stained_hardened_clay"
      },
      "-4,33": {
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "dirt",
        "22": "stained_hardened_clay"
      },
      "-4,36": {
        "22": "dirt",
        "23": "dirt",
        "24": "stained_hardened_clay"
      },
      "-4,37": {
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay",
        "23": "stained_hardened_clay",
        "24": "stained_hardened_clay"
      },
      "-4,39": {
        "19": "stained_hardened_clay",
        "20": "dirt",
        "21": "dirt",
        "22": "stained_hardened_clay"
      },
      "-4,40": {
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay"
      },
      "-4,41": {
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,39": {
        "20": "stained_hardened_clay",
        "21": "dirt",
        "22": "stained_hardened_clay"
      },
      "-3,40": {
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "dirt",
        "21": "stained_hardened_clay",
        "22": "stained_hardened_clay"
      },
      "-3,41": {
        "21": "dirt",
        "22": "stained_hardened_clay"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,15": {
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-2,16": {
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-2,28": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "-2,29": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "-2,30": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "-2,31": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "-2,32": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,15": {
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay"
      },
      "-1,16": {
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay"
      },
      "-1,17": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-1,28": {
        "9": "stone_brick_stairs",
        "10": "stone_brick_stairs",
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "-1,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-1,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-1,31": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "18": "stained_hardened_clay",
        "19": "dirt",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay"
      },
      "-1,32": {
        "9": "stone_brick_stairs",
        "10": "stone_brick_stairs",
        "11": "stone_brick_stairs",
        "12": "stone",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "-1,40": {
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "-1,41": {
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "dirt",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "-1,42": {
        "18": "stained_hardened_clay",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,15": {
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "0,16": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay"
      },
      "0,17": {
        "15": "dirt",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "0,21": {
        "16": "dirt",
        "17": "dirt",
        "18": "stained_hardened_clay"
      },
      "0,22": {
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay"
      },
      "0,23": {
        "17": "dirt",
        "18": "stained_hardened_clay"
      },
      "0,25": {
        "20": "ladder",
        "21": "ladder"
      },
      "0,26": {
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "0,27": {
        "19": "stained_hardened_clay",
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "0,28": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "0,29": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "0,30": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "0,31": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "0,32": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay"
      },
      "0,40": {
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "0,41": {
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "0,42": {
        "17": "stained_hardened_clay",
        "18": "dirt",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,7": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "1,21": {
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "dirt",
        "18": "stained_hardened_clay"
      },
      "1,22": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay"
      },
      "1,23": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay"
      },
      "1,25": {
        "20": "ladder",
        "21": "ladder"
      },
      "1,26": {
        "19": "stained_hardened_clay",
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "1,27": {
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "1,28": {
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "1,40": {
        "18": "dirt",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "1,41": {
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,7": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "2,8": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "2,9": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "2,22": {
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "dirt",
        "18": "stained_hardened_clay"
      },
      "2,23": {
        "16": "stained_hardened_clay",
        "17": "dirt",
        "18": "stained_hardened_clay"
      },
      "2,26": {
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay"
      },
      "2,27": {
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,7": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "3,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "3,9": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,11": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "5,12": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "5,17": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "5,18": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "5,23": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "5,24": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "5,25": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "5,28": {
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "5,29": {
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "5,30": {
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "light_weighted_pressure_plate"
      },
      "5,31": {
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "5,32": {
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "6,11": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "6,12": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,13": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,16": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "6,17": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "6,18": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "6,19": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "6,23": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "6,24": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "6,25": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "6,28": {
        "10": "stone_brick_stairs",
        "11": "stone_brick_stairs",
        "12": "stone_brick_stairs",
        "13": "stone"
      },
      "6,29": {
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "6,30": {
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "6,31": {
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "6,32": {
        "10": "stone_brick_stairs",
        "11": "stone_brick_stairs",
        "12": "stone_brick_stairs",
        "13": "stone"
      },
      "7,11": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "7,12": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "7,13": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "7,15": {
        "7": "stained_hardened_clay"
      },
      "7,16": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "7,17": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "7,18": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "7,19": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "7,20": {
        "6": "stained_hardened_clay"
      },
      "7,24": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "7,25": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "7,28": {
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "7,29": {
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "7,30": {
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "7,31": {
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "7,32": {
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "8,6": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "8,7": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,8": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay"
      },
      "8,14": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "8,15": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "8,16": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "8,17": {
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "8,18": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "8,19": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "8,20": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "9,6": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,8": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,13": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "9,14": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "9,15": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,16": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,17": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "9,18": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "9,19": {
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "9,20": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "9,21": {
        "4": "stained_hardened_clay"
      },
      "10,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,8": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "10,12": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "10,13": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,15": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,16": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,17": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "10,18": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "10,19": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "10,20": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "10,21": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "10,22": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "10,28": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "10,29": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "10,30": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "10,31": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "10,32": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "11,12": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "11,13": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "11,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "11,15": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "11,16": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "11,17": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "11,19": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "11,20": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "11,21": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "11,22": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "11,28": {
        "9": "stone_brick_stairs",
        "10": "stone_brick_stairs",
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "11,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "11,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "11,31": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "11,32": {
        "9": "stone_brick_stairs",
        "10": "stone_brick_stairs",
        "11": "stone_brick_stairs",
        "12": "stone"
      },
      "12,12": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "12,13": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "12,14": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "12,15": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "12,16": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "12,20": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "12,21": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "12,22": {
        "4": "stained_hardened_clay"
      },
      "12,28": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "12,29": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "12,30": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "12,31": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "12,32": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "13,13": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "13,14": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "13,24": {
        "9": "stone"
      },
      "13,25": {
        "9": "stone"
      },
      "13,26": {
        "9": "stone"
      },
      "13,27": {
        "9": "stone"
      },
      "13,35": {
        "11": "stone"
      },
      "13,36": {
        "11": "stone"
      },
      "13,37": {
        "11": "stone"
      },
      "13,38": {
        "11": "stone"
      },
      "13,39": {
        "11": "stone"
      },
      "14,15": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "14,16": {
        "8": "stone"
      },
      "14,17": {
        "8": "stone"
      },
      "14,18": {
        "8": "stone"
      },
      "14,19": {
        "8": "stone"
      },
      "14,20": {
        "8": "stone"
      },
      "14,21": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "14,24": {
        "8": "stone_brick_stairs",
        "9": "stone"
      },
      "14,25": {
        "9": "stone"
      },
      "14,26": {
        "9": "stone"
      },
      "14,27": {
        "8": "stone_brick_stairs",
        "9": "stone"
      },
      "14,30": {
        "9": "stone_brick_stairs",
        "10": "stone"
      },
      "14,31": {
        "10": "stone"
      },
      "14,32": {
        "9": "stone_brick_stairs",
        "10": "stone"
      },
      "14,35": {
        "11": "stone"
      },
      "14,36": {
        "11": "stone"
      },
      "14,37": {
        "11": "stone"
      },
      "14,38": {
        "11": "stone"
      },
      "14,39": {
        "11": "stone"
      },
      "15,15": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "15,16": {
        "8": "stone"
      },
      "15,17": {
        "8": "stone"
      },
      "15,18": {
        "8": "stone"
      },
      "15,19": {
        "8": "stone"
      },
      "15,20": {
        "8": "stone"
      },
      "15,21": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "15,24": {
        "7": "stone_brick_stairs",
        "8": "stone",
        "9": "stone"
      },
      "15,25": {
        "9": "stone"
      },
      "15,26": {
        "9": "stone"
      },
      "15,27": {
        "7": "stone_brick_stairs",
        "8": "stone",
        "9": "stone"
      },
      "15,30": {
        "8": "stone_brick_stairs",
        "9": "stone",
        "10": "stone"
      },
      "15,31": {
        "10": "stone"
      },
      "15,32": {
        "8": "stone_brick_stairs",
        "9": "stone",
        "10": "stone"
      },
      "15,35": {
        "10": "stone",
        "11": "stone"
      },
      "15,36": {
        "11": "stone"
      },
      "15,37": {
        "11": "stone"
      },
      "15,38": {
        "11": "stone"
      },
      "15,39": {
        "10": "stone",
        "11": "stone"
      }
    }
  },
  "fence squeeze": {
    "name": "fence squeeze",
    "columns": {
      "-15,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,12": {
        "0": "stone",
        "1": "planks",
        "5": "web",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,13": {
        "0": "stone",
        "1": "planks",
        "4": "web",
        "5": "web",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,14": {
        "0": "stone",
        "1": "planks",
        "5": "web",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,17": {
        "-1": "oak_stairs"
      },
      "-15,21": {
        "-1": "oak_stairs"
      },
      "-15,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,24": {
        "0": "planks",
        "1": "spruce_fence",
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,25": {
        "0": "stone",
        "1": "planks",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,26": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,5": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-14,6": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-14,9": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "-14,10": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "6": "vine"
      },
      "-14,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,12": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,13": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,14": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,17": {
        "-1": "wooden_slab"
      },
      "-14,21": {
        "-1": "wooden_slab"
      },
      "-14,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,24": {
        "0": "stone",
        "1": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,25": {
        "0": "stone",
        "1": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,26": {
        "0": "stone",
        "1": "planks",
        "2": "spruce_fence",
        "6": "spruce_fence",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,5": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-13,6": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-13,9": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "-13,10": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "6": "vine"
      },
      "-13,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,12": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,13": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,14": {
        "0": "stone",
        "1": "oak_stairs",
        "6": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,15": {
        "0": "oak_stairs",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,17": {
        "-1": "wooden_slab"
      },
      "-13,21": {
        "-1": "wooden_slab"
      },
      "-13,23": {
        "0": "oak_stairs",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,24": {
        "0": "stone",
        "1": "oak_stairs",
        "5": "spruce_fence",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,25": {
        "0": "stone",
        "1": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,26": {
        "0": "stone",
        "1": "planks",
        "2": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,41": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "-13,45": {
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-12,1": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "-12,2": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "-12,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,12": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,13": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,14": {
        "0": "stone",
        "1": "oak_stairs",
        "6": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,15": {
        "0": "oak_stairs",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,16": {
        "-1": "oak_stairs"
      },
      "-12,17": {
        "-1": "wooden_slab"
      },
      "-12,21": {
        "-1": "wooden_slab"
      },
      "-12,22": {
        "-1": "oak_stairs"
      },
      "-12,23": {
        "0": "oak_stairs",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,24": {
        "0": "stone",
        "1": "oak_stairs",
        "5": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,25": {
        "0": "stone",
        "1": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,26": {
        "0": "stone",
        "1": "planks",
        "3": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,47": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "-11,1": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "-11,2": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "-11,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,12": {
        "0": "stone",
        "1": "planks",
        "5": "web",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,13": {
        "0": "stone",
        "1": "planks",
        "4": "web",
        "5": "web",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,14": {
        "0": "stone",
        "1": "planks",
        "3": "web",
        "4": "web",
        "5": "web",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,17": {
        "-1": "wooden_slab"
      },
      "-11,21": {
        "-1": "wooden_slab"
      },
      "-11,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,24": {
        "0": "stone",
        "1": "planks",
        "4": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,25": {
        "0": "stone",
        "1": "planks",
        "4": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,26": {
        "0": "stone",
        "1": "planks",
        "3": "spruce_fence",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,12": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,13": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,14": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,49": {
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "-9,27": {
        "6": "stone_brick_stairs",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "-8,2": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-8,3": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-8,27": {
        "7": "stone_brick_stairs",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-8,32": {
        "10": "ladder",
        "11": "ladder",
        "12": "ladder"
      },
      "-8,33": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks"
      },
      "-8,47": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "-7,2": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-7,3": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-7,6": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone"
      },
      "-7,7": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone"
      },
      "-7,31": {
        "9": "ladder"
      },
      "-7,32": {
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "-7,33": {
        "10": "ladder",
        "11": "ladder",
        "12": "ladder"
      },
      "-6,6": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone"
      },
      "-6,7": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone"
      },
      "-6,10": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "-6,11": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "-6,24": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "-6,25": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "-6,26": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "-6,32": {
        "9": "ladder"
      },
      "-5,10": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "-5,11": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "-5,13": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-5,14": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-5,24": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "-5,25": {
        "0": "slime",
        "-2": "stonebrick",
        "-1": "stonebrick"
      },
      "-5,26": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "-5,29": {
        "6": "ladder",
        "7": "ladder",
        "8": "ladder"
      },
      "-5,44": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,13": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-4,14": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-4,24": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "-4,25": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "-4,26": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "-4,29": {
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-4,30": {
        "5": "ladder",
        "6": "ladder"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,29": {
        "4": "ladder",
        "5": "ladder"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,23": {
        "4": "stone_brick_stairs",
        "5": "stonebrick"
      },
      "-2,24": {
        "4": "stone_brick_stairs"
      },
      "-2,25": {
        "4": "stone_brick_stairs",
        "5": "stonebrick"
      },
      "-2,26": {
        "4": "stone_brick_stairs"
      },
      "-2,27": {
        "4": "stone_brick_stairs",
        "5": "stonebrick"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,7": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-1,8": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-1,9": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-1,13": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,14": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,15": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,23": {
        "4": "stone_brick_stairs"
      },
      "-1,24": {
        "1": "stone_brick_stairs",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-1,25": {
        "1": "stone_brick_stairs",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-1,26": {
        "1": "stone_brick_stairs",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-1,27": {
        "4": "stone_brick_stairs"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,7": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "0,8": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "0,9": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "0,13": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "0,14": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "0,15": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "0,23": {
        "4": "stone_brick_stairs",
        "5": "stonebrick"
      },
      "0,24": {
        "1": "stone_brick_stairs",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "0,25": {
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "light_weighted_pressure_plate"
      },
      "0,26": {
        "1": "stone_brick_stairs",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "0,27": {
        "4": "stone_brick_stairs",
        "5": "stonebrick"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,7": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "1,8": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "1,9": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "1,13": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "1,14": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "1,15": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "1,23": {
        "4": "stone_brick_stairs"
      },
      "1,24": {
        "1": "stone_brick_stairs",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "1,25": {
        "1": "stone_brick_stairs",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "1,26": {
        "1": "stone_brick_stairs",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "1,27": {
        "4": "stone_brick_stairs"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,23": {
        "4": "stone_brick_stairs",
        "5": "stonebrick"
      },
      "2,24": {
        "4": "stone_brick_stairs"
      },
      "2,25": {
        "4": "stone_brick_stairs",
        "5": "stonebrick"
      },
      "2,26": {
        "4": "stone_brick_stairs"
      },
      "2,27": {
        "4": "stone_brick_stairs",
        "5": "stonebrick"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,29": {
        "4": "ladder",
        "5": "ladder"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,13": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "4,14": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "4,24": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "4,25": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "4,26": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "4,29": {
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "4,30": {
        "5": "ladder",
        "6": "ladder"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,10": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "5,11": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "5,13": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "5,14": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "5,24": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "5,25": {
        "0": "slime",
        "-2": "stonebrick",
        "-1": "stonebrick"
      },
      "5,26": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "5,29": {
        "6": "ladder",
        "7": "ladder",
        "8": "ladder"
      },
      "5,44": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "6,6": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone"
      },
      "6,7": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone"
      },
      "6,10": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "6,11": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "6,24": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "6,25": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "6,26": {
        "0": "slime",
        "-2": "stone_brick_stairs",
        "-1": "stonebrick"
      },
      "6,32": {
        "9": "ladder"
      },
      "7,2": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "7,3": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "7,6": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone"
      },
      "7,7": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stone"
      },
      "7,31": {
        "9": "ladder"
      },
      "7,32": {
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "7,33": {
        "10": "ladder",
        "11": "ladder",
        "12": "ladder"
      },
      "8,2": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "8,3": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "8,27": {
        "7": "stone_brick_stairs",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "8,32": {
        "10": "ladder",
        "11": "ladder",
        "12": "ladder"
      },
      "8,33": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks"
      },
      "8,47": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "9,27": {
        "6": "stone_brick_stairs",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "10,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,12": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,13": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,14": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,49": {
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "11,1": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "11,2": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "11,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,12": {
        "0": "stone",
        "1": "planks",
        "5": "web",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,13": {
        "0": "stone",
        "1": "planks",
        "4": "web",
        "5": "web",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,14": {
        "0": "stone",
        "1": "planks",
        "3": "web",
        "4": "web",
        "5": "web",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,17": {
        "-1": "wooden_slab"
      },
      "11,21": {
        "-1": "wooden_slab"
      },
      "11,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,24": {
        "0": "stone",
        "1": "planks",
        "4": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,25": {
        "0": "stone",
        "1": "planks",
        "4": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,26": {
        "0": "stone",
        "1": "planks",
        "3": "spruce_fence",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,1": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "12,2": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "12,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,12": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,13": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,14": {
        "0": "stone",
        "1": "oak_stairs",
        "6": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,15": {
        "0": "oak_stairs",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,16": {
        "-1": "oak_stairs"
      },
      "12,17": {
        "-1": "wooden_slab"
      },
      "12,21": {
        "-1": "wooden_slab"
      },
      "12,22": {
        "-1": "oak_stairs"
      },
      "12,23": {
        "0": "oak_stairs",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,24": {
        "0": "stone",
        "1": "oak_stairs",
        "5": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,25": {
        "0": "stone",
        "1": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,26": {
        "0": "stone",
        "1": "planks",
        "3": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,47": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "13,5": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "13,6": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "13,9": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "13,10": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "6": "vine"
      },
      "13,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,12": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,13": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,14": {
        "0": "stone",
        "1": "oak_stairs",
        "6": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,15": {
        "0": "oak_stairs",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,17": {
        "-1": "wooden_slab"
      },
      "13,21": {
        "-1": "wooden_slab"
      },
      "13,23": {
        "0": "oak_stairs",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,24": {
        "0": "stone",
        "1": "oak_stairs",
        "5": "spruce_fence",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,25": {
        "0": "stone",
        "1": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,26": {
        "0": "stone",
        "1": "planks",
        "2": "spruce_fence",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,41": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "13,45": {
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "14,5": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "14,6": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "14,9": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "14,10": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "6": "vine"
      },
      "14,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,12": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,13": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,14": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,17": {
        "-1": "wooden_slab"
      },
      "14,21": {
        "-1": "wooden_slab"
      },
      "14,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,24": {
        "0": "stone",
        "1": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,25": {
        "0": "stone",
        "1": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,26": {
        "0": "stone",
        "1": "planks",
        "2": "spruce_fence",
        "6": "spruce_fence",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,12": {
        "0": "stone",
        "1": "planks",
        "5": "web",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,13": {
        "0": "stone",
        "1": "planks",
        "4": "web",
        "5": "web",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,14": {
        "0": "stone",
        "1": "planks",
        "5": "web",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,17": {
        "-1": "oak_stairs"
      },
      "15,21": {
        "-1": "oak_stairs"
      },
      "15,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,24": {
        "0": "planks",
        "1": "spruce_fence",
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,25": {
        "0": "stone",
        "1": "planks",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,26": {
        "0": "stone",
        "1": "planks",
        "6": "spruce_fence",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "slime",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      }
    }
  },
  "fences": {
    "name": "fences",
    "columns": {
      "-15,11": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks"
      },
      "-15,15": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks"
      },
      "-15,19": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-14,6": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-14,7": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-14,11": {
        "2": "planks",
        "3": "planks"
      },
      "-14,15": {
        "2": "planks",
        "3": "planks"
      },
      "-14,19": {
        "3": "planks",
        "4": "planks"
      },
      "-13,6": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-13,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-13,8": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-13,11": {
        "3": "planks"
      },
      "-13,15": {
        "3": "planks"
      },
      "-13,19": {
        "4": "planks"
      },
      "-12,3": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-12,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-12,8": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-12,11": {
        "3": "planks"
      },
      "-12,15": {
        "3": "planks"
      },
      "-12,19": {
        "4": "planks"
      },
      "-11,2": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,3": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,4": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,11": {
        "3": "planks"
      },
      "-10,2": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-10,3": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,23": {
        "10": "planks",
        "11": "planks"
      },
      "-10,24": {
        "9": "planks",
        "10": "planks",
        "11": "oak_stairs"
      },
      "-10,25": {
        "9": "planks",
        "10": "planks",
        "11": "oak_stairs"
      },
      "-10,26": {
        "9": "planks",
        "10": "planks",
        "11": "oak_stairs"
      },
      "-10,27": {
        "10": "planks",
        "11": "planks"
      },
      "-10,28": {
        "11": "spruce_fence"
      },
      "-10,29": {
        "11": "spruce_fence"
      },
      "-10,30": {
        "11": "spruce_fence"
      },
      "-9,23": {
        "9": "planks",
        "10": "planks"
      },
      "-9,24": {
        "9": "planks",
        "10": "oak_stairs"
      },
      "-9,25": {
        "9": "planks",
        "10": "oak_stairs"
      },
      "-9,26": {
        "9": "planks",
        "10": "oak_stairs"
      },
      "-9,27": {
        "9": "planks",
        "10": "planks"
      },
      "-9,31": {
        "11": "spruce_fence"
      },
      "-8,5": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-8,6": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-8,17": {
        "4": "stained_hardened_clay"
      },
      "-8,18": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-8,19": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-8,31": {
        "11": "spruce_fence"
      },
      "-7,5": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-7,6": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-7,7": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-7,17": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-7,18": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-7,19": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-7,20": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-7,30": {
        "11": "spruce_fence"
      },
      "-7,31": {
        "11": "spruce_fence"
      },
      "-6,6": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-6,7": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-6,17": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-6,18": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-6,19": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-6,20": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-6,23": {
        "8": "planks",
        "9": "planks"
      },
      "-6,24": {
        "7": "planks",
        "8": "planks",
        "9": "oak_stairs"
      },
      "-6,25": {
        "7": "planks",
        "8": "planks",
        "9": "oak_stairs"
      },
      "-6,26": {
        "7": "planks",
        "8": "planks",
        "9": "oak_stairs"
      },
      "-6,27": {
        "8": "planks",
        "9": "planks"
      },
      "-6,30": {
        "11": "spruce_fence"
      },
      "-5,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-5,10": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-5,18": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-5,19": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-5,20": {
        "4": "stained_hardened_clay"
      },
      "-5,23": {
        "7": "planks",
        "8": "planks"
      },
      "-5,24": {
        "7": "planks",
        "8": "oak_stairs"
      },
      "-5,25": {
        "7": "planks",
        "8": "oak_stairs"
      },
      "-5,26": {
        "7": "planks",
        "8": "oak_stairs"
      },
      "-5,27": {
        "7": "planks",
        "8": "planks"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,9": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-4,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-4,11": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,9": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "-3,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-3,11": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-3,30": {
        "11": "spruce_fence"
      },
      "-3,34": {
        "11": "spruce_fence"
      },
      "-3,35": {
        "11": "spruce_fence"
      },
      "-3,38": {
        "12": "spruce_fence"
      },
      "-3,39": {
        "12": "spruce_fence"
      },
      "-3,40": {
        "13": "spruce_fence"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,17": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-2,18": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-2,22": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-2,23": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-2,27": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-2,28": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-2,30": {
        "11": "spruce_fence"
      },
      "-2,31": {
        "11": "spruce_fence"
      },
      "-2,34": {
        "11": "spruce_fence"
      },
      "-2,35": {
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "-2,36": {
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "-2,38": {
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "-2,39": {
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "-2,40": {
        "13": "spruce_fence"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,6": {
        "0": "stained_hardened_clay"
      },
      "-1,7": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,16": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-1,17": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-1,18": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-1,19": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-1,22": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-1,23": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-1,24": {
        "6": "planks",
        "7": "planks"
      },
      "-1,25": {
        "6": "planks",
        "7": "planks"
      },
      "-1,26": {
        "6": "planks",
        "7": "planks"
      },
      "-1,27": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-1,28": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-1,35": {
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "-1,36": {
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "-1,37": {
        "11": "planks",
        "12": "planks"
      },
      "-1,38": {
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "-1,39": {
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "-1,40": {
        "6": "planks",
        "7": "planks",
        "13": "spruce_fence"
      },
      "-1,41": {
        "6": "planks",
        "7": "planks"
      },
      "-1,43": {
        "6": "planks",
        "7": "planks"
      },
      "-1,44": {
        "6": "planks",
        "7": "planks"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,6": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "0,7": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,8": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,15": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "0,16": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,17": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,18": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "0,19": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,20": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "0,22": {
        "7": "ladder"
      },
      "0,23": {
        "6": "planks",
        "7": "planks"
      },
      "0,24": {
        "6": "planks",
        "7": "planks"
      },
      "0,25": {
        "6": "planks",
        "7": "planks"
      },
      "0,26": {
        "6": "planks",
        "7": "planks"
      },
      "0,27": {
        "6": "planks",
        "7": "planks"
      },
      "0,36": {
        "11": "planks",
        "12": "planks"
      },
      "0,37": {
        "11": "planks",
        "12": "planks"
      },
      "0,38": {
        "11": "planks",
        "12": "planks"
      },
      "0,40": {
        "6": "planks",
        "7": "planks"
      },
      "0,41": {
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "0,42": {
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "0,43": {
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "0,44": {
        "6": "planks",
        "7": "planks"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,7": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,8": {
        "0": "stained_hardened_clay"
      },
      "1,15": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "1,16": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "1,17": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "1,18": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "1,19": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "1,20": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "1,22": {
        "7": "ladder"
      },
      "1,23": {
        "6": "planks",
        "7": "planks"
      },
      "1,24": {
        "6": "planks",
        "7": "planks"
      },
      "1,25": {
        "6": "planks",
        "7": "planks",
        "8": "light_weighted_pressure_plate"
      },
      "1,26": {
        "6": "planks",
        "7": "planks"
      },
      "1,27": {
        "6": "planks",
        "7": "planks"
      },
      "1,36": {
        "11": "planks",
        "12": "planks"
      },
      "1,37": {
        "11": "planks",
        "12": "planks"
      },
      "1,38": {
        "11": "planks",
        "12": "planks"
      },
      "1,41": {
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "1,42": {
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "1,43": {
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,15": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "2,16": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "2,17": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "2,18": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "2,19": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "2,20": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "2,22": {
        "7": "ladder"
      },
      "2,23": {
        "6": "planks",
        "7": "planks"
      },
      "2,24": {
        "6": "planks",
        "7": "planks"
      },
      "2,25": {
        "6": "planks",
        "7": "planks"
      },
      "2,26": {
        "6": "planks",
        "7": "planks"
      },
      "2,27": {
        "6": "planks",
        "7": "planks"
      },
      "2,36": {
        "11": "planks",
        "12": "planks"
      },
      "2,37": {
        "11": "planks",
        "12": "planks"
      },
      "2,38": {
        "11": "planks",
        "12": "planks"
      },
      "2,40": {
        "6": "planks",
        "7": "planks"
      },
      "2,41": {
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "2,42": {
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "2,43": {
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "2,44": {
        "6": "planks",
        "7": "planks"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,10": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "3,11": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "3,16": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "3,17": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "3,18": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "3,19": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "3,22": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "3,23": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "3,24": {
        "6": "planks",
        "7": "planks"
      },
      "3,25": {
        "6": "planks",
        "7": "planks"
      },
      "3,26": {
        "6": "planks",
        "7": "planks"
      },
      "3,27": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "3,28": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "3,35": {
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "3,36": {
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "3,37": {
        "11": "planks",
        "12": "planks"
      },
      "3,38": {
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "3,39": {
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "3,40": {
        "6": "planks",
        "7": "planks",
        "13": "spruce_fence"
      },
      "3,41": {
        "6": "planks",
        "7": "planks"
      },
      "3,43": {
        "6": "planks",
        "7": "planks"
      },
      "3,44": {
        "6": "planks",
        "7": "planks"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "4,11": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "4,12": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "4,17": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "4,18": {
        "5": "stained_hardened_clay"
      },
      "4,22": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "4,23": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "4,27": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "4,28": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "4,30": {
        "11": "spruce_fence"
      },
      "4,31": {
        "11": "spruce_fence"
      },
      "4,34": {
        "11": "spruce_fence"
      },
      "4,35": {
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "4,36": {
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "4,38": {
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "4,39": {
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "4,40": {
        "13": "spruce_fence"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,10": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "5,11": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "5,12": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "5,30": {
        "11": "spruce_fence"
      },
      "5,34": {
        "11": "spruce_fence"
      },
      "5,35": {
        "11": "spruce_fence"
      },
      "5,38": {
        "12": "spruce_fence"
      },
      "5,39": {
        "12": "spruce_fence"
      },
      "5,40": {
        "13": "spruce_fence"
      },
      "7,2": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "7,3": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "7,6": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "7,7": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "7,16": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "7,17": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "7,23": {
        "7": "planks",
        "8": "planks"
      },
      "7,24": {
        "7": "planks",
        "8": "oak_stairs"
      },
      "7,25": {
        "7": "planks",
        "8": "oak_stairs"
      },
      "7,26": {
        "7": "planks",
        "8": "oak_stairs"
      },
      "7,27": {
        "7": "planks",
        "8": "planks"
      },
      "8,1": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "8,2": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "8,3": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "8,6": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,8": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,15": {
        "6": "stained_hardened_clay"
      },
      "8,16": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "8,17": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "8,18": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "8,23": {
        "8": "planks",
        "9": "planks"
      },
      "8,24": {
        "7": "planks",
        "8": "planks",
        "9": "oak_stairs"
      },
      "8,25": {
        "7": "planks",
        "8": "planks",
        "9": "oak_stairs"
      },
      "8,26": {
        "7": "planks",
        "8": "planks",
        "9": "oak_stairs"
      },
      "8,27": {
        "8": "planks",
        "9": "planks"
      },
      "8,30": {
        "11": "spruce_fence"
      },
      "9,1": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "9,2": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "9,6": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "9,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,8": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "9,15": {
        "6": "stained_hardened_clay"
      },
      "9,16": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "9,17": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "9,18": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "9,30": {
        "11": "spruce_fence"
      },
      "9,31": {
        "11": "spruce_fence"
      },
      "10,1": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,2": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,3": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "10,31": {
        "11": "spruce_fence"
      },
      "11,1": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "11,2": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "11,3": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "11,23": {
        "9": "planks",
        "10": "planks"
      },
      "11,24": {
        "9": "planks",
        "10": "oak_stairs"
      },
      "11,25": {
        "9": "planks",
        "10": "oak_stairs"
      },
      "11,26": {
        "9": "planks",
        "10": "oak_stairs"
      },
      "11,27": {
        "9": "planks",
        "10": "planks"
      },
      "11,31": {
        "11": "spruce_fence"
      },
      "12,2": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "12,3": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "12,4": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "12,10": {
        "5": "planks"
      },
      "12,14": {
        "6": "planks"
      },
      "12,23": {
        "10": "planks",
        "11": "planks"
      },
      "12,24": {
        "9": "planks",
        "10": "planks",
        "11": "oak_stairs"
      },
      "12,25": {
        "9": "planks",
        "10": "planks",
        "11": "oak_stairs"
      },
      "12,26": {
        "9": "planks",
        "10": "planks",
        "11": "oak_stairs"
      },
      "12,27": {
        "10": "planks",
        "11": "planks"
      },
      "12,28": {
        "11": "spruce_fence"
      },
      "12,29": {
        "11": "spruce_fence"
      },
      "12,30": {
        "11": "spruce_fence"
      },
      "13,3": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "13,4": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "13,7": {
        "4": "planks"
      },
      "13,10": {
        "5": "planks"
      },
      "13,11": {
        "5": "planks"
      },
      "13,13": {
        "6": "planks"
      },
      "13,14": {
        "6": "planks"
      },
      "14,7": {
        "4": "planks"
      },
      "14,11": {
        "5": "planks"
      },
      "14,13": {
        "6": "planks"
      },
      "15,7": {
        "3": "planks",
        "4": "planks"
      },
      "15,8": {
        "4": "planks"
      },
      "15,11": {
        "4": "planks",
        "5": "planks"
      },
      "15,13": {
        "5": "planks",
        "6": "planks"
      }
    }
  },
  "fortress": {
    "name": "fortress",
    "columns": {
      "-11,17": {
        "3": "ladder",
        "4": "ladder"
      },
      "-10,14": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,15": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-10,17": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "-10,20": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,21": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-9,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-9,10": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,13": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,15": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,17": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "-9,19": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,20": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,21": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,25": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-9,26": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-9,27": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "-9,28": {
        "8": "stone_brick_stairs",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-9,29": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "-9,30": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-9,31": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-8,8": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-8,9": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-8,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-8,13": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-8,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-8,15": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-8,17": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "-8,19": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-8,20": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-8,21": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-8,25": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-8,26": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-8,27": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-8,28": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-8,29": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-8,30": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-8,31": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-7,8": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-7,9": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-7,10": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "-7,25": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "-7,26": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-7,27": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-7,28": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-7,29": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-7,30": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-7,31": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "-6,25": {
        "8": "stone_brick_stairs",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-6,26": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-6,27": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "13": "cobblestone_wall"
      },
      "-6,28": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "cobblestone_wall",
        "13": "cobblestone_wall",
        "14": "cobblestone_wall"
      },
      "-6,29": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "11": "cobblestone_wall"
      },
      "-6,30": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-6,31": {
        "8": "stone_brick_stairs",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-5,20": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-5,21": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-5,25": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "-5,26": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-5,27": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-5,28": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "12": "cobblestone_wall"
      },
      "-5,29": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-5,30": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-5,31": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-4,9": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-4,19": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-4,20": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-4,21": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-4,25": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-4,26": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-4,27": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-4,28": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-4,29": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-4,30": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-4,31": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-4,38": {
        "11": "stonebrick",
        "12": "stonebrick"
      },
      "-4,39": {
        "10": "stone_brick_stairs",
        "11": "stonebrick",
        "12": "stonebrick"
      },
      "-4,40": {
        "10": "stone_brick_stairs",
        "11": "stonebrick"
      },
      "-4,41": {
        "11": "stonebrick"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,7": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-3,8": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-3,9": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-3,11": {
        "3": "oak_stairs",
        "4": "planks",
        "5": "planks"
      },
      "-3,12": {
        "2": "oak_stairs",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "-3,13": {
        "1": "oak_stairs",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "-3,14": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "oak_stairs"
      },
      "-3,15": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "oak_stairs"
      },
      "-3,16": {
        "1": "planks",
        "2": "planks",
        "3": "planks"
      },
      "-3,19": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-3,20": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-3,21": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-3,25": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-3,26": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-3,27": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "-3,28": {
        "8": "stone_brick_stairs",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-3,29": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "-3,30": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-3,31": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "-3,34": {
        "14": "cobblestone_wall"
      },
      "-3,38": {
        "10": "stone_brick_stairs",
        "11": "stonebrick",
        "12": "stonebrick"
      },
      "-3,39": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-3,40": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-3,41": {
        "10": "stone_brick_stairs",
        "11": "stonebrick"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,7": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-2,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-2,9": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-2,11": {
        "3": "oak_stairs",
        "4": "planks",
        "5": "planks"
      },
      "-2,12": {
        "2": "oak_stairs",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "-2,13": {
        "1": "oak_stairs",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "-2,14": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "oak_stairs"
      },
      "-2,15": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "oak_stairs"
      },
      "-2,16": {
        "1": "planks",
        "2": "planks",
        "3": "planks"
      },
      "-2,28": {
        "14": "cobblestone_wall"
      },
      "-2,38": {
        "10": "stone_brick_stairs",
        "11": "stonebrick"
      },
      "-2,39": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-2,40": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-2,41": {
        "10": "stone_brick_stairs"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,11": {
        "5": "planks"
      },
      "-1,12": {
        "4": "planks",
        "5": "planks"
      },
      "-1,13": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "-1,14": {
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "-1,15": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "-1,16": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-1,38": {
        "11": "stonebrick"
      },
      "-1,39": {
        "10": "stone_brick_stairs",
        "11": "stonebrick"
      },
      "-1,40": {
        "10": "stone_brick_stairs"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,11": {
        "5": "planks"
      },
      "0,12": {
        "5": "planks"
      },
      "0,13": {
        "6": "planks"
      },
      "0,15": {
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "0,18": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "light_weighted_pressure_plate"
      },
      "0,22": {
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "0,30": {
        "14": "cobblestone_wall"
      },
      "0,33": {
        "14": "cobblestone_wall"
      },
      "0,34": {
        "14": "cobblestone_wall",
        "15": "cobblestone_wall",
        "16": "cobblestone_wall"
      },
      "0,35": {
        "14": "cobblestone_wall"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,11": {
        "5": "planks"
      },
      "1,12": {
        "4": "planks",
        "5": "planks"
      },
      "1,13": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "1,14": {
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "1,15": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "1,16": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "1,38": {
        "11": "stonebrick"
      },
      "1,39": {
        "10": "stone_brick_stairs",
        "11": "stonebrick"
      },
      "1,40": {
        "10": "stone_brick_stairs"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,7": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "2,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "2,9": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "2,11": {
        "3": "oak_stairs",
        "4": "planks",
        "5": "planks"
      },
      "2,12": {
        "2": "oak_stairs",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "2,13": {
        "1": "oak_stairs",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "2,14": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "oak_stairs"
      },
      "2,15": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "oak_stairs"
      },
      "2,16": {
        "1": "planks",
        "2": "planks",
        "3": "planks"
      },
      "2,28": {
        "14": "cobblestone_wall"
      },
      "2,38": {
        "10": "stone_brick_stairs",
        "11": "stonebrick"
      },
      "2,39": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "2,40": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "2,41": {
        "10": "stone_brick_stairs"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,7": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "3,8": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "3,9": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "3,11": {
        "3": "oak_stairs",
        "4": "planks",
        "5": "planks"
      },
      "3,12": {
        "2": "oak_stairs",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "3,13": {
        "1": "oak_stairs",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "3,14": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "oak_stairs"
      },
      "3,15": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "oak_stairs"
      },
      "3,16": {
        "1": "planks",
        "2": "planks",
        "3": "planks"
      },
      "3,19": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "3,20": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "3,21": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "3,25": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "3,26": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "3,27": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "3,28": {
        "8": "stone_brick_stairs",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "3,29": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "3,30": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "3,31": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "3,34": {
        "14": "cobblestone_wall"
      },
      "3,38": {
        "10": "stone_brick_stairs",
        "11": "stonebrick",
        "12": "stonebrick"
      },
      "3,39": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "3,40": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "3,41": {
        "10": "stone_brick_stairs",
        "11": "stonebrick"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "4,9": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "4,19": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "4,20": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "4,21": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "4,25": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "4,26": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "4,27": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "4,28": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "4,29": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "4,30": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "4,31": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "4,38": {
        "11": "stonebrick",
        "12": "stonebrick"
      },
      "4,39": {
        "10": "stone_brick_stairs",
        "11": "stonebrick",
        "12": "stonebrick"
      },
      "4,40": {
        "10": "stone_brick_stairs",
        "11": "stonebrick"
      },
      "4,41": {
        "11": "stonebrick"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,20": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "5,21": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "5,25": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "5,26": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "5,27": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "5,28": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "12": "cobblestone_wall"
      },
      "5,29": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "5,30": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "5,31": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "6,25": {
        "8": "stone_brick_stairs",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "6,26": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "6,27": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "13": "cobblestone_wall"
      },
      "6,28": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "cobblestone_wall",
        "13": "cobblestone_wall",
        "14": "cobblestone_wall"
      },
      "6,29": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "11": "cobblestone_wall"
      },
      "6,30": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "6,31": {
        "8": "stone_brick_stairs",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "7,8": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "7,9": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "7,10": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "7,25": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "7,26": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "7,27": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "7,28": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "7,29": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "7,30": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "7,31": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "8,8": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,9": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "8,13": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "8,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,15": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "8,17": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "8,19": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "8,20": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,21": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "8,25": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "8,26": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "8,27": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "8,28": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "8,29": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "8,30": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "8,31": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "9,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "9,10": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,13": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,15": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,17": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "9,19": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,20": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,21": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,25": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "9,26": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "9,27": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "9,28": {
        "8": "stone_brick_stairs",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "9,29": {
        "8": "stone_brick_stairs",
        "9": "stonebrick"
      },
      "9,30": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "9,31": {
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "10,14": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,15": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "10,17": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "10,20": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,21": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "11,17": {
        "3": "ladder",
        "4": "ladder"
      }
    }
  },
  "four towers": {
    "name": "four towers",
    "columns": {
      "-5,8": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "-5,9": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "-5,10": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "-5,11": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "-5,35": {
        "11": "spruce_stairs"
      },
      "-5,36": {
        "11": "spruce_stairs",
        "12": "spruce_stairs"
      },
      "-5,40": {
        "9": "spruce_stairs",
        "10": "spruce_stairs"
      },
      "-5,41": {
        "9": "spruce_stairs"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,8": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "-4,9": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick",
        "9": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-4,10": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-4,11": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "-4,13": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-4,14": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-4,15": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-4,20": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone"
      },
      "-4,21": {
        "5": "stone_brick_stairs",
        "6": "stone"
      },
      "-4,22": {
        "5": "stone_brick_stairs",
        "6": "stone"
      },
      "-4,23": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone"
      },
      "-4,35": {
        "11": "oak_stairs"
      },
      "-4,36": {
        "11": "oak_stairs",
        "12": "oak_stairs"
      },
      "-4,40": {
        "9": "oak_stairs",
        "10": "oak_stairs"
      },
      "-4,41": {
        "9": "oak_stairs"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,8": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "-3,9": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-3,10": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick",
        "11": "stonebrick",
        "12": "light_weighted_pressure_plate",
        "-2": "stone",
        "-1": "stone"
      },
      "-3,11": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "-3,13": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-3,14": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-3,15": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-3,20": {
        "5": "stone_brick_stairs",
        "6": "stone"
      },
      "-3,21": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-3,22": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-3,23": {
        "5": "stone_brick_stairs",
        "6": "stone"
      },
      "-3,35": {
        "11": "oak_stairs"
      },
      "-3,36": {
        "11": "oak_stairs",
        "12": "oak_stairs"
      },
      "-3,40": {
        "9": "oak_stairs",
        "10": "oak_stairs"
      },
      "-3,41": {
        "9": "oak_stairs"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,8": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "-2,9": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,10": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,11": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone",
        "-1": "stonebrick"
      },
      "-2,12": {
        "-1": "stonebrick"
      },
      "-2,13": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-2,14": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-2,15": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-2,16": {
        "-1": "stonebrick"
      },
      "-2,17": {
        "-1": "stonebrick"
      },
      "-2,18": {
        "-1": "stonebrick"
      },
      "-2,19": {
        "-1": "stonebrick"
      },
      "-2,20": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "-1": "stonebrick"
      },
      "-2,21": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,22": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,23": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "-1": "stonebrick"
      },
      "-2,35": {
        "11": "spruce_stairs"
      },
      "-2,36": {
        "11": "spruce_stairs",
        "12": "spruce_stairs"
      },
      "-2,40": {
        "9": "spruce_stairs",
        "10": "spruce_stairs"
      },
      "-2,41": {
        "9": "spruce_stairs"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,9": {
        "-2": "stone",
        "-1": "stone"
      },
      "-1,10": {
        "-2": "stone",
        "-1": "stone"
      },
      "-1,11": {
        "-2": "stone",
        "-1": "stone"
      },
      "-1,12": {
        "-2": "stone",
        "-1": "stone"
      },
      "-1,13": {
        "-2": "stone",
        "-1": "stone"
      },
      "-1,14": {
        "-2": "stone",
        "-1": "stone"
      },
      "-1,15": {
        "-2": "stone",
        "-1": "stone"
      },
      "-1,16": {
        "-2": "stone",
        "-1": "slime"
      },
      "-1,17": {
        "-2": "stone",
        "-1": "slime"
      },
      "-1,18": {
        "-2": "stone",
        "-1": "stone"
      },
      "-1,19": {
        "-2": "stone",
        "-1": "stone"
      },
      "-1,20": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,21": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,22": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,23": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone",
        "-1": "stonebrick"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,9": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,10": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,11": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,12": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,13": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,14": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,15": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,16": {
        "-2": "stone",
        "-1": "slime"
      },
      "0,17": {
        "-2": "stone",
        "-1": "slime"
      },
      "0,18": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,19": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,20": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,21": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,22": {
        "-2": "stone",
        "-1": "stone"
      },
      "0,23": {
        "-1": "stonebrick"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,9": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,10": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,11": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,12": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,13": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,14": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,15": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,16": {
        "-2": "stone",
        "-1": "slime"
      },
      "1,17": {
        "-2": "stone",
        "-1": "slime"
      },
      "1,18": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,19": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,20": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,21": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,22": {
        "-2": "stone",
        "-1": "stone"
      },
      "1,23": {
        "-1": "stonebrick"
      },
      "1,30": {
        "11": "spruce_stairs",
        "12": "spruce_stairs"
      },
      "1,31": {
        "11": "spruce_stairs"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,8": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "2,9": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "2,10": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "2,11": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone",
        "-1": "stonebrick"
      },
      "2,12": {
        "-1": "stonebrick"
      },
      "2,13": {
        "-1": "stonebrick"
      },
      "2,14": {
        "-1": "stonebrick"
      },
      "2,15": {
        "-1": "stonebrick"
      },
      "2,16": {
        "0": "stone",
        "1": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "2,17": {
        "0": "stone",
        "1": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "2,18": {
        "-1": "stonebrick"
      },
      "2,19": {
        "-1": "stonebrick"
      },
      "2,20": {
        "-1": "stonebrick"
      },
      "2,21": {
        "-1": "stonebrick"
      },
      "2,22": {
        "-1": "stonebrick"
      },
      "2,23": {
        "-1": "stonebrick"
      },
      "2,30": {
        "11": "oak_stairs",
        "12": "oak_stairs"
      },
      "2,31": {
        "11": "oak_stairs"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,8": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "3,9": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "3,10": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "3,11": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "3,16": {
        "0": "stone",
        "1": "stone",
        "-2": "stone",
        "-1": "stonebrick"
      },
      "3,17": {
        "0": "stone",
        "1": "stone",
        "-2": "stone",
        "-1": "stonebrick"
      },
      "3,22": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "3,23": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "3,24": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "3,25": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "3,30": {
        "11": "oak_stairs",
        "12": "oak_stairs"
      },
      "3,31": {
        "11": "oak_stairs"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,8": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "4,9": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "4,10": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "4,11": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "4,22": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "4,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick"
      },
      "4,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "4,25": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "4,30": {
        "11": "spruce_stairs",
        "12": "spruce_stairs"
      },
      "4,31": {
        "11": "spruce_stairs"
      },
      "4,35": {
        "12": "fence"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,8": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "5,9": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "5,10": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "5,11": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "5,22": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "5,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick",
        "11": "stonebrick"
      },
      "5,24": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stonebrick",
        "9": "stonebrick",
        "10": "stonebrick"
      },
      "5,25": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "5,34": {
        "10": "spruce_stairs"
      },
      "5,35": {
        "10": "spruce_stairs",
        "11": "spruce_stairs",
        "12": "fence"
      },
      "6,9": {
        "7": "ladder"
      },
      "6,10": {
        "7": "ladder"
      },
      "6,22": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "6,23": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "6,24": {
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "6,25": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "6,34": {
        "10": "oak_stairs"
      },
      "6,35": {
        "10": "oak_stairs",
        "11": "oak_stairs",
        "12": "fence"
      },
      "7,16": {
        "3": "stone_brick_stairs",
        "4": "stone"
      },
      "7,17": {
        "1": "ladder",
        "2": "ladder",
        "3": "ladder"
      },
      "7,18": {
        "1": "ladder",
        "2": "ladder",
        "3": "ladder"
      },
      "7,19": {
        "1": "ladder",
        "2": "ladder",
        "3": "ladder"
      },
      "7,20": {
        "3": "stone_brick_stairs",
        "4": "stone"
      },
      "7,34": {
        "10": "oak_stairs"
      },
      "7,35": {
        "10": "oak_stairs",
        "11": "oak_stairs",
        "12": "fence"
      },
      "8,16": {
        "3": "stone_brick_stairs",
        "4": "stone"
      },
      "8,17": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone"
      },
      "8,18": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone"
      },
      "8,19": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone"
      },
      "8,20": {
        "3": "stone_brick_stairs",
        "4": "stone"
      },
      "8,34": {
        "10": "spruce_stairs"
      },
      "8,35": {
        "10": "spruce_stairs",
        "11": "spruce_stairs",
        "12": "fence"
      },
      "9,16": {
        "3": "stone_brick_stairs"
      },
      "9,17": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "slime"
      },
      "9,18": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "slime"
      },
      "9,19": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "slime"
      },
      "9,20": {
        "3": "stone_brick_stairs"
      },
      "9,35": {
        "12": "fence"
      },
      "10,9": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone"
      },
      "10,10": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone"
      },
      "10,16": {
        "3": "stone_brick_stairs",
        "4": "stone"
      },
      "10,17": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "slime"
      },
      "10,18": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "slime"
      },
      "10,19": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "slime"
      },
      "10,20": {
        "3": "stone_brick_stairs",
        "4": "stone"
      },
      "11,9": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone"
      },
      "11,10": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone"
      },
      "11,16": {
        "3": "stone_brick_stairs",
        "4": "stone"
      },
      "11,17": {
        "3": "stone_brick_stairs",
        "4": "stone"
      },
      "11,18": {
        "3": "stone_brick_stairs"
      },
      "11,19": {
        "3": "stone_brick_stairs",
        "4": "stone"
      },
      "11,20": {
        "3": "stone_brick_stairs",
        "4": "stone"
      },
      "11,28": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone"
      },
      "11,29": {
        "9": "stone_brick_stairs",
        "10": "stone"
      },
      "11,30": {
        "9": "stone_brick_stairs",
        "10": "stone"
      },
      "11,31": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone"
      },
      "12,27": {
        "10": "ladder"
      },
      "12,28": {
        "9": "stone_brick_stairs",
        "10": "stone"
      },
      "12,29": {
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "12,30": {
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "12,31": {
        "9": "stone_brick_stairs",
        "10": "stone"
      },
      "13,17": {
        "8": "stone"
      },
      "13,18": {
        "8": "stone"
      },
      "13,19": {
        "8": "stone"
      },
      "13,20": {
        "8": "stone"
      },
      "13,21": {
        "8": "stone"
      },
      "13,22": {
        "8": "stone"
      },
      "13,23": {
        "8": "stone"
      },
      "13,24": {
        "8": "stone"
      },
      "13,27": {
        "10": "ladder"
      },
      "13,28": {
        "9": "stone_brick_stairs",
        "10": "stone"
      },
      "13,29": {
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "13,30": {
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "13,31": {
        "9": "stone_brick_stairs",
        "10": "stone"
      },
      "14,12": {
        "5": "stone"
      },
      "14,13": {
        "5": "stone"
      },
      "14,14": {
        "5": "stone"
      },
      "14,15": {
        "5": "stone"
      },
      "14,16": {
        "5": "stone"
      },
      "14,17": {
        "8": "stone"
      },
      "14,18": {
        "8": "stone"
      },
      "14,19": {
        "8": "stone"
      },
      "14,20": {
        "8": "stone"
      },
      "14,21": {
        "8": "stone"
      },
      "14,22": {
        "8": "stone",
        "9": "light_weighted_pressure_plate"
      },
      "14,23": {
        "8": "stone"
      },
      "14,24": {
        "8": "stone"
      },
      "14,28": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone"
      },
      "14,29": {
        "9": "stone_brick_stairs",
        "10": "stone"
      },
      "14,30": {
        "9": "stone_brick_stairs",
        "10": "stone"
      },
      "14,31": {
        "9": "stone_brick_stairs",
        "10": "stone",
        "11": "stone"
      },
      "15,12": {
        "4": "stone_brick_stairs",
        "5": "stone"
      },
      "15,13": {
        "5": "stone"
      },
      "15,14": {
        "5": "stone"
      },
      "15,15": {
        "5": "stone"
      },
      "15,16": {
        "4": "stone_brick_stairs",
        "5": "stone"
      },
      "15,17": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "15,18": {
        "8": "stone"
      },
      "15,19": {
        "8": "stone"
      },
      "15,20": {
        "8": "stone"
      },
      "15,21": {
        "8": "stone"
      },
      "15,22": {
        "8": "stone"
      },
      "15,23": {
        "8": "stone"
      },
      "15,24": {
        "7": "stone_brick_stairs",
        "8": "stone"
      }
    }
  },
  "rng skip": {
    "name": "rng skip",
    "columns": {
      "-11,9": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-11,10": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-10,8": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-10,9": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,11": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-9,3": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-9,4": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-9,8": {
        "2": "stained_hardened_clay"
      },
      "-9,9": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-9,10": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-8,2": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-8,3": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-8,4": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-8,9": {
        "2": "stained_hardened_clay"
      },
      "-7,2": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-7,3": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-7,4": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-7,14": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "-7,23": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-7,24": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-7,30": {
        "6": "stained_hardened_clay"
      },
      "-7,31": {
        "6": "stained_hardened_clay"
      },
      "-6,3": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-6,4": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-6,13": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "-6,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-6,15": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "-6,22": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-6,23": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "-6,24": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "-6,25": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-6,29": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-6,30": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "-6,31": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-6,32": {
        "6": "stained_hardened_clay"
      },
      "-5,6": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-5,7": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-5,13": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-5,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-5,15": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-5,22": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-5,23": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-5,24": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-5,25": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-5,29": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-5,30": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "-5,31": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "-5,32": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-5,35": {
        "2": "dark_oak_fence",
        "4": "dark_oak_fence",
        "5": "dark_oak_fence",
        "6": "stained_hardened_clay"
      },
      "-5,37": {
        "6": "stained_glass",
        "7": "stained_glass",
        "8": "stained_glass"
      },
      "-5,39": {
        "1": "dark_oak_fence",
        "3": "dark_oak_fence",
        "4": "dark_oak_fence",
        "5": "stained_hardened_clay"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,5": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-4,6": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-4,7": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-4,14": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "-4,15": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-4,17": {
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-4,18": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-4,30": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-4,31": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-3,6": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-3,17": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-3,18": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,8": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-2,9": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-2,10": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-2,41": {
        "1": "dark_oak_fence",
        "3": "dark_oak_fence",
        "4": "dark_oak_fence",
        "5": "stained_hardened_clay",
        "6": "dark_oak_fence"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,8": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,9": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,10": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,11": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-1,12": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-1,13": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-1,14": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,7": {
        "0": "stained_hardened_clay"
      },
      "0,8": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "0,9": {
        "0": "stained_hardened_clay",
        "-5": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,10": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,11": {
        "0": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "0,12": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "0,13": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "light_weighted_pressure_plate"
      },
      "0,14": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "0,17": {
        "0": "dark_oak_fence",
        "2": "dark_oak_fence",
        "3": "dark_oak_fence",
        "4": "stained_hardened_clay",
        "5": "dark_oak_fence"
      },
      "0,21": {
        "0": "dark_oak_fence",
        "2": "dark_oak_fence",
        "3": "dark_oak_fence",
        "4": "stained_hardened_clay",
        "5": "dark_oak_fence"
      },
      "0,23": {
        "1": "dark_oak_fence",
        "3": "dark_oak_fence",
        "4": "dark_oak_fence",
        "5": "stained_hardened_clay"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,8": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,9": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,10": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,11": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "1,12": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "1,13": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "1,14": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,8": {
        "0": "stained_hardened_clay"
      },
      "2,9": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "2,10": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "2,41": {
        "1": "dark_oak_fence",
        "3": "dark_oak_fence",
        "4": "dark_oak_fence",
        "5": "stained_hardened_clay",
        "6": "dark_oak_fence"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "3,6": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "3,17": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "3,18": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,5": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "4,6": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "4,7": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "4,14": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "4,15": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "4,17": {
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "4,18": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "4,30": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "4,31": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,6": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "5,7": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "5,13": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "5,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "5,15": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "5,22": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "5,23": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "5,24": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "5,25": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "5,29": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "5,30": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "5,31": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "5,32": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "5,35": {
        "2": "dark_oak_fence",
        "4": "dark_oak_fence",
        "5": "dark_oak_fence",
        "6": "stained_hardened_clay"
      },
      "5,37": {
        "6": "stained_glass",
        "7": "stained_glass",
        "8": "stained_glass"
      },
      "5,39": {
        "1": "dark_oak_fence",
        "3": "dark_oak_fence",
        "4": "dark_oak_fence",
        "5": "stained_hardened_clay"
      },
      "6,3": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "6,4": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "6,13": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "6,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,15": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "6,22": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "6,23": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "6,24": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "6,25": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "6,29": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "6,30": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "6,31": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "6,32": {
        "6": "stained_hardened_clay"
      },
      "7,2": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "7,3": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "7,4": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "7,14": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "7,23": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "7,24": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "7,30": {
        "6": "stained_hardened_clay"
      },
      "7,31": {
        "6": "stained_hardened_clay"
      },
      "8,2": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,3": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,4": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "8,9": {
        "2": "stained_hardened_clay"
      },
      "9,3": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "9,4": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "9,8": {
        "2": "stained_hardened_clay"
      },
      "9,9": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "9,10": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "10,8": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "10,9": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,11": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "11,9": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "11,10": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      }
    }
  },
  "ice": {
    "name": "ice",
    "columns": {
      "-12,11": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-12,12": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,11": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,12": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,13": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,11": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-10,12": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,13": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-9,31": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-9,32": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "-9,33": {
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-8,15": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-8,16": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-8,17": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-8,31": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-8,32": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "-8,33": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "-7,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-7,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-7,11": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "-7,15": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-7,16": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-7,17": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-7,32": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-7,33": {
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-6,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-6,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-6,11": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-6,16": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-6,17": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-5,10": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-5,18": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-5,19": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-5,27": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-5,28": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "-5,29": {
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,12": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-4,13": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-4,17": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-4,18": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "light_weighted_pressure_plate"
      },
      "-4,19": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-4,27": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-4,28": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "-4,29": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "-4,34": {
        "8": "quartz_stairs",
        "9": "stone",
        "10": "ice"
      },
      "-4,35": {
        "8": "quartz_stairs",
        "9": "stone",
        "10": "ice"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,11": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-3,12": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-3,13": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-3,17": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-3,18": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-3,19": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-3,28": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-3,29": {
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-3,34": {
        "8": "quartz_stairs",
        "9": "stone",
        "10": "ice"
      },
      "-3,35": {
        "8": "quartz_stairs",
        "9": "stone",
        "10": "ice"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,8": {
        "0": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-2,9": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-2,11": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-2,12": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-2,34": {
        "8": "quartz_stairs",
        "9": "stone",
        "10": "ice"
      },
      "-2,35": {
        "8": "quartz_stairs",
        "9": "stone",
        "10": "ice"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,7": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,9": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,15": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-1,16": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-1,17": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,7": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,8": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,15": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,16": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,17": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,21": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "0,22": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "0,25": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "0,26": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,7": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "1,8": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "1,15": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "1,16": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "1,21": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "1,22": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "1,23": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "1,24": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "1,25": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "1,26": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "1,35": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "1,36": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,7": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "2,8": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "2,9": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "2,21": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "2,22": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "2,23": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "2,24": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "2,25": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "2,35": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "2,36": {
        "7": "quartz_block",
        "8": "stone",
        "9": "ice"
      },
      "2,37": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,18": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "3,19": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "3,20": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "3,36": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "3,37": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,17": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "4,18": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "light_weighted_pressure_plate"
      },
      "4,19": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "4,20": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,8": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "5,9": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "5,14": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "5,15": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "5,17": {
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "5,18": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "5,19": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "5,22": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "5,23": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "5,24": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "5,41": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "5,42": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "6,8": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "6,9": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "6,10": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "6,13": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "6,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,15": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,22": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "6,23": {
        "4": "quartz_block",
        "5": "stone",
        "6": "ice"
      },
      "6,24": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "6,25": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "6,41": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "6,42": {
        "7": "quartz_block",
        "8": "stone",
        "9": "ice"
      },
      "6,43": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "7,9": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "7,10": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "7,13": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "7,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "7,15": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "7,22": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "7,23": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "7,24": {
        "4": "quartz_block",
        "5": "stone",
        "6": "ice"
      },
      "7,25": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "7,42": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "7,43": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "8,15": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "8,16": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "8,23": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "8,24": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "8,25": {
        "4": "quartz_stairs",
        "5": "stone",
        "6": "ice"
      },
      "9,14": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "9,15": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "9,16": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "10,14": {
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "10,15": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "10,16": {
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "10,29": {
        "5": "quartz_stairs",
        "6": "stone",
        "7": "ice"
      },
      "10,30": {
        "5": "quartz_stairs",
        "6": "stone",
        "7": "ice"
      },
      "11,27": {
        "5": "quartz_stairs",
        "6": "stone",
        "7": "ice"
      },
      "11,28": {
        "5": "quartz_stairs",
        "6": "stone",
        "7": "ice"
      },
      "11,29": {
        "5": "quartz_stairs",
        "6": "stone",
        "7": "ice"
      },
      "11,30": {
        "5": "quartz_stairs",
        "6": "stone",
        "7": "ice"
      },
      "11,34": {
        "6": "quartz_stairs",
        "7": "stone",
        "8": "ice"
      },
      "11,35": {
        "6": "quartz_stairs",
        "7": "stone",
        "8": "ice"
      },
      "12,19": {
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "12,20": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "12,27": {
        "5": "quartz_stairs",
        "6": "stone",
        "7": "ice"
      },
      "12,28": {
        "5": "quartz_stairs",
        "6": "stone",
        "7": "ice"
      },
      "12,29": {
        "5": "quartz_stairs",
        "6": "stone",
        "7": "ice"
      },
      "12,30": {
        "5": "quartz_stairs",
        "6": "stone",
        "7": "ice"
      },
      "12,34": {
        "6": "quartz_stairs",
        "7": "stone",
        "8": "ice"
      },
      "12,35": {
        "6": "quartz_stairs",
        "7": "stone",
        "8": "ice"
      },
      "13,19": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "13,20": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "13,21": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "14,19": {
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "14,20": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "14,21": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "14,25": {
        "8": "quartz_stairs",
        "9": "stone",
        "10": "ice"
      },
      "14,26": {
        "8": "quartz_stairs",
        "9": "stone",
        "10": "ice"
      },
      "14,30": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "14,31": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "15,25": {
        "8": "quartz_stairs",
        "9": "stone",
        "10": "ice"
      },
      "15,26": {
        "8": "quartz_stairs",
        "9": "stone",
        "10": "ice"
      },
      "15,30": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      },
      "15,31": {
        "7": "quartz_stairs",
        "8": "stone",
        "9": "ice"
      }
    }
  },
  "ladder slide": {
    "name": "ladder slide",
    "columns": {
      "-15,14": {
        "0": "planks",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-15,15": {
        "0": "planks",
        "1": "planks",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-15,16": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-15,17": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-15,18": {
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-15,19": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-15,20": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-15,21": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-15,22": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-15,33": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "11": "stone",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-15,34": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-15,35": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-15,36": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-15,37": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-15,38": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-15,39": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-15,40": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-15,41": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-15,42": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "11": "stone",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-14,15": {
        "0": "ladder",
        "1": "ladder"
      },
      "-14,16": {
        "1": "ladder"
      },
      "-14,17": {
        "1": "ladder"
      },
      "-14,18": {
        "1": "ladder"
      },
      "-14,19": {
        "1": "ladder"
      },
      "-14,20": {
        "0": "ladder",
        "1": "ladder"
      },
      "-14,33": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-14,34": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-14,35": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-14,36": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-14,37": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-14,38": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-14,39": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-14,40": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-14,41": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-14,42": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-14,43": {
        "9": "ladder",
        "10": "ladder"
      },
      "-13,33": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,34": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,35": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,36": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,37": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,38": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,39": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,40": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,41": {
        "0": "dirt",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,42": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,43": {
        "8": "ladder",
        "9": "ladder",
        "10": "ladder"
      },
      "-12,23": {
        "-6": "dark_oak_fence",
        "-5": "dark_oak_fence",
        "-4": "planks",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "-12,33": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "11": "stone",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,34": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,35": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,36": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,37": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,38": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,39": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,40": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,41": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,42": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stonebrick",
        "11": "stone",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,43": {
        "6": "ladder",
        "7": "ladder"
      },
      "-11,12": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,13": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,33": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-11,34": {
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-11,35": {
        "6": "ladder",
        "7": "ladder",
        "10": "stone_brick_stairs"
      },
      "-11,36": {
        "6": "ladder",
        "7": "ladder",
        "8": "ladder",
        "10": "stone_brick_stairs"
      },
      "-11,37": {
        "7": "ladder",
        "8": "ladder",
        "10": "stonebrick"
      },
      "-11,38": {
        "7": "ladder",
        "8": "ladder",
        "9": "ladder",
        "10": "stonebrick"
      },
      "-11,39": {
        "7": "ladder",
        "8": "ladder",
        "9": "ladder",
        "10": "stone_brick_stairs"
      },
      "-11,40": {
        "7": "ladder",
        "8": "ladder",
        "9": "ladder",
        "10": "stone_brick_stairs"
      },
      "-11,41": {
        "6": "ladder",
        "7": "ladder",
        "8": "ladder",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-11,42": {
        "6": "ladder",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-10,11": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,12": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,13": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-10,37": {
        "10": "stonebrick"
      },
      "-10,38": {
        "10": "stonebrick"
      },
      "-9,11": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,12": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-9,37": {
        "10": "stonebrick"
      },
      "-9,38": {
        "10": "stonebrick"
      },
      "-8,32": {
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-8,33": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-8,38": {
        "10": "stonebrick"
      },
      "-7,24": {
        "-7": "dark_oak_fence",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "planks"
      },
      "-7,31": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "-1": "planks"
      },
      "-7,32": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "-1": "planks"
      },
      "-7,33": {
        "1": "planks",
        "2": "planks",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-6,11": {
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-6,12": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "-6,13": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "-6,31": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-6,32": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay",
        "-1": "planks"
      },
      "-5,11": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-5,12": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "-5,13": {
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-5,37": {
        "10": "stonebrick"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,11": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "-4,12": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-4,37": {
        "10": "stonebrick"
      },
      "-4,38": {
        "10": "stonebrick"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,24": {
        "-1": "ladder"
      },
      "-3,37": {
        "10": "stonebrick"
      },
      "-3,38": {
        "10": "stonebrick"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,4": {
        "0": "log"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,24": {
        "0": "planks",
        "-5": "dark_oak_fence",
        "-4": "dark_oak_fence",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "-2,30": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "-2": "planks",
        "-1": "planks"
      },
      "-2,31": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-1": "planks"
      },
      "-2,32": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-1": "planks"
      },
      "-2,38": {
        "10": "stonebrick"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,1": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,2": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,3": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,8": {
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-1,9": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "-1,29": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "-1": "planks"
      },
      "-1,30": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-2": "planks",
        "-1": "planks"
      },
      "-1,31": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-2": "planks",
        "-1": "planks"
      },
      "-1,32": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-1,42": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-2": "planks",
        "-1": "planks"
      },
      "-1,43": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "planks"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,1": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,2": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,3": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,4": {
        "0": "planks"
      },
      "0,8": {
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "0,9": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "0,29": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "0,30": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-1": "planks"
      },
      "0,31": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "-2": "planks",
        "-1": "planks"
      },
      "0,42": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "dirt"
      },
      "0,43": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,1": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,2": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,3": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,8": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "1,9": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "1,42": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-2": "planks",
        "-1": "planks"
      },
      "1,43": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "dirt"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,4": {
        "0": "log"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,24": {
        "1": "ladder"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,24": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "-6": "dark_oak_fence",
        "-5": "dark_oak_fence",
        "-4": "planks",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,28": {
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "4,29": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,28": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "-1": "planks"
      },
      "5,29": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "-1": "planks"
      },
      "5,30": {
        "1": "planks",
        "2": "planks",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "6,29": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "-1": "planks"
      },
      "6,30": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "-1": "planks"
      },
      "7,23": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "7,24": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "7,25": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay"
      },
      "8,23": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "dark_oak_fence",
        "11": "dark_oak_fence",
        "12": "dark_oak_fence",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "8,24": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "5": "dark_oak_stairs",
        "6": "dark_oak_stairs",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "8,25": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "11": "stained_hardened_clay",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "9,23": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "9,24": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "light_weighted_pressure_plate",
        "11": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "9,25": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "9,26": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "10,23": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "10,24": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "10,25": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "planks",
        "-1": "dirt"
      },
      "10,27": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "11,23": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "11,24": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "11,25": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "planks",
        "-1": "dirt"
      },
      "11,26": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay"
      },
      "11,27": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "12,23": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "12,24": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "12,25": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "planks",
        "-1": "dirt"
      },
      "12,26": {
        "11": "stained_hardened_clay"
      },
      "12,27": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "13,23": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "13,24": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "13,25": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "13,26": {
        "11": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "14,23": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "planks",
        "-1": "dirt"
      },
      "14,24": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "14,25": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "15,23": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "planks",
        "-1": "dirt"
      },
      "15,24": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "15,25": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      }
    }
  },
  "ladder tower": {
    "name": "ladder tower",
    "columns": {
      "-15,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,16": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-15,17": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-15,18": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-15,19": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-15,20": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-15,21": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-15,22": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-15,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,16": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-14,17": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-14,18": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-14,19": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-14,20": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-14,21": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-14,22": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-14,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,33": {
        "7": "log",
        "8": "planks"
      },
      "-14,34": {
        "7": "log",
        "8": "planks"
      },
      "-13,4": {
        "4": "log",
        "5": "planks"
      },
      "-13,5": {
        "4": "log",
        "5": "planks"
      },
      "-13,9": {
        "4": "log",
        "5": "planks"
      },
      "-13,10": {
        "4": "log",
        "5": "planks"
      },
      "-13,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,16": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-13,17": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-13,18": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-13,19": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-13,20": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-13,21": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-13,22": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-13,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,33": {
        "7": "log",
        "8": "planks"
      },
      "-13,34": {
        "7": "log",
        "8": "planks"
      },
      "-12,4": {
        "4": "log",
        "5": "planks"
      },
      "-12,5": {
        "4": "log",
        "5": "planks"
      },
      "-12,9": {
        "4": "log",
        "5": "planks"
      },
      "-12,10": {
        "4": "log",
        "5": "planks"
      },
      "-12,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,16": {
        "0": "planks",
        "1": "spruce_stairs",
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-12,17": {
        "0": "planks",
        "1": "spruce_stairs",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-12,18": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-12,19": {
        "0": "torch",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-12,20": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-12,21": {
        "0": "planks",
        "1": "spruce_stairs",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-12,22": {
        "0": "planks",
        "1": "spruce_stairs",
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-12,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,38": {
        "6": "log",
        "7": "planks"
      },
      "-12,39": {
        "6": "log",
        "7": "planks"
      },
      "-11,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,16": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-11,17": {
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-11,18": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-11,19": {
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-11,20": {
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-11,21": {
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-11,22": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-11,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,38": {
        "6": "log",
        "7": "planks"
      },
      "-11,39": {
        "6": "log",
        "7": "planks"
      },
      "-11,42": {
        "5": "log",
        "6": "planks"
      },
      "-11,43": {
        "5": "log",
        "6": "planks"
      },
      "-10,1": {
        "5": "log",
        "6": "planks"
      },
      "-10,2": {
        "5": "log",
        "6": "planks"
      },
      "-10,12": {
        "4": "log",
        "5": "planks"
      },
      "-10,13": {
        "4": "log",
        "5": "planks"
      },
      "-10,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,16": {
        "0": "spruce_stairs",
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-10,17": {
        "0": "spruce_stairs",
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-10,18": {
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-10,19": {
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-10,20": {
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-10,21": {
        "0": "spruce_stairs",
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-10,22": {
        "0": "spruce_stairs",
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-10,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,29": {
        "8": "log",
        "9": "planks"
      },
      "-10,30": {
        "8": "log",
        "9": "planks"
      },
      "-10,42": {
        "5": "log",
        "6": "planks"
      },
      "-10,43": {
        "5": "log",
        "6": "planks"
      },
      "-9,1": {
        "5": "log",
        "6": "planks"
      },
      "-9,2": {
        "5": "log",
        "6": "planks"
      },
      "-9,12": {
        "4": "log",
        "5": "planks"
      },
      "-9,13": {
        "4": "log",
        "5": "planks"
      },
      "-9,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-9,16": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-9,17": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "spruce_stairs"
      },
      "-9,18": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-9,19": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-9,20": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-9,21": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "spruce_stairs"
      },
      "-9,22": {
        "5": "planks",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-9,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-9,29": {
        "8": "log",
        "9": "planks"
      },
      "-9,30": {
        "8": "log",
        "9": "planks"
      },
      "-8,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-8,16": {
        "5": "planks",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-8,17": {
        "5": "planks",
        "-2": "stonebrick",
        "-1": "spruce_stairs"
      },
      "-8,18": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-8,19": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-8,20": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "-8,21": {
        "5": "planks",
        "-2": "stonebrick",
        "-1": "spruce_stairs"
      },
      "-8,22": {
        "5": "planks",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "-8,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-7,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-7,16": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-7,17": {
        "0": "stonebrick",
        "1": "stonebrick",
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stonebrick"
      },
      "-7,18": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "stonebrick",
        "-2": "stone_brick_stairs"
      },
      "-7,19": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "stonebrick",
        "-2": "stone_brick_stairs"
      },
      "-7,20": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "stonebrick",
        "-2": "stone_brick_stairs"
      },
      "-7,21": {
        "0": "stonebrick",
        "1": "stonebrick",
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stonebrick"
      },
      "-7,22": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-7,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-6,5": {
        "6": "log",
        "7": "planks"
      },
      "-6,6": {
        "6": "log",
        "7": "planks"
      },
      "-6,18": {
        "-3": "stonebrick"
      },
      "-6,19": {
        "-3": "stonebrick"
      },
      "-6,20": {
        "-3": "stonebrick"
      },
      "-6,32": {
        "9": "log",
        "10": "planks"
      },
      "-6,33": {
        "9": "log",
        "10": "planks"
      },
      "-6,41": {
        "4": "log",
        "5": "planks"
      },
      "-6,42": {
        "4": "log",
        "5": "planks"
      },
      "-5,5": {
        "6": "log",
        "7": "planks"
      },
      "-5,6": {
        "6": "log",
        "7": "planks"
      },
      "-5,18": {
        "-3": "stone_brick_stairs"
      },
      "-5,19": {
        "-3": "stone_brick_stairs"
      },
      "-5,20": {
        "-3": "stone_brick_stairs"
      },
      "-5,32": {
        "9": "log",
        "10": "planks"
      },
      "-5,33": {
        "9": "log",
        "10": "planks"
      },
      "-5,41": {
        "4": "log",
        "5": "planks"
      },
      "-5,42": {
        "4": "log",
        "5": "planks"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,6": {
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "-3,7": {
        "11": "stone_brick_stairs",
        "12": "stonebrick"
      },
      "-3,8": {
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "-3,9": {
        "6": "spruce_stairs",
        "12": "stonebrick"
      },
      "-3,10": {
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "-3,11": {
        "11": "stone_brick_stairs",
        "12": "stonebrick"
      },
      "-3,12": {
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "-3,22": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stonebrick",
        "3": "stonebrick",
        "-5": "stonebrick",
        "-4": "stonebrick",
        "-3": "stonebrick",
        "-2": "stonebrick",
        "-1": "stonebrick"
      },
      "-3,28": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stonebrick",
        "3": "stonebrick",
        "-5": "stonebrick",
        "-4": "stonebrick",
        "-3": "stonebrick",
        "-2": "stonebrick",
        "-1": "stonebrick"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,6": {
        "11": "stone_brick_stairs",
        "12": "stonebrick"
      },
      "-2,7": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "-2,8": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "-2,9": {
        "0": "stone",
        "2": "cobblestone_wall",
        "4": "stone",
        "5": "stone",
        "6": "planks",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "-2,10": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "-2,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "-2,12": {
        "11": "stone_brick_stairs",
        "12": "stonebrick"
      },
      "-2,16": {
        "-5": "leaves2",
        "-4": "slime"
      },
      "-2,17": {
        "-5": "leaves2",
        "-4": "slime"
      },
      "-2,18": {
        "-4": "slime"
      },
      "-2,22": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-5": "stonebrick",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,23": {
        "1": "planks"
      },
      "-2,24": {
        "1": "planks"
      },
      "-2,25": {
        "1": "planks"
      },
      "-2,26": {
        "1": "planks"
      },
      "-2,27": {
        "1": "planks"
      },
      "-2,28": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-5": "stonebrick",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,31": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "-2,32": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick"
      },
      "-2,33": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "-2,34": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick"
      },
      "-2,35": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,6": {
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "-1,7": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "-1,8": {
        "5": "planks"
      },
      "-1,9": {
        "4": "torch",
        "5": "planks",
        "9": "ladder",
        "13": "ladder"
      },
      "-1,10": {
        "5": "planks"
      },
      "-1,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "-1,12": {
        "0": "stone",
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "-1,15": {
        "-5": "leaves2"
      },
      "-1,16": {
        "-5": "leaves2",
        "-4": "slime"
      },
      "-1,17": {
        "19": "ladder",
        "20": "ladder",
        "21": "ladder",
        "-6": "leaves2",
        "-5": "leaves2",
        "-4": "slime"
      },
      "-1,18": {
        "-5": "leaves2",
        "-4": "slime"
      },
      "-1,22": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "3": "stonebrick",
        "-5": "stonebrick",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,23": {
        "1": "planks"
      },
      "-1,24": {
        "1": "slime"
      },
      "-1,25": {
        "1": "slime"
      },
      "-1,26": {
        "1": "slime"
      },
      "-1,27": {
        "1": "planks"
      },
      "-1,28": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "3": "stonebrick",
        "-5": "stonebrick",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,31": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick"
      },
      "-1,32": {
        "2": "cobblestone",
        "3": "cobblestone",
        "4": "cobblestone",
        "5": "cobblestone",
        "6": "cobblestone",
        "7": "cobblestone",
        "8": "planks"
      },
      "-1,33": {
        "2": "cobblestone",
        "3": "cobblestone",
        "4": "cobblestone",
        "5": "cobblestone",
        "6": "cobblestone",
        "7": "cobblestone",
        "8": "planks"
      },
      "-1,34": {
        "2": "cobblestone",
        "3": "cobblestone",
        "4": "cobblestone",
        "5": "cobblestone",
        "6": "cobblestone",
        "7": "cobblestone",
        "8": "planks"
      },
      "-1,35": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick"
      },
      "-1,42": {
        "3": "log",
        "4": "planks"
      },
      "-1,43": {
        "3": "log",
        "4": "planks"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,6": {
        "12": "stonebrick"
      },
      "0,7": {
        "0": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "8": "cobblestone_wall",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "0,8": {
        "5": "planks",
        "6": "ladder",
        "7": "ladder",
        "8": "ladder",
        "12": "ladder"
      },
      "0,9": {
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks",
        "15": "planks",
        "16": "planks",
        "17": "planks",
        "18": "light_weighted_pressure_plate"
      },
      "0,10": {
        "5": "planks",
        "9": "torch",
        "10": "ladder",
        "14": "ladder",
        "15": "ladder",
        "16": "ladder",
        "17": "ladder"
      },
      "0,11": {
        "0": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "8": "cobblestone_wall",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "0,12": {
        "0": "stone",
        "12": "stonebrick"
      },
      "0,13": {
        "16": "ladder",
        "17": "ladder",
        "18": "ladder"
      },
      "0,14": {
        "15": "planks",
        "16": "planks",
        "17": "planks",
        "18": "planks"
      },
      "0,16": {
        "-6": "leaves2"
      },
      "0,17": {
        "18": "planks",
        "19": "planks",
        "20": "planks",
        "21": "planks",
        "-7": "leaves2",
        "-6": "leaves2"
      },
      "0,18": {
        "-6": "leaves2"
      },
      "0,22": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-5": "stonebrick",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,23": {
        "1": "planks"
      },
      "0,24": {
        "1": "slime"
      },
      "0,25": {
        "1": "slime"
      },
      "0,26": {
        "1": "slime"
      },
      "0,27": {
        "1": "planks"
      },
      "0,28": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-5": "stonebrick",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,31": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "0,32": {
        "2": "cobblestone",
        "3": "cobblestone",
        "4": "cobblestone",
        "5": "cobblestone",
        "6": "cobblestone",
        "7": "cobblestone",
        "8": "planks"
      },
      "0,33": {
        "2": "cobblestone",
        "3": "cobblestone",
        "4": "cobblestone",
        "5": "cobblestone",
        "6": "cobblestone",
        "7": "cobblestone",
        "8": "planks",
        "9": "light_weighted_pressure_plate"
      },
      "0,34": {
        "2": "cobblestone",
        "3": "cobblestone",
        "4": "cobblestone",
        "5": "cobblestone",
        "6": "cobblestone",
        "7": "cobblestone",
        "8": "planks"
      },
      "0,35": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "0,42": {
        "3": "log",
        "4": "planks"
      },
      "0,43": {
        "3": "log",
        "4": "planks"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,6": {
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "1,7": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "1,8": {
        "5": "planks"
      },
      "1,9": {
        "4": "torch",
        "5": "planks",
        "11": "ladder"
      },
      "1,10": {
        "5": "planks"
      },
      "1,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "1,12": {
        "0": "stone",
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "1,16": {
        "-4": "slime"
      },
      "1,17": {
        "19": "ladder",
        "20": "ladder",
        "21": "ladder",
        "-6": "leaves2",
        "-5": "leaves2",
        "-4": "slime"
      },
      "1,18": {
        "-5": "leaves2",
        "-4": "slime"
      },
      "1,19": {
        "-5": "leaves2"
      },
      "1,22": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "3": "stonebrick",
        "-5": "stonebrick",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,23": {
        "1": "planks"
      },
      "1,24": {
        "1": "slime"
      },
      "1,25": {
        "1": "slime"
      },
      "1,26": {
        "1": "slime"
      },
      "1,27": {
        "1": "planks"
      },
      "1,28": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "3": "stonebrick",
        "-5": "stonebrick",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,31": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick"
      },
      "1,32": {
        "2": "cobblestone",
        "3": "cobblestone",
        "4": "cobblestone",
        "5": "cobblestone",
        "6": "cobblestone",
        "7": "cobblestone",
        "8": "planks"
      },
      "1,33": {
        "2": "cobblestone",
        "3": "cobblestone",
        "4": "cobblestone",
        "5": "cobblestone",
        "6": "cobblestone",
        "7": "cobblestone",
        "8": "planks"
      },
      "1,34": {
        "2": "cobblestone",
        "3": "cobblestone",
        "4": "cobblestone",
        "5": "cobblestone",
        "6": "cobblestone",
        "7": "cobblestone",
        "8": "planks"
      },
      "1,35": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick"
      },
      "1,42": {
        "3": "log",
        "4": "planks"
      },
      "1,43": {
        "3": "log",
        "4": "planks"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,6": {
        "11": "stone_brick_stairs",
        "12": "stonebrick"
      },
      "2,7": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "2,8": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "2,9": {
        "0": "stone",
        "2": "cobblestone_wall",
        "4": "stone",
        "5": "stone",
        "6": "planks",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "2,10": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "2,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "planks",
        "-1": "stone_brick_stairs"
      },
      "2,12": {
        "11": "stone_brick_stairs",
        "12": "stonebrick"
      },
      "2,16": {
        "-5": "leaves2",
        "-4": "slime"
      },
      "2,17": {
        "-4": "slime"
      },
      "2,18": {
        "-4": "slime"
      },
      "2,22": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-5": "stonebrick",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "2,23": {
        "1": "planks"
      },
      "2,24": {
        "1": "planks"
      },
      "2,25": {
        "1": "planks"
      },
      "2,26": {
        "1": "planks"
      },
      "2,27": {
        "1": "planks"
      },
      "2,28": {
        "0": "stone",
        "1": "stone",
        "2": "stonebrick",
        "-5": "stonebrick",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "2,31": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "2,32": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick"
      },
      "2,33": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "2,34": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick"
      },
      "2,35": {
        "5": "stone_brick_stairs",
        "6": "stone",
        "7": "stone_brick_stairs",
        "8": "stonebrick",
        "9": "stonebrick"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,6": {
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "3,7": {
        "11": "stone_brick_stairs",
        "12": "stonebrick"
      },
      "3,8": {
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "3,9": {
        "6": "spruce_stairs",
        "12": "stonebrick"
      },
      "3,10": {
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "3,11": {
        "11": "stone_brick_stairs",
        "12": "stonebrick"
      },
      "3,12": {
        "11": "stone_brick_stairs",
        "12": "stonebrick",
        "13": "stonebrick"
      },
      "3,22": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stonebrick",
        "3": "stonebrick",
        "-5": "stonebrick",
        "-4": "stonebrick",
        "-3": "stonebrick",
        "-2": "stonebrick",
        "-1": "stonebrick"
      },
      "3,28": {
        "0": "stonebrick",
        "1": "stone",
        "2": "stonebrick",
        "3": "stonebrick",
        "-5": "stonebrick",
        "-4": "stonebrick",
        "-3": "stonebrick",
        "-2": "stonebrick",
        "-1": "stonebrick"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,5": {
        "6": "log",
        "7": "planks"
      },
      "5,6": {
        "6": "log",
        "7": "planks"
      },
      "5,18": {
        "-3": "stone_brick_stairs"
      },
      "5,19": {
        "-3": "stone_brick_stairs"
      },
      "5,20": {
        "-3": "stone_brick_stairs"
      },
      "5,32": {
        "9": "log",
        "10": "planks"
      },
      "5,33": {
        "9": "log",
        "10": "planks"
      },
      "5,41": {
        "4": "log",
        "5": "planks"
      },
      "5,42": {
        "4": "log",
        "5": "planks"
      },
      "6,5": {
        "6": "log",
        "7": "planks"
      },
      "6,6": {
        "6": "log",
        "7": "planks"
      },
      "6,18": {
        "-3": "stonebrick"
      },
      "6,19": {
        "-3": "stonebrick"
      },
      "6,20": {
        "-3": "stonebrick"
      },
      "6,32": {
        "9": "log",
        "10": "planks"
      },
      "6,33": {
        "9": "log",
        "10": "planks"
      },
      "6,41": {
        "4": "log",
        "5": "planks"
      },
      "6,42": {
        "4": "log",
        "5": "planks"
      },
      "7,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "7,16": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "7,17": {
        "0": "stonebrick",
        "1": "stonebrick",
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stonebrick"
      },
      "7,18": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "stonebrick",
        "-2": "stone_brick_stairs"
      },
      "7,19": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "stonebrick",
        "-2": "stone_brick_stairs"
      },
      "7,20": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "stonebrick",
        "-2": "stone_brick_stairs"
      },
      "7,21": {
        "0": "stonebrick",
        "1": "stonebrick",
        "2": "stonebrick",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stonebrick"
      },
      "7,22": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "7,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "8,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "8,16": {
        "5": "planks",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "8,17": {
        "5": "planks",
        "-2": "stonebrick",
        "-1": "spruce_stairs"
      },
      "8,18": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "8,19": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "8,20": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "8,21": {
        "5": "planks",
        "-2": "stonebrick",
        "-1": "spruce_stairs"
      },
      "8,22": {
        "5": "planks",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "8,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "9,1": {
        "5": "log",
        "6": "planks"
      },
      "9,2": {
        "5": "log",
        "6": "planks"
      },
      "9,12": {
        "4": "log",
        "5": "planks"
      },
      "9,13": {
        "4": "log",
        "5": "planks"
      },
      "9,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "9,16": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "9,17": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "spruce_stairs"
      },
      "9,18": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "9,19": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "9,20": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "9,21": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "spruce_stairs"
      },
      "9,22": {
        "5": "planks",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "9,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "9,29": {
        "8": "log",
        "9": "planks"
      },
      "9,30": {
        "8": "log",
        "9": "planks"
      },
      "10,1": {
        "5": "log",
        "6": "planks"
      },
      "10,2": {
        "5": "log",
        "6": "planks"
      },
      "10,12": {
        "4": "log",
        "5": "planks"
      },
      "10,13": {
        "4": "log",
        "5": "planks"
      },
      "10,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,16": {
        "0": "spruce_stairs",
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "10,17": {
        "0": "spruce_stairs",
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "10,18": {
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "10,19": {
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "10,20": {
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "10,21": {
        "0": "spruce_stairs",
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "10,22": {
        "0": "spruce_stairs",
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "10,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "10,29": {
        "8": "log",
        "9": "planks"
      },
      "10,30": {
        "8": "log",
        "9": "planks"
      },
      "10,42": {
        "5": "log",
        "6": "planks"
      },
      "10,43": {
        "5": "log",
        "6": "planks"
      },
      "11,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,16": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "11,17": {
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "11,18": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "11,19": {
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "11,20": {
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "11,21": {
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "11,22": {
        "5": "planks",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "11,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "11,38": {
        "6": "log",
        "7": "planks"
      },
      "11,39": {
        "6": "log",
        "7": "planks"
      },
      "11,42": {
        "5": "log",
        "6": "planks"
      },
      "11,43": {
        "5": "log",
        "6": "planks"
      },
      "12,4": {
        "4": "log",
        "5": "planks"
      },
      "12,5": {
        "4": "log",
        "5": "planks"
      },
      "12,9": {
        "4": "log",
        "5": "planks"
      },
      "12,10": {
        "4": "log",
        "5": "planks"
      },
      "12,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,16": {
        "0": "planks",
        "1": "spruce_stairs",
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "12,17": {
        "0": "planks",
        "1": "spruce_stairs",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "12,18": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "12,19": {
        "0": "torch",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "12,20": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "12,21": {
        "0": "planks",
        "1": "spruce_stairs",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "12,22": {
        "0": "planks",
        "1": "spruce_stairs",
        "5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "12,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "12,38": {
        "6": "log",
        "7": "planks"
      },
      "12,39": {
        "6": "log",
        "7": "planks"
      },
      "13,4": {
        "4": "log",
        "5": "planks"
      },
      "13,5": {
        "4": "log",
        "5": "planks"
      },
      "13,9": {
        "4": "log",
        "5": "planks"
      },
      "13,10": {
        "4": "log",
        "5": "planks"
      },
      "13,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,16": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "13,17": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "13,18": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "13,19": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "13,20": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "13,21": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "13,22": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "13,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "13,33": {
        "7": "log",
        "8": "planks"
      },
      "13,34": {
        "7": "log",
        "8": "planks"
      },
      "14,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,16": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "14,17": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "14,18": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "14,19": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "14,20": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "14,21": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "14,22": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "14,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "14,33": {
        "7": "log",
        "8": "planks"
      },
      "14,34": {
        "7": "log",
        "8": "planks"
      },
      "15,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "15,16": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "15,17": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "15,18": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "15,19": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "15,20": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "15,21": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick"
      },
      "15,22": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "planks"
      },
      "15,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      }
    }
  },
  "overhead 4b": {
    "name": "overhead 4b",
    "columns": {
      "-12,7": {
        "3": "log",
        "4": "planks"
      },
      "-12,8": {
        "3": "log",
        "4": "planks"
      },
      "-11,7": {
        "3": "log",
        "4": "planks"
      },
      "-11,8": {
        "3": "log",
        "4": "planks"
      },
      "-11,32": {
        "19": "log",
        "20": "planks"
      },
      "-11,33": {
        "19": "log",
        "20": "planks"
      },
      "-10,4": {
        "4": "log",
        "5": "planks"
      },
      "-10,5": {
        "4": "log",
        "5": "planks"
      },
      "-10,11": {
        "2": "log",
        "3": "planks"
      },
      "-10,12": {
        "2": "log",
        "3": "planks"
      },
      "-10,27": {
        "20": "log",
        "21": "planks"
      },
      "-10,28": {
        "20": "log",
        "21": "planks"
      },
      "-10,32": {
        "19": "log",
        "20": "planks"
      },
      "-10,33": {
        "19": "log",
        "20": "planks"
      },
      "-9,4": {
        "4": "log",
        "5": "planks"
      },
      "-9,5": {
        "4": "log",
        "5": "planks"
      },
      "-9,11": {
        "2": "log",
        "3": "planks"
      },
      "-9,12": {
        "2": "log",
        "3": "planks"
      },
      "-9,27": {
        "20": "log",
        "21": "planks"
      },
      "-9,28": {
        "20": "log",
        "21": "planks"
      },
      "-8,22": {
        "21": "log",
        "22": "planks"
      },
      "-8,23": {
        "21": "log",
        "22": "planks"
      },
      "-7,17": {
        "22": "ladder",
        "23": "ladder",
        "24": "ladder"
      },
      "-7,18": {
        "20": "planks",
        "21": "planks",
        "22": "planks",
        "23": "planks",
        "24": "planks"
      },
      "-7,22": {
        "21": "log",
        "22": "planks",
        "23": "light_weighted_pressure_plate"
      },
      "-7,23": {
        "21": "log",
        "22": "planks"
      },
      "-7,34": {
        "20": "log",
        "21": "planks"
      },
      "-7,35": {
        "20": "log",
        "21": "planks"
      },
      "-6,6": {
        "5": "log",
        "6": "planks"
      },
      "-6,7": {
        "5": "log",
        "6": "planks"
      },
      "-6,12": {
        "1": "log",
        "2": "planks"
      },
      "-6,13": {
        "1": "log",
        "2": "planks"
      },
      "-6,34": {
        "20": "log",
        "21": "planks"
      },
      "-6,35": {
        "20": "log",
        "21": "planks"
      },
      "-5,6": {
        "5": "log",
        "6": "planks"
      },
      "-5,7": {
        "5": "log",
        "6": "planks"
      },
      "-5,12": {
        "1": "log",
        "2": "planks"
      },
      "-5,13": {
        "1": "log",
        "2": "planks"
      },
      "-5,15": {
        "21": "ladder"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,14": {
        "20": "ladder"
      },
      "-4,15": {
        "18": "planks",
        "19": "planks",
        "20": "planks",
        "21": "planks",
        "22": "planks",
        "23": "planks"
      },
      "-4,30": {
        "18": "log",
        "19": "planks"
      },
      "-4,31": {
        "18": "log",
        "19": "planks"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,15": {
        "19": "ladder"
      },
      "-3,30": {
        "18": "log",
        "19": "planks"
      },
      "-3,31": {
        "18": "log",
        "19": "planks"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,7": {
        "0": "log",
        "1": "planks"
      },
      "-2,8": {
        "0": "log",
        "1": "planks"
      },
      "-2,9": {
        "0": "log",
        "1": "planks"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,7": {
        "0": "log",
        "1": "planks"
      },
      "-1,8": {
        "0": "log",
        "1": "planks"
      },
      "-1,9": {
        "0": "log",
        "1": "planks"
      },
      "-1,24": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "-1,25": {
        "22": "stone_brick_stairs",
        "23": "stonebrick"
      },
      "-1,26": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "-1,27": {
        "17": "spruce_stairs",
        "23": "stonebrick"
      },
      "-1,28": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "-1,29": {
        "22": "stone_brick_stairs",
        "23": "stonebrick"
      },
      "-1,30": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "-1,35": {
        "21": "log",
        "22": "planks"
      },
      "-1,36": {
        "21": "log",
        "22": "planks"
      },
      "-1,39": {
        "19": "log",
        "20": "planks"
      },
      "-1,40": {
        "19": "log",
        "20": "planks"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,7": {
        "0": "log",
        "1": "planks"
      },
      "0,8": {
        "0": "log",
        "1": "planks",
        "5": "log",
        "6": "planks"
      },
      "0,9": {
        "0": "log",
        "1": "planks",
        "5": "log",
        "6": "planks"
      },
      "0,16": {
        "16": "planks",
        "17": "planks",
        "18": "planks",
        "19": "planks",
        "20": "planks"
      },
      "0,17": {
        "19": "ladder"
      },
      "0,24": {
        "22": "stone_brick_stairs",
        "23": "stonebrick"
      },
      "0,25": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "0,26": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "0,27": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "planks",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "0,28": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "0,29": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "0,30": {
        "22": "stone_brick_stairs",
        "23": "stonebrick"
      },
      "0,35": {
        "21": "log",
        "22": "planks"
      },
      "0,36": {
        "21": "log",
        "22": "planks"
      },
      "0,39": {
        "19": "log",
        "20": "planks"
      },
      "0,40": {
        "19": "log",
        "20": "planks"
      },
      "0,41": {
        "16": "log",
        "17": "planks"
      },
      "0,42": {
        "16": "log",
        "17": "planks"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,8": {
        "5": "log",
        "6": "planks"
      },
      "1,9": {
        "5": "log",
        "6": "planks"
      },
      "1,16": {
        "18": "ladder"
      },
      "1,24": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "1,25": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "1,26": {
        "15": "stone",
        "16": "planks"
      },
      "1,27": {
        "15": "stone",
        "16": "planks",
        "20": "ladder",
        "24": "ladder"
      },
      "1,28": {
        "15": "stone",
        "16": "planks"
      },
      "1,29": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "1,30": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "1,41": {
        "16": "log",
        "17": "planks"
      },
      "1,42": {
        "16": "log",
        "17": "planks"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,24": {
        "23": "stonebrick"
      },
      "2,25": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "19": "cobblestone_wall",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "2,26": {
        "15": "stone",
        "16": "planks",
        "17": "ladder",
        "18": "ladder",
        "19": "ladder",
        "23": "ladder"
      },
      "2,27": {
        "15": "stone",
        "16": "planks",
        "17": "planks",
        "18": "planks",
        "19": "planks",
        "20": "planks",
        "21": "planks",
        "22": "planks",
        "23": "planks",
        "24": "planks",
        "25": "planks",
        "26": "planks"
      },
      "2,28": {
        "15": "stone",
        "16": "planks",
        "20": "torch",
        "21": "ladder"
      },
      "2,29": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "19": "cobblestone_wall",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "2,30": {
        "23": "stonebrick"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,16": {
        "17": "ladder",
        "18": "ladder"
      },
      "3,17": {
        "14": "planks",
        "15": "planks",
        "16": "planks",
        "17": "planks",
        "18": "planks"
      },
      "3,24": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "3,25": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "3,26": {
        "15": "stone",
        "16": "planks"
      },
      "3,27": {
        "15": "stone",
        "16": "planks",
        "22": "ladder"
      },
      "3,28": {
        "15": "stone",
        "16": "planks"
      },
      "3,29": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "3,30": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "3,34": {
        "21": "log",
        "22": "planks"
      },
      "3,35": {
        "21": "log",
        "22": "planks"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,9": {
        "6": "log",
        "7": "planks"
      },
      "4,10": {
        "6": "log",
        "7": "planks"
      },
      "4,11": {
        "6": "log",
        "7": "planks"
      },
      "4,17": {
        "15": "ladder",
        "16": "ladder"
      },
      "4,24": {
        "22": "stone_brick_stairs",
        "23": "stonebrick"
      },
      "4,25": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "4,26": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "4,27": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "4,28": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "4,29": {
        "15": "stone_brick_stairs",
        "16": "stone",
        "17": "stone",
        "18": "stone",
        "19": "stone",
        "20": "stone",
        "21": "stone",
        "22": "stone",
        "23": "planks"
      },
      "4,30": {
        "22": "stone_brick_stairs",
        "23": "stonebrick"
      },
      "4,34": {
        "21": "log",
        "22": "planks"
      },
      "4,35": {
        "21": "log",
        "22": "planks"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,9": {
        "6": "log",
        "7": "planks"
      },
      "5,10": {
        "6": "log",
        "7": "planks",
        "8": "light_weighted_pressure_plate"
      },
      "5,11": {
        "6": "log",
        "7": "planks"
      },
      "5,24": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "5,25": {
        "22": "stone_brick_stairs",
        "23": "stonebrick"
      },
      "5,26": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "5,27": {
        "23": "stonebrick"
      },
      "5,28": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "5,29": {
        "22": "stone_brick_stairs",
        "23": "stonebrick"
      },
      "5,30": {
        "22": "stone_brick_stairs",
        "23": "stonebrick",
        "24": "stonebrick"
      },
      "6,9": {
        "6": "log",
        "7": "planks"
      },
      "6,10": {
        "6": "log",
        "7": "planks"
      },
      "6,11": {
        "6": "log",
        "7": "planks"
      },
      "6,32": {
        "23": "log",
        "24": "planks"
      },
      "6,33": {
        "23": "log",
        "24": "planks"
      },
      "7,17": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "7,18": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "7,19": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "7,20": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "7,21": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "7,22": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "7,23": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "7,24": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "7,25": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "7,32": {
        "23": "log",
        "24": "planks"
      },
      "7,33": {
        "23": "log",
        "24": "planks"
      },
      "8,17": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "8,18": {
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "8,19": {
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "spruce_stairs"
      },
      "8,20": {
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "8,21": {
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "8,22": {
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "spruce_stairs"
      },
      "8,23": {
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "spruce_stairs"
      },
      "8,24": {
        "8": "stonebrick"
      },
      "8,25": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "8,36": {
        "22": "log",
        "23": "planks"
      },
      "8,37": {
        "22": "log",
        "23": "planks"
      },
      "9,17": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "9,18": {
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "planks"
      },
      "9,19": {
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks",
        "14": "spruce_stairs"
      },
      "9,20": {
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "9,21": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "9,22": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "spruce_stairs"
      },
      "9,23": {
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "spruce_stairs"
      },
      "9,24": {
        "8": "stonebrick"
      },
      "9,25": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "9,36": {
        "22": "log",
        "23": "planks"
      },
      "9,37": {
        "22": "log",
        "23": "planks"
      },
      "10,10": {
        "7": "log",
        "8": "planks"
      },
      "10,11": {
        "7": "log",
        "8": "planks"
      },
      "10,17": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "10,18": {
        "8": "stonebrick"
      },
      "10,19": {
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "10,20": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "10,21": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "10,22": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "10,23": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "10,24": {
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "10,25": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "11,10": {
        "7": "log",
        "8": "planks"
      },
      "11,11": {
        "7": "log",
        "8": "planks"
      },
      "11,17": {
        "8": "stonebrick",
        "12": "stone_brick_stairs",
        "13": "stonebrick",
        "14": "stone",
        "15": "stone"
      },
      "11,18": {
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "11,19": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "11,20": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "11,21": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "11,22": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "11,23": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "planks"
      },
      "11,24": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "planks"
      },
      "11,25": {
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "12,17": {
        "8": "stonebrick",
        "13": "stonebrick",
        "14": "stone"
      },
      "12,18": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "12,19": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "12,20": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "12,21": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "12,22": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "12,23": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "spruce_stairs"
      },
      "12,24": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "planks",
        "11": "spruce_stairs"
      },
      "12,25": {
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "13,13": {
        "8": "log",
        "9": "planks"
      },
      "13,14": {
        "8": "log",
        "9": "planks"
      },
      "13,17": {
        "8": "stonebrick",
        "12": "stone_brick_stairs",
        "13": "stonebrick",
        "14": "stone",
        "15": "stone"
      },
      "13,18": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "13,19": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "13,20": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "13,21": {
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "13,22": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "13,23": {
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "13,24": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "13,25": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "14,13": {
        "8": "log",
        "9": "planks"
      },
      "14,14": {
        "8": "log",
        "9": "planks"
      },
      "14,17": {
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "14,18": {
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "spruce_stairs"
      },
      "14,19": {
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "spruce_stairs"
      },
      "14,20": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "14,21": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "14,22": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "spruce_stairs"
      },
      "14,23": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "planks"
      },
      "14,24": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "14,25": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "15,17": {
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "15,18": {
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks"
      },
      "15,19": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks"
      },
      "15,20": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "15,21": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "15,22": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "spruce_stairs"
      },
      "15,23": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "planks",
        "10": "planks"
      },
      "15,24": {
        "3": "dirt",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stonebrick"
      },
      "15,25": {
        "4": "dirt",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stonebrick",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      }
    }
  },
  "quartz climb": {
    "name": "quartz climb",
    "columns": {
      "-13,16": {
        "3": "planks"
      },
      "-12,16": {
        "3": "planks"
      },
      "-11,13": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,14": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-11,16": {
        "3": "planks"
      },
      "-11,19": {
        "4": "planks"
      },
      "-10,12": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,13": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,14": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,16": {
        "3": "planks"
      },
      "-10,19": {
        "4": "planks"
      },
      "-9,12": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-9,13": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,14": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-9,16": {
        "3": "planks"
      },
      "-9,19": {
        "4": "planks"
      },
      "-9,22": {
        "5": "planks"
      },
      "-9,36": {
        "12": "quartz_block",
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block",
        "18": "quartz_block",
        "19": "quartz_block",
        "20": "quartz_block",
        "21": "quartz_block",
        "22": "quartz_block",
        "23": "quartz_block",
        "24": "quartz_block",
        "25": "quartz_block",
        "26": "quartz_block",
        "27": "quartz_block"
      },
      "-8,16": {
        "3": "planks"
      },
      "-8,19": {
        "4": "planks"
      },
      "-8,22": {
        "5": "planks"
      },
      "-8,32": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-8,33": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-8,34": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-8,35": {
        "17": "ladder",
        "18": "ladder",
        "19": "ladder",
        "23": "ladder",
        "24": "ladder",
        "25": "ladder"
      },
      "-8,36": {
        "12": "quartz_block",
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block",
        "18": "quartz_block",
        "19": "quartz_block",
        "20": "quartz_block",
        "21": "quartz_block",
        "22": "quartz_block",
        "23": "quartz_block",
        "24": "quartz_block",
        "25": "quartz_block",
        "26": "quartz_block",
        "27": "quartz_block"
      },
      "-8,38": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-8,39": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-8,40": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-7,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-7,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-7,11": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-7,19": {
        "4": "planks"
      },
      "-7,22": {
        "5": "planks"
      },
      "-7,32": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-7,33": {
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block"
      },
      "-7,34": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-7,36": {
        "12": "quartz_block",
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block",
        "18": "quartz_block",
        "19": "quartz_block",
        "20": "quartz_block",
        "21": "quartz_block",
        "22": "quartz_block",
        "23": "quartz_block",
        "24": "quartz_block",
        "25": "quartz_block",
        "26": "quartz_block",
        "27": "quartz_block"
      },
      "-7,37": {
        "19": "ladder",
        "20": "ladder",
        "21": "ladder",
        "22": "ladder",
        "23": "ladder",
        "24": "ladder",
        "25": "ladder"
      },
      "-7,38": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-7,39": {
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block"
      },
      "-7,40": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-6,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-6,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-6,11": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "-6,19": {
        "4": "planks"
      },
      "-6,22": {
        "5": "planks"
      },
      "-6,27": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "-6,28": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "-6,29": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "-6,32": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-6,33": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-6,34": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-6,35": {
        "20": "ladder",
        "21": "ladder",
        "22": "ladder",
        "26": "ladder",
        "27": "ladder"
      },
      "-6,36": {
        "12": "quartz_block",
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block",
        "18": "quartz_block",
        "19": "quartz_block",
        "20": "quartz_block",
        "21": "quartz_block",
        "22": "quartz_block",
        "23": "quartz_block",
        "24": "quartz_block",
        "25": "quartz_block",
        "26": "quartz_block",
        "27": "quartz_block"
      },
      "-6,38": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-6,39": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-6,40": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "-5,22": {
        "5": "planks"
      },
      "-5,27": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "-5,28": {
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block"
      },
      "-5,29": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "-5,36": {
        "12": "quartz_block",
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block",
        "18": "quartz_block",
        "19": "quartz_block",
        "20": "quartz_block",
        "21": "quartz_block",
        "22": "quartz_block",
        "23": "quartz_block",
        "24": "quartz_block",
        "25": "quartz_block",
        "26": "quartz_block",
        "27": "quartz_block"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,22": {
        "5": "planks"
      },
      "-4,27": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "-4,28": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "-4,29": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,9": {
        "0": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-3,10": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-3,11": {
        "0": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-3,18": {
        "7": "ladder",
        "8": "ladder"
      },
      "-3,19": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-3,22": {
        "5": "planks"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-2,9": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-2,10": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-2,11": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-2,19": {
        "5": "ladder",
        "6": "ladder"
      },
      "-2,21": {
        "13": "planks",
        "14": "planks",
        "15": "planks"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,7": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,8": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-1,9": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-1,10": {
        "0": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-1,17": {
        "11": "ladder",
        "12": "ladder"
      },
      "-1,21": {
        "13": "ladder",
        "14": "ladder",
        "15": "ladder"
      },
      "-1,25": {
        "13": "quartz_stairs",
        "14": "quartz_block",
        "15": "quartz_stairs"
      },
      "-1,26": {
        "13": "quartz_stairs",
        "14": "quartz_block",
        "15": "quartz_stairs"
      },
      "-1,27": {
        "13": "quartz_stairs",
        "14": "quartz_block",
        "15": "quartz_stairs"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,7": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "0,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,9": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,16": {
        "12": "ladder",
        "13": "ladder"
      },
      "0,17": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "0,18": {
        "10": "ladder",
        "11": "ladder"
      },
      "0,20": {
        "8": "ladder",
        "9": "ladder"
      },
      "0,21": {
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "0,25": {
        "13": "quartz_stairs",
        "14": "quartz_block",
        "15": "quartz_stairs"
      },
      "0,26": {
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "light_weighted_pressure_plate"
      },
      "0,27": {
        "13": "quartz_stairs",
        "14": "quartz_block",
        "15": "quartz_stairs"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,7": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,8": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "1,9": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "1,10": {
        "0": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "1,17": {
        "11": "ladder",
        "12": "ladder"
      },
      "1,21": {
        "13": "ladder",
        "14": "ladder",
        "15": "ladder"
      },
      "1,25": {
        "13": "quartz_stairs",
        "14": "quartz_block",
        "15": "quartz_stairs"
      },
      "1,26": {
        "13": "quartz_stairs",
        "14": "quartz_block",
        "15": "quartz_stairs"
      },
      "1,27": {
        "13": "quartz_stairs",
        "14": "quartz_block",
        "15": "quartz_stairs"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "2,9": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "2,10": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "2,11": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "2,19": {
        "5": "ladder",
        "6": "ladder"
      },
      "2,21": {
        "13": "planks",
        "14": "planks",
        "15": "planks"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,9": {
        "0": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "3,10": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "3,11": {
        "0": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "3,18": {
        "7": "ladder",
        "8": "ladder"
      },
      "3,19": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "3,22": {
        "5": "planks"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,22": {
        "5": "planks"
      },
      "4,27": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "4,28": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "4,29": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,22": {
        "5": "planks"
      },
      "5,27": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "5,28": {
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block"
      },
      "5,29": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "5,36": {
        "12": "quartz_block",
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block",
        "18": "quartz_block",
        "19": "quartz_block",
        "20": "quartz_block",
        "21": "quartz_block",
        "22": "quartz_block",
        "23": "quartz_block",
        "24": "quartz_block",
        "25": "quartz_block",
        "26": "quartz_block",
        "27": "quartz_block"
      },
      "6,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "6,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,11": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "6,19": {
        "4": "planks"
      },
      "6,22": {
        "5": "planks"
      },
      "6,27": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "6,28": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "6,29": {
        "14": "quartz_stairs",
        "15": "quartz_block",
        "16": "quartz_stairs"
      },
      "6,32": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "6,33": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "6,34": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "6,35": {
        "20": "ladder",
        "21": "ladder",
        "22": "ladder",
        "26": "ladder",
        "27": "ladder"
      },
      "6,36": {
        "12": "quartz_block",
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block",
        "18": "quartz_block",
        "19": "quartz_block",
        "20": "quartz_block",
        "21": "quartz_block",
        "22": "quartz_block",
        "23": "quartz_block",
        "24": "quartz_block",
        "25": "quartz_block",
        "26": "quartz_block",
        "27": "quartz_block"
      },
      "6,38": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "6,39": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "6,40": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "7,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "7,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "7,11": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "7,19": {
        "4": "planks"
      },
      "7,22": {
        "5": "planks"
      },
      "7,32": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "7,33": {
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block"
      },
      "7,34": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "7,36": {
        "12": "quartz_block",
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block",
        "18": "quartz_block",
        "19": "quartz_block",
        "20": "quartz_block",
        "21": "quartz_block",
        "22": "quartz_block",
        "23": "quartz_block",
        "24": "quartz_block",
        "25": "quartz_block",
        "26": "quartz_block",
        "27": "quartz_block"
      },
      "7,37": {
        "19": "ladder",
        "20": "ladder",
        "21": "ladder",
        "22": "ladder",
        "23": "ladder",
        "24": "ladder",
        "25": "ladder"
      },
      "7,38": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "7,39": {
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block"
      },
      "7,40": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "8,16": {
        "3": "planks"
      },
      "8,19": {
        "4": "planks"
      },
      "8,22": {
        "5": "planks"
      },
      "8,32": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "8,33": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "8,34": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "8,35": {
        "17": "ladder",
        "18": "ladder",
        "19": "ladder",
        "23": "ladder",
        "24": "ladder",
        "25": "ladder"
      },
      "8,36": {
        "12": "quartz_block",
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block",
        "18": "quartz_block",
        "19": "quartz_block",
        "20": "quartz_block",
        "21": "quartz_block",
        "22": "quartz_block",
        "23": "quartz_block",
        "24": "quartz_block",
        "25": "quartz_block",
        "26": "quartz_block",
        "27": "quartz_block"
      },
      "8,38": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "8,39": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "8,40": {
        "15": "quartz_stairs",
        "16": "quartz_block",
        "17": "quartz_stairs"
      },
      "9,12": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "9,13": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,14": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "9,16": {
        "3": "planks"
      },
      "9,19": {
        "4": "planks"
      },
      "9,22": {
        "5": "planks"
      },
      "9,36": {
        "12": "quartz_block",
        "13": "quartz_block",
        "14": "quartz_block",
        "15": "quartz_block",
        "16": "quartz_block",
        "17": "quartz_block",
        "18": "quartz_block",
        "19": "quartz_block",
        "20": "quartz_block",
        "21": "quartz_block",
        "22": "quartz_block",
        "23": "quartz_block",
        "24": "quartz_block",
        "25": "quartz_block",
        "26": "quartz_block",
        "27": "quartz_block"
      },
      "10,12": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,13": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,14": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,16": {
        "3": "planks"
      },
      "10,19": {
        "4": "planks"
      },
      "11,13": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "11,14": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "11,16": {
        "3": "planks"
      },
      "11,19": {
        "4": "planks"
      },
      "12,16": {
        "3": "planks"
      },
      "13,16": {
        "3": "planks"
      }
    }
  },
  "quartz temple": {
    "name": "quartz temple",
    "columns": {
      "-14,14": {
        "4": "vine"
      },
      "-13,12": {
        "3": "stone",
        "4": "stone"
      },
      "-13,13": {
        "4": "quartz_block"
      },
      "-13,14": {
        "3": "stone",
        "4": "stone"
      },
      "-13,15": {
        "3": "vine",
        "4": "vine"
      },
      "-12,12": {
        "3": "stone",
        "4": "stone"
      },
      "-12,13": {
        "4": "quartz_block"
      },
      "-12,14": {
        "3": "stone",
        "4": "stone"
      },
      "-12,15": {
        "3": "vine",
        "4": "vine"
      },
      "-10,8": {
        "4": "stone",
        "5": "stone"
      },
      "-10,9": {
        "4": "stone",
        "5": "stone"
      },
      "-9,8": {
        "5": "quartz_block"
      },
      "-9,9": {
        "5": "quartz_block"
      },
      "-9,19": {
        "3": "stone",
        "4": "stone"
      },
      "-9,20": {
        "4": "quartz_block"
      },
      "-9,21": {
        "3": "stone",
        "4": "stone"
      },
      "-9,22": {
        "3": "vine",
        "4": "vine"
      },
      "-9,36": {
        "5": "stone_slab"
      },
      "-9,38": {
        "6": "stone_slab"
      },
      "-8,8": {
        "4": "stone",
        "5": "stone"
      },
      "-8,9": {
        "4": "stone",
        "5": "stone"
      },
      "-8,19": {
        "3": "stone",
        "4": "stone"
      },
      "-8,20": {
        "4": "quartz_block"
      },
      "-8,21": {
        "3": "stone",
        "4": "stone"
      },
      "-8,22": {
        "3": "vine",
        "4": "vine"
      },
      "-8,35": {
        "6": "vine"
      },
      "-8,36": {
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "-8,37": {
        "7": "quartz_block"
      },
      "-8,38": {
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "-7,35": {
        "6": "vine"
      },
      "-7,36": {
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "-7,37": {
        "7": "quartz_block"
      },
      "-7,38": {
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "-6,8": {
        "4": "stone_slab"
      },
      "-6,9": {
        "4": "stone_slab"
      },
      "-6,10": {
        "4": "stone_slab"
      },
      "-6,11": {
        "4": "stone_slab"
      },
      "-6,12": {
        "4": "stone_slab"
      },
      "-5,8": {
        "4": "stone_slab",
        "5": "stone_slab"
      },
      "-5,9": {
        "4": "stone_slab",
        "5": "stone_slab"
      },
      "-5,10": {
        "4": "stone_slab",
        "5": "stone_slab"
      },
      "-5,11": {
        "4": "stone_slab",
        "5": "stone_slab"
      },
      "-5,12": {
        "4": "stone_slab",
        "5": "stone_slab"
      },
      "-5,23": {
        "1": "stone",
        "2": "stone"
      },
      "-5,24": {
        "1": "stone",
        "2": "stone"
      },
      "-5,33": {
        "4": "stone",
        "5": "stone",
        "8": "vine",
        "9": "vine",
        "10": "vine"
      },
      "-5,34": {
        "4": "stone",
        "5": "stone"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,8": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "double_stone_slab"
      },
      "-4,9": {
        "5": "stone_slab"
      },
      "-4,10": {
        "5": "stone_slab"
      },
      "-4,11": {
        "5": "stone_slab"
      },
      "-4,12": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "double_stone_slab"
      },
      "-4,23": {
        "2": "quartz_block"
      },
      "-4,24": {
        "2": "quartz_block"
      },
      "-4,32": {
        "4": "stone",
        "5": "stone"
      },
      "-4,33": {
        "4": "stone",
        "5": "quartz_block",
        "6": "quartz_block",
        "7": "quartz_block",
        "8": "quartz_block",
        "9": "quartz_block",
        "10": "quartz_block"
      },
      "-4,34": {
        "4": "stone",
        "5": "stone",
        "8": "vine",
        "9": "vine",
        "10": "vine"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,8": {
        "0": "stone",
        "5": "double_stone_slab",
        "6": "stone_slab"
      },
      "-3,9": {
        "6": "stone_slab"
      },
      "-3,10": {
        "6": "stone_slab"
      },
      "-3,11": {
        "6": "stone_slab"
      },
      "-3,12": {
        "0": "stone",
        "5": "double_stone_slab",
        "6": "stone_slab"
      },
      "-3,16": {
        "0": "vine",
        "1": "vine"
      },
      "-3,17": {
        "0": "stone",
        "1": "stone"
      },
      "-3,18": {
        "1": "quartz_block"
      },
      "-3,19": {
        "0": "stone",
        "1": "stone"
      },
      "-3,23": {
        "1": "stone",
        "2": "stone"
      },
      "-3,24": {
        "1": "stone",
        "2": "stone"
      },
      "-3,32": {
        "4": "stone",
        "5": "stone"
      },
      "-3,33": {
        "4": "stone",
        "5": "stone",
        "10": "vine"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,8": {
        "0": "stone",
        "5": "double_stone_slab",
        "6": "double_stone_slab"
      },
      "-2,9": {
        "6": "stone_slab"
      },
      "-2,10": {
        "6": "stone_slab"
      },
      "-2,11": {
        "6": "stone_slab"
      },
      "-2,12": {
        "0": "stone",
        "5": "double_stone_slab",
        "6": "double_stone_slab"
      },
      "-2,16": {
        "0": "vine",
        "1": "vine"
      },
      "-2,17": {
        "0": "stone",
        "1": "stone"
      },
      "-2,18": {
        "1": "quartz_block"
      },
      "-2,19": {
        "0": "stone",
        "1": "stone"
      },
      "-2,23": {
        "1": "vine",
        "2": "vine"
      },
      "-2,24": {
        "1": "vine",
        "2": "vine"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,8": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "quartz_block",
        "6": "double_stone_slab",
        "7": "stone_slab"
      },
      "-1,9": {
        "7": "stone_slab"
      },
      "-1,10": {
        "7": "stone_slab"
      },
      "-1,11": {
        "7": "stone_slab"
      },
      "-1,12": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "quartz_block",
        "6": "double_stone_slab",
        "7": "stone_slab"
      },
      "-1,20": {
        "4": "vine",
        "5": "vine"
      },
      "-1,21": {
        "4": "stone",
        "5": "stone"
      },
      "-1,22": {
        "5": "quartz_block"
      },
      "-1,23": {
        "4": "stone",
        "5": "stone"
      },
      "-1,28": {
        "4": "stone",
        "5": "stone"
      },
      "-1,29": {
        "5": "quartz_block"
      },
      "-1,30": {
        "4": "stone",
        "5": "stone"
      },
      "-1,38": {
        "-1": "slime"
      },
      "-1,39": {
        "-1": "slime"
      },
      "-1,40": {
        "-1": "slime"
      },
      "-1,41": {
        "-1": "slime"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,8": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "quartz_block",
        "6": "double_stone_slab",
        "7": "double_stone_slab"
      },
      "0,9": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "quartz_block",
        "6": "quartz_block",
        "7": "stone_slab"
      },
      "0,10": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "quartz_block",
        "6": "quartz_block",
        "7": "stone_slab",
        "8": "light_weighted_pressure_plate"
      },
      "0,11": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "quartz_block",
        "6": "quartz_block",
        "7": "stone_slab"
      },
      "0,12": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "quartz_block",
        "6": "double_stone_slab",
        "7": "double_stone_slab"
      },
      "0,15": {
        "-1": "slime"
      },
      "0,16": {
        "-1": "slime"
      },
      "0,17": {
        "-1": "slime"
      },
      "0,18": {
        "-1": "slime"
      },
      "0,19": {
        "-1": "slime"
      },
      "0,20": {
        "4": "vine",
        "5": "vine",
        "-1": "slime"
      },
      "0,21": {
        "4": "stone",
        "5": "stone"
      },
      "0,22": {
        "5": "quartz_block"
      },
      "0,23": {
        "4": "stone",
        "5": "stone"
      },
      "0,28": {
        "4": "stone",
        "5": "stone"
      },
      "0,29": {
        "5": "quartz_block"
      },
      "0,30": {
        "4": "stone",
        "5": "stone"
      },
      "0,38": {
        "-1": "slime"
      },
      "0,39": {
        "-1": "slime"
      },
      "0,40": {
        "-1": "slime"
      },
      "0,41": {
        "-1": "slime"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,8": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "quartz_block",
        "6": "double_stone_slab",
        "7": "stone_slab"
      },
      "1,9": {
        "7": "stone_slab"
      },
      "1,10": {
        "7": "stone_slab"
      },
      "1,11": {
        "7": "stone_slab"
      },
      "1,12": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "quartz_block",
        "6": "double_stone_slab",
        "7": "stone_slab"
      },
      "1,20": {
        "4": "vine",
        "5": "vine"
      },
      "1,21": {
        "4": "stone",
        "5": "stone"
      },
      "1,22": {
        "5": "quartz_block"
      },
      "1,23": {
        "4": "stone",
        "5": "stone"
      },
      "1,28": {
        "4": "stone",
        "5": "stone"
      },
      "1,29": {
        "5": "quartz_block"
      },
      "1,30": {
        "4": "stone",
        "5": "stone"
      },
      "1,38": {
        "-1": "slime"
      },
      "1,39": {
        "-1": "slime"
      },
      "1,40": {
        "-1": "slime"
      },
      "1,41": {
        "-1": "slime"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,8": {
        "0": "stone",
        "5": "double_stone_slab",
        "6": "double_stone_slab"
      },
      "2,9": {
        "6": "stone_slab"
      },
      "2,10": {
        "6": "stone_slab"
      },
      "2,11": {
        "6": "stone_slab"
      },
      "2,12": {
        "0": "stone",
        "5": "double_stone_slab",
        "6": "double_stone_slab"
      },
      "2,16": {
        "0": "vine",
        "1": "vine"
      },
      "2,17": {
        "0": "stone",
        "1": "stone"
      },
      "2,18": {
        "1": "quartz_block"
      },
      "2,19": {
        "0": "stone",
        "1": "stone"
      },
      "2,23": {
        "1": "vine",
        "2": "vine"
      },
      "2,24": {
        "1": "vine",
        "2": "vine"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,8": {
        "0": "stone",
        "5": "double_stone_slab",
        "6": "stone_slab"
      },
      "3,9": {
        "6": "stone_slab"
      },
      "3,10": {
        "6": "stone_slab"
      },
      "3,11": {
        "6": "stone_slab"
      },
      "3,12": {
        "0": "stone",
        "5": "double_stone_slab",
        "6": "stone_slab"
      },
      "3,16": {
        "0": "vine",
        "1": "vine"
      },
      "3,17": {
        "0": "stone",
        "1": "stone"
      },
      "3,18": {
        "1": "quartz_block"
      },
      "3,19": {
        "0": "stone",
        "1": "stone"
      },
      "3,23": {
        "1": "stone",
        "2": "stone"
      },
      "3,24": {
        "1": "stone",
        "2": "stone"
      },
      "3,32": {
        "4": "stone",
        "5": "stone"
      },
      "3,33": {
        "4": "stone",
        "5": "stone"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,8": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "double_stone_slab"
      },
      "4,9": {
        "5": "stone_slab"
      },
      "4,10": {
        "5": "stone_slab"
      },
      "4,11": {
        "5": "stone_slab"
      },
      "4,12": {
        "0": "stone",
        "1": "quartz_block",
        "2": "quartz_block",
        "3": "quartz_block",
        "4": "quartz_block",
        "5": "double_stone_slab"
      },
      "4,17": {
        "0": "vine"
      },
      "4,23": {
        "2": "quartz_block"
      },
      "4,24": {
        "2": "quartz_block"
      },
      "4,32": {
        "4": "stone",
        "5": "stone"
      },
      "4,33": {
        "4": "stone",
        "5": "quartz_block",
        "6": "quartz_block",
        "7": "quartz_block",
        "8": "quartz_block",
        "9": "quartz_block",
        "10": "quartz_block"
      },
      "4,34": {
        "4": "stone",
        "5": "stone",
        "8": "vine",
        "9": "vine",
        "10": "vine"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,8": {
        "4": "stone_slab",
        "5": "stone_slab"
      },
      "5,9": {
        "4": "stone_slab",
        "5": "stone_slab"
      },
      "5,10": {
        "4": "stone_slab",
        "5": "stone_slab"
      },
      "5,11": {
        "4": "stone_slab",
        "5": "stone_slab"
      },
      "5,12": {
        "4": "stone_slab",
        "5": "stone_slab"
      },
      "5,23": {
        "1": "stone",
        "2": "stone"
      },
      "5,24": {
        "1": "stone",
        "2": "stone"
      },
      "5,33": {
        "4": "stone",
        "5": "stone",
        "8": "vine",
        "9": "vine",
        "10": "vine"
      },
      "5,34": {
        "4": "stone",
        "5": "stone"
      },
      "6,8": {
        "4": "stone_slab"
      },
      "6,9": {
        "4": "stone_slab"
      },
      "6,10": {
        "4": "stone_slab"
      },
      "6,11": {
        "4": "stone_slab"
      },
      "6,12": {
        "4": "stone_slab"
      },
      "7,35": {
        "6": "vine"
      },
      "7,36": {
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "7,37": {
        "7": "quartz_block"
      },
      "7,38": {
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "8,8": {
        "4": "stone",
        "5": "stone"
      },
      "8,9": {
        "4": "stone",
        "5": "stone"
      },
      "8,19": {
        "3": "stone",
        "4": "stone"
      },
      "8,20": {
        "4": "quartz_block"
      },
      "8,21": {
        "3": "stone",
        "4": "stone"
      },
      "8,22": {
        "3": "vine",
        "4": "vine"
      },
      "8,35": {
        "6": "vine"
      },
      "8,36": {
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "8,37": {
        "7": "quartz_block"
      },
      "8,38": {
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "9,8": {
        "5": "quartz_block"
      },
      "9,9": {
        "5": "quartz_block"
      },
      "9,19": {
        "3": "stone",
        "4": "stone"
      },
      "9,20": {
        "4": "quartz_block"
      },
      "9,21": {
        "3": "stone",
        "4": "stone"
      },
      "9,22": {
        "3": "vine",
        "4": "vine"
      },
      "9,36": {
        "5": "stone_slab"
      },
      "9,38": {
        "6": "stone_slab"
      },
      "10,8": {
        "4": "stone",
        "5": "stone"
      },
      "10,9": {
        "4": "stone",
        "5": "stone"
      },
      "12,12": {
        "3": "stone",
        "4": "stone"
      },
      "12,13": {
        "4": "quartz_block"
      },
      "12,14": {
        "3": "stone",
        "4": "stone"
      },
      "12,15": {
        "3": "vine",
        "4": "vine"
      },
      "13,12": {
        "3": "stone",
        "4": "stone"
      },
      "13,13": {
        "4": "quartz_block"
      },
      "13,14": {
        "3": "stone",
        "4": "stone"
      },
      "13,15": {
        "3": "vine",
        "4": "vine"
      },
      "14,14": {
        "3": "vine"
      }
    }
  },
  "sandpit": {
    "name": "sandpit",
    "columns": {
      "-15,4": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "-15,5": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "-15,10": {
        "0": "vine",
        "-3": "vine",
        "-2": "vine",
        "-1": "vine"
      },
      "-15,11": {
        "0": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,12": {
        "0": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,13": {
        "0": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,14": {
        "0": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,15": {
        "0": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,18": {
        "-6": "leaves",
        "-5": "leaves"
      },
      "-15,19": {
        "-7": "leaves",
        "-6": "leaves",
        "-5": "leaves"
      },
      "-15,22": {
        "6": "vine"
      },
      "-15,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,24": {
        "0": "stone",
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "6": "stonebrick",
        "7": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,25": {
        "0": "stone",
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,26": {
        "0": "stone",
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,29": {
        "-1": "leaves"
      },
      "-15,30": {
        "-2": "leaves"
      },
      "-15,31": {
        "-3": "leaves",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-15,32": {
        "-1": "leaves"
      },
      "-15,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-15,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,4": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "-14,5": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "-14,10": {
        "0": "vine",
        "-2": "vine",
        "-1": "vine"
      },
      "-14,11": {
        "0": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,12": {
        "0": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,13": {
        "0": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,14": {
        "0": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,15": {
        "0": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,18": {
        "-5": "leaves",
        "-4": "leaves",
        "-3": "slime"
      },
      "-14,19": {
        "-6": "leaves",
        "-5": "leaves",
        "-4": "leaves",
        "-3": "slime"
      },
      "-14,20": {
        "-4": "leaves",
        "-3": "slime"
      },
      "-14,22": {
        "6": "vine"
      },
      "-14,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,24": {
        "0": "stone",
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "6": "stonebrick",
        "7": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,25": {
        "0": "stone",
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,26": {
        "0": "stone",
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,30": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "-14,31": {
        "0": "leaves",
        "1": "slime",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-14,32": {
        "1": "slime"
      },
      "-14,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-14,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,4": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "-13,5": {
        "0": "stone",
        "1": "stone",
        "-1": "stonebrick"
      },
      "-13,10": {
        "0": "vine",
        "-1": "vine"
      },
      "-13,11": {
        "0": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,12": {
        "0": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,13": {
        "0": "stone",
        "4": "stone",
        "5": "stonebrick",
        "9": "ladder",
        "10": "ladder",
        "11": "ladder",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,14": {
        "0": "stone",
        "4": "stone",
        "5": "stonebrick",
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "light_weighted_pressure_plate",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,15": {
        "0": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,18": {
        "-4": "leaves",
        "-3": "slime"
      },
      "-13,19": {
        "-5": "leaves",
        "-4": "leaves",
        "-3": "slime"
      },
      "-13,20": {
        "-4": "leaves",
        "-3": "slime"
      },
      "-13,22": {
        "6": "vine"
      },
      "-13,23": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,24": {
        "0": "stone",
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,25": {
        "0": "stone",
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,26": {
        "0": "stone",
        "1": "stonebrick",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "8": "stonebrick",
        "9": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,30": {
        "0": "leaves",
        "1": "slime"
      },
      "-13,31": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "-13,32": {
        "0": "leaves",
        "1": "slime"
      },
      "-13,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-13,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,12": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,13": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,14": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "6": "ladder",
        "7": "ladder",
        "8": "ladder",
        "9": "ladder",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,18": {
        "-4": "leaves",
        "-3": "slime"
      },
      "-12,19": {
        "-3": "slime"
      },
      "-12,20": {
        "-4": "leaves",
        "-3": "slime"
      },
      "-12,22": {
        "0": "vine"
      },
      "-12,23": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,24": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,25": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,26": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,27": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "3": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,30": {
        "0": "leaves",
        "1": "slime"
      },
      "-12,31": {
        "0": "leaves",
        "1": "slime"
      },
      "-12,32": {
        "0": "leaves",
        "1": "slime"
      },
      "-12,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "10": "ladder",
        "11": "ladder",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-12,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,12": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,13": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,14": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,22": {
        "0": "vine"
      },
      "-11,23": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,24": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,25": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,26": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,27": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "9": "ladder",
        "10": "ladder",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-11,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,2": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,3": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,12": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,13": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,14": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,15": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,22": {
        "0": "vine"
      },
      "-10,23": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,24": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,25": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,26": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,27": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "3": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,36": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,37": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,38": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-10,39": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone_brick_stairs",
        "6": "stonebrick",
        "7": "stonebrick",
        "-3": "dirt",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-9,2": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-9,3": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-9,23": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-9,24": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-9,25": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-9,26": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-9,27": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-8,6": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-8,7": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-8,8": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "-8,23": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "3": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-8,24": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-8,25": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-8,26": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-8,27": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "3": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-7,6": {
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-7,7": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone",
        "-3": "stonebrick",
        "-2": "stone",
        "-1": "stone"
      },
      "-7,8": {
        "6": "stonebrick",
        "7": "stone",
        "8": "stone"
      },
      "-7,10": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-7,11": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-7,23": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-7,24": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-7,25": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-7,26": {
        "0": "stone",
        "1": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-7,27": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-7,35": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "-7,36": {
        "9": "ladder",
        "10": "ladder"
      },
      "-6,10": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-6,11": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-6,23": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "3": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-6,24": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-6,25": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-6,26": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-6,27": {
        "0": "stone",
        "1": "stone_brick_stairs",
        "2": "stonebrick",
        "3": "stonebrick",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "-6,35": {
        "10": "ladder",
        "11": "ladder"
      },
      "-5,13": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-5,14": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,10": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "-4,11": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "-4,13": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-4,14": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-4,24": {
        "3": "vine"
      },
      "-4,25": {
        "3": "vine"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,10": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "-3,11": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "-3,24": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-3,25": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-3,34": {
        "9": "ladder",
        "10": "ladder"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,12": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-2,13": {
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-2,23": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-2,24": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-2,25": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "-2,28": {
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "-2,33": {
        "10": "ladder",
        "11": "ladder"
      },
      "-2,34": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,12": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-1,13": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone",
        "-4": "stonebrick",
        "-3": "stone",
        "-2": "stone"
      },
      "-1,24": {
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "-1,25": {
        "13": "ladder"
      },
      "-1,28": {
        "12": "ladder",
        "13": "ladder"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,7": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "0,8": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "0,12": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone"
      },
      "0,13": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone"
      },
      "0,20": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "0,21": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "0,22": {
        "1": "stonebrick",
        "2": "stone",
        "3": "stone"
      },
      "0,24": {
        "11": "ladder",
        "12": "ladder",
        "13": "ladder"
      },
      "0,30": {
        "8": "planks",
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks"
      },
      "0,31": {
        "11": "ladder",
        "12": "ladder"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,7": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "1,8": {
        "0": "stone",
        "-2": "stonebrick",
        "-1": "stone"
      },
      "1,20": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "1,21": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "1,22": {
        "2": "stonebrick",
        "3": "stone",
        "4": "stone"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,16": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone"
      },
      "2,17": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone"
      },
      "2,20": {
        "12": "ladder",
        "13": "ladder"
      },
      "2,21": {
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,16": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone"
      },
      "3,17": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,15": {
        "9": "planks",
        "10": "planks",
        "11": "planks",
        "12": "planks"
      },
      "4,16": {
        "9": "ladder",
        "10": "ladder",
        "11": "ladder",
        "12": "ladder"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "6,11": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks"
      },
      "7,11": {
        "8": "ladder",
        "9": "ladder",
        "10": "ladder"
      },
      "7,43": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "7,44": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "8,43": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "8,44": {
        "5": "stonebrick",
        "6": "stone",
        "7": "stone"
      },
      "10,11": {
        "9": "ladder",
        "10": "ladder"
      },
      "10,20": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "10,21": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "10,22": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "10,23": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "10,24": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "10,25": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "10,26": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "10,27": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "10,28": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "10,29": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "10,30": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "11,11": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks"
      },
      "11,20": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "11,21": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "11,22": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "11,23": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "11,24": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "11,25": {
        "0": "fence",
        "1": "fence",
        "2": "wooden_slab",
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "11,26": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "11,27": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "11,28": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "11,29": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "11,30": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "11,37": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone"
      },
      "11,38": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone"
      },
      "11,41": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone"
      },
      "11,42": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone"
      },
      "12,16": {
        "3": "planks",
        "4": "planks"
      },
      "12,17": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "12,18": {
        "1": "planks",
        "2": "planks",
        "4": "ladder"
      },
      "12,19": {
        "0": "planks",
        "1": "planks"
      },
      "12,20": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "12,21": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "12,22": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "12,23": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "12,24": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "12,25": {
        "0": "fence",
        "1": "fence",
        "2": "wooden_slab",
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "12,26": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "12,27": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "12,28": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "12,29": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "12,30": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "12,31": {
        "0": "planks",
        "1": "planks"
      },
      "12,32": {
        "1": "planks",
        "2": "planks",
        "4": "ladder"
      },
      "12,33": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "12,34": {
        "3": "planks",
        "4": "planks"
      },
      "12,37": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone"
      },
      "12,38": {
        "3": "stonebrick",
        "4": "stone",
        "5": "stone"
      },
      "12,41": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone"
      },
      "12,42": {
        "4": "stonebrick",
        "5": "stone",
        "6": "stone"
      },
      "13,16": {
        "3": "planks",
        "4": "planks"
      },
      "13,17": {
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "light_weighted_pressure_plate"
      },
      "13,18": {
        "1": "planks",
        "2": "planks",
        "4": "ladder"
      },
      "13,19": {
        "0": "planks",
        "1": "planks"
      },
      "13,20": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "13,21": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "13,22": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "13,23": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "13,24": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "13,25": {
        "0": "fence",
        "1": "fence",
        "2": "wooden_slab",
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "13,26": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "13,27": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "13,28": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "13,29": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "13,30": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "13,31": {
        "0": "planks",
        "1": "planks"
      },
      "13,32": {
        "1": "planks",
        "2": "planks",
        "4": "ladder"
      },
      "13,33": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "13,34": {
        "3": "planks",
        "4": "planks"
      },
      "14,16": {
        "3": "planks",
        "4": "planks"
      },
      "14,17": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "14,18": {
        "1": "planks",
        "2": "planks",
        "4": "ladder"
      },
      "14,19": {
        "0": "planks",
        "1": "planks"
      },
      "14,20": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "14,21": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "14,22": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "14,23": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "14,24": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "14,25": {
        "0": "fence",
        "1": "fence",
        "2": "wooden_slab",
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "14,26": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "14,27": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "14,28": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "14,29": {
        "-3": "planks",
        "-2": "sand",
        "-1": "slime"
      },
      "14,30": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "14,31": {
        "0": "planks",
        "1": "planks"
      },
      "14,32": {
        "1": "planks",
        "2": "planks",
        "4": "ladder"
      },
      "14,33": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "14,34": {
        "3": "planks",
        "4": "planks"
      },
      "15,16": {
        "3": "planks",
        "4": "planks"
      },
      "15,17": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "15,18": {
        "1": "planks",
        "2": "planks",
        "4": "ladder"
      },
      "15,19": {
        "0": "planks",
        "1": "planks"
      },
      "15,20": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,21": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,22": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,23": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,24": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,25": {
        "0": "fence",
        "1": "fence",
        "2": "wooden_slab",
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,26": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,27": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,28": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,29": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,30": {
        "-3": "planks",
        "-2": "sand",
        "-1": "sand"
      },
      "15,31": {
        "0": "planks",
        "1": "planks"
      },
      "15,32": {
        "1": "planks",
        "2": "planks",
        "4": "ladder"
      },
      "15,33": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "15,34": {
        "3": "planks",
        "4": "planks"
      }
    }
  },
  "scatter": {
    "name": "scatter",
    "columns": {
      "-15,27": {
        "16": "stained_hardened_clay"
      },
      "-15,28": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-15,29": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "dirt",
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-15,30": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-15,31": {
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-14,28": {
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-14,29": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-14,30": {
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-14,31": {
        "16": "stained_hardened_clay"
      },
      "-14,35": {
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-14,36": {
        "17": "stained_hardened_clay"
      },
      "-13,28": {
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-13,29": {
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-13,30": {
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay"
      },
      "-13,34": {
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-13,35": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-13,36": {
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-12,17": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-12,18": {
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-12,32": {
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-12,34": {
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-12,35": {
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-11,16": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-11,17": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-11,18": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-11,29": {
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-10,12": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-10,13": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-10,16": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-10,17": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-10,26": {
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-10,31": {
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-10,38": {
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-10,39": {
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-9,11": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-9,12": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "-9,13": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "-9,28": {
        "13": "dirt",
        "14": "stained_hardened_clay"
      },
      "-9,33": {
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-9,35": {
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-9,38": {
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-9,39": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-9,40": {
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-8,11": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-8,12": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "-8,20": {
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-8,21": {
        "7": "dirt",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay"
      },
      "-8,22": {
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-8,25": {
        "13": "dirt",
        "14": "stained_hardened_clay"
      },
      "-8,31": {
        "13": "dirt",
        "14": "stained_hardened_clay"
      },
      "-8,38": {
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-8,39": {
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-8,40": {
        "16": "stained_hardened_clay"
      },
      "-7,20": {
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-7,21": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay",
        "10": "light_weighted_pressure_plate"
      },
      "-7,22": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-7,27": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-7,29": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-7,35": {
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-6,21": {
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "-6,22": {
        "9": "stained_hardened_clay"
      },
      "-6,31": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-6,33": {
        "13": "dirt",
        "14": "stained_hardened_clay"
      },
      "-5,12": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-5,13": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-5,14": {
        "6": "stained_hardened_clay"
      },
      "-5,26": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-5,28": {
        "12": "stained_hardened_clay"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,12": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-4,13": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-4,14": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-4,30": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-4,40": {
        "15": "stained_hardened_clay"
      },
      "-4,41": {
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,8": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-3,9": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-3,13": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-3,14": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-3,27": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-3,32": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-3,39": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-3,40": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "dirt",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-3,41": {
        "12": "stained_hardened_clay",
        "13": "dirt",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-3,42": {
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-2,9": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-2,10": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-2,21": {
        "8": "slime"
      },
      "-2,22": {
        "5": "leaves",
        "6": "leaves",
        "7": "leaves",
        "8": "slime"
      },
      "-2,23": {
        "7": "leaves",
        "8": "slime"
      },
      "-2,29": {
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-2,39": {
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-2,40": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "dirt",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-2,41": {
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-2,42": {
        "15": "stained_hardened_clay"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,9": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-1,10": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,21": {
        "6": "leaves",
        "7": "leaves",
        "8": "slime"
      },
      "-1,22": {
        "4": "leaves",
        "5": "leaves",
        "6": "leaves",
        "7": "leaves",
        "8": "slime"
      },
      "-1,23": {
        "5": "leaves",
        "6": "leaves",
        "7": "leaves",
        "8": "slime"
      },
      "-1,39": {
        "15": "stained_hardened_clay"
      },
      "-1,40": {
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,15": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "0,16": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "0,21": {
        "7": "leaves",
        "8": "slime"
      },
      "0,22": {
        "6": "leaves",
        "7": "leaves",
        "8": "slime"
      },
      "0,23": {
        "7": "leaves",
        "8": "slime"
      },
      "0,28": {
        "11": "stained_hardened_clay"
      },
      "0,29": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "0,30": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,12": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,13": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "1,15": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "1,16": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "1,17": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "1,28": {
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "1,29": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "1,30": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "1,31": {
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,12": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "2,13": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "2,14": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "2,16": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "2,17": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "2,29": {
        "11": "stained_hardened_clay"
      },
      "2,30": {
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "2,31": {
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,13": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "3,14": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "3,23": {
        "3": "leaves",
        "4": "leaves",
        "5": "slime"
      },
      "3,24": {
        "2": "leaves",
        "3": "leaves",
        "4": "leaves",
        "5": "slime"
      },
      "3,25": {
        "4": "leaves",
        "5": "slime"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,23": {
        "3": "leaves",
        "4": "leaves",
        "5": "slime"
      },
      "4,24": {
        "1": "leaves",
        "2": "leaves",
        "3": "leaves",
        "4": "leaves",
        "5": "slime"
      },
      "4,25": {
        "3": "leaves",
        "4": "leaves",
        "5": "slime"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,16": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "5,17": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "5,23": {
        "5": "slime"
      },
      "5,24": {
        "4": "leaves",
        "5": "slime"
      },
      "5,25": {
        "4": "leaves",
        "5": "slime"
      },
      "6,12": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,13": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "6,16": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "6,17": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "6,18": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "6,26": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "6,27": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "6,31": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "6,32": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "7,11": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "7,12": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "7,13": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "7,17": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "7,18": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "7,26": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "7,27": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "7,31": {
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "7,32": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "7,33": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "8,11": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "8,12": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "8,32": {
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "8,33": {
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "9,27": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "9,28": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "10,17": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "10,18": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "10,27": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "10,28": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "10,29": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "11,11": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "11,12": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "11,16": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "11,17": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "11,18": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "11,28": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "11,29": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "11,32": {
        "9": "stained_hardened_clay"
      },
      "11,33": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "11,34": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "12,11": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "12,12": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "12,13": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "12,16": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "12,17": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "12,32": {
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "12,33": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "12,34": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "13,11": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "13,12": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "13,13": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "13,33": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "13,34": {
        "9": "stained_hardened_clay"
      }
    }
  },
  "slime scatter": {
    "name": "slime scatter",
    "columns": {
      "-15,22": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-15,23": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-14,22": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-14,23": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-14,24": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-13,17": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-13,18": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-13,22": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "-13,23": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-13,24": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-12,17": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-12,18": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-12,19": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-11,17": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-11,18": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,19": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-11,26": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,27": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-10,25": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,26": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,27": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,25": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-9,26": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,27": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-8,10": {
        "3": "ladder",
        "4": "ladder"
      },
      "-8,14": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-8,15": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-8,19": {
        "-2": "leaves",
        "-1": "slime"
      },
      "-8,20": {
        "-4": "leaves",
        "-3": "leaves",
        "-2": "leaves",
        "-1": "slime"
      },
      "-8,21": {
        "-3": "leaves",
        "-2": "leaves",
        "-1": "slime"
      },
      "-7,9": {
        "3": "ladder",
        "4": "ladder"
      },
      "-7,10": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "-7,11": {
        "3": "ladder",
        "4": "ladder"
      },
      "-7,13": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay"
      },
      "-7,14": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-7,15": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-7,16": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-7,19": {
        "-4": "leaves",
        "-3": "leaves",
        "-2": "leaves",
        "-1": "slime"
      },
      "-7,20": {
        "-4": "leaves",
        "-3": "leaves",
        "-2": "leaves",
        "-1": "slime"
      },
      "-7,21": {
        "-3": "leaves",
        "-2": "leaves",
        "-1": "slime"
      },
      "-6,9": {
        "3": "ladder",
        "4": "ladder",
        "5": "ladder"
      },
      "-6,10": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks"
      },
      "-6,11": {
        "3": "ladder",
        "4": "ladder"
      },
      "-6,13": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-6,14": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-6,15": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-6,16": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-6,19": {
        "-3": "leaves",
        "-2": "leaves",
        "-1": "slime"
      },
      "-6,20": {
        "-4": "leaves",
        "-3": "leaves",
        "-2": "leaves",
        "-1": "slime"
      },
      "-6,21": {
        "-2": "leaves",
        "-1": "slime"
      },
      "-6,25": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-6,26": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-6,28": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-6,29": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-5,9": {
        "4": "ladder",
        "5": "ladder"
      },
      "-5,10": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "light_weighted_pressure_plate"
      },
      "-5,14": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-5,15": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-5,25": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-5,26": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-5,28": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-5,29": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-5,30": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,10": {
        "6": "ladder",
        "7": "ladder"
      },
      "-4,29": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-4,30": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-4,37": {
        "2": "leaves",
        "3": "slime"
      },
      "-4,38": {
        "2": "leaves",
        "3": "slime"
      },
      "-4,41": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "-4,42": {
        "0": "leaves",
        "1": "slime",
        "-3": "leaves",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,10": {
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "-3,11": {
        "6": "ladder",
        "7": "ladder"
      },
      "-3,36": {
        "0": "leaves",
        "1": "leaves",
        "2": "leaves",
        "3": "slime"
      },
      "-3,37": {
        "0": "leaves",
        "1": "leaves",
        "2": "leaves",
        "3": "slime"
      },
      "-3,38": {
        "2": "leaves",
        "3": "slime"
      },
      "-3,41": {
        "0": "leaves",
        "1": "slime",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-3,42": {
        "0": "leaves",
        "1": "slime",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-3,43": {
        "0": "leaves",
        "1": "slime"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,10": {
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "-2,11": {
        "6": "ladder",
        "7": "ladder",
        "8": "ladder"
      },
      "-2,21": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-2,22": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "-2,36": {
        "1": "leaves",
        "2": "leaves",
        "3": "slime"
      },
      "-2,37": {
        "2": "leaves",
        "3": "slime"
      },
      "-2,41": {
        "0": "leaves",
        "1": "slime"
      },
      "-2,42": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "-2,43": {
        "0": "leaves",
        "1": "slime"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,6": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-1,7": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-1,8": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,19": {
        "1": "vine",
        "2": "vine"
      },
      "-1,20": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay"
      },
      "-1,21": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "light_weighted_pressure_plate",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-1,22": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,6": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,7": {
        "0": "stained_hardened_clay",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,8": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,9": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,19": {
        "1": "vine",
        "2": "vine"
      },
      "0,20": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay"
      },
      "0,21": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,39": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "0,40": {
        "1": "leaves",
        "2": "slime"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,6": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,7": {
        "0": "stained_hardened_clay",
        "-2": "dirt",
        "-1": "dirt"
      },
      "1,8": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,10": {
        "10": "ladder",
        "11": "ladder"
      },
      "1,11": {
        "9": "planks",
        "10": "planks",
        "11": "planks"
      },
      "1,12": {
        "9": "planks",
        "10": "planks",
        "11": "planks"
      },
      "1,13": {
        "9": "planks",
        "10": "planks",
        "11": "planks"
      },
      "1,18": {
        "10": "ladder",
        "11": "ladder"
      },
      "1,20": {
        "0": "vine",
        "1": "vine",
        "2": "vine",
        "10": "ladder",
        "11": "ladder"
      },
      "1,21": {
        "0": "vine",
        "1": "vine",
        "2": "vine"
      },
      "1,22": {
        "10": "ladder",
        "11": "ladder"
      },
      "1,23": {
        "10": "ladder",
        "11": "ladder"
      },
      "1,38": {
        "1": "leaves",
        "2": "slime"
      },
      "1,39": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime",
        "-1": "leaves"
      },
      "1,40": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime",
        "-2": "leaves",
        "-1": "leaves"
      },
      "1,41": {
        "1": "leaves",
        "2": "slime"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,17": {
        "10": "ladder",
        "11": "ladder"
      },
      "2,18": {
        "2": "cobblestone_wall",
        "3": "cobblestone_wall",
        "4": "cobblestone_wall",
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "2,19": {
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "2,20": {
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "2,21": {
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "2,22": {
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "2,23": {
        "10": "planks",
        "11": "planks",
        "12": "planks",
        "13": "planks"
      },
      "2,24": {
        "10": "ladder",
        "11": "ladder"
      },
      "2,26": {
        "11": "ladder",
        "12": "ladder"
      },
      "2,27": {
        "10": "planks",
        "11": "planks",
        "12": "planks"
      },
      "2,28": {
        "10": "planks",
        "11": "planks",
        "12": "planks"
      },
      "2,38": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "2,39": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime",
        "-1": "leaves"
      },
      "2,40": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime",
        "-1": "leaves"
      },
      "2,41": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,18": {
        "10": "ladder",
        "11": "ladder"
      },
      "3,20": {
        "10": "ladder",
        "11": "ladder"
      },
      "3,22": {
        "10": "ladder",
        "11": "ladder"
      },
      "3,23": {
        "10": "ladder",
        "11": "ladder"
      },
      "3,33": {
        "2": "leaves",
        "3": "slime"
      },
      "3,34": {
        "1": "leaves",
        "2": "leaves",
        "3": "slime"
      },
      "3,39": {
        "1": "leaves",
        "2": "slime"
      },
      "3,40": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,15": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "4,16": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "4,33": {
        "2": "leaves",
        "3": "slime"
      },
      "4,34": {
        "0": "leaves",
        "1": "leaves",
        "2": "leaves",
        "3": "slime"
      },
      "4,35": {
        "0": "leaves",
        "1": "leaves",
        "2": "leaves",
        "3": "slime"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,6": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "5,7": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "5,8": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "5,14": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "5,15": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "5,16": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "5,34": {
        "2": "leaves",
        "3": "slime"
      },
      "5,35": {
        "0": "leaves",
        "1": "leaves",
        "2": "leaves",
        "3": "slime",
        "-1": "leaves"
      },
      "5,36": {
        "1": "leaves",
        "2": "leaves",
        "3": "slime"
      },
      "5,43": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "5,44": {
        "0": "leaves",
        "1": "slime"
      },
      "6,6": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "6,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,8": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,9": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "6,14": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "6,15": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,16": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "6,35": {
        "2": "leaves",
        "3": "slime"
      },
      "6,36": {
        "1": "leaves",
        "2": "leaves",
        "3": "slime"
      },
      "6,42": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "6,43": {
        "0": "leaves",
        "1": "slime",
        "-2": "leaves",
        "-1": "leaves"
      },
      "6,44": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "7,7": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "7,8": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "7,15": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "7,42": {
        "0": "leaves",
        "1": "slime"
      },
      "7,43": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "7,44": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "9,6": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "9,7": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "9,12": {
        "-4": "leaves",
        "-3": "leaves",
        "-2": "slime"
      },
      "9,13": {
        "-5": "leaves",
        "-4": "leaves",
        "-3": "leaves",
        "-2": "slime"
      },
      "9,14": {
        "-3": "leaves",
        "-2": "slime"
      },
      "10,5": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "10,6": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "10,7": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "10,8": {
        "5": "stained_hardened_clay"
      },
      "10,12": {
        "-5": "leaves",
        "-4": "leaves",
        "-3": "leaves",
        "-2": "slime"
      },
      "10,13": {
        "-6": "leaves",
        "-5": "leaves",
        "-4": "leaves",
        "-3": "leaves",
        "-2": "slime"
      },
      "10,14": {
        "-5": "leaves",
        "-4": "leaves",
        "-3": "leaves",
        "-2": "slime"
      },
      "10,18": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "10,19": {
        "0": "stained_hardened_clay"
      },
      "11,5": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "11,6": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "11,7": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "11,8": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "11,9": {
        "5": "vine"
      },
      "11,12": {
        "-4": "leaves",
        "-3": "leaves",
        "-2": "slime"
      },
      "11,13": {
        "-4": "leaves",
        "-3": "leaves",
        "-2": "slime"
      },
      "11,14": {
        "-4": "leaves",
        "-3": "leaves",
        "-2": "slime"
      },
      "11,17": {
        "0": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "11,18": {
        "0": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "11,19": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "12,6": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "12,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "vine",
        "5": "vine"
      },
      "12,8": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "vine",
        "5": "vine"
      },
      "12,16": {
        "0": "stained_hardened_clay",
        "-1": "dirt"
      },
      "12,17": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "12,18": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "12,19": {
        "0": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "13,7": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "13,8": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "13,15": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "13,16": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "13,17": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "13,18": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "14,11": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay"
      },
      "14,12": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "14,15": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "14,16": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "14,17": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "15,10": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "15,11": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "15,12": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      }
    }
  },
  "slime skip": {
    "name": "slime skip",
    "columns": {
      "-14,31": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-14,32": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "-14,33": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-13,27": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-13,28": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-13,31": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-13,32": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "-13,33": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "-12,15": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks"
      },
      "-12,26": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-12,27": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-12,28": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-12,32": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-12,33": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "-11,8": {
        "8": "ladder"
      },
      "-11,11": {
        "9": "ladder",
        "10": "ladder"
      },
      "-11,12": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks"
      },
      "-11,26": {
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-11,27": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-11,28": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-10,7": {
        "7": "ladder",
        "8": "ladder",
        "9": "ladder"
      },
      "-10,8": {
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "-10,36": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-10,37": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-10,38": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-9,17": {
        "1": "leaves",
        "2": "slime"
      },
      "-9,18": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "-9,19": {
        "1": "leaves",
        "2": "slime"
      },
      "-9,32": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-9,33": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-9,36": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-9,37": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "-9,38": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-8,17": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "-8,18": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime",
        "-1": "leaves"
      },
      "-8,19": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "-8,23": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-8,24": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-8,26": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-8,27": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-8,28": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-8,31": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-8,32": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-8,33": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-8,36": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-8,37": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-7,6": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "-7,7": {
        "6": "ladder",
        "7": "ladder"
      },
      "-7,9": {
        "4": "ladder"
      },
      "-7,17": {
        "1": "leaves",
        "2": "slime"
      },
      "-7,18": {
        "2": "slime"
      },
      "-7,19": {
        "1": "leaves",
        "2": "slime"
      },
      "-7,23": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-7,24": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-7,25": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-7,26": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-7,27": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-7,28": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-7,31": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-7,32": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-7,33": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-6,9": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "-6,10": {
        "3": "ladder"
      },
      "-6,24": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-6,25": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-6,26": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-6,27": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-5,9": {
        "1": "ladder",
        "2": "ladder"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,17": {
        "3": "planks"
      },
      "-3,18": {
        "3": "planks"
      },
      "-3,19": {
        "3": "planks"
      },
      "-3,25": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-3,26": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,7": {
        "0": "log",
        "1": "log",
        "-1": "log"
      },
      "-2,8": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "-2,9": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "-2,10": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "-2,11": {
        "0": "log",
        "1": "log",
        "-1": "log"
      },
      "-2,16": {
        "2": "log",
        "3": "log",
        "4": "log"
      },
      "-2,17": {
        "2": "spruce_stairs",
        "3": "planks"
      },
      "-2,18": {
        "2": "spruce_stairs",
        "3": "planks"
      },
      "-2,19": {
        "2": "spruce_stairs",
        "3": "planks"
      },
      "-2,20": {
        "2": "log",
        "3": "log",
        "4": "log"
      },
      "-2,24": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-2,25": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-2,26": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-2,41": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-2,42": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,7": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "-1,8": {
        "0": "planks",
        "-1": "planks"
      },
      "-1,9": {
        "0": "planks",
        "-1": "planks"
      },
      "-1,10": {
        "0": "planks",
        "-1": "planks"
      },
      "-1,11": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "-1,16": {
        "2": "spruce_stairs",
        "3": "spruce_stairs"
      },
      "-1,17": {
        "2": "planks",
        "3": "planks"
      },
      "-1,18": {
        "2": "planks",
        "3": "planks"
      },
      "-1,19": {
        "2": "planks",
        "3": "planks"
      },
      "-1,20": {
        "2": "spruce_stairs",
        "3": "spruce_stairs"
      },
      "-1,24": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-1,25": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-1,26": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-1,29": {
        "1": "leaves",
        "2": "slime"
      },
      "-1,30": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "-1,31": {
        "2": "slime"
      },
      "-1,34": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-1,35": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-1,36": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-1,40": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-1,41": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-1,42": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,7": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "0,8": {
        "0": "planks",
        "-1": "planks"
      },
      "0,9": {
        "0": "planks",
        "-1": "planks"
      },
      "0,10": {
        "0": "planks",
        "-1": "planks"
      },
      "0,11": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "0,16": {
        "2": "spruce_stairs",
        "3": "spruce_stairs"
      },
      "0,17": {
        "2": "planks",
        "3": "planks"
      },
      "0,18": {
        "2": "planks",
        "3": "planks",
        "4": "light_weighted_pressure_plate"
      },
      "0,19": {
        "2": "planks",
        "3": "planks"
      },
      "0,20": {
        "2": "spruce_stairs",
        "3": "spruce_stairs"
      },
      "0,29": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "0,30": {
        "0": "leaves",
        "1": "skull",
        "2": "slime",
        "-2": "leaves",
        "-1": "leaves"
      },
      "0,31": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "0,34": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,35": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,36": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,40": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,41": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "0,42": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,7": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "1,8": {
        "0": "planks",
        "-1": "planks"
      },
      "1,9": {
        "0": "planks",
        "-1": "planks"
      },
      "1,10": {
        "0": "planks",
        "-1": "planks"
      },
      "1,11": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "1,16": {
        "2": "spruce_stairs",
        "3": "spruce_stairs"
      },
      "1,17": {
        "2": "planks",
        "3": "planks"
      },
      "1,18": {
        "2": "planks",
        "3": "planks"
      },
      "1,19": {
        "2": "planks",
        "3": "planks"
      },
      "1,20": {
        "2": "spruce_stairs",
        "3": "spruce_stairs"
      },
      "1,24": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "1,25": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "1,26": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "1,29": {
        "2": "slime"
      },
      "1,30": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "1,31": {
        "1": "leaves",
        "2": "slime"
      },
      "1,34": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "1,35": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "1,36": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "1,40": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "1,41": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "1,42": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,7": {
        "0": "log",
        "1": "log",
        "-1": "log"
      },
      "2,8": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "2,9": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "2,10": {
        "0": "spruce_stairs",
        "-1": "spruce_stairs"
      },
      "2,11": {
        "0": "log",
        "1": "log",
        "-1": "log"
      },
      "2,16": {
        "2": "log",
        "3": "log",
        "4": "log"
      },
      "2,17": {
        "2": "spruce_stairs",
        "3": "planks"
      },
      "2,18": {
        "2": "spruce_stairs",
        "3": "planks"
      },
      "2,19": {
        "2": "spruce_stairs",
        "3": "planks"
      },
      "2,20": {
        "2": "log",
        "3": "log",
        "4": "log"
      },
      "2,24": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "2,25": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "2,26": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "2,41": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "2,42": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,17": {
        "3": "planks"
      },
      "3,18": {
        "3": "planks"
      },
      "3,19": {
        "3": "planks"
      },
      "3,25": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "3,26": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,9": {
        "1": "ladder",
        "2": "ladder"
      },
      "6,9": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "6,10": {
        "3": "ladder"
      },
      "6,24": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "6,25": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "6,26": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "6,27": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "7,6": {
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "7,7": {
        "6": "ladder",
        "7": "ladder"
      },
      "7,9": {
        "4": "ladder"
      },
      "7,17": {
        "1": "leaves",
        "2": "slime"
      },
      "7,18": {
        "2": "slime"
      },
      "7,19": {
        "1": "leaves",
        "2": "slime"
      },
      "7,23": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "7,24": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "7,25": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "7,26": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "7,27": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "7,28": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "7,31": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "7,32": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "7,33": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "8,17": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "8,18": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime",
        "-1": "leaves"
      },
      "8,19": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "8,23": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "8,24": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "8,26": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "8,27": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "8,28": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "8,31": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "8,32": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "8,33": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "8,36": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "8,37": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "9,17": {
        "1": "leaves",
        "2": "slime"
      },
      "9,18": {
        "0": "leaves",
        "1": "leaves",
        "2": "slime"
      },
      "9,19": {
        "1": "leaves",
        "2": "slime"
      },
      "9,32": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "9,33": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "9,36": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "9,37": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "9,38": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "10,7": {
        "7": "ladder",
        "8": "ladder",
        "9": "ladder"
      },
      "10,8": {
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "10,36": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "10,37": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "10,38": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "11,8": {
        "8": "ladder"
      },
      "11,11": {
        "9": "ladder",
        "10": "ladder"
      },
      "11,12": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks"
      },
      "11,26": {
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "11,27": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "11,28": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "12,15": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks"
      },
      "12,26": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "12,27": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "12,28": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "12,32": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "12,33": {
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "13,27": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "13,28": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "13,31": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "13,32": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "13,33": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "14,31": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "14,32": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "14,33": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      }
    }
  },
  "tightrope": {
    "name": "tightrope",
    "columns": {
      "-14,21": {
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-14,22": {
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-14,26": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "16": "stone"
      },
      "-14,27": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-14,28": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-14,29": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-14,30": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "16": "stone"
      },
      "-14,38": {
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-13,21": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay"
      },
      "-13,22": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay"
      },
      "-13,23": {
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-13,26": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-13,27": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-13,28": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-13,29": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-13,30": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-13,37": {
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "dirt",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay"
      },
      "-13,38": {
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay"
      },
      "-13,39": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-12,8": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-12,9": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-12,22": {
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay"
      },
      "-12,23": {
        "14": "dirt",
        "15": "dirt",
        "16": "stained_hardened_clay"
      },
      "-12,26": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "16": "stone"
      },
      "-12,27": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-12,28": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-12,29": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "-12,30": {
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "16": "stone"
      },
      "-12,37": {
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-12,38": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay"
      },
      "-12,39": {
        "15": "dirt",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-12,43": {
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-12,44": {
        "12": "stained_hardened_clay",
        "13": "dirt",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-11,8": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-11,9": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-11,10": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-11,18": {
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-11,19": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-11,43": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "dirt",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay"
      },
      "-11,44": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay"
      },
      "-11,45": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-10,3": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-10,4": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-10,8": {
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-10,9": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-10,10": {
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-10,13": {
        "6": "stained_hardened_clay"
      },
      "-10,14": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-10,15": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-10,18": {
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-10,19": {
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-10,20": {
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-10,26": {
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "16": "stone"
      },
      "-10,27": {
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone_brick_stairs"
      },
      "-10,28": {
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone_brick_stairs"
      },
      "-10,29": {
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone_brick_stairs"
      },
      "-10,30": {
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "16": "stone"
      },
      "-10,44": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay"
      },
      "-10,45": {
        "13": "dirt",
        "14": "dirt",
        "15": "stained_hardened_clay"
      },
      "-9,3": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-9,4": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-9,5": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-9,13": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-9,14": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "-9,15": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "-9,16": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-9,18": {
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay"
      },
      "-9,19": {
        "15": "dirt",
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-9,20": {
        "16": "dirt",
        "17": "stained_hardened_clay"
      },
      "-8,3": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-8,4": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-8,5": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-8,14": {
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-8,15": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay"
      },
      "-8,16": {
        "4": "dirt",
        "5": "dirt",
        "6": "stained_hardened_clay"
      },
      "-8,19": {
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay"
      },
      "-8,26": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "-8,27": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone_brick_stairs"
      },
      "-8,28": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone_brick_stairs"
      },
      "-8,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone_brick_stairs"
      },
      "-8,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "-8,36": {
        "16": "stained_hardened_clay",
        "17": "dirt",
        "18": "dirt",
        "19": "stained_hardened_clay"
      },
      "-8,37": {
        "17": "stained_hardened_clay",
        "18": "dirt",
        "19": "stained_hardened_clay"
      },
      "-7,14": {
        "16": "stained_hardened_clay",
        "17": "dirt",
        "18": "stained_hardened_clay"
      },
      "-7,15": {
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "dirt",
        "18": "stained_hardened_clay"
      },
      "-7,26": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "-7,27": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "-7,28": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "-7,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "-7,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "-7,35": {
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "dirt",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay"
      },
      "-7,36": {
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay"
      },
      "-7,37": {
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "dirt",
        "19": "stained_hardened_clay"
      },
      "-6,8": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-6,9": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-6,14": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "dirt",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay"
      },
      "-6,15": {
        "14": "stained_hardened_clay",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay"
      },
      "-6,16": {
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "dirt",
        "18": "stained_hardened_clay"
      },
      "-6,26": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "-6,27": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "-6,28": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "-6,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "-6,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "-6,35": {
        "18": "dirt",
        "19": "stained_hardened_clay"
      },
      "-6,36": {
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay"
      },
      "-5,7": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-5,8": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-5,9": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-5,14": {
        "8": "ladder",
        "17": "dirt",
        "18": "stained_hardened_clay"
      },
      "-5,15": {
        "8": "ladder",
        "15": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay"
      },
      "-5,16": {
        "16": "dirt",
        "17": "dirt",
        "18": "stained_hardened_clay"
      },
      "-5,28": {
        "13": "cobblestone_wall"
      },
      "-5,42": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-5,43": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-5,44": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,7": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-4,8": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-4,9": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-4,14": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-4,15": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-4,17": {
        "20": "ladder"
      },
      "-4,18": {
        "20": "ladder"
      },
      "-4,28": {
        "13": "cobblestone_wall"
      },
      "-4,42": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-4,43": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-4,44": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,7": {
        "3": "ladder"
      },
      "-3,8": {
        "3": "ladder"
      },
      "-3,9": {
        "3": "ladder"
      },
      "-3,14": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-3,15": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-3,16": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-3,17": {
        "17": "stained_hardened_clay",
        "18": "dirt",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "-3,18": {
        "18": "stained_hardened_clay",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "-3,28": {
        "13": "cobblestone_wall"
      },
      "-3,33": {
        "19": "stained_hardened_clay",
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "-3,34": {
        "18": "stained_hardened_clay",
        "19": "dirt",
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "-3,42": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-3,43": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,14": {
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "-2,15": {
        "5": "stained_hardened_clay",
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "-2,16": {
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay",
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "dirt",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "-2,17": {
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "-2,18": {
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "-2,28": {
        "13": "cobblestone_wall"
      },
      "-2,33": {
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "dirt",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay"
      },
      "-2,34": {
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay"
      },
      "-2,35": {
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,7": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-1,8": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,14": {
        "11": "cobblestone_wall"
      },
      "-1,15": {
        "11": "cobblestone_wall"
      },
      "-1,16": {
        "8": "cobblestone_wall"
      },
      "-1,17": {
        "8": "cobblestone_wall",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "-1,18": {
        "18": "dirt",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "-1,19": {
        "9": "cobblestone_wall"
      },
      "-1,20": {
        "9": "cobblestone_wall"
      },
      "-1,26": {
        "13": "cobblestone_wall"
      },
      "-1,27": {
        "13": "cobblestone_wall"
      },
      "-1,28": {
        "13": "cobblestone_wall"
      },
      "-1,33": {
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "-1,34": {
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay",
        "21": "stained_hardened_clay"
      },
      "-1,35": {
        "19": "dirt",
        "20": "dirt",
        "21": "stained_hardened_clay"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,8": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,14": {
        "11": "cobblestone_wall"
      },
      "0,15": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "0,16": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "0,17": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "0,18": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "0,19": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "0,20": {
        "9": "cobblestone_wall"
      },
      "0,26": {
        "13": "cobblestone_wall"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,7": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "1,8": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "1,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "dirt"
      },
      "1,14": {
        "11": "cobblestone_wall"
      },
      "1,15": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "1,16": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "1,17": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "1,18": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "1,19": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "1,22": {
        "18": "stained_hardened_clay",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "1,23": {
        "17": "stained_hardened_clay",
        "18": "dirt",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "1,26": {
        "13": "cobblestone_wall"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,15": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "2,16": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "2,17": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "2,18": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "2,19": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "2,22": {
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "dirt",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "2,23": {
        "16": "stained_hardened_clay",
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "2,24": {
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "2,26": {
        "13": "cobblestone_wall"
      },
      "2,29": {
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "2,30": {
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,14": {
        "10": "cobblestone_wall"
      },
      "3,15": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "3,16": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "3,17": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "3,18": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "3,19": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "3,20": {
        "10": "cobblestone_wall"
      },
      "3,23": {
        "17": "stained_hardened_clay",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "3,24": {
        "18": "dirt",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "3,26": {
        "13": "cobblestone_wall"
      },
      "3,27": {
        "13": "cobblestone_wall"
      },
      "3,28": {
        "13": "cobblestone_wall",
        "18": "dirt",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "3,29": {
        "13": "cobblestone_wall",
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "3,30": {
        "13": "cobblestone_wall",
        "18": "stained_hardened_clay",
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "3,31": {
        "13": "cobblestone_wall"
      },
      "3,32": {
        "13": "cobblestone_wall"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,14": {
        "10": "cobblestone_wall"
      },
      "4,15": {
        "10": "cobblestone_wall"
      },
      "4,19": {
        "10": "cobblestone_wall"
      },
      "4,20": {
        "10": "cobblestone_wall"
      },
      "4,28": {
        "19": "dirt",
        "20": "stained_hardened_clay"
      },
      "4,29": {
        "18": "stained_hardened_clay",
        "19": "stained_hardened_clay",
        "20": "stained_hardened_clay"
      },
      "4,32": {
        "13": "cobblestone_wall"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,32": {
        "13": "cobblestone_wall"
      },
      "6,17": {
        "12": "cobblestone_wall",
        "13": "cobblestone_wall"
      },
      "6,18": {
        "12": "cobblestone_wall"
      },
      "6,32": {
        "13": "cobblestone_wall"
      },
      "7,15": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "16": "stone"
      },
      "7,16": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "7,17": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "7,18": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "7,19": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "16": "stone"
      },
      "7,32": {
        "13": "cobblestone_wall"
      },
      "8,15": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "8,16": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "8,17": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "8,18": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "8,19": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "8,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "8,31": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "8,32": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "8,33": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "8,34": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "9,15": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "16": "stone"
      },
      "9,16": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "9,17": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "9,18": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "9,19": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone",
        "16": "stone"
      },
      "9,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "9,31": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "9,32": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "light_weighted_pressure_plate"
      },
      "9,33": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "9,34": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "10,15": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "10,16": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "10,17": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "10,18": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "10,19": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone",
        "15": "stone"
      },
      "10,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "10,31": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "10,32": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "10,33": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone"
      },
      "10,34": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone",
        "13": "stone",
        "14": "stone"
      },
      "14,16": {
        "13": "stone"
      },
      "14,17": {
        "13": "stone"
      },
      "14,18": {
        "13": "stone"
      },
      "14,19": {
        "13": "stone"
      },
      "14,20": {
        "13": "stone"
      },
      "14,21": {
        "13": "cobblestone_wall"
      },
      "14,24": {
        "13": "cobblestone_wall"
      },
      "14,27": {
        "13": "cobblestone_wall"
      },
      "14,30": {
        "13": "cobblestone_wall"
      },
      "14,33": {
        "13": "cobblestone_wall"
      },
      "15,16": {
        "13": "stone"
      },
      "15,17": {
        "13": "stone"
      },
      "15,18": {
        "13": "stone"
      },
      "15,19": {
        "13": "stone"
      },
      "15,20": {
        "13": "stone"
      },
      "15,21": {
        "11": "cobblestone_wall",
        "12": "cobblestone_wall",
        "13": "cobblestone_wall"
      },
      "15,24": {
        "11": "cobblestone_wall",
        "12": "cobblestone_wall",
        "13": "cobblestone_wall"
      },
      "15,27": {
        "11": "cobblestone_wall",
        "12": "cobblestone_wall",
        "13": "cobblestone_wall"
      },
      "15,30": {
        "11": "cobblestone_wall",
        "12": "cobblestone_wall",
        "13": "cobblestone_wall"
      },
      "15,33": {
        "11": "cobblestone_wall",
        "12": "cobblestone_wall",
        "13": "cobblestone_wall"
      }
    }
  },
  "tower tightrope": {
    "name": "tower tightrope",
    "columns": {
      "-14,9": {
        "6": "cobblestone_wall"
      },
      "-14,10": {
        "6": "cobblestone_wall"
      },
      "-13,8": {
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-13,9": {
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-13,10": {
        "6": "cobblestone_wall"
      },
      "-12,2": {
        "8": "cobblestone_wall"
      },
      "-12,4": {
        "8": "cobblestone_wall"
      },
      "-12,5": {
        "8": "cobblestone_wall"
      },
      "-12,7": {
        "8": "cobblestone_wall"
      },
      "-12,8": {
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-12,9": {
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-12,12": {
        "5": "cobblestone_wall"
      },
      "-12,13": {
        "5": "cobblestone_wall"
      },
      "-12,14": {
        "5": "cobblestone_wall"
      },
      "-11,2": {
        "8": "cobblestone_wall"
      },
      "-11,8": {
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-11,9": {
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "-11,10": {
        "7": "cobblestone_wall"
      },
      "-11,14": {
        "5": "cobblestone_wall"
      },
      "-11,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone"
      },
      "-11,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-11,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-11,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone"
      },
      "-10,9": {
        "7": "cobblestone_wall"
      },
      "-10,10": {
        "7": "cobblestone_wall"
      },
      "-10,14": {
        "5": "cobblestone_wall"
      },
      "-10,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-10,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-10,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-10,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-9,0": {
        "8": "stone_brick_stairs",
        "9": "stone"
      },
      "-9,1": {
        "9": "stone"
      },
      "-9,14": {
        "5": "cobblestone_wall"
      },
      "-9,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-9,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-9,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-9,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-8,0": {
        "9": "stone"
      },
      "-8,1": {
        "9": "stone"
      },
      "-8,10": {
        "5": "cobblestone_wall"
      },
      "-8,11": {
        "5": "cobblestone_wall"
      },
      "-8,12": {
        "5": "cobblestone_wall"
      },
      "-8,13": {
        "5": "cobblestone_wall"
      },
      "-8,14": {
        "5": "cobblestone_wall"
      },
      "-8,25": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone"
      },
      "-8,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-8,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone"
      },
      "-8,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone"
      },
      "-8,32": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "-1": "stone"
      },
      "-8,33": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-8,34": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-8,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "-1": "stone"
      },
      "-7,10": {
        "5": "cobblestone_wall"
      },
      "-7,32": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-7,33": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-7,34": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-7,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-6,10": {
        "5": "cobblestone_wall"
      },
      "-6,32": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-6,33": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-6,34": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-6,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-5,0": {
        "9": "stone"
      },
      "-5,1": {
        "9": "stone"
      },
      "-5,10": {
        "5": "cobblestone_wall"
      },
      "-5,32": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "-1": "stone"
      },
      "-5,33": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-5,34": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-1": "stone"
      },
      "-5,35": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "-1": "stone"
      },
      "-4,0": {
        "0": "trapdoor",
        "8": "stone_brick_stairs",
        "9": "stone"
      },
      "-4,1": {
        "0": "trapdoor",
        "9": "stone"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,10": {
        "5": "cobblestone_wall"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,7": {
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-3,8": {
        "10": "stone",
        "11": "stone"
      },
      "-3,9": {
        "11": "stone",
        "12": "stone"
      },
      "-3,10": {
        "5": "cobblestone_wall",
        "11": "stone"
      },
      "-3,11": {
        "11": "stone",
        "12": "stone"
      },
      "-3,12": {
        "10": "stone",
        "11": "stone"
      },
      "-3,13": {
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-3,35": {
        "2": "planks",
        "3": "stained_hardened_clay"
      },
      "-3,36": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,7": {
        "10": "stone",
        "11": "stone"
      },
      "-2,8": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-2,9": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-2,10": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-2,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-2,12": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-2,13": {
        "10": "stone",
        "11": "stone"
      },
      "-2,22": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "-2,23": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-2,24": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-2,25": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "-2,34": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-2,35": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-2,36": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-2,37": {
        "2": "planks",
        "3": "stained_hardened_clay"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,7": {
        "11": "stone",
        "12": "stone"
      },
      "-1,8": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-1,9": {
        "0": "stone",
        "11": "stone"
      },
      "-1,10": {
        "0": "stone",
        "4": "ladder",
        "5": "ladder",
        "11": "stone"
      },
      "-1,11": {
        "0": "stone",
        "11": "stone"
      },
      "-1,12": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "-1,13": {
        "11": "stone",
        "12": "stone"
      },
      "-1,22": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-1,23": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-1,24": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-1,25": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "-1,35": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-1,36": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-1,42": {
        "1": "stained_hardened_clay"
      },
      "-1,43": {
        "0": "planks",
        "1": "stained_hardened_clay"
      },
      "-1,44": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "planks"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks",
        "8": "stone_brick_stairs",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "0,1": {
        "0": "planks",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "0,2": {
        "0": "planks",
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "0,3": {
        "0": "planks",
        "9": "stone"
      },
      "0,4": {
        "0": "planks",
        "9": "stone"
      },
      "0,7": {
        "11": "stone",
        "12": "stone",
        "13": "stone_brick_stairs"
      },
      "0,8": {
        "0": "stone",
        "3": "stone_brick_stairs",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone",
        "12": "stone_brick_stairs"
      },
      "0,9": {
        "0": "stone",
        "11": "stone"
      },
      "0,10": {
        "0": "stone"
      },
      "0,11": {
        "0": "stone",
        "2": "ladder",
        "3": "ladder",
        "4": "ladder",
        "5": "ladder",
        "6": "ladder"
      },
      "0,12": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "0,13": {
        "11": "stone"
      },
      "0,22": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "0,23": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "0,24": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "0,25": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "0,42": {
        "0": "planks",
        "1": "stained_hardened_clay"
      },
      "0,43": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "planks"
      },
      "0,44": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "planks"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,7": {
        "11": "stone",
        "12": "stone"
      },
      "1,8": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "1,9": {
        "0": "stone",
        "11": "stone"
      },
      "1,10": {
        "0": "stone"
      },
      "1,11": {
        "0": "stone"
      },
      "1,12": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "1,13": {
        "11": "stone",
        "12": "stone"
      },
      "1,22": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "1,23": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "1,24": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "1,25": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "1,42": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "1,43": {
        "0": "planks",
        "1": "stained_hardened_clay"
      },
      "1,44": {
        "1": "stained_hardened_clay"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,7": {
        "10": "stone",
        "11": "stone"
      },
      "2,8": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "2,9": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "2,10": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "2,11": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone_brick_stairs",
        "11": "stone"
      },
      "2,12": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "2,13": {
        "10": "stone",
        "11": "stone"
      },
      "2,33": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "2,34": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,7": {
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "3,8": {
        "10": "stone",
        "11": "stone"
      },
      "3,9": {
        "11": "stone",
        "12": "stone"
      },
      "3,10": {
        "11": "stone"
      },
      "3,11": {
        "11": "stone",
        "12": "stone"
      },
      "3,12": {
        "10": "stone",
        "11": "stone"
      },
      "3,13": {
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "3,33": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "3,34": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "3,35": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "3,36": {
        "3": "stained_hardened_clay"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor",
        "8": "stone_brick_stairs",
        "9": "stone"
      },
      "4,1": {
        "0": "trapdoor",
        "9": "stone"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,33": {
        "3": "stained_hardened_clay"
      },
      "4,34": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "4,35": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "4,36": {
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,0": {
        "9": "stone"
      },
      "5,1": {
        "9": "stone"
      },
      "5,34": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "5,35": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "5,36": {
        "3": "stained_hardened_clay"
      },
      "5,40": {
        "1": "planks",
        "2": "stained_hardened_clay"
      },
      "5,41": {
        "0": "planks",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "5,42": {
        "1": "planks",
        "2": "stained_hardened_clay"
      },
      "6,21": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "6,22": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "6,23": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "6,24": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "6,40": {
        "0": "planks",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "6,41": {
        "0": "planks",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "6,42": {
        "0": "planks",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "7,21": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "7,22": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "7,23": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "7,24": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "7,41": {
        "0": "planks",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "8,0": {
        "9": "stone"
      },
      "8,1": {
        "9": "stone"
      },
      "8,21": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "8,22": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "8,23": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "8,24": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "9,0": {
        "8": "stone_brick_stairs",
        "9": "stone"
      },
      "9,1": {
        "9": "stone"
      },
      "9,21": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "9,22": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "9,23": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "9,24": {
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "stone"
      },
      "11,7": {
        "6": "planks"
      },
      "12,7": {
        "6": "planks"
      },
      "12,10": {
        "5": "planks"
      },
      "12,15": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "12,16": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "12,17": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "12,18": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "13,7": {
        "6": "planks"
      },
      "13,10": {
        "5": "planks"
      },
      "13,14": {
        "4": "ladder",
        "5": "ladder",
        "6": "ladder"
      },
      "13,15": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "13,16": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "light_weighted_pressure_plate"
      },
      "13,17": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "13,18": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "14,7": {
        "6": "planks"
      },
      "14,10": {
        "5": "planks"
      },
      "14,14": {
        "4": "ladder",
        "5": "ladder",
        "6": "ladder"
      },
      "14,15": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "14,16": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "14,17": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "14,18": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "15,7": {
        "6": "planks"
      },
      "15,10": {
        "5": "planks"
      },
      "15,15": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      },
      "15,16": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "15,17": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone"
      },
      "15,18": {
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone"
      }
    }
  },
  "triple platform": {
    "name": "triple platform",
    "columns": {
      "-15,2": {
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-15,3": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-15,4": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-15,5": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-15,8": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-15,9": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-15,10": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-15,11": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-15,12": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-15,33": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-15,34": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-15,38": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-15,42": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-15,43": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-14,2": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-14,3": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-14,4": {
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-14,5": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "-14,8": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-14,9": {
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-14,10": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-14,11": {
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-14,12": {
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-14,33": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-14,34": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-14,38": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-14,42": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-14,43": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-13,2": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-13,3": {
        "8": "dirt",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-13,4": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-13,5": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "-13,8": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "-13,9": {
        "9": "dirt",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-13,10": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-13,11": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-13,12": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "-13,33": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-13,34": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-13,38": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-13,42": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-13,43": {
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "-12,2": {
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-12,3": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-12,4": {
        "8": "stained_hardened_clay",
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-12,5": {
        "10": "stained_hardened_clay"
      },
      "-12,9": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "-12,10": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-12,11": {
        "10": "dirt",
        "11": "stained_hardened_clay"
      },
      "-12,16": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-12,17": {
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-11,3": {
        "9": "dirt",
        "10": "stained_hardened_clay"
      },
      "-11,4": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "-11,11": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay"
      },
      "-11,15": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-11,16": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "-11,17": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "-11,18": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-11,28": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-11,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-10,3": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay"
      },
      "-10,15": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-10,16": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "-10,17": {
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-10,18": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-10,28": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-10,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-10,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-10,31": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-10,32": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-9,0": {
        "8": "stone_brick_stairs",
        "9": "stone"
      },
      "-9,1": {
        "9": "stone"
      },
      "-9,15": {
        "12": "stained_hardened_clay"
      },
      "-9,16": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-9,17": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-9,18": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "-9,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-9,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-9,31": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-9,32": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-9,40": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-9,41": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-8,16": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "-8,17": {
        "12": "stained_hardened_clay"
      },
      "-8,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-8,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-8,31": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-8,32": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-8,39": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-8,40": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-8,41": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-7,28": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-7,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-7,30": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-7,31": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-7,32": {
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-7,33": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-7,39": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-7,40": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-7,41": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-6,0": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-6,1": {
        "8": "stone"
      },
      "-6,28": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-6,29": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-6,32": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-6,33": {
        "9": "stone",
        "10": "stone",
        "11": "stone",
        "12": "stone"
      },
      "-6,39": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-6,40": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,15": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "-4,16": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-4,17": {
        "12": "stained_hardened_clay"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars",
        "7": "stone"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars",
        "7": "stone"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,15": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-3,16": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-3,17": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "-3,18": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "-3,22": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-3,23": {
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-3,29": {
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-3,30": {
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-3,33": {
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-3,34": {
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-3,38": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-3,39": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,16": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-2,17": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "-2,18": {
        "11": "dirt",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "-2,21": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-2,22": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-2,23": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-2,29": {
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-2,30": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-2,31": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-2,32": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-2,33": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-2,34": {
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "-2,37": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-2,38": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-2,39": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,6": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-1,7": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "-1,8": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-1,18": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-1,19": {
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "-1,21": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-1,22": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "-1,23": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "-1,30": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-1,31": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-1,32": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-1,33": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "-1,37": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-1,38": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-1,39": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-1,40": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs"
      },
      "-1,48": {
        "0": "spruce_stairs"
      },
      "-1,49": {
        "0": "spruce_stairs"
      },
      "-1,50": {
        "0": "spruce_stairs"
      },
      "0,0": {
        "0": "planks",
        "6": "stone_brick_stairs",
        "7": "stone"
      },
      "0,1": {
        "0": "planks",
        "7": "stone"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,6": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "dirt"
      },
      "0,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,8": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,17": {
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "0,18": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "0,19": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "0,30": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "0,31": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "0,32": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "0,33": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "0,37": {
        "3": "stained_hardened_clay"
      },
      "0,38": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "0,39": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "0,40": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks"
      },
      "0,48": {
        "0": "planks"
      },
      "0,49": {
        "0": "planks"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,6": {
        "0": "dirt",
        "1": "stained_hardened_clay"
      },
      "1,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "1,17": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "1,18": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay",
        "10": "dirt",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay"
      },
      "1,19": {
        "11": "dirt",
        "12": "stained_hardened_clay"
      },
      "1,29": {
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "1,30": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "1,31": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "1,32": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "1,33": {
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "1,38": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "1,39": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "1,40": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs"
      },
      "1,48": {
        "0": "spruce_stairs"
      },
      "1,49": {
        "0": "spruce_stairs"
      },
      "1,50": {
        "0": "spruce_stairs"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,17": {
        "12": "stained_hardened_clay",
        "13": "dirt",
        "14": "stained_hardened_clay"
      },
      "2,18": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "2,29": {
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "2,30": {
        "8": "stone",
        "9": "stone",
        "10": "stone",
        "11": "stone"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,47": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars",
        "7": "stone"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars",
        "7": "stone"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,17": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "dirt",
        "14": "stained_hardened_clay"
      },
      "3,18": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "3,19": {
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "3,41": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "3,42": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,9": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "4,10": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "4,18": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay",
        "14": "stained_hardened_clay"
      },
      "4,19": {
        "13": "dirt",
        "14": "stained_hardened_clay"
      },
      "4,40": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "4,41": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "4,42": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "4,43": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,0": {
        "5": "stone_brick_stairs",
        "6": "stone"
      },
      "5,1": {
        "6": "stone"
      },
      "5,8": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "5,9": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "5,10": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "5,29": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "5,30": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "5,40": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "5,41": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "5,42": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "5,43": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "6,8": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "6,9": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "6,10": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "6,29": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "6,30": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "6,31": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "6,32": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "6,33": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "6,41": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "6,42": {
        "1": "dirt",
        "2": "stained_hardened_clay"
      },
      "7,16": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "7,17": {
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "7,30": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "7,31": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "7,32": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "7,33": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "8,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "8,8": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "8,14": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "8,15": {
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "8,16": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "8,17": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "8,30": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "8,31": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "8,32": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "8,33": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "9,0": {
        "4": "stone_brick_stairs",
        "5": "stone"
      },
      "9,1": {
        "5": "stone"
      },
      "9,3": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "9,4": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "9,6": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "9,7": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "9,8": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "9,13": {
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "9,14": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "9,15": {
        "10": "stained_hardened_clay",
        "11": "stained_hardened_clay",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay",
        "14": "light_weighted_pressure_plate"
      },
      "9,16": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "9,29": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "9,30": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "9,31": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "9,32": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "9,33": {
        "7": "stone",
        "8": "stone",
        "9": "stone"
      },
      "9,34": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "10,3": {
        "0": "stained_hardened_clay",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "10,4": {
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "10,6": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "10,7": {
        "0": "stained_hardened_clay",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "10,8": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "10,13": {
        "11": "stained_hardened_clay",
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "10,14": {
        "9": "stained_hardened_clay",
        "10": "stained_hardened_clay",
        "11": "dirt",
        "12": "stained_hardened_clay",
        "13": "stained_hardened_clay"
      },
      "10,15": {
        "12": "dirt",
        "13": "stained_hardened_clay"
      },
      "10,29": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "10,30": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "10,33": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "10,34": {
        "7": "stone",
        "8": "stone",
        "9": "stone",
        "10": "stone"
      },
      "11,4": {
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "13,18": {
        "8": "planks",
        "9": "planks"
      },
      "13,19": {
        "8": "planks",
        "9": "planks"
      },
      "13,24": {
        "8": "ladder",
        "9": "ladder"
      },
      "13,25": {
        "8": "planks",
        "9": "planks"
      },
      "13,30": {
        "8": "ladder",
        "9": "ladder"
      },
      "13,31": {
        "8": "planks",
        "9": "planks"
      },
      "13,32": {
        "8": "planks",
        "9": "planks"
      },
      "14,18": {
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "14,19": {
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "14,24": {
        "8": "ladder",
        "9": "ladder"
      },
      "14,25": {
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "14,30": {
        "8": "ladder",
        "9": "ladder"
      },
      "14,31": {
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "14,32": {
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "15,18": {
        "6": "oak_stairs",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "15,19": {
        "6": "oak_stairs",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "15,24": {
        "8": "ladder",
        "9": "ladder"
      },
      "15,25": {
        "6": "oak_stairs",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "15,30": {
        "8": "ladder",
        "9": "ladder"
      },
      "15,31": {
        "6": "oak_stairs",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "15,32": {
        "6": "oak_stairs",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      }
    }
  },
  "triple trapdoors": {
    "name": "triple trapdoors",
    "columns": {
      "-12,32": {
        "4": "stained_hardened_clay"
      },
      "-12,33": {
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-12,34": {
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-11,28": {
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-11,29": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-11,32": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-11,33": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-11,34": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-10,27": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-10,28": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-10,29": {
        "1": "stained_hardened_clay",
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-10,32": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-10,33": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-9,27": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-9,28": {
        "2": "dirt",
        "3": "stained_hardened_clay"
      },
      "-9,29": {
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay"
      },
      "-7,35": {
        "5": "trapdoor"
      },
      "-7,36": {
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks",
        "8": "planks"
      },
      "-6,26": {
        "0": "slime",
        "-1": "leaves"
      },
      "-6,27": {
        "0": "slime",
        "-3": "leaves",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-6,28": {
        "0": "slime",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-5,26": {
        "0": "slime",
        "-3": "leaves",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-5,27": {
        "0": "slime",
        "-4": "leaves",
        "-3": "leaves",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-5,28": {
        "0": "slime",
        "-1": "leaves"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,26": {
        "0": "slime",
        "-1": "leaves"
      },
      "-4,27": {
        "0": "slime",
        "-2": "leaves",
        "-1": "leaves"
      },
      "-4,28": {
        "0": "slime"
      },
      "-4,33": {
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks"
      },
      "-4,34": {
        "6": "trapdoor"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,12": {
        "5": "planks",
        "6": "planks"
      },
      "-3,13": {
        "5": "planks",
        "6": "planks"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,7": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "-1,8": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "-1,9": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks"
      },
      "-1,16": {
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "-1,17": {
        "2": "planks",
        "3": "planks",
        "4": "planks",
        "5": "planks",
        "6": "planks",
        "7": "planks"
      },
      "-1,26": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "-1,27": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "-1,34": {
        "7": "trapdoor"
      },
      "-1,35": {
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,7": {
        "1": "trapdoor"
      },
      "0,8": {
        "1": "trapdoor"
      },
      "0,9": {
        "1": "trapdoor"
      },
      "0,12": {
        "2": "trapdoor"
      },
      "0,13": {
        "2": "trapdoor"
      },
      "0,16": {
        "3": "trapdoor"
      },
      "0,17": {
        "3": "trapdoor"
      },
      "0,25": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,26": {
        "2": "stained_hardened_clay",
        "3": "dirt",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,27": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,12": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "1,13": {
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "4": "planks"
      },
      "1,25": {
        "4": "stained_hardened_clay",
        "5": "stained_hardened_clay"
      },
      "1,26": {
        "3": "stained_hardened_clay",
        "4": "dirt",
        "5": "stained_hardened_clay"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,34": {
        "6": "planks",
        "7": "planks",
        "8": "planks",
        "9": "planks",
        "10": "planks"
      },
      "2,35": {
        "7": "planks"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,16": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "3,17": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay"
      },
      "3,39": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "3,40": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "3,41": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,16": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "4,17": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "stained_hardened_clay"
      },
      "4,24": {
        "0": "leaves",
        "1": "slime"
      },
      "4,25": {
        "0": "leaves",
        "1": "slime",
        "-2": "leaves",
        "-1": "leaves"
      },
      "4,26": {
        "0": "leaves",
        "1": "slime"
      },
      "4,39": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "4,40": {
        "4": "stained_hardened_clay",
        "5": "dirt",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "4,41": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,24": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "5,25": {
        "0": "leaves",
        "1": "slime",
        "-3": "leaves",
        "-2": "leaves",
        "-1": "leaves"
      },
      "5,26": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "5,39": {
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "5,40": {
        "5": "stained_hardened_clay",
        "6": "dirt",
        "7": "stained_hardened_clay"
      },
      "6,13": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "6,14": {
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "6,24": {
        "0": "leaves",
        "1": "slime"
      },
      "6,25": {
        "0": "leaves",
        "1": "slime",
        "-1": "leaves"
      },
      "6,26": {
        "0": "leaves",
        "1": "slime"
      },
      "7,13": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "7,14": {
        "6": "stained_hardened_clay",
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "7,15": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "8,14": {
        "7": "stained_hardened_clay",
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay"
      },
      "8,15": {
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "10,25": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay"
      },
      "10,26": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "11,24": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "11,25": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "11,26": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "12,24": {
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "12,25": {
        "6": "stained_hardened_clay",
        "7": "dirt",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "12,26": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "13,13": {
        "8": "stone_brick_stairs"
      },
      "13,14": {
        "8": "stone_brick_stairs"
      },
      "13,15": {
        "8": "stone_brick_stairs"
      },
      "13,24": {
        "8": "stained_hardened_clay",
        "9": "stained_hardened_clay"
      },
      "13,25": {
        "7": "stained_hardened_clay",
        "8": "dirt",
        "9": "stained_hardened_clay"
      },
      "14,11": {
        "8": "stone"
      },
      "14,12": {
        "8": "stone"
      },
      "14,13": {
        "8": "stone"
      },
      "14,14": {
        "8": "stone",
        "9": "light_weighted_pressure_plate"
      },
      "14,15": {
        "8": "stone"
      },
      "14,16": {
        "8": "stone"
      },
      "14,17": {
        "8": "stone"
      },
      "15,11": {
        "8": "stone"
      },
      "15,12": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "15,13": {
        "7": "stone",
        "8": "stone"
      },
      "15,14": {
        "7": "stone",
        "8": "stone"
      },
      "15,15": {
        "7": "stone",
        "8": "stone"
      },
      "15,16": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "15,17": {
        "8": "stone"
      },
      "15,20": {
        "9": "stone_brick_stairs"
      },
      "15,22": {
        "9": "stone_brick_stairs"
      }
    }
  },
  "underbridge": {
    "name": "underbridge",
    "columns": {
      "-15,7": {
        "0": "stained_hardened_clay",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-15,8": {
        "0": "stained_hardened_clay",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-15,9": {
        "0": "stained_hardened_clay",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-15,10": {
        "0": "stained_hardened_clay",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-15,24": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-1": "planks"
      },
      "-15,25": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-2": "planks",
        "-1": "planks"
      },
      "-15,26": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-15,43": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-15,44": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-15,45": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-14,7": {
        "0": "stained_hardened_clay",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-14,8": {
        "0": "stained_hardened_clay",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-14,9": {
        "0": "stained_hardened_clay",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-14,10": {
        "0": "stained_hardened_clay",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-14,13": {
        "0": "planks",
        "1": "planks",
        "-3": "dark_oak_fence",
        "-2": "planks",
        "-1": "planks"
      },
      "-14,20": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "3": "planks",
        "-2": "dark_oak_fence",
        "-1": "dark_oak_fence"
      },
      "-14,24": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay",
        "-2": "planks",
        "-1": "planks"
      },
      "-14,25": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-2": "planks",
        "-1": "planks"
      },
      "-14,26": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "dirt",
        "4": "stained_hardened_clay"
      },
      "-14,43": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-14,44": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-14,45": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-13,8": {
        "0": "stained_hardened_clay",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-13,9": {
        "0": "stained_hardened_clay",
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-13,10": {
        "0": "stained_hardened_clay",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-13,16": {
        "0": "planks",
        "1": "planks",
        "2": "planks",
        "-4": "dark_oak_fence",
        "-3": "dark_oak_fence",
        "-2": "dark_oak_fence",
        "-1": "planks"
      },
      "-13,24": {
        "0": "planks",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay"
      },
      "-13,25": {
        "0": "planks",
        "1": "planks",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "4": "stained_hardened_clay",
        "-1": "planks"
      },
      "-13,43": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-13,44": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-13,49": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-13,50": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-12,8": {
        "0": "stained_hardened_clay",
        "-5": "planks",
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,9": {
        "0": "stained_hardened_clay",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "dirt"
      },
      "-12,48": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-12,49": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-12,50": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-11,39": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-11,40": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-11,48": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-11,49": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-11,50": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-10,12": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,13": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-10,25": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-10,27": {
        "5": "ladder",
        "6": "ladder"
      },
      "-10,29": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-10,39": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-10,40": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,41": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-10,49": {
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-10,50": {
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-9,11": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-9,12": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,13": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,25": {
        "7": "stone_brick_stairs"
      },
      "-9,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-9,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-9,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-9,29": {
        "7": "stone_brick_stairs"
      },
      "-9,39": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,40": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-9,41": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-8,11": {
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-8,12": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-8,25": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-8,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-8,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "8": "light_weighted_pressure_plate",
        "-7": "coal_block",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-8,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-8,29": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-8,39": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "-8,40": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "-7,25": {
        "7": "stone_brick_stairs"
      },
      "-7,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-7,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-7,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-7,29": {
        "7": "stone_brick_stairs"
      },
      "-7,49": {
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "-7,50": {
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "-6,13": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "-6,14": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "-6,15": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-6,25": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-6,26": {
        "3": "stone_brick_stairs"
      },
      "-6,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-6,28": {
        "3": "stone_brick_stairs"
      },
      "-6,29": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "-6,49": {
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "-6,50": {
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "-5,13": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-5,14": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "-5,15": {
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-5,26": {
        "3": "stone_brick_stairs"
      },
      "-5,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "slime",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-5,28": {
        "3": "stone_brick_stairs"
      },
      "-4,0": {
        "0": "trapdoor"
      },
      "-4,1": {
        "0": "trapdoor"
      },
      "-4,2": {
        "0": "trapdoor"
      },
      "-4,3": {
        "0": "trapdoor"
      },
      "-4,4": {
        "0": "trapdoor"
      },
      "-4,14": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay"
      },
      "-4,15": {
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay",
        "-2": "stained_hardened_clay"
      },
      "-4,26": {
        "3": "stone_brick_stairs"
      },
      "-4,27": {
        "0": "stone_brick_stairs",
        "1": "stone",
        "2": "stone",
        "3": "slime",
        "-4": "spruce_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "-4,28": {
        "3": "stone_brick_stairs"
      },
      "-4,40": {
        "-5": "dark_oak_fence",
        "-4": "dark_oak_fence",
        "-3": "dark_oak_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "-4,46": {
        "0": "trapdoor"
      },
      "-4,47": {
        "0": "trapdoor"
      },
      "-4,48": {
        "0": "trapdoor"
      },
      "-4,49": {
        "0": "trapdoor"
      },
      "-4,50": {
        "0": "trapdoor"
      },
      "-3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "-3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "-3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,9": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "stained_hardened_clay"
      },
      "-3,10": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "stained_hardened_clay"
      },
      "-3,26": {
        "3": "stone_brick_stairs"
      },
      "-3,27": {
        "0": "stone_brick_stairs",
        "1": "stone",
        "2": "stone",
        "3": "slime",
        "-4": "spruce_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "-3,28": {
        "3": "stone_brick_stairs"
      },
      "-3,40": {
        "-4": "dark_oak_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "-3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "-3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "-3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "-3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "-3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "-3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "-2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,5": {
        "0": "trapdoor"
      },
      "-2,8": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "stained_hardened_clay"
      },
      "-2,9": {
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "stained_hardened_clay"
      },
      "-2,10": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "stained_hardened_clay"
      },
      "-2,26": {
        "3": "stone_brick_stairs"
      },
      "-2,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-2,28": {
        "3": "stone_brick_stairs"
      },
      "-2,45": {
        "0": "trapdoor"
      },
      "-2,46": {
        "0": "log"
      },
      "-2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "-2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "-2,49": {
        "0": "log",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "cobblestone",
        "-1": "wooden_slab"
      },
      "-2,50": {
        "0": "log",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "cobblestone",
        "-1": "wooden_slab"
      },
      "-1,0": {
        "0": "spruce_stairs"
      },
      "-1,1": {
        "0": "spruce_stairs"
      },
      "-1,2": {
        "0": "spruce_stairs"
      },
      "-1,3": {
        "0": "spruce_stairs"
      },
      "-1,4": {
        "0": "spruce_stairs"
      },
      "-1,8": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "stained_hardened_clay"
      },
      "-1,9": {
        "-6": "planks",
        "-5": "dirt",
        "-4": "stained_hardened_clay"
      },
      "-1,13": {
        "-7": "planks",
        "-6": "planks",
        "-5": "planks",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-1,14": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "-1,26": {
        "3": "stone_brick_stairs"
      },
      "-1,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "-1,28": {
        "3": "stone_brick_stairs"
      },
      "-1,46": {
        "0": "spruce_stairs"
      },
      "-1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "-1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "0,0": {
        "0": "planks"
      },
      "0,1": {
        "0": "planks"
      },
      "0,2": {
        "0": "planks"
      },
      "0,3": {
        "0": "planks"
      },
      "0,4": {
        "0": "planks"
      },
      "0,12": {
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay"
      },
      "0,13": {
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay"
      },
      "0,14": {
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "stained_hardened_clay",
        "-3": "stained_hardened_clay"
      },
      "0,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "0,41": {
        "-5": "dark_oak_fence",
        "-4": "dark_oak_fence",
        "-3": "dark_oak_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "0,42": {
        "-6": "dark_oak_fence",
        "-5": "dark_oak_fence",
        "-4": "dark_oak_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "0,43": {
        "-4": "dark_oak_fence",
        "-3": "dark_oak_fence",
        "-2": "dark_oak_fence",
        "-1": "spruce_fence"
      },
      "0,46": {
        "0": "planks"
      },
      "0,47": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,48": {
        "0": "planks",
        "-1": "wooden_slab"
      },
      "0,49": {
        "0": "planks",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-1": "wooden_slab"
      },
      "0,50": {
        "0": "planks",
        "1": "light_weighted_pressure_plate",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "stone",
        "-1": "wooden_slab"
      },
      "1,0": {
        "0": "spruce_stairs"
      },
      "1,1": {
        "0": "spruce_stairs"
      },
      "1,2": {
        "0": "spruce_stairs"
      },
      "1,3": {
        "0": "spruce_stairs"
      },
      "1,4": {
        "0": "spruce_stairs"
      },
      "1,12": {
        "-7": "planks",
        "-6": "planks",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "1,13": {
        "-7": "planks",
        "-6": "dirt",
        "-5": "dirt",
        "-4": "dirt",
        "-3": "stained_hardened_clay"
      },
      "1,26": {
        "3": "stone_brick_stairs"
      },
      "1,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "1,28": {
        "3": "stone_brick_stairs"
      },
      "1,46": {
        "0": "spruce_stairs"
      },
      "1,47": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,48": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,49": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "1,50": {
        "0": "spruce_stairs",
        "-1": "wooden_slab"
      },
      "2,0": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,1": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,2": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,3": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,4": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,5": {
        "0": "trapdoor"
      },
      "2,26": {
        "3": "stone_brick_stairs"
      },
      "2,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "2,28": {
        "3": "stone_brick_stairs"
      },
      "2,45": {
        "0": "trapdoor"
      },
      "2,46": {
        "0": "log"
      },
      "2,47": {
        "0": "log",
        "-1": "double_wooden_slab"
      },
      "2,48": {
        "0": "log",
        "-1": "wooden_slab"
      },
      "2,49": {
        "0": "log",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "cobblestone",
        "-1": "wooden_slab"
      },
      "2,50": {
        "0": "log",
        "-7": "stone",
        "-6": "stone",
        "-5": "stone",
        "-4": "cobblestone",
        "-1": "wooden_slab"
      },
      "3,0": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars"
      },
      "3,1": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars"
      },
      "3,2": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,3": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,4": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,5": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,26": {
        "3": "stone_brick_stairs"
      },
      "3,27": {
        "0": "stone_brick_stairs",
        "1": "stone",
        "2": "stone",
        "3": "slime",
        "-4": "spruce_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "3,28": {
        "3": "stone_brick_stairs"
      },
      "3,45": {
        "0": "iron_bars",
        "1": "iron_bars"
      },
      "3,46": {
        "0": "planks",
        "1": "iron_bars",
        "2": "iron_bars"
      },
      "3,47": {
        "0": "planks",
        "2": "iron_bars",
        "3": "iron_bars"
      },
      "3,48": {
        "0": "planks",
        "3": "iron_bars",
        "4": "iron_bars"
      },
      "3,49": {
        "0": "planks",
        "4": "iron_bars",
        "5": "iron_bars",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "3,50": {
        "0": "planks",
        "5": "iron_bars",
        "6": "iron_bars",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "4,0": {
        "0": "trapdoor"
      },
      "4,1": {
        "0": "trapdoor"
      },
      "4,2": {
        "0": "trapdoor"
      },
      "4,3": {
        "0": "trapdoor"
      },
      "4,4": {
        "0": "trapdoor"
      },
      "4,26": {
        "3": "stone_brick_stairs"
      },
      "4,27": {
        "0": "stone_brick_stairs",
        "1": "stone",
        "2": "stone",
        "3": "slime",
        "-4": "spruce_fence",
        "-3": "spruce_fence",
        "-2": "spruce_fence",
        "-1": "spruce_fence"
      },
      "4,28": {
        "3": "stone_brick_stairs"
      },
      "4,46": {
        "0": "trapdoor"
      },
      "4,47": {
        "0": "trapdoor"
      },
      "4,48": {
        "0": "trapdoor"
      },
      "4,49": {
        "0": "trapdoor"
      },
      "4,50": {
        "0": "trapdoor"
      },
      "5,26": {
        "3": "stone_brick_stairs"
      },
      "5,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "slime",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "5,28": {
        "3": "stone_brick_stairs"
      },
      "6,25": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "6,26": {
        "3": "stone_brick_stairs"
      },
      "6,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "6": "ladder",
        "7": "ladder",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "6,28": {
        "3": "stone_brick_stairs"
      },
      "6,29": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "6,49": {
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "6,50": {
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "7,25": {
        "7": "stone_brick_stairs"
      },
      "7,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "7,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "7,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "7,29": {
        "7": "stone_brick_stairs"
      },
      "7,49": {
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "7,50": {
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "cobblestone"
      },
      "8,25": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "8,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "8,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "coal_block",
        "-6": "cobblestone",
        "-5": "cobblestone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "8,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "8,29": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "9,25": {
        "7": "stone_brick_stairs"
      },
      "9,26": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "9,27": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "9,28": {
        "0": "stone",
        "1": "stone",
        "2": "stone",
        "3": "stone",
        "4": "stone",
        "5": "stone",
        "6": "stone",
        "7": "stone",
        "-7": "cobblestone",
        "-6": "cobblestone",
        "-5": "stone",
        "-4": "stone",
        "-3": "stone",
        "-2": "stone",
        "-1": "stone"
      },
      "9,29": {
        "7": "stone_brick_stairs"
      },
      "10,25": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "10,29": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "12,49": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "12,50": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "13,37": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "planks"
      },
      "13,38": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "13,39": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "dirt"
      },
      "13,40": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "-2": "planks",
        "-1": "dirt"
      },
      "13,48": {
        "-4": "planks",
        "-3": "planks",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "13,49": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "13,50": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "14,27": {
        "7": "ladder"
      },
      "14,36": {
        "0": "dirt",
        "1": "stained_hardened_clay",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "planks"
      },
      "14,37": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "14,38": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "14,39": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "14,40": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "14,41": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-1": "planks"
      },
      "14,48": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "14,49": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "14,50": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "15,22": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "15,23": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "15,24": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "15,25": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "15,26": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "15,27": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "15,28": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "15,29": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "15,30": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "15,31": {
        "7": "stone_brick_stairs",
        "8": "stone"
      },
      "15,32": {
        "6": "stone_brick_stairs",
        "7": "stone",
        "8": "stone"
      },
      "15,36": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-2": "planks",
        "-1": "planks"
      },
      "15,37": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "15,38": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "15,39": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "15,40": {
        "0": "dirt",
        "1": "dirt",
        "2": "stained_hardened_clay",
        "3": "stained_hardened_clay",
        "-3": "planks",
        "-2": "planks",
        "-1": "planks"
      },
      "15,41": {
        "0": "dirt",
        "1": "dirt",
        "2": "dirt",
        "3": "stained_hardened_clay",
        "-2": "planks",
        "-1": "dirt"
      },
      "15,48": {
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "stained_hardened_clay",
        "-1": "stained_hardened_clay"
      },
      "15,49": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      },
      "15,50": {
        "-6": "planks",
        "-5": "planks",
        "-4": "planks",
        "-3": "dirt",
        "-2": "dirt",
        "-1": "stained_hardened_clay"
      }
    }
  }
}