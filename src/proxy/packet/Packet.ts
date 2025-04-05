import { Client, PacketMeta, ServerClient } from "minecraft-protocol";

/**
 * A wrapper for a Minecraft packet. Contains the meta, the data and the references to the client socket and the server socket.
 * Also contains the logic for cancelling packets.
 */
export class Packet {
  private readonly _meta: PacketMeta;
  private _data: any;
  private readonly _toClient: ServerClient;
  private readonly _toServer: Client;

  private _cancelled = false;

  constructor(
    meta: PacketMeta,
    data: any,
    toClient: ServerClient,
    toServer: Client,
  ) {
    this._meta = meta;
    this._data = data;
    this._toClient = toClient;
    this._toServer = toServer;
  }

  get meta(): PacketMeta {
    return this._meta;
  }

  get data(): any {
    return this._data;
  }

  get toClient(): ServerClient {
    return this._toClient;
  }

  get toServer(): Client {
    return this._toServer;
  }

  get cancelled() {
    return this._cancelled;
  }

  set data(value: any) {
    this._data = value;
  }

  set cancelled(value: boolean) {
    this._cancelled = value;
  }
}
