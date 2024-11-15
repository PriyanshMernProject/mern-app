import { isEven } from "../Utils/index.js";

describe("isEven", () => {
  test("returns true if number is even", () => {
    expect(isEven("2")).toBe(true);
  });
  test("retuens false if number is odd", () => {
    expect(isEven(3)).toBe(false);
  });
  test("throw an error if number is negative", () => {
    try {
      expect(() => {
        isEven(-2);
      }).toThrow(new Error("Number must be a number"));
    } catch (error) {}
  });
  test("throw an error if number is not number", () => {
    expect(isEven("1")).toBe(false);
  });
});
