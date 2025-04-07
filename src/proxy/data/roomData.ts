export interface BlockData {
  x: number;
  y: number;
  z: number;
  block_name: string;
}

export type RoomName =
  "around pillars" |
  "blocks" |
  "castle wall" |
  "early 3+1" |
  "fence squeeze" |
  "fences" |
  "fortress" |
  "four towers" |
  "rng skip" |
  "ice" |
  "ladder slide" |
  "ladder tower" |
  "overhead 4b" |
  "quartz climb" |
  "quartz temple" |
  "sandpit" |
  "scatter" |
  "slime scatter" |
  "slime skip" |
  "tightrope" |
  "tower tightrope" |
  "triple platform" |
  "triple trapdoors" |
  "underbridge"

export const checkpointCount: Record<RoomName, number> = {
  "around pillars": 2,
  "blocks": 2,
  "castle wall": 2,
  "early 3+1": 2,
  "fence squeeze": 2,
  "fences": 2,
  "fortress": 2,
  "four towers": 3,
  "rng skip": 2,
  "ice": 3,
  "ladder slide": 2,
  "ladder tower": 3,
  "overhead 4b": 3,
  "quartz climb": 2,
  "quartz temple": 2,
  "sandpit": 3,
  "scatter": 2,
  "slime scatter": 3,
  "slime skip": 2,
  "tightrope": 2,
  "tower tightrope": 2,
  "triple platform": 2,
  "triple trapdoors": 2,
  "underbridge": 2,
}

/**
 * This is a list of each room and the unique blocks with
 * their positions in this room, used to identify rooms.
 */
