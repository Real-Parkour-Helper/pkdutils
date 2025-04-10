import { PacketInterceptor } from "../packet/PacketInterceptor"
import { Packet } from "../packet/Packet"
import { World } from "./World"
import { Logger } from "../../util/Logger"
import { constructChatMessage } from "../util/packetUtils"
import { BlockData, checkpointCount, RoomName, uniqueBlocks } from "../data/roomData"
import { Vec3 } from "vec3"
import { SplitTracker } from "./SplitTracker"

export class RoomID extends PacketInterceptor {
  private currentCheckpoint = 0
  private currentRoomNumber = 0
  private currentRoomName: RoomName | null = null

  private checkpointRegex = /CHECKPOINT! You reached checkpoint (\d+) in [\d:\.]+!/

  private startPosition = new Vec3(18, 72, 13)
  private rooms: RoomName[] = []
  private splitTracker: SplitTracker

  constructor(splitTracker: SplitTracker) {
    super("RoomID", "1.0.0")
    this.splitTracker = splitTracker
  }

  /**
   * Verify if the block at the given position matches the block data,
   * starting from a provided position.
   * @param from
   * @param block
   * @private
   */
  private verifyBlock(from: Vec3, block: BlockData): boolean {
    const blockPos = new Vec3(block.x, block.y, block.z).add(from)
    const blockAtPos = World.getBlock(blockPos.x, blockPos.y, blockPos.z)
    return (blockAtPos != null && blockAtPos.name === block.block_name)
  }

  /**
   * Detect the current room and return its name.
   * @private
   */
  private detectRoom(): RoomName | null {
    const zAddend = 57 * this.currentRoomNumber
    const startPos = new Vec3(0, 0, zAddend).add(this.startPosition)

    for (const [room, blocks] of Object.entries(uniqueBlocks)) {
      const allBlocksMatch = blocks.every(blockData => this.verifyBlock(startPos, blockData))

      if (allBlocksMatch) { // we found our room
        return room as RoomName
      }
    }

    return null // this should never happen but typescript must be pleased
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "respawn") {
      this.currentCheckpoint = 0
      this.currentRoomNumber = 0
      this.currentRoomName = null
      this.rooms = []
      this.splitTracker.resetTracker();
    }

    if (packet.meta.name === "chat") {
      const text = constructChatMessage(packet.data.message)
      if ((text.startsWith(" ") && (text.trim().startsWith("Opponents:") || text.trim().startsWith("Opponent:")))) {
        this.currentRoomNumber = 0
        this.currentRoomName = this.detectRoom()

        if (this.currentRoomName) {
          this.rooms.push(this.currentRoomName)
          Logger.debug(`You are in room ${this.currentRoomName} (${this.currentRoomNumber})`)
        } else {
          Logger.error("There was an error identifying which room you are in! Please report this.")
        }
      }
      const match = text.match(this.checkpointRegex)

      if (match) {
        this.currentCheckpoint = parseInt(match[1])

        let nextRoomAt = 0
        for (const pastRoom of this.rooms) {
          nextRoomAt += checkpointCount[pastRoom]
        }

        if (this.currentCheckpoint === nextRoomAt) {
          this.splitTracker.roomExit(text, this.currentRoomName, packet.toClient)
          if (this.rooms.length >= 8) {
            return packet;
          }
          
          this.currentRoomNumber++
          this.currentRoomName = this.detectRoom()

          if (this.currentRoomName) {
            this.rooms.push(this.currentRoomName)
            Logger.debug(`You are in room ${this.currentRoomName} (${this.currentRoomNumber})`)
          } else {
            Logger.error("There was an error identifying which room you are in! Please report this.")
          }
        }
      }
    }
    return packet
  }

  outgoingPacket(packet: Packet): Packet {
    return packet
  }
}