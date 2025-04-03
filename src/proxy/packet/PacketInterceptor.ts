import { Packet } from "./Packet"

/**
 * A PacketInterceptor receives all incoming / outgoing packets
 * and can modify / cancel them.
 */
export abstract class PacketInterceptor {
  protected _name: string

  constructor(name: string) {
    this._name = name
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