import { describe, it, expect } from "vitest";
import { reorder } from "./utils";

describe("reorder", () => {
  it("should move an element from one position to another within the array", () => {
    const list = [1, 2, 3, 4, 5];
    const startIndex = 2;
    const endIndex = 4;
    const result = reorder(list, startIndex, endIndex);
    expect(result).toEqual([1, 2, 4, 5, 3]);
  });

  it("should handle indices out of bounds by returning the original array", () => {
    const list = [1, 2, 3, 4, 5];
    const startIndex = 6;
    const endIndex = 2;
    const result = reorder(list, startIndex, endIndex);
    expect(result).toEqual(list);
  });
});
