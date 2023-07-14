// I did not have time to write all the test cases for all functionalities
// Here's just an example:

import { formateDateMonth } from "../data-time";

describe("formateDateMonth", () => {
  test("returns formatted date with leading zeros for single-digit dates and months", () => {
    expect(formateDateMonth(5, 7)).toBe("07.05");
    expect(formateDateMonth(9, 3)).toBe("03.09");
  });

  test("returns formatted date without leading zeros for double-digit dates and months", () => {
    expect(formateDateMonth(15, 11)).toBe("11.15");
    expect(formateDateMonth(31, 12)).toBe("12.31");
  });

  test("returns formatted date with leading zeros for single-digit dates and double-digit months", () => {
    expect(formateDateMonth(7, 10)).toBe("10.07");
    expect(formateDateMonth(3, 12)).toBe("12.03");
  });

  test("returns formatted date with leading zeros for double-digit dates and single-digit months", () => {
    expect(formateDateMonth(12, 5)).toBe("05.12");
    expect(formateDateMonth(31, 1)).toBe("01.31");
  });
});
