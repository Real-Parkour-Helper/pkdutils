import { WebSocketServer, WebSocket } from "ws"
import express from "express"
import http from "http"
import cors from "cors"
import path from "path"

import { Logger } from "../../util/Logger"
import { Config } from "../config/Config"
import { SplitTracker } from "../modules/SplitTracker"
import { RunStore } from "../modules/RunStore"

export class ApiServer {
  private static instance: ApiServer | null = null

  private app: express.Application | null = null
  private server: http.Server | null = null
  private wss: WebSocketServer | null = null

  private wsClients: Set<WebSocket> = new Set()

  private config = Config.getInstance()
  private splitTracker = SplitTracker.getInstance()
  private runStore = RunStore.getInstance()

  public static getInstance() {
    if (!ApiServer.instance) {
      ApiServer.instance = new ApiServer()
    }
    return ApiServer.instance
  }

  private broadcastToClients(message: string) {
    this.wsClients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
  }

  init(port: number = 3000) {
    this.app = express()
    this.server = http.createServer(this.app)

    this.app.use(express.json())
    this.app.use(cors({
      origin: "http://localhost:5173"
    }))

    if (process.env.NODE_ENV !== "development") {
      const frontend = path.join(__dirname, "..", "..", "web", "dist")
      this.app.use(express.static(frontend))
      this.app.get("*", (req, res) => {
        res.sendFile(path.join(frontend, "index.html"))
      })
    }

    this.wss = new WebSocketServer({ server: this.server })
    this.wss.on("connection", (ws: WebSocket) => {
      Logger.info("API WebSocket connection established")
      this.wsClients.add(ws)

      const config = this.config.getAll()
      const splits = this.splitTracker.splitsData
      const runs = this.runStore.getRuns()

      ws.send(JSON.stringify({ type: "config", data: config }))
      ws.send(JSON.stringify({ type: "splits", data: splits }))
      ws.send(JSON.stringify({ type: "runs", data: runs }))

      ws.on("message", message => {
        Logger.debug("Received message from WebSocket:", message)
      })

      ws.on("close", () => {
        Logger.info("WebSocket connection closed")
        this.wsClients.delete(ws)
      })

      ws.on("error", error => {
        Logger.error("WebSocket error:", error)
        this.wsClients.delete(ws)
      })
    })

    this.server.listen(port, () => {
      Logger.info("WebUI / API / WS server is running on port", port)
    })
  }
}