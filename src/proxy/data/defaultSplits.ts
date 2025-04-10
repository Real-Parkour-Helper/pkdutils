import { RoomName } from "./roomData";

export type BoostStrat = {
  name: string;
  time: number; // Best time in milliseconds
  boost_time: number; // Time at which the boost was used
};

export type RoomSplits = {
  boostless_time: number;
  boost_strats: BoostStrat[];
};

export type SplitsData = {
  [roomName: string]: RoomSplits;
};

export const defaultSplits: SplitsData = {
  "around pillars": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  blocks: {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "castle wall": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  tightrope: {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2 + salami",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "early 3+1": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "fence squeeze": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  fences: {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  fortress: {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "four towers": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 2-3",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  ice: {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 2-3",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "ladder slide": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "ladder tower": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "overhead 4b": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 2-3",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "quartz climb": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "quartz temple": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "rng skip": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  sandpit: {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 2-3",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  scatter: {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "slime scatter": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 2-3",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "slime skip": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "tower tightrope": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "triple platform": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "triple trapdoors": {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  underbridge: {
    boostless_time: 600000,
    boost_strats: [
      {
        name: "cp 0-1",
        time: 600000,
        boost_time: 0,
      },
      {
        name: "cp 1-2",
        time: 600000,
        boost_time: 0,
      },
    ],
  },
  "finish room": {
    boostless_time: 4400,
    boost_strats: [
      {
        name: "lol",
        time: 2900,
        boost_time: 500,
      },
    ],
  },
};
