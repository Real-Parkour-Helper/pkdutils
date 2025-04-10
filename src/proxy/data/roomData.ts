export interface BlockData {
  x: number;
  y: number;
  z: number;
  block_name: string;
}

export interface BoostRegion {
  min_x: number;
  min_z: number;
  max_x: number;
  max_z: number;
}

export interface BoostStrat {
  name: string;
  region: BoostRegion
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

export const boostRegions: Record<RoomName, BoostStrat[]> = {
  "around pillars": [
    {
      name: "cp 0-1",
      region: {
        min_x: -4,
        min_z: 1,
        max_x: 6,
        max_z: 9,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -5,
        min_z: 11,
        max_x: 6,
        max_z: 24,
      },
    },
  ],
  blocks: [
    {
      name: "cp 0-1",
      region: {
        min_x: -8,
        min_z: 1,
        max_x: 7,
        max_z: 14,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -15,
        min_z: 17,
        max_x: 4,
        max_z: 31,
      },
    },
  ],
  "castle wall": [
    {
      name: "cp 0-1",
      region: {
        min_x: -15,
        min_z: 1,
        max_x: 15,
        max_z: 51,
      },
    },
  ],
  "early 3+1": [
    {
      name: "cp 0-1",
      region: {
        min_x: 0,
        min_z: 0,
        max_x: 15,
        max_z: 27,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -15,
        min_z: 30,
        max_x: 10,
        max_z: 40,
      },
    },
  ],
  "fence squeeze": [
    {
      name: "cp 0-1",
      region: {
        min_x: -8,
        min_z: 2,
        max_x: 9,
        max_z: 23,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -4,
        min_z: 24,
        max_x: 4,
        max_z: 30,
      },
    },
  ],
  fences: [
    {
      name: "cp 0-1",
      region: {
        min_x: -7,
        min_z: 1,
        max_x: 7,
        max_z: 14,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -2,
        min_z: 23,
        max_x: 2,
        max_z: 29,
      },
    },
  ],
  fortress: [
    {
      name: "cp 0-1",
      region: {
        min_x: -6,
        min_z: 1,
        max_x: 6,
        max_z: 11,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -4,
        min_z: 19,
        max_x: 4,
        max_z: 29,
      },
    },
  ],
  "four towers": [
    {
      name: "cp 0-1",
      region: {
        min_x: -5,
        min_z: 1,
        max_x: 0,
        max_z: 5,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -4,
        min_z: 10,
        max_x: 3,
        max_z: 16,
      },
    },
    {
      name: "cp 2-3",
      region: {
        min_x: 11,
        min_z: 20,
        max_x: 15,
        max_z: 32,
      },
    },
  ],
  "rng skip": [
    {
      name: "cp 0-1",
      region: {
        min_x: -3,
        min_z: 1,
        max_x: 3,
        max_z: 9,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -1,
        min_z: 14,
        max_x: 1,
        max_z: 24,
      },
    },
  ],
  ice: [
    {
      name: "cp 0-1",
      region: {
        min_x: -2,
        min_z: 1,
        max_x: 2,
        max_z: 6,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -8,
        min_z: 15,
        max_x: -4,
        max_z: 19,
      },
    },
    {
      name: "cp 2-3",
      region: {
        min_x: 3,
        min_z: 19,
        max_x: 5,
        max_z: 30,
      },
    },
  ],
  "ladder slide": [
    {
      name: "cp 0-1",
      region: {
        min_x: -3,
        min_z: 1,
        max_x: 3,
        max_z: 14,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: 2,
        min_z: 25,
        max_x: 15,
        max_z: 31,
      },
    },
  ],
  "ladder tower": [
    {
      name: "cp 0-1",
      region: {
        min_x: -4,
        min_z: 1,
        max_x: 4,
        max_z: 10,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -3,
        min_z: 11,
        max_x: 3,
        max_z: 20,
      },
    },
  ],
  "overhead 4b": [
    {
      name: "cp 0-1",
      region: {
        min_x: -3,
        min_z: 1,
        max_x: 3,
        max_z: 6,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -1,
        min_z: 10,
        max_x: 7,
        max_z: 18,
      },
    },
    {
      name: "cp 2-3",
      region: {
        min_x: -11,
        min_z: 16,
        max_x: -4,
        max_z: 27,
      },
    },
  ],
  "quartz climb": [
    {
      name: "cp 0-1",
      region: {
        min_x: -10,
        min_z: 1,
        max_x: 10,
        max_z: 20,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -4,
        min_z: 24,
        max_x: 4,
        max_z: 30,
      },
    },
  ],
  "quartz temple": [
    {
      name: "cp 0-1",
      region: {
        min_x: -3,
        min_z: 1,
        max_x: 3,
        max_z: 6,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -2,
        min_z: 11,
        max_x: 2,
        max_z: 24,
      },
    },
  ],
  sandpit: [
    {
      name: "cp 0-1",
      region: {
        min_x: -15,
        min_z: 1,
        max_x: -4,
        max_z: 10,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -12,
        min_z: 12,
        max_x: 3,
        max_z: 18,
      },
    },
    {
      name: "cp 2-3",
      region: {
        min_x: 10,
        min_z: 26,
        max_x: 15,
        max_z: 42,
      },
    },
  ],
  scatter: [
    {
      name: "cp 0-1",
      region: {
        min_x: -8,
        min_z: 1,
        max_x: 6,
        max_z: 17,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -8,
        min_z: 21,
        max_x: 13,
        max_z: 35,
      },
    },
  ],
  "slime scatter": [
    {
      name: "cp 0-1",
      region: {
        min_x: -3,
        min_z: 1,
        max_x: 13,
        max_z: 20,
      },
    },
    {
      name: "cp 2-3",
      region: {
        min_x: -7,
        min_z: 12,
        max_x: -4,
        max_z: 31,
      },
    },
  ],
  "slime skip": [
    {
      name: "cp 0-1",
      region: {
        min_x: -3,
        min_z: 1,
        max_x: 3,
        max_z: 15,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -3,
        min_z: 21,
        max_x: 3,
        max_z: 27,
      },
    },
  ],
  tightrope: [
    {
      name: "cp 0-1",
      region: {
        min_x: -6,
        min_z: 1,
        max_x: 6,
        max_z: 15,
      },
    },
    {
      name: "cp 1-2 + salami",
      region: {
        min_x: 7,
        min_z: 18,
        max_x: 15,
        max_z: 25,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: 15,
        min_z: 32,
        max_x: 15,
        max_z: 41,
      },
    },
  ],
  "tower tightrope": [
    {
      name: "cp 0-1",
      region: {
        min_x: 0,
        min_z: 1,
        max_x: 9,
        max_z: 9,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -15,
        min_z: 17,
        max_x: 15,
        max_z: 32,
      },
    },
  ],
  "triple platform": [
    {
      name: "cp 0-1",
      region: {
        min_x: -3,
        min_z: 1,
        max_x: 9,
        max_z: 12,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: 2,
        min_z: 18,
        max_x: 12,
        max_z: 26,
      },
    },
  ],
  "triple trapdoors": [
    {
      name: "cp 0-1",
      region: {
        min_x: 0,
        min_z: 1,
        max_x: 11,
        max_z: 8,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: 12,
        min_z: 15,
        max_x: 15,
        max_z: 31,
      },
    },
  ],
  underbridge: [
    {
      name: "cp 0-1",
      region: {
        min_x: -15,
        min_z: 1,
        max_x: 0,
        max_z: 19,
      },
    },
    {
      name: "cp 1-2",
      region: {
        min_x: -9,
        min_z: 28,
        max_x: 15,
        max_z: 42,
      },
    },
  ],
};