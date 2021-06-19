const findShortestString = require("./find-shortest-string.js");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in the array in the case of a tie", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
});
