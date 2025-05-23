import EventEmitter from "events"

import { GuiItem } from "./GuiItem"
import { GuiWindowType } from "./GuiWindowType"

export class GuiWindow extends EventEmitter {

  private items: GuiItem[] = []

  /**
   * GuiWindow constructor
   * @param id
   * @param type
   * @param title
   * @param slotCount
   */
  constructor(private id: number, private type: GuiWindowType, private title: string, private slotCount: number) {
    super()
  }

  /**
   * Add an item to the window (does not send the packet)
   * @param item
   */
  addItem(item: GuiItem) {
    if (this.items.length >= this.slotCount) {
      throw new Error("Cannot add more items to this window")
    }
    this.items.push(item)
  }

  /**
   * Generates the packet to open the window.
   * This does not include the items inside the window.
   */
  openPacket(): object {
    return {
      windowId: this.id,
      inventoryType: this.type,
      windowTitle: JSON.stringify({ translate: this.title }),
      slotCount: this.slotCount
    }
  }

  /**
   * Generates the packet to send the items inside the window.
   */
  itemsPacket(): object {
    return {
      windowId: this.id,
      items: this.items.map(item => item.toJSON())
    }
  }
}