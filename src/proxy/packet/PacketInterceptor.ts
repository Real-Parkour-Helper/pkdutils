import { Packet } from "./Packet"
import { Logger } from "../../util/Logger"

import type { Location } from "../modules/Location"

// This shit is needed to be able to use Location later without creating
// a cyclic dependency that node can't run... Location.ts has to set this
// function at the end for this to work
let getLocation: (() => typeof Location | null) | null = null;

export function setLocationGetter(fn: () => typeof Location | null) {
  getLocation = fn;
}

/**
 * A PacketInterceptor receives all incoming / outgoing packets
 * and can modify / cancel them.
 */
export abstract class PacketInterceptor {
  protected _name: string
  protected _version: string

  private readonly inGameOnly: boolean

  protected constructor(name: string, version: string, runInGameOnly: boolean = true) {
    this._name = name
    this._version = version
    this.inGameOnly = runInGameOnly

    Logger.info(`${name} v${version} instantiated!`)
  }

  /**
   * Wrapper for the incomingPacket method. Checks if this packet
   * interceptor is supposed to run right now or not.
   * @param packet
   */
  in(packet: Packet): Packet {
    if (this.inGameOnly && getLocation?.()?.locationData?.mode === "DUELS_PARKOUR_EIGHT") {
      return this.incomingPacket(packet)
    } else if (!this.inGameOnly) {
      return this.incomingPacket(packet)
    }
    return packet
  }

  /**
   * Wrapper for the outgoingPacket method. Checks if this packet
   * interceptor is supposed to run right now or not.
   * @param packet
   */
  out(packet: Packet): Packet {
    if (this.inGameOnly && getLocation?.()?.locationData?.mode === "DUELS_PARKOUR_EIGHT") {
      return this.outgoingPacket(packet)
    } else if (!this.inGameOnly) {
      return this.outgoingPacket(packet)
    }
    return packet
  }

  /**
   * Called for every incoming packet. This method
   * can use the packet, modify it, cancel it, but must
   * return (the same or modified) packet at the end
   * to be passed to the next interceptor.
   * @param packet
   */
  protected abstract incomingPacket(packet: Packet): Packet

  /**
   * Called for every outgoing packet. This method
   * can use the packet, modify it, cancel it, but must
   * return (the same or modified) packet at the end
   * to be passed to the next interceptor.
   * @param packet
   */
  protected abstract outgoingPacket(packet: Packet): Packet

  get name(): string {
    return this._name
  }
}