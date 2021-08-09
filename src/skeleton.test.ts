import twoNumberSum from "./skeleton";

test("twoNumberSum returns pair of numbers that sum to target sum ", () => {
  expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).toStrictEqual([-1, 11]);
});
