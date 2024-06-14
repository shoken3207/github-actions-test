import { minus } from "../minus";
describe("minus", (): void => {
  test("should return 3", (): void => {
    const result: number = minus(5, 2);
    expect(result).toEqual(3);
  });
  test("should return 1", (): void => {
    const result: number = minus(4, 3);
    expect(result).toEqual(1);
  });
});
