import { PacketInterceptor } from "../packet/PacketInterceptor"
import { Packet } from "../packet/Packet"
import { World } from "./World"
import { Logger } from "../../util/Logger"
import { constructChatMessage } from "../util/packetUtils"
import { BlockData, checkpointCount, RoomName, uniqueBlocks } from "../data/roomData"
import { Vec3 } from "vec3"
import { SplitTracker } from "./SplitTracker"
import { ServerClient } from "minecraft-protocol"

export class RoomID extends PacketInterceptor {
  private currentCheckpoint = 0
  private currentRoomNumber = 0
  private currentRoomName: RoomName | null = null

  private checkpointRegex = /CHECKPOINT! You reached checkpoint (\d+) in [\d:\.]+!/

  private startPosition = new Vec3(18, 72, 13)
  private currentRoomStartPosition = this.startPosition;
  private rooms: RoomName[] = []
  private splitTracker: SplitTracker
  private calcUrl = "https://wired-cod-kindly.ngrok-free.app/api/pkdutils/calc"
  
  get GetCurrentRoomNumber(): number {
    return this.currentRoomNumber;
  }

  constructor(splitTracker: SplitTracker) {
    super("RoomID", "1.0.0", true, ["respawn"])
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
  private detectRoom(): {room: RoomName, startPos: Vec3 } | null {
    const zAddend = 57 * this.currentRoomNumber
    const startPos = new Vec3(0, 0, zAddend).add(this.startPosition)

    for (const [room, blocks] of Object.entries(uniqueBlocks)) {
      const allBlocksMatch = blocks.every(blockData => this.verifyBlock(startPos, blockData))

      if (allBlocksMatch) { // we found our room
        return { room: room as RoomName, startPos: startPos }
      }
    }

    return null // this should never happen but typescript must be pleased
  }

  /**
   * Sends the seed to Parkour Duels Bot and returns the optimal result
   * @private
   */
  private calcSeed(seed: RoomName[], toClient: ServerClient) {
    const content = {
      rooms: seed,
      splits: this.splitTracker.splitsData
    }

    fetch(this.calcUrl, {
      method: 'POST',
      body: JSON.stringify(content)
    })
    .then(response => response.json())
    .then(data => {
      if (!toClient) {
        return;
      }
      toClient.write("chat", {
        message: JSON.stringify({ text: `§9Perfect boost time: §a${data.best.boost_time}` }),
        position: 0
      });
      toClient.write("chat", {
        message: JSON.stringify({ text: `§9Perfect boostless time: §a${data.best.boostless_time}` }),
        position: 0
      });
      toClient.write("chat", {
        message: JSON.stringify({ text: '§9You should boost in the following rooms:' }),
        position: 0
      });

      for (let br of data.best.boost_rooms) {
        let pacelockMsg = "";
        if (br.pacelock > 0) {
          br.pacelock = br.pacelock.toFixed(1);
          pacelockMsg = ` §9(pacelock §c${br.pacelock}s§9)`;
        }
        toClient.write("chat", {
          message: JSON.stringify({ text: `§9Room §6${br.index + 1}: §a${br.name}${pacelockMsg}` }),
          position: 0
        });
      }

      if (!data.personal) {
        return;
      }
      
      toClient.write("chat", {
        message: JSON.stringify({ text: "" }),
        position: 0
      });
      
      if (data.personal.boost_time === "") {
        toClient.write("chat", {
          message: JSON.stringify({ text: `§9It seems you haven't collected enough splits for us to determine the fastest time :(` }),
          position: 0
        });
      } else {
        toClient.write("chat", {
          message: JSON.stringify({ text: `§9Boost time with §6your splits§9: §a${data.personal.boost_time}` }),
          position: 0
        });
      }
      toClient.write("chat", {
        message: JSON.stringify({ text: `§9Boostless time with §6your splits§9: §a${data.personal.boostless_time}` }),
        position: 0
      });
      toClient.write("chat", {
        message: JSON.stringify({ text: '§9You should boost in the following rooms:' }),
        position: 0
      });

      for (let br of data.personal.boost_rooms) {
        let pacelockMsg = "";
        if (br.pacelock > 0) {
          br.pacelock = br.pacelock.toFixed(1);
          pacelockMsg = ` §9(pacelock §c${br.pacelock}s§9)`;
        }
        toClient.write("chat", {
          message: JSON.stringify({ text: `§9Room §6${br.index + 1}: §a${br.name}${pacelockMsg}` }),
          position: 0
        });
      }
      
      let calcRooms = [];
      for (let i = 0; i < 8; i++) {
        calcRooms.push(`room_${i + 1}: ${this.rooms[i]}`);
      }
      
      toClient.write("chat", {
        message: JSON.stringify({ text: "" }),
        position: 0
      });
      
      // TODO: not sure if this is outputted in a single line
      // if it's not then you can't copy it so it's USELESS
      // toClient.write("chat", {
      //   message: JSON.stringify({ text: "§9Calc command for the discord bot:" }),
      //   position: 0
      // });
      
      const command = `/calc ${calcRooms.join(" ")}`
      // toClient.write("chat", {
      //   message: JSON.stringify({ text: command }),
      //   position: 0
      // });
      console.log(command);
    })
    .catch(error => {
      Logger.error(`Error calculating seed: ${error}`);
      toClient.write("chat", {
        message: JSON.stringify({ text: '§cSomething went wrong when calculating the seed :(' }),
        position: 0
      });
    });
  }

  incomingPacket(packet: Packet): Packet {
    if (packet.meta.name === "respawn") {
      this.currentCheckpoint = 0
      this.currentRoomNumber = 0
      this.currentRoomName = null
      this.rooms = []
      this.splitTracker.resetTracker();
      this.currentRoomStartPosition = this.startPosition;
    }

    if (packet.meta.name === "chat") {
      const text = constructChatMessage(packet.data.message)
      if ((text.startsWith(" ") && (text.trim().startsWith("Opponents:") || text.trim().startsWith("Opponent:")))) {
        this.currentRoomNumber = 0
        const detectedRoom = this.detectRoom()

        if (detectedRoom) {
          this.currentRoomName = detectedRoom.room
          this.rooms.push(this.currentRoomName)
          Logger.debug(`You are in room ${this.currentRoomName} (${this.currentRoomNumber})`)
        } else {
          Logger.error("There was an error identifying which room you are in! Please report this.")
        }
      }

      if (text.startsWith("COMPLETED! You completed the parkour")) {
        this.calcSeed(this.rooms, packet.toClient)
      }

      const match = text.match(this.checkpointRegex)

      if (match) {
        this.currentCheckpoint = parseInt(match[1])

        let nextRoomAt = 0
        for (const pastRoom of this.rooms) {
          nextRoomAt += checkpointCount[pastRoom]
        }

        if (this.currentCheckpoint === nextRoomAt) {
          this.splitTracker.roomExit(text, this.currentRoomName, this.currentRoomStartPosition,packet.toClient)
          if (this.rooms.length >= 8) {
            return packet;
          }

          this.currentRoomNumber++
          const detectedRoom = this.detectRoom()

          if (detectedRoom) {
            this.currentRoomName = detectedRoom.room
            this.currentRoomStartPosition = detectedRoom.startPos
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
