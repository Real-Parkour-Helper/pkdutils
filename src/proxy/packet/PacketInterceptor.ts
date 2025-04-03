import { Packet } from "./Packet"
import { Logger } from "../../util/Logger"

/**
 * A PacketInterceptor receives all incoming / outgoing packets
 * and can modify / cancel them.
 */
export abstract class PacketInterceptor {
  protected _name: string
  protected _version: string

  protected constructor(name: string, version: string) {
    this._name = name
    this._version = version
    Logger.info(`${name} v${version} instantiated!`)
  }

  /**
   * Called for every incoming packet. This method
   * can use the packet, modify it, cancel it, but must
   * return (the same or modified) packet at the end
   * to be passed to the next interceptor.
   * @param packet
   */
  abstract incomingPacket(packet: Packet): Packet

  /**
   * Called for every outgoing packet. This method
   * can use the packet, modify it, cancel it, but must
   * return (the same or modified) packet at the end
   * to be passed to the next interceptor.
   * @param packet
   */
  abstract outgoingPacket(packet: Packet): Packet

  get name(): string {
    return this._name
  }
}