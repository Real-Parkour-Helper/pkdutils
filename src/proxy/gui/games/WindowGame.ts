import { Command } from "../../packet/Command"
import { Packet } from "../../packet/Packet"
import { GuiWindow } from "../GuiWindow"
import { GuiWindowManager } from "../GuiWindowManager"
import { GuiWindowType } from "../GuiWindowType"
import { GuiItem } from "../GuiItem"
import { repeatObj } from "../../util/generalUtils"
import { Logger } from "../../../util/Logger"

export abstract class WindowGame extends Command {
  private window: GuiWindow | undefined
  private backgroundItem = new GuiItem(160, "", 1, 15)
  private readonly items: GuiItem[] = []

  protected constructor(game: string, commands: string[], private slots: number = 54) {
    super(game, "1.0.0", commands, [])
    this.items = repeatObj(this.backgroundItem, slots)
  }

  protected handle(args: string[], packet: Packet) {
    this.window = GuiWindowManager.createWindow(GuiWindowType.CHEST, this.name, this.slots)
    this.setupInventory()

    for (const i of this.items) {
      this.window?.addItem(i)
    }

    const packetOpen = this.window?.openPacket()
    const packetItems = this.window?.itemsPacket()
    if (packetOpen && packetItems) {
      packet.toClient.write("open_window", packetOpen)
      packet.toClient.write("window_items", packetItems)
    }
  }

  override outgoingPacket(packet: Packet): Packet {
    if (packet.meta.name === "window_click") {
      if (packet.data.windowId !== this.window?.getId()) {
        return packet
      }
      packet.cancelled = true
      const slot = packet.data.slot
      try {
        const item = this.window?.getItem(slot)
        if (item) {
          this.onClick(slot)
          const updatedItems = this.window?.itemsPacket()
          if (updatedItems) {
            packet.toClient.write("window_items", updatedItems)
            packet.toClient.write("set_slot", {
              windowId: -1,         // -1 = cursor
              slot: -1,             // Also -1 = cursor
              item: {
                blockId: -1
              }            // Clear the cursor
            })
          }
          return packet
        } else {
          return packet
        }
      } catch (error) {
        Logger.error("Error while handling window click:", error)
        return packet
      }
    }

    if (packet.meta.name === "close_window") {
      if (packet.data.windowId !== this.window?.getId()) {
        return packet
      }
      packet.cancelled = true
      this.onClose()
      this.window = undefined
      return packet
    }

    return super.outgoingPacket(packet)
  }

  protected abstract setupInventory(): void
  protected abstract onClick(slot: number): void
  protected abstract onClose(): void
}