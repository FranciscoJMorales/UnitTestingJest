import {Get, Post} from "@tsed/schema";
import {Controller} from "@tsed/di";

@Controller("/calendars")
export class CalendarCtrl {
  @Get()
  findAll(): string {
    return "This action returns all calendars";
  }

  @Get("/today")
  today(): string {
    let d = new Date();
    return ("0" + d.getDate()).slice(-2) + "/" + ("0"+(d.getMonth()+1)).slice(-2) + "/" +
    d.getFullYear();
  }
}