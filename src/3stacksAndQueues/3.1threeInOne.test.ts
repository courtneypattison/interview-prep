import Stacks from "./3.1threeInOne";

describe("threeInOne", () => {
  test("array 1 [1, 2, 3] -> [3, 2, 1]", () => {
    const stacks = new Stacks();
    stacks.push(1, 1);
    stacks.push(1, 2);
    stacks.push(1, 3);
    expect(stacks.pop(1)).toEqual(3);
    expect(stacks.pop(1)).toEqual(2);
    expect(stacks.pop(1)).toEqual(1);
  });

  test("array 0 [0], array 1 [1], array 2 [2]", () => {
    const stacks = new Stacks();
    stacks.push(0, 0);
    stacks.push(1, 1);
    stacks.push(2, 2);
    expect(stacks.pop(0)).toEqual(0);
    expect(stacks.pop(1)).toEqual(1);
    expect(stacks.pop(2)).toEqual(2);
  });

  test("array 0 [0], array 1 , array 2 [2]", () => {
    const stacks = new Stacks();
    stacks.push(0, 0);
    stacks.push(1, 1);
    stacks.push(2, 2);
    stacks.pop(1);
    expect(stacks.pop(0)).toEqual(0);
    expect(stacks.isEmpty(1)).toBeTruthy();
    expect(stacks.pop(2)).toEqual(2);
  });
});
