/**
 * Moves an element in an array from one position to another.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} list - The array to reorder.
 * @param {number} startIndex - The index of the element to move.
 * @param {number} endIndex - The index to move the element to.
 * @returns {T[]} A new array with the element moved to the new position.
 */
export const reorder = <T>(
  list: T[],
  startIndex: number,
  endIndex: number
): T[] => {
  // Return list unchanged if either index is out of bounds
  if (startIndex >= list.length || endIndex >= list.length) {
    return list;
  }

  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
