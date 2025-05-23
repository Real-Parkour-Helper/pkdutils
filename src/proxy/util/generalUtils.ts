export const titleCase = (str: string) => str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

/**
 * Creates an array with n-amounts of the same object (deep copy).
 * Useful for filling inventory/chest windows.
 * @param obj - Object to be repeated
 * @param count - Amount of times to repeat object
 */
export function repeatObj<T>(obj: T, count: number): T[] {
  const r = []
  for (let i = 0; i < count; i++) {
    r.push(Object.assign(Object.create(Object.getPrototypeOf(obj)), obj)) // deep copy
  }
  return r
}