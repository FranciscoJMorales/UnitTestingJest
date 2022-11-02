import { PlatformTest } from "@tsed/common";
import { CalendarCtrl } from "./CalendarCtrl";

describe("CalendarCtrl", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<CalendarCtrl>(CalendarCtrl);
    // const instance = PlatformTest.invoke<CalendarCtrl>(CalendarCtrl); // get fresh instance

    expect(instance).toBeInstanceOf(CalendarCtrl);
  });

  it("calendars should return all calendars", () => {
    const instance = PlatformTest.get<CalendarCtrl>(CalendarCtrl);
    // const instance = PlatformTest.invoke<CalendarCtrl>(CalendarCtrl); // get fresh instance

    expect(instance.findAll()).toBe("This action returns all calendars");
  });

  it("today should be 28/10/2022", () => {
    const instance = PlatformTest.get<CalendarCtrl>(CalendarCtrl);
    // const instance = PlatformTest.invoke<CalendarCtrl>(CalendarCtrl); // get fresh instance

    expect(instance.today()).toBe("02/11/2022"); //Should change to current date to pass test
  });
});
