import { roomBlocks } from "./roomBlocks"
import { BlockData, RoomName } from "./roomData"

export function generateUniqueBlocks():  Record<RoomName, BlockData[]> {
  const blockAtPos = new Map<string, RoomName[]>() // x/y/z->block -> rooms[]

  Object.entries(roomBlocks).forEach(([roomName, room]) => {
    Object.entries(room.columns).forEach(([coord, blocks]) => {
      const [x, z] = coord.split(",")

      Object.entries(blocks).forEach(([y, block]) => {
        const key = `${x}/${y}/${z}->${block}`

        if (!blockAtPos.has(key)) {
          blockAtPos.set(key, [])
        }

        blockAtPos.get(key)!.push(roomName as RoomName)
      })
    })
  })

  const uniqueBlocks: {[key: string]: BlockData[]} = {} // room -> {x, y, z, block_name}[]

  blockAtPos.forEach((rooms, blockEntry) => {
    if (rooms.length === 1) {
      if (!Object.keys(uniqueBlocks).includes(rooms[0])) {
        uniqueBlocks[rooms[0] as RoomName] = []
      }
      const [coords, block] = blockEntry.split("->")
      const [x, y, z] = coords.split("/").map(Number)

      uniqueBlocks[rooms[0]].push({
        x, y, z: z + 1, block_name: block //z + 1 because the unique block checker starts 1 block inside the wall
      } as BlockData)
    }
  })

  return uniqueBlocks as Record<RoomName, BlockData[]>
}