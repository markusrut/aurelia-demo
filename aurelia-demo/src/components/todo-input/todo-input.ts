import { bindable } from "aurelia";

export class TodoInput {
  @bindable value: string;
  @bindable label: string = "Todo: ";
}
