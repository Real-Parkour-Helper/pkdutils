import { GuiWindow } from "./GuiWindow"
import { GuiWindowType } from "./GuiWindowType"

export class GuiWindowManager {
  private static windows: Map<number, GuiWindow> = new Map()
  private static nextWindowId: number = 1

  /**
   * Get a window by its ID
   * @param id
   */
  static getWindow(id: number): GuiWindow | undefined {
    return this.windows.get(id)
  }

  /**
   * Create a new window
   * @param type
   * @param title
   * @param slotCount
   */
  static createWindow(type: GuiWindowType, title: string, slotCount: number): GuiWindow {
    const windowId = this.nextWindowId++
    const window = new GuiWindow(windowId, type, title, slotCount)
    this.windows.set(windowId, window)
    return window
  }
}