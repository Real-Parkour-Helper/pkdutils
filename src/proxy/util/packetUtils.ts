import { Logger } from "../../util/Logger"

/**
 * Takes the `data.message` field of a chat packet and
 * puts all extra pieces and the main text together
 * into a single string.
 * @param message
 */
export function constructChatMessage(message: any): string {
  let msgJson: any;
  try {
    msgJson = JSON.parse(message);
  } catch (error) {
    Logger.error("Failed to parse chat message as JSON:", error);
    return "";
  }

  let textArr = [msgJson.text ?? ""];
  if (msgJson.extra) {
    for (let e of msgJson.extra) {
      textArr.push(e.text ?? "");
    }
  }

  let fullText = textArr.join("");
  return fullText;
}