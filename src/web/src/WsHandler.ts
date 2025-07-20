import type { SplitsData } from "../../proxy/data/defaultSplits.ts"

export class WsHandler extends EventTarget {
  private static instance: WsHandler | null = null

  public static getInstance(): WsHandler {
    if (!WsHandler.instance) {
      WsHandler.instance = new WsHandler()
    }
    return WsHandler.instance
  }

  private readonly url = "ws://localhost:3000"
  private socket: WebSocket | null = null

  private _config: Record<string, any> = {}
  private _splits: SplitsData = {}

  private constructor() {
    super()
    this.connect()
  }

  private connect() {
    console.log("Connecting to WebSocket server at", this.url)
    this.socket = new WebSocket(this.url)

    this.socket.onopen = () => {
      console.log("WebSocket connection established")
    }

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data)
      switch (message.type) {
        case "config":
          this._config = message.data
          this.dispatchEvent(new CustomEvent("config", { detail: this._config }))
          break
        case "splits":
          this._splits = message.data
          this.dispatchEvent(new CustomEvent("splits", { detail: this._splits }))
          break
        default:
          console.warn("Unknown message type:", message.type)
      }
    }

    this.socket.onerror = (error) => {
      console.error("WebSocket error:", error)
    }

    this.socket.onclose = () => {
      console.log("WebSocket connection closed, reconnecting...")
      setTimeout(() => this.connect(), 1000)
    }
  }
}