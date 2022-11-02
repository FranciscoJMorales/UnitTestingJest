import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/math")
export class MathController {
  @Get("/sum")
  sum() {
    let a = 5;
    let b = 7;
    return a + b;
  }

  @Get("/sub")
  sub() {
    let a = 5;
    let b = 7;
    return a - b;
  }

  @Get("/mul")
  mul() {
    let a = 5;
    let b = 7;
    return a * b;
  }

  @Get("/div")
  div() {
    let a = 5;
    let b = 7;
    return a / b;
  }
}
