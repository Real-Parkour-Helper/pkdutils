import { Command } from "../../packet/Command"
import { Packet } from "../../packet/Packet"
import { GuiWindow } from "../GuiWindow"
import { GuiWindowManager } from "../GuiWindowManager"
import { GuiWindowType } from "../GuiWindowType"
import { GuiItem } from "../GuiItem"
import { repeatObj } from "../../util/generalUtils"
import { Logger } from "../../../util/Logger"

export abstract class WindowGame extends Command {
  protected window: GuiWindow | undefined
  private backgroundItem = new GuiItem(160, "", 1, 15)
  protected readonly items: GuiItem[] = []

  protected constructor(game: string, commands: string[], protected slots: number = 54) {
    super(game, "1.0.0", commands, [])
    this.items = repeatObj(this.backgroundItem, slots)
  }

  protected handle(args: string[], packet: Packet) {
    this.window = GuiWindowManager.createWindow(GuiWindowType.CHEST, this.name, this.slots)
    this.setupInventory(packet)

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
          this.onClick(slot, packet)
          this.resendItems(packet)
          packet.toClient.write("set_slot", {
            windowId: -1,
            slot: -1,
            item: {
              blockId: -1
            }
          })
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

  protected resendItems(packet: Packet) {
    if (!this.window) {
      return
    }
    this.window.clearItems()
    for (const i of this.items) {
      this.window.addItem(i)
    }
    const updatedItems = this.window?.itemsPacket()
    if (updatedItems) {
      packet.toClient.write("window_items", updatedItems)
    }
  }

  protected abstract setupInventory(packet: Packet): void
  protected abstract onClick(slot: number, packet: Packet): void
  protected abstract onClose(): void
}