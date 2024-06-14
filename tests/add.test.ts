import { add } from "../add";

describe("add", (): void => {
  test("should return 3", (): void => {
    const result: number = add(1, 3);
    expect(result).toEqual(3);
  });
  test("should return 4", (): void => {
    const result: number = add(3, 1);
    expect(result).toEqual(4);
  });
});