export const uniqueBlocks: Record<RoomName, BlockData[]> = {
  "around pillars": [
    {
      "x": 0,
      "y": 9,
      "z": 12,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": -8,
      "y": 8,
      "z": 14,
      "block_name": "spruce_fence"
    },
    {
      "x": -2,
      "y": 2,
      "z": 34,
      "block_name": "slime"
    }
  ],
  "blocks": [
    {
      "x": 10,
      "y": 4,
      "z": 8,
      "block_name": "stonebrick"
    },
    {
      "x": -6,
      "y": 11,
      "z": 25,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 3,
      "y": 12,
      "z": 27,
      "block_name": "stonebrick"
    }
  ],
  "castle wall": [
    {
      "x": 0,
      "y": 0,
      "z": 8,
      "block_name": "spruce_fence"
    },
    {
      "x": 13,
      "y": 11,
      "z": 26,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 0,
      "y": 7,
      "z": 42,
      "block_name": "stone"
    }
  ],
  "early 3+1": [
    {
      "x": 14,
      "y": 8,
      "z": 17,
      "block_name": "stone"
    },
    {
      "x": 5,
      "y": 14,
      "z": 31,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 14,
      "y": 11,
      "z": 39,
      "block_name": "stone"
    }
  ],
  "fence squeeze": [
    {
      "x": -13,
      "y": 6,
      "z": 12,
      "block_name": "stonebrick"
    },
    {
      "x": 0,
      "y": 5,
      "z": 26,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 13,
      "y": 5,
      "z": 38,
      "block_name": "slime"
    }
  ],
  "fences": [
    {
      "x": 1,
      "y": 8,
      "z": 26,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 12,
      "y": 11,
      "z": 26,
      "block_name": "oak_stairs"
    },
    {
      "x": -10,
      "y": 11,
      "z": 31,
      "block_name": "spruce_fence"
    }
  ],
  "fortress": [
    {
      "x": 0,
      "y": 10,
      "z": 19,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 9,
      "y": 9,
      "z": 28,
      "block_name": "stonebrick"
    },
    {
      "x": -3,
      "y": 14,
      "z": 35,
      "block_name": "cobblestone_wall"
    }
  ],
  "four towers": [
    {
      "x": -3,
      "y": 12,
      "z": 11,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 14,
      "y": 9,
      "z": 23,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": -2,
      "y": 12,
      "z": 37,
      "block_name": "spruce_stairs"
    }
  ],
  "rng skip": [
    {
      "x": 0,
      "y": 5,
      "z": 14,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 0,
      "y": 5,
      "z": 22,
      "block_name": "dark_oak_fence"
    },
    {
      "x": 2,
      "y": 6,
      "z": 42,
      "block_name": "dark_oak_fence"
    }
  ],
  "ice": [
    {
      "x": -4,
      "y": 6,
      "z": 19,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 4,
      "y": 13,
      "z": 19,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 12,
      "y": 8,
      "z": 36,
      "block_name": "ice"
    }
  ],
  "ladder slide": [
    {
      "x": 9,
      "y": 3,
      "z": 25,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": -14,
      "y": 10,
      "z": 41,
      "block_name": "stonebrick"
    },
    {
      "x": -14,
      "y": 1,
      "z": 18,
      "block_name": "ladder"
    }
  ],
  "ladder tower": [
    {
      "x": 0,
      "y": 18,
      "z": 10,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 0,
      "y": 9,
      "z": 34,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": -2,
      "y": -4,
      "z": 19,
      "block_name": "slime"
    }
  ],
  "overhead 4b": [
    {
      "x": 5,
      "y": 8,
      "z": 11,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": -7,
      "y": 23,
      "z": 23,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 5,
      "y": 24,
      "z": 31,
      "block_name": "stonebrick"
    }
  ],
  "quartz climb": [
    {
      "x": 0,
      "y": 16,
      "z": 27,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 8,
      "y": 17,
      "z": 33,
      "block_name": "quartz_stairs"
    },
    {
      "x": -7,
      "y": 25,
      "z": 38,
      "block_name": "ladder"
    }
  ],
  "quartz temple": [
    {
      "x": 0,
      "y": 8,
      "z": 11,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 0,
      "y": -1,
      "z": 21,
      "block_name": "slime"
    },
    {
      "x": 0,
      "y": -1,
      "z": 41,
      "block_name": "slime"
    }
  ],
  "sandpit": [
    {
      "x": -13,
      "y": 12,
      "z": 15,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 13,
      "y": 5,
      "z": 18,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 10,
      "y": -1,
      "z": 31,
      "block_name": "sand"
    }
  ],
  "scatter": [
    {
      "x": -7,
      "y": 10,
      "z": 22,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 5,
      "y": 5,
      "z": 24,
      "block_name": "slime"
    },
    {
      "x": -1,
      "y": 15,
      "z": 40,
      "block_name": "stained_hardened_clay" // was "clay"
    }
  ],
  "slime scatter": [
    {
      "x": -1,
      "y": 3,
      "z": 22,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": -5,
      "y": 7,
      "z": 11,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 6,
      "y": 3,
      "z": 36,
      "block_name": "slime"
    }
  ],
  "slime skip": [
    {
      "x": -7,
      "y": 4,
      "z": 10,
      "block_name": "ladder"
    },
    {
      "x": 0,
      "y": 4,
      "z": 19,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 0,
      "y": 2,
      "z": 32,
      "block_name": "slime"
    }
  ],
  "tightrope": [
    {
      "x": 9,
      "y": 14,
      "z": 33,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 14,
      "y": 13,
      "z": 25,
      "block_name": "cobblestone_wall"
    },
    {
      "x": -14,
      "y": 15,
      "z": 29,
      "block_name": "stone"
    }
  ],
  "tower tightrope": [
    {
      "x": 0,
      "y": 2,
      "z": 12,
      "block_name": "ladder"
    },
    {
      "x": 13,
      "y": 7,
      "z": 17,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": -7,
      "y": 2,
      "z": 35,
      "block_name": "stone"
    }
  ],
  "triple platform": [
    {
      "x": 13,
      "y": 8,
      "z": 31,
      "block_name": "ladder"
    },
    {
      "x": 9,
      "y": 14,
      "z": 16,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": -15,
      "y": 4,
      "z": 44,
      "block_name": "planks"
    }
  ],
  "triple trapdoors": [
    {
      "x": 0,
      "y": 1,
      "z": 8,
      "block_name": "trapdoor"
    },
    {
      "x": 14,
      "y": 9,
      "z": 15,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 6,
      "y": 1,
      "z": 27,
      "block_name": "slime"
    }
  ],
  "underbridge": [
    {
      "x": -14,
      "y": -3,
      "z": 14,
      "block_name": "dark_oak_fence"
    },
    {
      "x": -8,
      "y": 8,
      "z": 28,
      "block_name": "light_weighted_pressure_plate"
    },
    {
      "x": 14,
      "y": 7,
      "z": 28,
      "block_name": "ladder"
    }
  ]
}