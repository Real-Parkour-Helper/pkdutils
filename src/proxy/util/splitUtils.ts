import { Logger } from "../../util/Logger";

/**
 * Converts a time string in the format "mm:ss.ms" to milliseconds
 */
export function splitToMs(timeString: string): number {
  const parts = timeString.split(":");

  if (parts.length === 2) {
    const minutes = parseInt(parts[0]);
    const secondsParts = parts[1].split(".");
    const seconds = parseInt(secondsParts[0]);
    const milliseconds = parseInt(
      secondsParts[1].padEnd(3, "0").substring(0, 3),
    );

    return minutes * 60 * 1000 + seconds * 1000 + milliseconds;
  } else {
    Logger.warn(`Unexpected time format: ${timeString}`);
    return 0;
  }
}

/**
 * Formats milliseconds to the "ss.ms" format
 */
export function msToSplit(milliseconds: number): string {
  milliseconds = Math.abs(milliseconds);

  const seconds = Math.floor(milliseconds / 1000);
  const ms = milliseconds % 1000;

  const formattedMs = Math.floor(ms / 10)
    .toString()
    .padStart(2, "0");

  return `${seconds}.${formattedMs}`;
}
