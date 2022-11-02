import { PlatformTest } from "@tsed/common";
import { integer } from "@tsed/schema";
import { MathController } from "./MathController";

describe("MathController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<MathController>(MathController);
    // const instance = PlatformTest.invoke<MathController>(MathController); // get fresh instance

    expect(instance).toBeInstanceOf(MathController);
  });

  it("sum should return 12", () => {
    const instance = PlatformTest.get<MathController>(MathController);
    // const instance = PlatformTest.invoke<MathController>(MathController); // get fresh instance

    expect(instance.sum()).toBe(12);
  });

  it("sub should be negative", () => {
    const instance = PlatformTest.get<MathController>(MathController);
    // const instance = PlatformTest.invoke<MathController>(MathController); // get fresh instance

    expect(instance.sub()).toBeLessThan(0);
  });

  it("mul should be above 30", () => {
    const instance = PlatformTest.get<MathController>(MathController);
    // const instance = PlatformTest.invoke<MathController>(MathController); // get fresh instance

    expect(instance.mul()).toBeGreaterThan(30);
  });

  it("div shouldn't be int", () => {
    const instance = PlatformTest.get<MathController>(MathController);
    // const instance = PlatformTest.invoke<MathController>(MathController); // get fresh instance

    expect(instance.div()).not.toBeInstanceOf(integer);
  });

  it("mul mock should work fine", () => {
    const instance = PlatformTest.get<MathController>(MathController);
    // const instance = PlatformTest.invoke<MathController>(MathController); // get fresh instance

    const mul = jest.spyOn(instance, "mul").mockReturnValueOnce(20);

    expect(instance.div()).not.toBeInstanceOf(integer);
    expect(instance.mul()).toBe(20);
    expect(instance.mul()).toBe(35);
    expect(mul).toBeCalled();
    expect(mul).toBeCalledTimes(2);
  });
});
