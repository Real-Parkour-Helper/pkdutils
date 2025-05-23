export class GuiItem {

  /**
   * GuiItem constructor
   * @param id
   * @param name
   * @param count
   * @param damage
   */
  constructor(public id: number, public name: string, public count: number, public damage: number | undefined) {}


  /**
   * Convert the GuiItem to a JSON string
   * to be sent in a packet
   */
  toJSON(): object {
    return {
      blockId: this.id,
      itemCount: this.count,
      itemDamage: this.damage,
      nbtData: {
        "type": "compound",
        "name": "",
        "value": {
          "display": {
            "type": "compound",
            "value": {
              "Name": {
                "type": "string",
                "value": this.name
              }
            }
          }
        }
      }
    }
  }

}